import { Question } from '../types';

export const grade2Practice: Record<string, Question[]> = {
  'addition-within-100': [
    {
      id: 1,
      question: 'What is 46 + 28?',
      options: ['64', '74', '84', '94'],
      correctAnswer: '74',
      explanation: '46 + 28 = 74.',
      topic: 'Addition within 100'
    },
    {
      id: 2,
      question: 'Add: 55 + 19',
      options: ['64', '72', '74', '84'],
      correctAnswer: '74',
      explanation: '55 + 19 = 74.',
      topic: 'Addition within 100'
    },
    {
      id: 3,
      question: 'Find the sum: 37 + 44',
      options: ['71', '72', '81', '82'],
      correctAnswer: '81',
      explanation: '37 + 44 = 81.',
      topic: 'Addition within 100'
    },
    {
      id: 4,
      question: 'What is 63 + 27?',
      options: ['80', '85', '90', '95'],
      correctAnswer: '90',
      explanation: '63 + 27 = 90.',
      topic: 'Addition within 100'
    },
    {
      id: 5,
      question: 'Add: 89 + 12',
      options: ['99', '100', '101', '102'],
      correctAnswer: '101',
      explanation: '89 + 12 = 101.',
      topic: 'Addition within 100'
    }
  ],

  'subtraction-within-100': [
    {
      id: 1,
      question: 'What is 72 − 48?',
      options: ['22', '24', '26', '28'],
      correctAnswer: '24',
      explanation: '72 − 48 = 24.',
      topic: 'Subtraction within 100'
    },
    {
      id: 2,
      question: 'Subtract: 95 − 37',
      options: ['57', '58', '59', '60'],
      correctAnswer: '58',
      explanation: '95 − 37 = 58.',
      topic: 'Subtraction within 100'
    },
    {
      id: 3,
      question: 'Find the difference: 63 − 29',
      options: ['32', '33', '34', '35'],
      correctAnswer: '34',
      explanation: '63 − 29 = 34.',
      topic: 'Subtraction within 100'
    },
    {
      id: 4,
      question: 'What is 81 − 45?',
      options: ['34', '35', '36', '37'],
      correctAnswer: '36',
      explanation: '81 − 45 = 36.',
      topic: 'Subtraction within 100'
    },
    {
      id: 5,
      question: 'Subtract: 50 − 28',
      options: ['21', '22', '23', '24'],
      correctAnswer: '22',
      explanation: '50 − 28 = 22.',
      topic: 'Subtraction within 100'
    }
  ],

  'multiplication-intro': [
    {
      id: 1,
      question: 'What is 6 × 5?',
      options: ['25', '30', '35', '40'],
      correctAnswer: '30',
      explanation: '6 × 5 = 30.',
      topic: 'Multiplication facts'
    },
    {
      id: 2,
      question: 'What is 9 × 3?',
      options: ['27', '28', '29', '30'],
      correctAnswer: '27',
      explanation: '9 × 3 = 27.',
      topic: 'Multiplication facts'
    },
    {
      id: 3,
      question: 'Which of these is equal to 4 × 7?',
      options: ['21', '24', '28', '32'],
      correctAnswer: '28',
      explanation: '4 × 7 = 28.',
      topic: 'Multiplication facts'
    },
    {
      id: 4,
      question: 'Solve: 8 groups of 2',
      options: ['14', '15', '16', '18'],
      correctAnswer: '16',
      explanation: '8 × 2 = 16.',
      topic: 'Multiplication in groups'
    },
    {
      id: 5,
      question: 'What is 10 × 10?',
      options: ['10', '50', '100', '1000'],
      correctAnswer: '100',
      explanation: '10 × 10 = 100.',
      topic: 'Multiplication facts'
    }
  ],

  'fractions': [
    {
      id: 1,
      question: 'Which fraction is equal to 2/4?',
      options: ['1/2', '2/3', '3/4', '4/5'],
      correctAnswer: '1/2',
      explanation: '2/4 simplifies to 1/2.',
      topic: 'Fractions equivalence'
    },
    {
      id: 2,
      question: 'What is 1/2 of 18?',
      options: ['8', '9', '10', '12'],
      correctAnswer: '9',
      explanation: '18 ÷ 2 = 9.',
      topic: 'Fractions of quantities'
    },
    {
      id: 3,
      question: 'Shade 1/4 of 12 squares. How many are shaded?',
      options: ['2', '3', '4', '5'],
      correctAnswer: '3',
      explanation: '1/4 of 12 = 3.',
      topic: 'Fractions of sets'
    },
    {
      id: 4,
      question: 'Which is bigger: 1/3 or 1/6?',
      options: ['1/3', '1/6', 'Equal', 'None'],
      correctAnswer: '1/3',
      explanation: '1/3 is greater than 1/6.',
      topic: 'Comparing fractions'
    },
    {
      id: 5,
      question: 'What is 1/5 of 20?',
      options: ['2', '3', '4', '5'],
      correctAnswer: '4',
      explanation: '20 ÷ 5 = 4.',
      topic: 'Fractions of quantities'
    }
  ],

  'measurement-time': [
    {
      id: 1,
      question: 'How many minutes are in 1 hour?',
      options: ['30', '45', '60', '90'],
      correctAnswer: '60',
      explanation: 'There are 60 minutes in an hour.',
      topic: 'Time units'
    },
    {
      id: 2,
      question: 'What is the time 30 minutes after 3:00?',
      options: ['3:15', '3:30', '3:45', '4:00'],
      correctAnswer: '3:30',
      explanation: '3:00 + 30 minutes = 3:30.',
      topic: 'Telling time'
    },
    {
      id: 3,
      question: 'How many centimeters in 1 meter?',
      options: ['10', '100', '1000', '10000'],
      correctAnswer: '100',
      explanation: '1 meter = 100 cm.',
      topic: 'Metric units'
    },
    {
      id: 4,
      question: 'What is the time 15 minutes past 7?',
      options: ['7:15', '7:30', '7:45', '8:00'],
      correctAnswer: '7:15',
      explanation: '15 minutes after 7:00 is 7:15.',
      topic: 'Telling time'
    },
    {
      id: 5,
      question: 'How many hours are in 2 days?',
      options: ['12', '24', '36', '48'],
      correctAnswer: '48',
      explanation: '1 day = 24 hours, so 2 days = 48 hours.',
      topic: 'Time conversion'
    }
  ]
};
