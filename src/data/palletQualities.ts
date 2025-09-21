// src/data/pallets.ts
import { palletA, palletB, palletC, palletD, palletE, industrie, aufsatzrahmenSBB, giterbox, obstGrosskiste } from "@/assets";

export const palletQualities = [
  {
    grade: "Palette neu",
    slug: "palette-neu",
    image: palletA,
    description:
      "Nagelneue Palette in höchster Qualität – unbenutzt, besonders stabil und ideal für hochwertige oder sensible Warentransporte.",
    price: 25.99,
    details: {
      beschreibung:
        "Fabrikneue Europalette nach EPAL/UIC-Kriterien – unbenutzt, sehr stabil und ideal für hochwertige oder sensible Warentransporte (u. a. Pharma, Lebensmittel, Möbelbau).",
      datenFakten: [
        "Maße: 1.200 × 800 × 144 mm",
        "Gewicht: ca. 25 kg",
        "Tragfähigkeit: bis ca. 1.500 kg dynamisch, bis ca. 4.000 kg statisch",
        "Holz: getrocknetes Nadelholz, beidseitig gefast",
        "Aufbau: 11 Deckbretter, 9 Klötze, 78 Nägel (EPAL-Standard)",
      ],
      kennzeichnungen:
        "EPAL-Oval, IPPC/HT-Stempel (Heat-Treatment), Länder-/Lizenzcode, Jahres-/Monatscode auf Mittelklotz, EPAL-Prüfklammern.",
      handling:
        "Vierseitig unterfahrbar; gefaste Bodenbretter für reibungsarme Fördertechnik. Kompatibel mit gängigen Fördermitteln und Regalsystemen.",
      qualitaetskontrolle:
        "Extern geprüfter EPAL-Pool mit einheitlichen Spezifikationen garantiert gleichbleibend hohe Qualität.",
      ispm15:
        "IPPC-konform wärmebehandelt; weltweit im Exportverkehr einsetzbar (je nach Zielland lokale Vorgaben beachten).",
    },
  },
  {
    grade: "Paletten Klasse A Neuwertig",
    slug: "palette-a-neuwertig",
    image: palletB,
    description:
      "Paletten mit minimalen Gebrauchsspuren – technisch einwandfrei, sehr stabil und mehrfach wiederverwendbar.",
    price: 19.99,
    details: {
      beschreibung:
        "Sehr geringe Gebrauchsspuren, technisch einwandfrei und maßhaltig – optisch nahe an neu. Für Mehrfachverwendung und sensible Lieferketten.",
      datenFakten: [
        "Maße: 1.200 × 800 × 144 mm",
        "Gewicht: ca. 23–25 kg",
        "Tragfähigkeit: bis ca. 1.500 kg dynamisch (zustandsabhängig)",
        "Tauschfähigkeit: i. d. R. volle Tauschfähigkeit im EPAL-Pool",
        "Oberfläche: sauber, Kanten intakt, geringe Verfärbungen möglich",
      ],
      kennzeichnungen:
        "EPAL/HT-Stempel und Prüfklammern vorhanden; Markierungen gut lesbar.",
      handling:
        "Ideal für automatische Lager, Fördertechnik und Hochregal (zustandsgeprüft). Geringer Reibwert durch intakte Fasen.",
      qualitaetskontrolle:
        "Sicht- und Maßkontrolle je Palette; beschädigte Exemplare werden ausgesondert.",
      ispm15: "HT-behandelt; exportgeeignet.",
    },
  },
  {
    grade: "Palette Klasse B+ Automatenfähig",
    slug: "palette-b-automatenfaehig",
    image: palletC,
    description:
      "Gut erhaltene Palette mit mittlerem Verschleiß – funktional, einsatzbereit und geeignet für automatische Lagersysteme.",
    price: 14.99,
    details: {
      beschreibung:
        "Gebraucht, deutliche Nutzungsspuren, automationsgeeignet dank Maßhaltigkeit und intakten Funktionsflächen – optimiert für automatische Systeme.",
      datenFakten: [
        "Maße: 1.200 × 800 × 144 mm (toleranzgeprüft)",
        "Gewicht: ca. 22–25 kg",
        "Tragfähigkeit: bis ca. 1.500 kg dynamisch (zustandsabhängig)",
        "Merkmale: intakte Anlauffasen, keine losen Bretter/Klötze, ebenes Deck",
      ],
      kennzeichnungen:
        "EPAL/HT-Stempel vorhanden; Kennzeichnungen ggf. nachgedunkelt, aber lesbar.",
      handling:
        "Zuverlässig auf Rollenbahnen, Liften, Shuttles, Depalettierern. Geringe Störanfälligkeit in Automatik.",
      qualitaetskontrolle:
        "Zusätzliche Maß- und Ebenheitsprüfung; Ausschlusskriterien speziell für Automatik definiert.",
      ispm15: "HT-behandelt; exportgeeignet (Ländervorgaben prüfen).",
    },
  },
  {
    grade: "Palette Klasse B Speditionstauschpalette",
    slug: "palette-b-speditionstauschpalette",
    image: palletD,
    description:
      "Deutlich gebrauchte Palette, stabil und tauschfähig – gängig im Speditionswesen für unkritische Lieferungen.",
    price: 9.99,
    details: {
      beschreibung:
        "Deutlich gebraucht, aber funktionstüchtig und tauschfähig. Wirtschaftliche Lösung für unkritische Lieferungen und den Speditionsalltag.",
      datenFakten: [
        "Maße: 1.200 × 800 × 144 mm",
        "Gewicht: ca. 22–24 kg",
        "Tragfähigkeit: bis ca. 1.500 kg dynamisch (zustandsabhängig)",
        "Zustand: dunklere Farbe, sichtbare Abnutzung, Holzfaserbrüche möglich – jedoch ohne Funktionsmängel",
      ],
      kennzeichnungen:
        "EPAL/HT-Stempel vorhanden; Prüfklammern können älter sein.",
      handling:
        "Für Stapler/Hubwagen und Standard-Fördertechnik geeignet; in Hochregal je nach Sichtprüfung.",
      qualitaetskontrolle:
        "Sichtprüfung nach EPAL-Kriterien; defekte Paletten werden aussortiert oder dem Reparaturkreislauf zugeführt.",
      ispm15: "HT-behandelt; exportfähig.",
    },
  },
  {
    grade: "Palette Defektklasse",
    slug: "palette-defektklasse",
    image: palletE,
    description:
      "Beschädigte oder reparierte Paletten – eingeschränkt belastbar, geeignet für einfache Transporte oder kurzfristige Lagerung.",
    price: 5.99,
    details: {
      beschreibung:
        "Beschädigte bzw. reparaturbedürftige Paletten. Nicht tauschfähig, nicht für Automatik/Hochregal/Export. Geeignet für einfache innerbetriebliche Nutzung, Einwegtransporte mit geringem Risiko oder als Materialquelle.",
      datenFakten: [
        "Maße: i. d. R. 1.200 × 800 × 144 mm",
        "Gewicht: ca. 20–24 kg",
        "Tragfähigkeit: eingeschränkt – nur nach Einzelfall/Sichtprüfung",
        "Zustand: z. B. lose Bretter, beschädigte Klötze, starke Ausrisse",
      ],
      kennzeichnungen:
        "Vorhandene Stempel ohne Gewähr für aktuelle Normkonformität.",
      handling:
        "Nur manuelle oder einfache Flurfördertechnik; keine automatisierten Anlagen.",
      qualitaetskontrolle:
        "Als Defekt klassifiziert; Einsatz ausschließlich in Eigenverantwortung oder zur Instandsetzung/Verwertung.",
      ispm15: "Nicht für Export einsetzen.",
    },
  },
  {
    grade: "Industrie Einweg",
    slug: "industrie-einweg",
    image: industrie,
    description:
      "Stabile Einwegpalette für den industriellen Gebrauch – konzipiert für einmalige Verwendung, besonders geeignet für Export und interne Logistik.",
    price: 5.49,
    details: {
      beschreibung:
        "Kosteneffiziente Einwegpalette für den industriellen Einsatz, projekt- und kundenspezifisch konfigurierbar. Ideal für Exportsendungen und interne Logistik ohne Rückführung.",
      datenFakten: [
        "Maße: gängig 1.200 × 800 oder 1.200 × 1.000 mm (andere auf Anfrage)",
        "Gewicht: ca. 10–20 kg (bauartabhängig)",
        "Tragfähigkeit: typ. 500–1.200 kg dynamisch (bauart-/holzdickenabhängig)",
        "Aufbau: 3- oder 5-Bretter-Deck, wahlweise Kufen; Holz roh oder HT",
      ],
      kennzeichnungen:
        "Auf Wunsch mit IPPC/HT für Export, kundenspezifische Labels/Branding möglich.",
      handling:
        "Für Stapler/Hubwagen optimiert; Fördertechnik-Tauglichkeit je nach Ausführung.",
      qualitaetskontrolle:
        "Stichprobenprüfung gemäß Spezifikation (Maßhaltigkeit, Nagelbild, Trageversuche).",
      ispm15:
        "Für Export HT-Option empfohlen/erforderlich (je nach Zielland).",
    },
  },
];

