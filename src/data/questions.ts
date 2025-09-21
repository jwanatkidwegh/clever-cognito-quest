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
  },
  {
    id: 16,
    category: "Verbal Reasoning",
    question: "What is the opposite of 'abundant'?",
    options: ["Scarce", "Plenty", "Rich", "Full"],
    correctAnswer: "Scarce",
    difficulty: "easy"
  },
  {
    id: 17,
    category: "Numerical Reasoning",
    question: "What is 25% of 80?",
    options: ["15", "20", "25", "30"],
    correctAnswer: "20",
    difficulty: "easy"
  },
  {
    id: 18,
    category: "Pattern Recognition",
    question: "Complete the pattern: O, T, T, F, F, S, S, ?",
    options: ["E", "N", "S", "T"],
    correctAnswer: "E",
    difficulty: "hard"
  },
  {
    id: 19,
    category: "Logical Reasoning",
    question: "All cats are mammals. Some mammals are dogs. Therefore:",
    options: ["All cats are dogs", "Some cats are dogs", "No cats are dogs", "Cannot be determined"],
    correctAnswer: "Cannot be determined",
    difficulty: "medium"
  },
  {
    id: 20,
    category: "Spatial Reasoning",
    question: "If you rotate a square 45 degrees, what shape do you see?",
    options: ["Square", "Diamond", "Rectangle", "Circle"],
    correctAnswer: "Diamond",
    difficulty: "easy"
  },
  {
    id: 21,
    category: "Numerical Reasoning",
    question: "If x + 5 = 12, what is x?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
    difficulty: "easy"
  },
  {
    id: 22,
    category: "Verbal Reasoning",
    question: "Which word best completes: 'Ocean is to Water as Desert is to ____'?",
    options: ["Hot", "Sand", "Dry", "Cactus"],
    correctAnswer: "Sand",
    difficulty: "medium"
  },
  {
    id: 23,
    category: "Pattern Recognition",
    question: "What comes next: 100, 50, 25, 12.5, ?",
    options: ["6", "6.25", "5", "7.5"],
    correctAnswer: "6.25",
    difficulty: "medium"
  },
  {
    id: 24,
    category: "Logical Reasoning",
    question: "If the day before yesterday was Thursday, what day is tomorrow?",
    options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
    correctAnswer: "Sunday",
    difficulty: "medium"
  },
  {
    id: 25,
    category: "Numerical Reasoning",
    question: "A rectangle has a length of 8cm and width of 6cm. What is its area?",
    options: ["14 cm²", "28 cm²", "48 cm²", "56 cm²"],
    correctAnswer: "48 cm²",
    difficulty: "easy"
  },
  {
    id: 26,
    category: "Spatial Reasoning",
    question: "How many faces does a cube have?",
    options: ["4", "6", "8", "12"],
    correctAnswer: "6",
    difficulty: "easy"
  },
  {
    id: 27,
    category: "Verbal Reasoning",
    question: "Which word does NOT belong: Happy, Joyful, Sad, Cheerful?",
    options: ["Happy", "Joyful", "Sad", "Cheerful"],
    correctAnswer: "Sad",
    difficulty: "easy"
  },
  {
    id: 28,
    category: "Pattern Recognition",
    question: "What number comes next: 3, 7, 15, 31, ?",
    options: ["47", "63", "55", "71"],
    correctAnswer: "63",
    difficulty: "hard"
  },
  {
    id: 29,
    category: "Logical Reasoning",
    question: "If all birds can fly and penguins are birds, but penguins cannot fly, what can we conclude?",
    options: ["Penguins are not birds", "The first statement is false", "Penguins are exceptional", "All statements are true"],
    correctAnswer: "The first statement is false",
    difficulty: "hard"
  },
  {
    id: 30,
    category: "Numerical Reasoning",
    question: "What is 3² + 4²?",
    options: ["12", "25", "49", "144"],
    correctAnswer: "25",
    difficulty: "medium"
  },
  {
    id: 31,
    category: "Verbal Reasoning",
    question: "Complete the sentence: 'As brave as a ____'",
    options: ["Mouse", "Lion", "Rabbit", "Sheep"],
    correctAnswer: "Lion",
    difficulty: "easy"
  },
  {
    id: 32,
    category: "Spatial Reasoning",
    question: "Which 2D shape has exactly 3 sides?",
    options: ["Square", "Triangle", "Pentagon", "Circle"],
    correctAnswer: "Triangle",
    difficulty: "easy"
  },
  {
    id: 33,
    category: "Pattern Recognition",
    question: "Complete the sequence: Z, Y, X, W, ?",
    options: ["V", "U", "T", "S"],
    correctAnswer: "V",
    difficulty: "easy"
  },
  {
    id: 34,
    category: "Numerical Reasoning",
    question: "If a pizza is cut into 8 equal slices and you eat 3 slices, what fraction remains?",
    options: ["3/8", "5/8", "1/2", "2/3"],
    correctAnswer: "5/8",
    difficulty: "medium"
  },
  {
    id: 35,
    category: "Logical Reasoning",
    question: "Tom is taller than Jerry. Jerry is taller than Mike. Who is the shortest?",
    options: ["Tom", "Jerry", "Mike", "Cannot determine"],
    correctAnswer: "Mike",
    difficulty: "easy"
  },
  {
    id: 36,
    category: "Verbal Reasoning",
    question: "What does 'procrastinate' mean?",
    options: ["To hurry up", "To delay", "To complete", "To organize"],
    correctAnswer: "To delay",
    difficulty: "medium"
  },
  {
    id: 37,
    category: "Pattern Recognition",
    question: "What comes next: Monday, Wednesday, Friday, ?",
    options: ["Saturday", "Sunday", "Tuesday", "Thursday"],
    correctAnswer: "Sunday",
    difficulty: "medium"
  },
  {
    id: 38,
    category: "Numerical Reasoning",
    question: "What is 144 ÷ 12?",
    options: ["10", "11", "12", "13"],
    correctAnswer: "12",
    difficulty: "easy"
  },
  {
    id: 39,
    category: "Spatial Reasoning",
    question: "How many edges does a triangular pyramid have?",
    options: ["3", "4", "6", "9"],
    correctAnswer: "6",
    difficulty: "medium"
  },
  {
    id: 40,
    category: "Logical Reasoning",
    question: "If you rearrange the letters 'LISTEN', you can form which word?",
    options: ["SILENT", "ENLIST", "TINSEL", "All of the above"],
    correctAnswer: "All of the above",
    difficulty: "hard"
  },
  {
    id: 41,
    category: "Verbal Reasoning",
    question: "Which word is most similar to 'enormous'?",
    options: ["Tiny", "Huge", "Average", "Small"],
    correctAnswer: "Huge",
    difficulty: "easy"
  },
  {
    id: 42,
    category: "Pattern Recognition",
    question: "What number is missing: 2, 6, 18, 54, ?",
    options: ["108", "162", "216", "324"],
    correctAnswer: "162",
    difficulty: "medium"
  },
  {
    id: 43,
    category: "Numerical Reasoning",
    question: "If a car travels 300 miles in 5 hours, what is its speed in miles per hour?",
    options: ["50 mph", "55 mph", "60 mph", "65 mph"],
    correctAnswer: "60 mph",
    difficulty: "medium"
  },
  {
    id: 44,
    category: "Spatial Reasoning",
    question: "Which shape cannot be folded into a cube?",
    options: ["Cross shape", "T shape", "L shape", "All can be folded"],
    correctAnswer: "L shape",
    difficulty: "hard"
  },
  {
    id: 45,
    category: "Logical Reasoning",
    question: "A farmer has 17 sheep. All but 9 die. How many are left?",
    options: ["8", "9", "0", "17"],
    correctAnswer: "9",
    difficulty: "medium"
  }
];