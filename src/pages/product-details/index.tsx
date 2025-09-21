// src/pages/ProductDetail.tsx
import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductBySlug } from "@/data";
import PalletDialog from "@/components/PalletDialog";
import {
  Ruler,
  Weight,
  ShieldCheck,
  BadgeCheck,
  PackageCheck,
  Globe2,
  ChevronRight,
} from "lucide-react";

function Section({
  id,
  title,
  icon: Icon,
  children,
}: {
  id: string;
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 shadow-[0_10px_30px_-12px_rgba(180,83,9,0.25)]"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100">
          <Icon className="h-5 w-5 text-[#b85b16]" />
        </span>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const pallet = slug ? getProductBySlug(slug) : undefined;

  // Always call hooks unconditionally
  const { dims, weight, capacity } = useMemo(() => {
    if (!pallet) {
      return { dims: "", weight: "", capacity: "" };
    }
    const details = pallet.details;
    const norm = (s: string) => s.toLowerCase().trim();
    const find = (key: string) =>
      details.datenFakten
        .find((l) => norm(l).startsWith(key))
        ?.split(":")[1]
        ?.trim();
    const any = (includes: string) =>
      details.datenFakten
        .find((l) => norm(l).includes(includes))
        ?.split(":")[1]
        ?.trim();

    return {
      dims: find("maße") ?? "",
      weight: find("gewicht") ?? "",
      capacity: any("tragfähigkeit") ?? "",
    };
  }, [pallet]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pallet) document.title = `${pallet.grade} | Produkte`;
  }, [pallet]);

  if (!pallet) {
    return (
      <main className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-2">Produkt nicht gefunden</h1>
        <p className="mb-6 text-gray-700">
          Das angeforderte Produkt konnte nicht gefunden werden.
        </p>
        <Link to="/products" className="text-[#b85b16] hover:underline">
          ← Zurück zur Übersicht
        </Link>
      </main>
    );
  }

  const { grade, image, description, details } = pallet;

  return (
    <main className="bg-gradient-to-br from-orange-50 via-amber-50/30 to-white scroll-smooth">
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-10">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm text-gray-600">
          <ChevronRight className="inline mx-1 h-4 w-4 text-gray-400" />
          <Link to="/products" className="hover:text-[#b85b16]">
            Produkte
          </Link>
          <ChevronRight className="inline mx-1 h-4 w-4 text-gray-400" />
          <span className="font-medium text-gray-900">{grade}</span>
        </nav>

        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-orange-200/40 to-transparent blur-xl" />
            <div className="relative rounded-3xl border border-orange-100 bg-white shadow-[0_20px_50px_-20px_rgba(180,83,9,0.35)] overflow-hidden">
              <img
                src={image}
                alt={grade}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Stat chips */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {dims && <StatChip icon={Ruler} label="Maße" value={dims} />}
              {weight && (
                <StatChip icon={Weight} label="Gewicht" value={weight} />
              )}
              {capacity && (
                <StatChip
                  icon={PackageCheck}
                  label="Tragfähigkeit"
                  value={capacity}
                />
              )}
            </div>
          </div>

          {/* Text + CTA (sticky on desktop) */}
          <aside className="lg:sticky lg:top-6 space-y-5">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#b85b16] uppercase">
              {grade}
            </h1>
            <p className="text-gray-700">{description}</p>

            <div className="flex items-center gap-4">
              {/* <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-lg font-bold text-[#8c420f] ring-1 ring-orange-200">
                {price.toFixed(2)} €
              </span> */}

              {/* Your dialog CTA */}
              <PalletDialog grade={grade} />
            </div>

            <ul className="mt-3 text-sm text-gray-600 space-y-1">
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-[#b85b16]" /> EPAL/ISPM-15
                konform (je nach Modell)
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#b85b16]" /> Zustands- &
                Qualitätsprüfung
              </li>
              <li className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-[#b85b16]" /> Exportgeeignet
                (Landesvorgaben beachten)
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/products"
                className="text-sm text-gray-600 hover:text-[#b85b16] hover:underline"
              >
                ← Zurück zur Übersicht
              </Link>
            </div>

            {/* On this page (anchors) */}
            <div className="hidden lg:block pt-3">
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Auf dieser Seite
              </div>
              <div className="flex flex-wrap gap-2">
                <AnchorPill href="#beschreibung" label="Beschreibung" />
                <AnchorPill href="#daten" label="Daten & Fakten" />
                <AnchorPill href="#kennz" label="Kennzeichnungen" />
                <AnchorPill href="#handling" label="Handling" />
                <AnchorPill href="#qualitaet" label="Qualitätskontrolle" />
                <AnchorPill href="#ispm" label="ISPM 15" />
              </div>
            </div>
          </aside>
        </div>

        {/* CONTENT SECTIONS */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Section id="beschreibung" title="Beschreibung" icon={BadgeCheck}>
            <p>{details.beschreibung}</p>
          </Section>

          <Section id="daten" title="Daten & Fakten" icon={Ruler}>
            <ul className="space-y-2 list-disc pl-5">
              {details.datenFakten.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Section>

          <Section id="kennz" title="Kennzeichnungen" icon={ShieldCheck}>
            <p>{details.kennzeichnungen}</p>
          </Section>

          <Section id="handling" title="Handling" icon={PackageCheck}>
            <p>{details.handling}</p>
          </Section>

          <Section id="qualitaet" title="Qualitätskontrolle" icon={BadgeCheck}>
            <p>{details.qualitaetskontrolle}</p>
          </Section>

          <Section id="ispm" title="ISPM 15" icon={Globe2}>
            <p>{details.ispm15}</p>
          </Section>
        </div>
      </section>

      {/* Sticky mobile order bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-[0_-10px_30px_-12px_rgba(0,0,0,0.15)] p-4 md:hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <PalletDialog grade={grade} />
        </div>
      </div>
    </main>
  );
}

function StatChip({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white/80 backdrop-blur p-4 shadow-[0_10px_25px_-15px_rgba(180,83,9,0.35)]">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100">
        <Icon className="h-5 w-5 text-[#b85b16]" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-widest text-gray-500">
          {label}
        </div>
        <div className="text-sm font-semibold text-gray-900">{value}</div>
      </div>
    </div>
  );
}

function AnchorPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="text-xs px-3 py-1.5 rounded-full bg-white/80 border border-orange-100 text-gray-700 hover:text-[#b85b16] hover:border-[#b85b16] transition"
    >
      {label}
    </a>
  );
}
