import { Question } from '../types';

export const grade4Practice: Record<string, Question[]> = {
  'place-value': [
    {
      id: 1,
      question: 'What is the value of 5 in 5,438?',
      options: ['5', '50', '500', '5000'],
      correctAnswer: '5000',
      explanation: 'The digit 5 is in the thousands place.',
      topic: 'Place value'
    },
    {
      id: 2,
      question: 'Which number is greater: 7,654 or 7,546?',
      options: ['7,654', '7,546', 'Equal', 'None'],
      correctAnswer: '7,654',
      explanation: 'Compare thousands, then hundreds, etc.',
      topic: 'Comparing numbers'
    },
    {
      id: 3,
      question: 'Round 6,482 to the nearest hundred.',
      options: ['6,400', '6,480', '6,500', '6,600'],
      correctAnswer: '6,500',
      explanation: 'The tens digit is 8, so round up.',
      topic: 'Rounding'
    },
    {
      id: 4,
      question: 'Expand 3,246 in terms of place value.',
      options: [
        '3000 + 200 + 40 + 6',
        '300 + 20 + 4 + 6',
        '3000 + 20 + 40 + 6',
        '3000 + 2000 + 40 + 6'
      ],
      correctAnswer: '3000 + 200 + 40 + 6',
      explanation: 'Each digit is written by place.',
      topic: 'Expanded form'
    },
    {
      id: 5,
      question: 'How many hundreds are there in 8,500?',
      options: ['8', '85', '850', '8500'],
      correctAnswer: '85',
      explanation: '8,500 ÷ 100 = 85.',
      topic: 'Place value'
    }
  ],

  multiplication: [
    {
      id: 1,
      question: 'What is 342 × 6?',
      options: ['1952', '2052', '2062', '2152'],
      correctAnswer: '2052',
      explanation: '342 × 6 = 2052.',
      topic: 'Multiplication'
    },
    {
      id: 2,
      question: 'Multiply: 57 × 8',
      options: ['426', '436', '446', '456'],
      correctAnswer: '456',
      explanation: '57 × 8 = 456.',
      topic: 'Multiplication'
    },
    {
      id: 3,
      question: 'What is 124 × 12?',
      options: ['1488', '1498', '1508', '1518'],
      correctAnswer: '1488',
      explanation: '124 × 12 = 1488.',
      topic: 'Multiplication'
    },
    {
      id: 4,
      question: 'Find the product: 300 × 25',
      options: ['6500', '7000', '7500', '8000'],
      correctAnswer: '7500',
      explanation: '3 × 25 = 75, then add two zeros.',
      topic: 'Multiplication by multiples of 10'
    },
    {
      id: 5,
      question: 'Which is equal to 45 × 100?',
      options: ['450', '4500', '45000', '450000'],
      correctAnswer: '4500',
      explanation: 'Multiplying by 100 adds two zeros.',
      topic: 'Multiplication by powers of 10'
    }
  ],

  fractions: [
    {
      id: 1,
      question: 'What is 3/5 + 2/5?',
      options: ['4/5', '5/5', '1/5', '6/5'],
      correctAnswer: '5/5',
      explanation: 'Add numerators: 3 + 2 = 5.',
      topic: 'Addition of fractions'
    },
    {
      id: 2,
      question: 'Simplify 12/16.',
      options: ['3/4', '2/3', '4/6', '6/8'],
      correctAnswer: '3/4',
      explanation: 'Divide numerator and denominator by 4.',
      topic: 'Simplifying fractions'
    },
    {
      id: 3,
      question: 'Which fraction is larger: 2/3 or 3/5?',
      options: ['2/3', '3/5', 'Equal', 'Cannot compare'],
      correctAnswer: '2/3',
      explanation: '2/3 ≈ 0.66, 3/5 = 0.6.',
      topic: 'Comparing fractions'
    },
    {
      id: 4,
      question: 'What is 2/7 of 49?',
      options: ['7', '10', '12', '14'],
      correctAnswer: '14',
      explanation: '49 ÷ 7 × 2 = 14.',
      topic: 'Fractions of quantities'
    },
    {
      id: 5,
      question: 'What is 1/4 + 3/8?',
      options: ['5/8', '7/8', '1', '1 1/8'],
      correctAnswer: '5/8',
      explanation: 'Convert 1/4 to 2/8, then add to 3/8.',
      topic: 'Adding unlike fractions'
    }
  ],

  geometry: [
    {
      id: 1,
      question: 'A triangle has angles 50° and 60°. What is the third angle?',
      options: ['60°', '70°', '80°', '90°'],
      correctAnswer: '70°',
      explanation: 'Angles in a triangle sum to 180°.',
      topic: 'Angles in triangles'
    },
    {
      id: 2,
      question: 'Which shape has 8 sides?',
      options: ['Hexagon', 'Heptagon', 'Octagon', 'Nonagon'],
      correctAnswer: 'Octagon',
      explanation: 'Octa = 8.',
      topic: '2D shapes'
    },
    {
      id: 3,
      question: 'What is the area of a rectangle 12 cm × 5 cm?',
      options: ['50 cm²', '55 cm²', '60 cm²', '65 cm²'],
      correctAnswer: '60 cm²',
      explanation: 'Area = l × w = 12 × 5.',
      topic: 'Area'
    },
    {
      id: 4,
      question: 'What is the perimeter of a square with side 9 cm?',
      options: ['27 cm', '36 cm', '45 cm', '54 cm'],
      correctAnswer: '36 cm',
      explanation: 'Perimeter = 4 × side = 36.',
      topic: 'Perimeter'
    },
    {
      id: 5,
      question: 'Which angle is obtuse?',
      options: ['45°', '60°', '90°', '120°'],
      correctAnswer: '120°',
      explanation: 'Obtuse > 90°.',
      topic: 'Types of angles'
    }
  ],

  percentages: [
    {
      id: 1,
      question: 'What is 25% of 160?',
      options: ['20', '30', '40', '50'],
      correctAnswer: '40',
      explanation: '25% = 1/4, so 160 ÷ 4 = 40.',
      topic: 'Percentages'
    },
    {
      id: 2,
      question: 'Find 10% of 240.',
      options: ['12', '24', '30', '40'],
      correctAnswer: '24',
      explanation: '10% = divide by 10.',
      topic: 'Percentages'
    },
    {
      id: 3,
      question: 'Which is larger: 1/2 or 60%?',
      options: ['1/2', '60%', 'Equal', 'None'],
      correctAnswer: '60%',
      explanation: '1/2 = 50%, so 60% > 50%.',
      topic: 'Comparing fractions and percentages'
    },
    {
      id: 4,
      question: 'What is 15% of 200?',
      options: ['20', '25', '30', '35'],
      correctAnswer: '30',
      explanation: '200 × 15% = 30.',
      topic: 'Percentages'
    },
    {
      id: 5,
      question: 'Convert 3/4 to percentage.',
      options: ['50%', '60%', '70%', '75%'],
      correctAnswer: '75%',
      explanation: '3 ÷ 4 = 0.75 → 75%.',
      topic: 'Fractions to percentages'
    }
  ]
};
