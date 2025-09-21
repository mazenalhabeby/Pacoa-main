// src/pages/CustomPallet.tsx
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ruler, PackageCheck, Weight, Coins, ChevronRight } from "lucide-react";

type FormVals = {
  name: string;
  email: string;
  qty: number;
  length_mm: number;
  width_mm: number;
  height_mm: number;
  material: "nadelholz" | "laubholz";
  treatment: "roh" | "ht";
  notes?: string;
};

export default function CustomPallet() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormVals>({
    defaultValues: {
      name: "",
      email: "",
      qty: 1,
      length_mm: 1200,
      width_mm: 800,
      height_mm: 144,
      material: "nadelholz",
      treatment: "ht",
      notes: "",
    },
  });

  const vals = watch();

  // Simple, transparent estimate model (you can tweak the constants below)
  const estimate = useMemo(() => {
    const L = Number(vals.length_mm) || 0;
    const W = Number(vals.width_mm) || 0;
    const H = Number(vals.height_mm) || 0;
    const qty = Math.max(1, Number(vals.qty) || 1);

    // footprint m²
    const area = (L * W) / 1_000_000; // mm² -> m²
    // scale vs. EPAL 1200×800×144
    const refArea = 1.2 * 0.8;
    const areaFactor = refArea > 0 ? Math.max(0.6, area / refArea) : 1;

    // Material factor
    const matFactor = vals.material === "laubholz" ? 1.12 : 1.0;
    // Treatment factor
    const htFactor = vals.treatment === "ht" ? 1.05 : 1.0;
    // Height factor (more blocks/boards)
    const hFactor = Math.max(0.7, H / 144 || 1);

    // Base: 22 € realistic production baseline for EPAL-like
    const basePerUnit = 22 * areaFactor * hFactor * matFactor * htFactor;

    // Add hardware/nails & overhead: ~6 €
    const overhead = 6;

    const unitPrice = Math.max(12, basePerUnit + overhead); // floor price
    const total = unitPrice * qty;

    // very rough mass estimate (scale EPAL 25 kg by area & height factors)
    const estWeight = 25 * areaFactor * hFactor;

    // load class suggestion: scale 1500 kg by factors, clamp
    const estLoad = Math.round(1500 * areaFactor * 0.9);

    return {
      area, // m²
      unitPrice: Number(unitPrice.toFixed(2)),
      totalPrice: Number(total.toFixed(2)),
      estWeight: Math.round(estWeight),
      estLoad,
    };
  }, [vals]);

  const onSubmit = async (data: FormVals) => {
    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/peter.hauer@pacoa.at",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: "Kundenanfrage – Sonderpalette (Konfigurator)",
            _captcha: false,
            Produkt: "Sonderpalette (kundenspezifisch)",
            Länge_mm: data.length_mm,
            Breite_mm: data.width_mm,
            Höhe_mm: data.height_mm,
            Material: data.material,
            Behandlung: data.treatment,
            Menge: data.qty,
            Notizen: data.notes ?? "",
            Preis_Schätzung_EUR: estimate.unitPrice,
            Gesamt_EUR: estimate.totalPrice,
            Fläche_m2: estimate.area.toFixed(3),
            Name: data.name,
            Email: data.email,
          }),
        }
      );
      const result = await res.json();
      if (result.success === "true") {
        toast.success("Ihre Anfrage wurde erfolgreich gesendet!");
        reset();
      } else {
        toast.error("Fehler beim Senden. Bitte versuchen Sie es erneut.");
      }
    } catch {
      toast.error(
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
      );
    }
  };

  return (
    <main className="bg-gradient-to-br from-orange-50 via-amber-50/30 to-white">
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-10">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm text-gray-600">
          <ChevronRight className="inline mx-1 h-4 w-4 text-gray-400" />
          <Link to="/products" className="hover:text-[#b85b16]">
            Produkte
          </Link>
          <ChevronRight className="inline mx-1 h-4 w-4 text-gray-400" />
          <span className="font-medium text-gray-900">
            Sonderpalette konfigurieren
          </span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 shadow-[0_10px_30px_-12px_rgba(180,83,9,0.25)]">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#b85b16]">
              Sonderpalette konfigurieren
            </h1>
            <p className="mt-2 text-gray-700">
              Geben Sie die gewünschten Abmessungen ein. Die Preisschätzung
              dient als Richtwert – wir bestätigen den endgültigen Preis nach
              Prüfung.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 grid md:grid-cols-3 gap-5"
            >
              {/* Dimensions */}
              <div>
                <Label htmlFor="length_mm">Länge (mm)</Label>
                <Input
                  id="length_mm"
                  type="number"
                  min={400}
                  max={2400}
                  step={10}
                  {...register("length_mm", {
                    required: true,
                    min: 400,
                    max: 2400,
                  })}
                />
                {errors.length_mm && (
                  <ErrorMsg>Bitte 400–2400 angeben.</ErrorMsg>
                )}
              </div>
              <div>
                <Label htmlFor="width_mm">Breite (mm)</Label>
                <Input
                  id="width_mm"
                  type="number"
                  min={400}
                  max={1200}
                  step={10}
                  {...register("width_mm", {
                    required: true,
                    min: 400,
                    max: 1200,
                  })}
                />
                {errors.width_mm && (
                  <ErrorMsg>Bitte 400–1200 angeben.</ErrorMsg>
                )}
              </div>
              <div>
                <Label htmlFor="height_mm">Höhe (mm)</Label>
                <Input
                  id="height_mm"
                  type="number"
                  min={90}
                  max={200}
                  step={2}
                  {...register("height_mm", {
                    required: true,
                    min: 90,
                    max: 200,
                  })}
                />
                {errors.height_mm && <ErrorMsg>Bitte 90–200 angeben.</ErrorMsg>}
              </div>

              {/* Options */}
              <div>
                <Label htmlFor="material">Material</Label>
                <select
                  id="material"
                  className="w-full border rounded-md h-10 px-3"
                  {...register("material", { required: true })}
                >
                  <option value="nadelholz">Nadelholz (Fichte/Kiefer)</option>
                  <option value="laubholz">Laubholz (z. B. Buche)</option>
                </select>
              </div>
              <div>
                <Label htmlFor="treatment">Behandlung</Label>
                <select
                  id="treatment"
                  className="w-full border rounded-md h-10 px-3"
                  {...register("treatment", { required: true })}
                >
                  <option value="ht">HT (ISPM-15)</option>
                  <option value="roh">Rohholz (ohne HT)</option>
                </select>
              </div>
              <div>
                <Label htmlFor="qty">Menge</Label>
                <Input
                  id="qty"
                  type="number"
                  min={1}
                  step={1}
                  {...register("qty", { required: true, min: 1 })}
                />
                {errors.qty && <ErrorMsg>Menge ≥ 1.</ErrorMsg>}
              </div>

              {/* Contact */}
              <div className="md:col-span-1">
                <Label htmlFor="name">Ihr Name</Label>
                <Input
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name && <ErrorMsg>Bitte Name angeben.</ErrorMsg>}
              </div>
              <div className="md:col-span-1">
                <Label htmlFor="email">Ihre E-Mail</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && <ErrorMsg>Bitte E-Mail angeben.</ErrorMsg>}
              </div>
              <div className="md:col-span-3">
                <Label htmlFor="notes">Zusatzinfos (optional)</Label>
                <Textarea
                  id="notes"
                  rows={3}
                  placeholder="z. B. Kufenanzahl, Brettstärke, Logo-Branding…"
                  {...register("notes")}
                />
              </div>

              <div className="md:col-span-3 flex items-center gap-3">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#b85b16] hover:bg-[#a24e13]"
                >
                  {isSubmitting ? "Sende Anfrage…" : "Anfrage senden"}
                </Button>
                <Link
                  to="/products"
                  className="text-sm text-gray-600 hover:underline"
                >
                  ← Zurück zur Übersicht
                </Link>
              </div>
            </form>
          </div>

          {/* Live summary / chips */}
          <aside className="space-y-4">
            <SummaryCard title="Ihre Konfiguration">
              <Chip
                icon={Ruler}
                label="Abmessungen"
                value={`${vals.length_mm} × ${vals.width_mm} × ${vals.height_mm} mm`}
              />
              <Chip
                icon={PackageCheck}
                label="Fläche"
                value={`${estimate.area.toFixed(3)} m²`}
              />
              <Chip
                icon={Weight}
                label="Gewicht (≈)"
                value={`${estimate.estWeight} kg`}
              />
              <Chip
                icon={PackageCheck}
                label="Load (≈)"
                value={`${estimate.estLoad} kg`}
              />
              <Chip
                icon={Coins}
                label="Preis/Palette (≈)"
                value={`${estimate.unitPrice.toFixed(2)} €`}
              />
              <Chip
                icon={Coins}
                label="Gesamt (≈)"
                value={`${estimate.totalPrice.toFixed(2)} €`}
              />
            </SummaryCard>

            <p className="text-xs text-gray-500">
              *Alle Preise/Lasten sind Richtwerte und abhängig von
              Materialstärke, Kufen/Deckbrettern und Stückzahl. Endgültiges
              Angebot folgt nach Prüfung.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}

function ErrorMsg({ children }: { children: React.ReactNode }) {
  return <p className="text-red-500 text-xs mt-1">{children}</p>;
}

function SummaryCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 shadow-[0_10px_30px_-12px_rgba(180,83,9,0.25)]">
      <h2 className="text-lg font-bold text-gray-900 mb-3">{title}</h2>
      <div className="grid gap-2">{children}</div>
    </div>
  );
}

function Chip({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-orange-100 bg-white/80 p-3">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100">
          <Icon className="h-4 w-4 text-[#b85b16]" />
        </span>
        <div className="text-xs uppercase tracking-widest text-gray-500">
          {label}
        </div>
      </div>
      <div className="text-sm font-semibold text-gray-900">{value}</div>
    </div>
  );
}
