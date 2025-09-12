import { Question } from '../types';

export const grade6Practice: Record<string, Question[]> = {
  algebra: [
    {
      id: 1,
      question: 'Solve: 3x + 5 = 20',
      options: ['3', '4', '5', '6'],
      correctAnswer: '5',
      explanation: '3x = 15, so x = 5.',
      topic: 'Linear equations'
    },
    {
      id: 2,
      question: 'If y = 7, what is 2y + 4?',
      options: ['16', '17', '18', '19'],
      correctAnswer: '18',
      explanation: '2(7) + 4 = 18.',
      topic: 'Substitution'
    },
    {
      id: 3,
      question: 'Solve for x: 5x = 45',
      options: ['7', '8', '9', '10'],
      correctAnswer: '9',
      explanation: 'Divide both sides by 5.',
      topic: 'Simple algebra'
    },
    {
      id: 4,
      question: 'If a = 3 and b = 4, what is ab + a?',
      options: ['12', '13', '15', '16'],
      correctAnswer: '15',
      explanation: 'ab + a = (3×4) + 3 = 15.',
      topic: 'Algebra expressions'
    },
    {
      id: 5,
      question: 'Simplify: 2x + 3x',
      options: ['2x', '3x', '4x', '5x'],
      correctAnswer: '5x',
      explanation: 'Combine like terms.',
      topic: 'Simplifying algebra'
    }
  ],

  percentages: [
    {
      id: 1,
      question: 'What is 35% of 240?',
      options: ['72', '80', '84', '90'],
      correctAnswer: '84',
      explanation: '0.35 × 240 = 84.',
      topic: 'Percentages'
    },
    {
      id: 2,
      question: 'Increase 200 by 15%.',
      options: ['210', '220', '230', '240'],
      correctAnswer: '230',
      explanation: '200 × 1.15 = 230.',
      topic: 'Percentage increase'
    },
    {
      id: 3,
      question: 'Find 20% of 450.',
      options: ['80', '85', '90', '100'],
      correctAnswer: '90',
      explanation: '0.2 × 450 = 90.',
      topic: 'Percentages'
    },
    {
      id: 4,
      question: 'A shirt costs $60. It is discounted by 25%. What is the new price?',
      options: ['$40', '$42', '$45', '$50'],
      correctAnswer: '$45',
      explanation: '25% of 60 = 15, so 60 − 15 = 45.',
      topic: 'Percentage decrease'
    },
    {
      id: 5,
      question: 'What percentage of 50 is 20?',
      options: ['30%', '35%', '40%', '45%'],
      correctAnswer: '40%',
      explanation: '20 ÷ 50 = 0.4 = 40%.',
      topic: 'Finding percentage'
    }
  ],

  circle: [
    {
      id: 1,
      question: 'A circle has radius 7 cm. Find its circumference (π = 22/7).',
      options: ['22 cm', '44 cm', '66 cm', '154 cm'],
      correctAnswer: '44 cm',
      explanation: 'C = 2πr = 44 cm.',
      topic: 'Circumference'
    },
    {
      id: 2,
      question: 'Find the area of a circle with radius 7 cm (π = 22/7).',
      options: ['144 cm²', '154 cm²', '160 cm²', '170 cm²'],
      correctAnswer: '154 cm²',
      explanation: 'A = πr² = (22/7) × 49 = 154 cm².',
      topic: 'Area of circle'
    },
    {
      id: 3,
      question: 'Diameter of a circle is 14 cm. Find its radius.',
      options: ['5 cm', '6 cm', '7 cm', '8 cm'],
      correctAnswer: '7 cm',
      explanation: 'Radius = diameter ÷ 2.',
      topic: 'Radius and diameter'
    },
    {
      id: 4,
      question: 'If the radius doubles, the area becomes…',
      options: ['2 times', '3 times', '4 times', '8 times'],
      correctAnswer: '4 times',
      explanation: 'Area ∝ r², so doubling radius quadruples area.',
      topic: 'Circle properties'
    },
    {
      id: 5,
      question: 'Find the circumference of a circle with diameter 10 cm (π = 3.14).',
      options: ['20 cm', '25 cm', '30 cm', '31.4 cm'],
      correctAnswer: '31.4 cm',
      explanation: 'C = πd = 31.4 cm.',
      topic: 'Circumference'
    }
  ],

  decimals: [
    {
      id: 1,
      question: 'What is 0.25 × 0.4?',
      options: ['0.01', '0.05', '0.10', '0.20'],
      correctAnswer: '0.10',
      explanation: '0.25 × 0.4 = 0.10.',
      topic: 'Multiplying decimals'
    },
    {
      id: 2,
      question: 'Divide: 6.3 ÷ 0.9',
      options: ['6', '7', '8', '9'],
      correctAnswer: '7',
      explanation: '6.3 ÷ 0.9 = 7.',
      topic: 'Dividing decimals'
    },
    {
      id: 3,
      question: 'Add: 12.45 + 7.8',
      options: ['20.15', '20.25', '20.35', '20.45'],
      correctAnswer: '20.25',
      explanation: '12.45 + 7.80 = 20.25.',
      topic: 'Adding decimals'
    },
    {
      id: 4,
      question: 'Which is larger: 3.07 or 3.7?',
      options: ['3.07', '3.7', 'Equal', 'None'],
      correctAnswer: '3.7',
      explanation: 'Compare tenths place: 0.0 vs 0.7.',
      topic: 'Comparing decimals'
    },
    {
      id: 5,
      question: 'Convert 5/8 to decimal.',
      options: ['0.6', '0.625', '0.65', '0.75'],
      correctAnswer: '0.625',
      explanation: '5 ÷ 8 = 0.625.',
      topic: 'Fractions to decimals'
    }
  ],

  averages: [
    {
      id: 1,
      question: 'The average of 4 numbers is 12. What is their total?',
      options: ['36', '42', '48', '52'],
      correctAnswer: '48',
      explanation: 'Average × count = total.',
      topic: 'Average'
    },
    {
      id: 2,
      question: 'Find the mean of: 6, 8, 10, 12, 14.',
      options: ['8', '9', '10', '11'],
      correctAnswer: '10',
      explanation: '(6+8+10+12+14) ÷ 5 = 50 ÷ 5 = 10.',
      topic: 'Mean'
    },
    {
      id: 3,
      question: 'The average of 3 numbers is 15. If two are 10 and 20, what is the third?',
      options: ['10', '15', '20', '25'],
      correctAnswer: '15',
      explanation: 'Total = 45. 10+20=30, so missing = 15.',
      topic: 'Finding missing value'
    },
    {
      id: 4,
      question: 'The marks are 12, 15, 18, 20. Find the average.',
      options: ['14', '15', '16.25', '17'],
      correctAnswer: '16.25',
      explanation: '(12+15+18+20) ÷ 4 = 65 ÷ 4 = 16.25.',
      topic: 'Average'
    },
    {
      id: 5,
      question: 'If the mean of 5 numbers is 8, what is their total?',
      options: ['30', '35', '40', '45'],
      correctAnswer: '40',
      explanation: '5 × 8 = 40.',
      topic: 'Average'
    }
  ]
};