export const containerPallets = [
  {
    grade: "Palette Aufsatzrahmen SBB-ÖBB",
    slug: "aufsatzrahmen-sbb",
    image: aufsatzrahmenSBB,
    description:
      "Stabiler SBB-ÖBB Palettenaufsatzrahmen aus hochwertigem Holz mit verstärkten Metallecken – ideal für sicheren Transport und Lagerung von Waren.",
    price: 17.99,
    details: {
      beschreibung:
        "Faltbarer Palettenaufsatzrahmen für Euro-Paletten. Robuste Holzrahmen mit Metallbeschlägen, schnell aufsetz- und stapelbar. Schutz gegen Verrutschen, Umfallen und Verschmutzung der Ware – perfekt für Mehrweg-Logistik.",
      datenFakten: [
        "Grundmaß: passend für Europalette 1.200 × 800 mm",
        "Innenhöhe je Rahmen: ca. 200 mm (Standard-Ring)",
        "Material: gehobeltes, wärmebehandeltes Nadelholz (ca. 20 mm Brettstärke)",
        "Beschläge: 4 verzinkte Stahlscharniere/Eckverbinder, stapelbar",
        "Gewicht: ca. 8–10 kg je Rahmen",
        "Nutzlast: abhängig vom Inhalt; üblicherweise bis 1.000 kg pro Palette mit 4–6 Ringen (Richtwert)",
        "Faltmaß: flach zusammenlegbar für Rücktransport/Lager",
      ],
      kennzeichnungen:
        "IPPC/HT-Kennzeichnung (ISPM-15) bei Exportausführung; Hersteller-/Chargenstempel möglich; optional Branding/Etikettenfenster.",
      handling:
        "Werkzeuglos aufklappen, auf die Palette setzen und an den Ecken verriegeln; mehrere Ringe übereinander stapelbar; optional mit Deckel kombinierbar; ideale Kommissionierhöhe je nach Ringzahl.",
      qualitaetskontrolle:
        "Stichprobenprüfung auf Maßhaltigkeit, Holzfeuchte und Beschlagsfestigkeit; Empfehlung: Sichtprüfung vor jedem Umlauf.",
      ispm15:
        "Holzrahmen in HT-Qualität gemäß ISPM-15 erhältlich und damit exportgeeignet (länderspezifische Vorgaben beachten).",
    },
  },
  {
    grade: "Euro Gitterbox",
    slug: "euro-gitterbox",
    image: giterbox, // import { euroGitterbox } from "@/assets";
    description:
      "Robuste, tauschfähige EPAL-Euro-Gitterbox aus Stahl mit Holz-Boden und klappbarer Längsseite – ideal für Schüttgut, Kleinteile und sichere Lagerung/Transport.",
    price: 89.0, // set your real price
    details: {
      beschreibung:
        "Die standardisierte EPAL-Euro-Gitterbox kombiniert eine stabile Stahlgitter-Konstruktion mit einem wärmebehandelten Holz-Boden. Austausch- und reparaturfähig im EPAL-Pool, stapelbar und für raue Industrieumgebungen konzipiert.",
      datenFakten: [
        "Maße: 1.240 × 835 × 970 mm (Außenmaß)",
        "Innenmaß: ca. 1.210 × 795 × 800 mm",
        "Gewicht: ca. 70 kg (Eigengewicht)",
        "Tragfähigkeit: 1.500 kg",
        "Stapellast: bis ca. 6.000 kg (Richtwert, standsicher stapeln)",
        "Maschenweite: 50 × 50 mm",
        "Boden: 4 HT-Holzbretter (ISPM-15), geschraubt",
        "Unterfahrbarkeit: 4-seitig, Einfahrhöhe ca. 100 mm",
        "Farbe: RAL 7030 (Steingrau), je nach Charge abweichend"
      ],
      kennzeichnungen:
        "EPAL-Prägung/Typenschild mit Hersteller-ID und Prüfkennzeichen, Produktionsjahr/Monat; HT-Kennzeichnung für Holzkomponenten (ISPM-15).",
      handling:
        "Vierseitig unterfahrbar, stapelfähig über Stapelecken; halb klappbare Längsseite für ergonomisches Be- und Entladen; geeignet für Fördertechnik und interne Logistik.",
      qualitaetskontrolle:
        "Seriennahe Maß- und Sichtprüfung; reparier- und tauschfähig im EPAL-Pool. Vor Einsatz Sichtprüfung auf Verformungen/Beschädigungen empfohlen.",
      ispm15:
        "Holzbestandteile sind wärmebehandelt (HT) gemäß ISPM-15 und damit exportgeeignet – länderspezifische Vorgaben beachten.",
    },
  },
  {
  grade: "Obst-Großkiste (Holz)",
  slug: "obst-grosskiste-holz",
  image: obstGrosskiste, // import { obstGrosskiste } from "@/assets";
  description:
    "Robuste, belüftete Großkiste aus Nadelholz für Obst und Gemüse – ideal für Ernte, Zwischenlagerung und Transport.",
  price: 49.0, // ← set your real price
  details: {
    beschreibung:
      "Stabile Mehrweg-Holzkiste mit umlaufender Lamellenkonstruktion für optimale Belüftung. Für Obst (z. B. Äpfel, Birnen) und Gemüse geeignet. Stapelbar, 4-seitig unterfahrbar und für raue Einsätze in Lager & Logistik ausgelegt.",
    datenFakten: [
      "Maße: 1.200 × 1.000 × 760 mm (Außenmaß, Standard)",
      "Innenmaß: ca. 1.160 × 960 × 700 mm",
      "Volumen: ca. 0,75–0,80 m³ (Richtwert)",
      "Gewicht: ca. 38–45 kg (ausführungsspezifisch)",
      "Tragfähigkeit: bis ca. 1.000 kg (dynamisch); Stapellast bis ca. 4.000 kg (standsicher stapeln, Richtwert)",
      "Material: getrocknetes Nadelholz; Seitenlamellen ~20 mm; Eckpfosten ~40 × 60 mm",
      "Boden: Palettenfuß mit 3 Kufen, verschraubt",
      "Unterfahrbarkeit: 4-seitig; Einfahrhöhe ~90 mm",
      "Oberfläche: roh/geschliffen; Kanten gebrochen",
    ],
    kennzeichnungen:
      "Auf Wunsch mit IPPC/HT-Kennzeichnung (ISPM-15) für Export; Hersteller-/Chargenstempel möglich.",
    handling:
      "Mit Stapler/Hubwagen verfahrbar; stapelbar (je nach Last und Zustand bis 4-fach). Belüftete Seiten fördern Abtrocknung; optional mit Inliner/Abdeckung kombinierbar.",
    qualitaetskontrolle:
      "Stichprobenprüfung auf Maßhaltigkeit, Holzfeuchte und Verbindungssicherheit. Vor jedem Umlauf Sichtprüfung; beschädigte Kisten nicht stapeln.",
    ispm15:
      "Als HT-Ausführung gemäß ISPM-15 verfügbar und damit exportgeeignet (länderspezifische Vorgaben beachten).",
  },
}
];
