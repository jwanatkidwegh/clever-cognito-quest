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
    category: "Verbal Reasoning",
    question: "Which word does NOT belong with the others?",
    options: ["Apple", "Orange", "Banana", "Carrot"],
    correctAnswer: "Carrot",
    difficulty: "easy"
  },
  {
    id: 2,
    category: "Pattern Recognition",
    question: "What comes next in this sequence: 2, 4, 8, 16, ?",
    options: ["24", "32", "30", "28"],
    correctAnswer: "32",
    difficulty: "easy"
  },
  {
    id: 3,
    category: "Numerical Reasoning",
    question: "If a train travels 120 kilometers in 2 hours, what is its average speed?",
    options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
    correctAnswer: "60 km/h",
    difficulty: "medium"
  },
  {
    id: 4,
    category: "Spatial Reasoning",
    question: "How many cubes are there in a 3×3×3 cube structure?",
    options: ["18", "21", "27", "24"],
    correctAnswer: "27",
    difficulty: "medium"
  },
  {
    id: 5,
    category: "Verbal Reasoning",
    question: "Complete the analogy: Book is to Reading as Fork is to ?",
    options: ["Kitchen", "Eating", "Metal", "Cooking"],
    correctAnswer: "Eating",
    difficulty: "medium"
  },
  {
    id: 6,
    category: "Pattern Recognition",
    question: "What number should replace the question mark? 1, 1, 2, 3, 5, 8, ?",
    options: ["11", "13", "15", "12"],
    correctAnswer: "13",
    difficulty: "medium"
  },
  {
    id: 7,
    category: "Numerical Reasoning",
    question: "What is 15% of 200?",
    options: ["25", "30", "35", "40"],
    correctAnswer: "30",
    difficulty: "easy"
  },
  {
    id: 8,
    category: "Logical Reasoning",
    question: "If all roses are flowers and some flowers are red, which statement must be true?",
    options: [
      "All roses are red",
      "Some roses might be red",
      "No roses are red",
      "All red things are roses"
    ],
    correctAnswer: "Some roses might be red",
    difficulty: "hard"
  },
  {
    id: 9,
    category: "Spatial Reasoning",
    question: "Which shape would you get if you folded this net into a 3D object?",
    options: ["Cube", "Pyramid", "Cylinder", "Cone"],
    correctAnswer: "Cube",
    difficulty: "medium"
  },
  {
    id: 10,
    category: "Pattern Recognition",
    question: "What comes next: A1, B4, C9, D16, ?",
    options: ["E20", "E25", "F25", "E24"],
    correctAnswer: "E25",
    difficulty: "hard"
  },
  {
    id: 11,
    category: "Numerical Reasoning",
    question: "A shopkeeper sells an item for $120, making a 20% profit. What was the cost price?",
    options: ["$96", "$100", "$105", "$110"],
    correctAnswer: "$100",
    difficulty: "hard"
  },
  {
    id: 12,
    category: "Verbal Reasoning",
    question: "Which word is closest in meaning to 'meticulous'?",
    options: ["Careless", "Detailed", "Quick", "Simple"],
    correctAnswer: "Detailed",
    difficulty: "medium"
  },
  {
    id: 13,
    category: "Logical Reasoning",
    question: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
    options: ["5 minutes", "20 minutes", "100 minutes", "500 minutes"],
    correctAnswer: "5 minutes",
    difficulty: "hard"
  },
  {
    id: 14,
    category: "Pattern Recognition",
    question: "What number is missing? 3, 6, 12, 24, ?, 96",
    options: ["36", "42", "48", "54"],
    correctAnswer: "48",
    difficulty: "medium"
  },
  {
    id: 15,
    category: "Spatial Reasoning",
    question: "How many triangles can you count in a Star of David (6-pointed star)?",
    options: ["6", "8", "12", "13"],
    correctAnswer: "13",
    difficulty: "hard"
  }
];