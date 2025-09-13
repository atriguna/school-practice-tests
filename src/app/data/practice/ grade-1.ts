import { Question } from '../types';

export const grade1Practice: Record<string, Question[]> = {
  counting: [
    {
      id: 1,
      question: 'What number comes after 48?',
      options: ['47', '49', '50', '51'],
      correctAnswer: '49',
      explanation: '49 comes right after 48.',
      topic: 'Counting numbers up to 100'
    },
    {
      id: 2,
      question: 'Which number comes before 72?',
      options: ['70', '71', '73', '74'],
      correctAnswer: '71',
      explanation: '71 is just before 72.',
      topic: 'Counting numbers up to 100'
    },
    {
      id: 3,
      question: 'Count forward: 33, 34, __?',
      options: ['35', '36', '32', '30'],
      correctAnswer: '35',
      explanation: 'After 34 comes 35.',
      topic: 'Counting numbers up to 100'
    },
    {
      id: 4,
      question: 'Count backward: 20, 19, __?',
      options: ['18', '21', '17', '22'],
      correctAnswer: '18',
      explanation: 'When counting down, 18 comes after 19.',
      topic: 'Counting backwards'
    },
    {
      id: 5,
      question: 'How many objects are there? 🍎🍎🍎🍎',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4',
      explanation: 'There are 4 apples.',
      topic: 'Counting objects'
    }
  ],
  comparing: [
    {
      id: 1,
      question: 'Which is greater: 23 or 32?',
      options: ['23', '32', 'Equal', 'None'],
      correctAnswer: '32',
      explanation: '32 is greater than 23.',
      topic: 'Comparing numbers'
    },
    {
      id: 2,
      question: 'Which is smaller: 15 or 18?',
      options: ['15', '18', 'Equal', 'None'],
      correctAnswer: '15',
      explanation: '15 is smaller than 18.',
      topic: 'Comparing numbers'
    },
    {
      id: 3,
      question: 'Order these numbers: 7, 2, 5',
      options: ['7, 5, 2', '2, 5, 7', '5, 7, 2', '2, 7, 5'],
      correctAnswer: '2, 5, 7',
      explanation: 'The order from smallest to largest is 2, 5, 7.',
      topic: 'Ordering numbers'
    },
    {
      id: 4,
      question: 'Which is equal: 9 + 1 or 12?',
      options: ['They are equal', '9 + 1 is bigger', '12 is bigger', 'None'],
      correctAnswer: '12 is bigger',
      explanation: '9 + 1 = 10, which is smaller than 12.',
      topic: 'Comparing sums'
    },
    {
      id: 5,
      question: 'Which is the largest: 45, 54, 40?',
      options: ['45', '54', '40', 'All same'],
      correctAnswer: '54',
      explanation: '54 is the largest.',
      topic: 'Comparing numbers'
    }
  ],
  'addition-subtraction': [
    {
      id: 1,
      question: 'What is 8 + 7?',
      options: ['14', '15', '16', '17'],
      correctAnswer: '15',
      explanation: '8 + 7 = 15.',
      topic: 'Addition within 20'
    },
    {
      id: 2,
      question: 'What is 19 − 6?',
      options: ['11', '12', '13', '14'],
      correctAnswer: '13',
      explanation: '19 minus 6 equals 13.',
      topic: 'Subtraction within 20'
    },
    {
      id: 3,
      question: 'Solve: 5 + 5 + 5',
      options: ['10', '15', '20', '25'],
      correctAnswer: '15',
      explanation: 'This is repeated addition: 5 three times = 15.',
      topic: 'Introduction to multiplication'
    },
    {
      id: 4,
      question: 'If you have 10 apples and eat 3, how many left?',
      options: ['6', '7', '8', '9'],
      correctAnswer: '7',
      explanation: '10 − 3 = 7.',
      topic: 'Subtraction in context'
    },
    {
      id: 5,
      question: 'Fill in the blank: 12 + __ = 20',
      options: ['6', '7', '8', '9'],
      correctAnswer: '8',
      explanation: '12 + 8 = 20.',
      topic: 'Missing number addition'
    }
  ],
  'fractions-intro': [
    {
      id: 1,
      question: 'Which is half of 6?',
      options: ['2', '3', '4', '5'],
      correctAnswer: '3',
      explanation: 'Half of 6 = 3.',
      topic: 'Fractions (halves)'
    },
    {
      id: 2,
      question: 'A pizza is cut into 4 equal parts. What is one part called?',
      options: ['Half', 'Third', 'Quarter', 'Whole'],
      correctAnswer: 'Quarter',
      explanation: 'One of 4 equal parts is a quarter.',
      topic: 'Fractions (quarters)'
    },
    {
      id: 3,
      question: 'Shade half of a square. How many parts are shaded?',
      options: ['1', '2', '3', '4'],
      correctAnswer: '2',
      explanation: 'Half of 4 equal parts = 2 shaded.',
      topic: 'Fractions in shapes'
    },
    {
      id: 4,
      question: 'Which is bigger: 1/2 or 1/4?',
      options: ['1/2', '1/4', 'Equal', 'Cannot compare'],
      correctAnswer: '1/2',
      explanation: '1/2 is greater than 1/4.',
      topic: 'Comparing fractions'
    },
    {
      id: 5,
      question: 'If a chocolate bar is shared between 2 friends, what fraction does each get?',
      options: ['1/2', '1/3', '1/4', '1 whole'],
      correctAnswer: '1/2',
      explanation: 'Sharing into 2 equal parts gives halves.',
      topic: 'Fractions in real life'
    }
  ],
  'place-value': [
    {
      id: 1,
      question: 'How many tens are in 35?',
      options: ['2', '3', '5', '30'],
      correctAnswer: '3',
      explanation: '35 = 3 tens and 5 ones.',
      topic: 'Place value'
    },
    {
      id: 2,
      question: 'Which number has 4 tens and 7 ones?',
      options: ['47', '74', '407', '704'],
      correctAnswer: '47',
      explanation: '4 tens and 7 ones = 47.',
      topic: 'Place value'
    },
    {
      id: 3,
      question: 'What is the value of 8 in 86?',
      options: ['8', '80', '800', '18'],
      correctAnswer: '80',
      explanation: '8 is in the tens place, so it is 80.',
      topic: 'Value of digits'
    },
    {
      id: 4,
      question: 'Which number is larger: 52 or 25?',
      options: ['52', '25', 'Equal', 'Cannot compare'],
      correctAnswer: '52',
      explanation: '5 tens = 50, so 52 > 25.',
      topic: 'Comparing place values'
    },
    {
      id: 5,
      question: 'Break 64 into tens and ones.',
      options: ['6 tens and 4 ones', '60 tens and 4 ones', '64 tens', '6 ones and 4 tens'],
      correctAnswer: '6 tens and 4 ones',
      explanation: '64 = 6 tens and 4 ones.',
      topic: 'Expanded form'
    }
  ]
};
