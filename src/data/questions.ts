export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  image?: string;
}

export const questionBank: Question[] = [
  {
    id: 1,
    category: "Verbaal Redeneren",
    question: "Welk woord hoort NIET bij de anderen?",
    options: ["Appel", "Sinaasappel", "Banaan", "Wortel"],
    correctAnswer: "Wortel",
    difficulty: "easy"
  },
  {
    id: 2,
    category: "Patroonherkenning",
    question: "Wat komt als volgende in deze reeks: 2, 4, 8, 16, ?",
    options: ["24", "32", "30", "28"],
    correctAnswer: "32",
    difficulty: "easy"
  },
  {
    id: 3,
    category: "Numeriek Redeneren",
    question: "Als een trein 120 kilometer aflegt in 2 uur, wat is dan zijn gemiddelde snelheid?",
    options: ["50 km/u", "60 km/u", "70 km/u", "80 km/u"],
    correctAnswer: "60 km/u",
    difficulty: "medium"
  },
  {
    id: 4,
    category: "Ruimtelijk Redeneren",
    question: "Hoeveel kubussen zitten er in een 3×3×3 kubus structuur?",
    options: ["18", "21", "27", "24"],
    correctAnswer: "27",
    difficulty: "medium"
  },
  {
    id: 5,
    category: "Verbaal Redeneren",
    question: "Maak de analogie af: Boek is tot Lezen als Vork is tot ?",
    options: ["Keuken", "Eten", "Metaal", "Koken"],
    correctAnswer: "Eten",
    difficulty: "medium"
  },
  {
    id: 6,
    category: "Patroonherkenning",
    question: "Welk getal moet het vraagteken vervangen? 1, 1, 2, 3, 5, 8, ?",
    options: ["11", "13", "15", "12"],
    correctAnswer: "13",
    difficulty: "medium"
  },
  {
    id: 7,
    category: "Numeriek Redeneren",
    question: "Wat is 15% van 200?",
    options: ["25", "30", "35", "40"],
    correctAnswer: "30",
    difficulty: "easy"
  },
  {
    id: 8,
    category: "Logisch Redeneren",
    question: "Als alle rozen bloemen zijn en sommige bloemen rood zijn, welke bewering moet dan waar zijn?",
    options: [
      "Alle rozen zijn rood",
      "Sommige rozen kunnen rood zijn",
      "Geen rozen zijn rood",
      "Alle rode dingen zijn rozen"
    ],
    correctAnswer: "Sommige rozen kunnen rood zijn",
    difficulty: "hard"
  },
  {
    id: 9,
    category: "Ruimtelijk Redeneren",
    question: "Welke vorm krijg je als je dit uitvouwpatroon tot een 3D-object vouwt?",
    options: ["Kubus", "Piramide", "Cilinder", "Kegel"],
    correctAnswer: "Kubus",
    difficulty: "medium"
  },
  {
    id: 10,
    category: "Patroonherkenning",
    question: "Wat komt als volgende: A1, B4, C9, D16, ?",
    options: ["E20", "E25", "F25", "E24"],
    correctAnswer: "E25",
    difficulty: "hard"
  },
  {
    id: 11,
    category: "Numeriek Redeneren",
    question: "Een winkelier verkoopt een artikel voor €120 en maakt 20% winst. Wat was de inkoopprijs?",
    options: ["€96", "€100", "€105", "€110"],
    correctAnswer: "€100",
    difficulty: "hard"
  },
  {
    id: 12,
    category: "Verbaal Redeneren",
    question: "Welk woord betekent het meest hetzelfde als 'minutieus'?",
    options: ["Slordig", "Gedetailleerd", "Snel", "Eenvoudig"],
    correctAnswer: "Gedetailleerd",
    difficulty: "medium"
  },
  {
    id: 13,
    category: "Logisch Redeneren",
    question: "Als 5 machines 5 minuten nodig hebben om 5 widgets te maken, hoe lang hebben dan 100 machines nodig om 100 widgets te maken?",
    options: ["5 minuten", "20 minuten", "100 minuten", "500 minuten"],
    correctAnswer: "5 minuten",
    difficulty: "hard"
  },
  {
    id: 14,
    category: "Patroonherkenning",
    question: "Welk getal ontbreekt? 3, 6, 12, 24, ?, 96",
    options: ["36", "42", "48", "54"],
    correctAnswer: "48",
    difficulty: "medium"
  },
  {
    id: 15,
    category: "Ruimtelijk Redeneren",
    question: "Hoeveel driehoeken kun je tellen in een Davidster (6-puntige ster)?",
    options: ["6", "8", "12", "13"],
    correctAnswer: "13",
    difficulty: "hard"
  },
  {
    id: 16,
    category: "Verbaal Redeneren",
    question: "Wat is het tegenovergestelde van 'overvloedig'?",
    options: ["Schaars", "Veel", "Rijk", "Vol"],
    correctAnswer: "Schaars",
    difficulty: "easy"
  },
  {
    id: 17,
    category: "Numeriek Redeneren",
    question: "Wat is 25% van 80?",
    options: ["15", "20", "25", "30"],
    correctAnswer: "20",
    difficulty: "easy"
  },
  {
    id: 18,
    category: "Patroonherkenning",
    question: "Maak het patroon af: E, T, D, V, V, Z, Z, ?",
    options: ["A", "N", "S", "T"],
    correctAnswer: "A",
    difficulty: "hard"
  },
  {
    id: 19,
    category: "Logisch Redeneren",
    question: "Alle katten zijn zoogdieren. Sommige zoogdieren zijn honden. Daarom:",
    options: ["Alle katten zijn honden", "Sommige katten zijn honden", "Geen katten zijn honden", "Kan niet bepaald worden"],
    correctAnswer: "Kan niet bepaald worden",
    difficulty: "medium"
  },
  {
    id: 20,
    category: "Ruimtelijk Redeneren",
    question: "Als je een vierkant 45 graden draait, welke vorm zie je dan?",
    options: ["Vierkant", "Ruit", "Rechthoek", "Cirkel"],
    correctAnswer: "Ruit",
    difficulty: "easy"
  },
  {
    id: 21,
    category: "Numeriek Redeneren",
    question: "Als x + 5 = 12, wat is dan x?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
    difficulty: "easy"
  },
  {
    id: 22,
    category: "Verbaal Redeneren",
    question: "Welk woord maakt de zin het beste af: 'Oceaan is tot Water als Woestijn is tot ____'?",
    options: ["Heet", "Zand", "Droog", "Cactus"],
    correctAnswer: "Zand",
    difficulty: "medium"
  },
  {
    id: 23,
    category: "Patroonherkenning",
    question: "Wat komt als volgende: 100, 50, 25, 12.5, ?",
    options: ["6", "6.25", "5", "7.5"],
    correctAnswer: "6.25",
    difficulty: "medium"
  },
  {
    id: 24,
    category: "Logisch Redeneren",
    question: "Als eergisteren donderdag was, welke dag is het dan morgen?",
    options: ["Zondag", "Maandag", "Dinsdag", "Woensdag"],
    correctAnswer: "Zondag",
    difficulty: "medium"
  },
  {
    id: 25,
    category: "Numeriek Redeneren",
    question: "Een rechthoek heeft een lengte van 8cm en een breedte van 6cm. Wat is de oppervlakte?",
    options: ["14 cm²", "28 cm²", "48 cm²", "56 cm²"],
    correctAnswer: "48 cm²",
    difficulty: "easy"
  },
  {
    id: 26,
    category: "Ruimtelijk Redeneren",
    question: "Hoeveel vlakken heeft een kubus?",
    options: ["4", "6", "8", "12"],
    correctAnswer: "6",
    difficulty: "easy"
  },
  {
    id: 27,
    category: "Verbaal Redeneren",
    question: "Welk woord hoort er NIET bij: Blij, Vrolijk, Verdrietig, Opgewekt?",
    options: ["Blij", "Vrolijk", "Verdrietig", "Opgewekt"],
    correctAnswer: "Verdrietig",
    difficulty: "easy"
  },
  {
    id: 28,
    category: "Patroonherkenning",
    question: "Welk getal komt als volgende: 3, 7, 15, 31, ?",
    options: ["47", "63", "55", "71"],
    correctAnswer: "63",
    difficulty: "hard"
  },
  {
    id: 29,
    category: "Logisch Redeneren",
    question: "Als alle vogels kunnen vliegen en pinguïns vogels zijn, maar pinguïns niet kunnen vliegen, wat kunnen we dan concluderen?",
    options: ["Pinguïns zijn geen vogels", "De eerste bewering is onjuist", "Pinguïns zijn uitzonderlijk", "Alle beweringen zijn waar"],
    correctAnswer: "De eerste bewering is onjuist",
    difficulty: "hard"
  },
  {
    id: 30,
    category: "Numeriek Redeneren",
    question: "Wat is 3² + 4²?",
    options: ["12", "25", "49", "144"],
    correctAnswer: "25",
    difficulty: "medium"
  },
  {
    id: 31,
    category: "Verbaal Redeneren",
    question: "Maak de zin af: 'Zo moedig als een ____'",
    options: ["Muis", "Leeuw", "Konijn", "Schaap"],
    correctAnswer: "Leeuw",
    difficulty: "easy"
  },
  {
    id: 32,
    category: "Ruimtelijk Redeneren",
    question: "Welke 2D-vorm heeft precies 3 zijden?",
    options: ["Vierkant", "Driehoek", "Vijfhoek", "Cirkel"],
    correctAnswer: "Driehoek",
    difficulty: "easy"
  },
  {
    id: 33,
    category: "Patroonherkenning",
    question: "Maak de reeks af: Z, Y, X, W, ?",
    options: ["V", "U", "T", "S"],
    correctAnswer: "V",
    difficulty: "easy"
  },
  {
    id: 34,
    category: "Numeriek Redeneren",
    question: "Als een pizza in 8 gelijke stukken wordt gesneden en je eet 3 stukken, welke breuk blijft er over?",
    options: ["3/8", "5/8", "1/2", "2/3"],
    correctAnswer: "5/8",
    difficulty: "medium"
  },
  {
    id: 35,
    category: "Logisch Redeneren",
    question: "Tom is langer dan Jerry. Jerry is langer dan Mike. Wie is het kortst?",
    options: ["Tom", "Jerry", "Mike", "Kan niet bepaald worden"],
    correctAnswer: "Mike",
    difficulty: "easy"
  },
  {
    id: 36,
    category: "Verbaal Redeneren",
    question: "Wat betekent 'uitstellen'?",
    options: ["Opschieten", "Vertragen", "Voltooien", "Organiseren"],
    correctAnswer: "Vertragen",
    difficulty: "medium"
  },
  {
    id: 37,
    category: "Patroonherkenning",
    question: "Wat komt als volgende: Maandag, Woensdag, Vrijdag, ?",
    options: ["Zaterdag", "Zondag", "Dinsdag", "Donderdag"],
    correctAnswer: "Zondag",
    difficulty: "medium"
  },
  {
    id: 38,
    category: "Numeriek Redeneren",
    question: "Wat is 144 ÷ 12?",
    options: ["10", "11", "12", "13"],
    correctAnswer: "12",
    difficulty: "easy"
  },
  {
    id: 39,
    category: "Ruimtelijk Redeneren",
    question: "Hoeveel randen heeft een driehoekige piramide?",
    options: ["3", "4", "6", "9"],
    correctAnswer: "6",
    difficulty: "medium"
  },
  {
    id: 40,
    category: "Logisch Redeneren",
    question: "Als je de letters van 'LUISTEREN' herschikt, welk woord kun je dan vormen?",
    options: ["STILTE", "REGELS", "LETTERS", "Alle bovenstaande"],
    correctAnswer: "Alle bovenstaande",
    difficulty: "hard"
  },
  {
    id: 41,
    category: "Verbaal Redeneren",
    question: "Welk woord lijkt het meest op 'enorm'?",
    options: ["Klein", "Reusachtig", "Gemiddeld", "Weinig"],
    correctAnswer: "Reusachtig",
    difficulty: "easy"
  },
  {
    id: 42,
    category: "Patroonherkenning",
    question: "Welk getal ontbreekt: 2, 6, 18, 54, ?",
    options: ["108", "162", "216", "324"],
    correctAnswer: "162",
    difficulty: "medium"
  },
  {
    id: 43,
    category: "Numeriek Redeneren",
    question: "Als een auto 300 mijl aflegt in 5 uur, wat is dan zijn snelheid in mijl per uur?",
    options: ["50 mph", "55 mph", "60 mph", "65 mph"],
    correctAnswer: "60 mph",
    difficulty: "medium"
  },
  {
    id: 44,
    category: "Ruimtelijk Redeneren",
    question: "Welke vorm kan NIET tot een kubus worden gevouwen?",
    options: ["Kruisvorm", "T-vorm", "L-vorm", "Alle kunnen gevouwen worden"],
    correctAnswer: "L-vorm",
    difficulty: "hard"
  },
  {
    id: 45,
    category: "Logisch Redeneren",
    question: "Een boer heeft 17 schapen. Allemaal behalve 9 sterven. Hoeveel blijven er over?",
    options: ["8", "9", "0", "17"],
    correctAnswer: "9",
    difficulty: "medium"
  }
];