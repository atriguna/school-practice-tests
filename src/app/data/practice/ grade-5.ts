import { Question } from '../types';

export const grade5Practice: Record<string, Question[]> = {
  'place-value-rounding': [
    {
      id: 1,
      question: 'Round 78,456 to the nearest thousand.',
      options: ['78,000', '78,500', '79,000', '80,000'],
      correctAnswer: '78,000',
      explanation: 'The hundreds digit is 4 (<5), so round down.',
      topic: 'Rounding'
    },
    {
      id: 2,
      question: 'What is the value of 9 in 92,347?',
      options: ['9', '90', '900', '90,000'],
      correctAnswer: '90,000',
      explanation: '9 is in the ten-thousands place.',
      topic: 'Place value'
    },
    {
      id: 3,
      question: 'Round 34,892 to the nearest hundred.',
      options: ['34,800', '34,900', '35,000', '34,000'],
      correctAnswer: '34,900',
      explanation: 'Tens digit is 9 (≥5), so round up.',
      topic: 'Rounding'
    },
    {
      id: 4,
      question: 'How many tens are there in 12,340?',
      options: ['123', '1234', '12,340', '12340'],
      correctAnswer: '1234',
      explanation: '12,340 ÷ 10 = 1234 tens.',
      topic: 'Place value'
    },
    {
      id: 5,
      question: 'Expand 45,206.',
      options: [
        '40,000 + 5,000 + 200 + 6',
        '45,000 + 200 + 6',
        '40,000 + 500 + 200 + 6',
        '40,000 + 5,200 + 6'
      ],
      correctAnswer: '40,000 + 5,000 + 200 + 6',
      explanation: 'Expand by place values.',
      topic: 'Expanded form'
    }
  ],

  decimals: [
    {
      id: 1,
      question: 'What is 3.6 ÷ 0.6?',
      options: ['4', '5', '6', '7'],
      correctAnswer: '6',
      explanation: '3.6 ÷ 0.6 = 6.',
      topic: 'Decimals'
    },
    {
      id: 2,
      question: 'Convert 0.75 to a fraction.',
      options: ['1/2', '3/4', '2/3', '1/4'],
      correctAnswer: '3/4',
      explanation: '0.75 = 75/100 = 3/4.',
      topic: 'Decimals to fractions'
    },
    {
      id: 3,
      question: 'What is 4.25 × 10?',
      options: ['42.5', '425', '40.25', '4.250'],
      correctAnswer: '42.5',
      explanation: 'Multiplying by 10 shifts decimal one place.',
      topic: 'Multiplying decimals'
    },
    {
      id: 4,
      question: 'Which is greater: 0.6 or 0.56?',
      options: ['0.6', '0.56', 'Equal', 'Cannot compare'],
      correctAnswer: '0.6',
      explanation: '0.6 = 0.60, which is greater than 0.56.',
      topic: 'Comparing decimals'
    },
    {
      id: 5,
      question: 'Add: 2.45 + 3.6',
      options: ['6.05', '6.15', '6.25', '6.05'],
      correctAnswer: '6.05',
      explanation: '2.45 + 3.60 = 6.05.',
      topic: 'Adding decimals'
    }
  ],

  fractions: [
    {
      id: 1,
      question: 'Simplify 45/60.',
      options: ['2/3', '3/4', '4/5', '5/6'],
      correctAnswer: '3/4',
      explanation: 'Divide numerator and denominator by 15.',
      topic: 'Simplifying fractions'
    },
    {
      id: 2,
      question: 'What is 2/3 of 90?',
      options: ['30', '45', '50', '60'],
      correctAnswer: '60',
      explanation: '90 ÷ 3 × 2 = 60.',
      topic: 'Fractions of quantities'
    },
    {
      id: 3,
      question: 'Which is larger: 5/8 or 0.6?',
      options: ['5/8', '0.6', 'Equal', 'Cannot compare'],
      correctAnswer: '5/8',
      explanation: '5/8 = 0.625, which is larger than 0.6.',
      topic: 'Comparing fractions and decimals'
    },
    {
      id: 4,
      question: 'Add: 3/10 + 2/5',
      options: ['5/10', '7/10', '1/2', '9/10'],
      correctAnswer: '7/10',
      explanation: '2/5 = 4/10, so 3/10 + 4/10 = 7/10.',
      topic: 'Adding fractions'
    },
    {
      id: 5,
      question: 'Convert 7/20 to decimal.',
      options: ['0.25', '0.30', '0.35', '0.40'],
      correctAnswer: '0.35',
      explanation: '7 ÷ 20 = 0.35.',
      topic: 'Fractions to decimals'
    }
  ],

  geometry: [
    {
      id: 1,
      question: 'Find the area of a rectangle 12 cm × 8 cm.',
      options: ['80 cm²', '90 cm²', '96 cm²', '100 cm²'],
      correctAnswer: '96 cm²',
      explanation: 'Area = l × w = 12 × 8 = 96 cm².',
      topic: 'Area'
    },
    {
      id: 2,
      question: 'What is the perimeter of a rectangle 15 cm by 10 cm?',
      options: ['25 cm', '40 cm', '50 cm', '60 cm'],
      correctAnswer: '50 cm',
      explanation: 'Perimeter = 2 × (15 + 10).',
      topic: 'Perimeter'
    },
    {
      id: 3,
      question: 'How many degrees in a straight angle?',
      options: ['90°', '120°', '150°', '180°'],
      correctAnswer: '180°',
      explanation: 'A straight line angle = 180°.',
      topic: 'Angles'
    },
    {
      id: 4,
      question: 'How many sides does a decagon have?',
      options: ['8', '9', '10', '12'],
      correctAnswer: '10',
      explanation: 'Deca = 10.',
      topic: '2D shapes'
    },
    {
      id: 5,
      question: 'What is the volume of a cube with side 4 cm?',
      options: ['16 cm³', '32 cm³', '48 cm³', '64 cm³'],
      correctAnswer: '64 cm³',
      explanation: 'Volume = side³ = 4³ = 64.',
      topic: 'Volume'
    }
  ],

  conversions: [
    {
      id: 1,
      question: 'Convert 2.5 kg into grams.',
      options: ['250 g', '2500 g', '25 g', '25,000 g'],
      correctAnswer: '2500 g',
      explanation: '1 kg = 1000 g, so 2.5 × 1000 = 2500 g.',
      topic: 'Metric conversions'
    },
    {
      id: 2,
      question: 'How many milliliters are in 3.5 liters?',
      options: ['350', '3500', '35,000', '3.5'],
      correctAnswer: '3500',
      explanation: '1 L = 1000 ml, so 3.5 × 1000 = 3500 ml.',
      topic: 'Metric conversions'
    },
    {
      id: 3,
      question: 'Convert 2 hours 30 minutes into minutes.',
      options: ['120', '130', '140', '150'],
      correctAnswer: '150',
      explanation: '2 hours = 120, plus 30 = 150.',
      topic: 'Time conversions'
    },
    {
      id: 4,
      question: 'How many seconds are there in 5 minutes?',
      options: ['200', '250', '300', '350'],
      correctAnswer: '300',
      explanation: '5 × 60 = 300 seconds.',
      topic: 'Time conversions'
    },
    {
      id: 5,
      question: 'Convert 1.2 km into meters.',
      options: ['12', '120', '1200', '12,000'],
      correctAnswer: '1200',
      explanation: '1 km = 1000 m, so 1.2 km = 1200 m.',
      topic: 'Metric conversions'
    }
  ]
};
