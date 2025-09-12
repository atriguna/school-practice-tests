import { Question } from '../types';

export const grade3Practice: Record<string, Question[]> = {
  'addition-with-carrying': [
    {
      id: 1,
      question: 'What is 324 + 289?',
      options: ['603', '613', '623', '633'],
      correctAnswer: '613',
      explanation: '324 + 289 = 613.',
      topic: 'Addition with carrying'
    },
    {
      id: 2,
      question: 'Add: 456 + 278',
      options: ['724', '734', '734', '736'],
      correctAnswer: '734',
      explanation: '456 + 278 = 734.',
      topic: 'Addition with carrying'
    },
    {
      id: 3,
      question: 'What is 387 + 416?',
      options: ['803', '793', '813', '823'],
      correctAnswer: '803',
      explanation: '387 + 416 = 803.',
      topic: 'Addition with carrying'
    },
    {
      id: 4,
      question: 'Find the sum: 512 + 389',
      options: ['891', '892', '901', '902'],
      correctAnswer: '901',
      explanation: '512 + 389 = 901.',
      topic: 'Addition with carrying'
    },
    {
      id: 5,
      question: 'Add: 678 + 245',
      options: ['913', '923', '933', '943'],
      correctAnswer: '923',
      explanation: '678 + 245 = 923.',
      topic: 'Addition with carrying'
    }
  ],

  'multiplication-division': [
    {
      id: 1,
      question: 'What is 7 × 8?',
      options: ['54', '55', '56', '57'],
      correctAnswer: '56',
      explanation: '7 × 8 = 56.',
      topic: 'Multiplication facts'
    },
    {
      id: 2,
      question: 'What is 81 ÷ 9?',
      options: ['8', '9', '10', '11'],
      correctAnswer: '9',
      explanation: '81 ÷ 9 = 9.',
      topic: 'Division facts'
    },
    {
      id: 3,
      question: 'Solve: 6 × 12',
      options: ['62', '72', '82', '92'],
      correctAnswer: '72',
      explanation: '6 × 12 = 72.',
      topic: 'Multiplication facts'
    },
    {
      id: 4,
      question: 'What is 56 ÷ 7?',
      options: ['6', '7', '8', '9'],
      correctAnswer: '8',
      explanation: '56 ÷ 7 = 8.',
      topic: 'Division facts'
    },
    {
      id: 5,
      question: 'Which is equal to 9 × 9?',
      options: ['18', '27', '81', '99'],
      correctAnswer: '81',
      explanation: '9 × 9 = 81.',
      topic: 'Multiplication squares'
    }
  ],

  'fractions': [
    {
      id: 1,
      question: 'What is 3/4 of 20?',
      options: ['5', '10', '15', '20'],
      correctAnswer: '15',
      explanation: '20 ÷ 4 × 3 = 15.',
      topic: 'Fractions of quantities'
    },
    {
      id: 2,
      question: 'Which fraction is equal to 2/6?',
      options: ['1/2', '1/3', '1/4', '2/3'],
      correctAnswer: '1/3',
      explanation: '2/6 simplifies to 1/3.',
      topic: 'Simplifying fractions'
    },
    {
      id: 3,
      question: 'Which is greater: 2/3 or 3/5?',
      options: ['2/3', '3/5', 'Equal', 'Cannot compare'],
      correctAnswer: '2/3',
      explanation: '2/3 ≈ 0.66, 3/5 = 0.6, so 2/3 > 3/5.',
      topic: 'Comparing fractions'
    },
    {
      id: 4,
      question: 'Shade 2/5 of 15 boxes. How many are shaded?',
      options: ['3', '5', '6', '7'],
      correctAnswer: '6',
      explanation: '15 ÷ 5 × 2 = 6.',
      topic: 'Fractions of sets'
    },
    {
      id: 5,
      question: 'What is 1/10 of 100?',
      options: ['1', '5', '10', '20'],
      correctAnswer: '10',
      explanation: '100 ÷ 10 = 10.',
      topic: 'Fractions of quantities'
    }
  ],

  'geometry-measurement': [
    {
      id: 1,
      question: 'What is the perimeter of a rectangle with length 9 cm and width 5 cm?',
      options: ['18 cm', '24 cm', '26 cm', '28 cm'],
      correctAnswer: '28 cm',
      explanation: 'Perimeter = 2 × (9 + 5) = 28 cm.',
      topic: 'Perimeter'
    },
    {
      id: 2,
      question: 'How many sides does a hexagon have?',
      options: ['5', '6', '7', '8'],
      correctAnswer: '6',
      explanation: 'Hexa = 6, so hexagon has 6 sides.',
      topic: '2D shapes'
    },
    {
      id: 3,
      question: 'Which of these angles is a right angle?',
      options: ['45°', '60°', '90°', '120°'],
      correctAnswer: '90°',
      explanation: 'A right angle is exactly 90°.',
      topic: 'Angles'
    },
    {
      id: 4,
      question: 'What is the area of a rectangle 7 cm by 3 cm?',
      options: ['10 cm²', '18 cm²', '20 cm²', '21 cm²'],
      correctAnswer: '21 cm²',
      explanation: 'Area = 7 × 3 = 21 cm².',
      topic: 'Area'
    },
    {
      id: 5,
      question: 'Convert 2.5 kg to grams.',
      options: ['250 g', '2500 g', '25 g', '25,000 g'],
      correctAnswer: '2500 g',
      explanation: '1 kg = 1000 g, so 2.5 × 1000 = 2500 g.',
      topic: 'Metric conversion'
    }
  ],

  'time-data': [
    {
      id: 1,
      question: 'What is 6:45 PM in 24-hour time?',
      options: ['06:45', '16:45', '18:45', '19:45'],
      correctAnswer: '18:45',
      explanation: '6:45 PM = 18:45.',
      topic: 'Time conversion'
    },
    {
      id: 2,
      question: 'How many hours are in 3 days?',
      options: ['48', '60', '72', '96'],
      correctAnswer: '72',
      explanation: '3 × 24 = 72.',
      topic: 'Time conversion'
    },
    {
      id: 3,
      question: 'Which chart shows how many apples were sold each day?',
      options: ['Pictogram', 'Bar chart', 'Line graph', 'All of these'],
      correctAnswer: 'All of these',
      explanation: 'Apples sold per day can be shown with pictogram, bar, or line chart.',
      topic: 'Data representation'
    },
    {
      id: 4,
      question: 'If a bus leaves at 14:30 and arrives at 15:15, how long is the journey?',
      options: ['30 minutes', '35 minutes', '40 minutes', '45 minutes'],
      correctAnswer: '45 minutes',
      explanation: '15:15 − 14:30 = 45 minutes.',
      topic: 'Elapsed time'
    },
    {
      id: 5,
      question: 'How many minutes are in 2 hours?',
      options: ['60', '90', '100', '120'],
      correctAnswer: '120',
      explanation: '60 × 2 = 120 minutes.',
      topic: 'Time units'
    }
  ]
};
