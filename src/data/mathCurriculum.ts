export type Topic = {
  id: string;
  name: string;
  subtopics: string[];
};

export type Grade = {
  id: string;
  name: string;
  description: string;
  topics: Topic[];
};

export const mathCurriculum: Record<string, Grade> = {
  'grade-1': {
    id: 'grade-1',
    name: 'Grade 1 (Year 1)',
    description: 'Introduction to basic mathematical concepts',
    topics: [
      {
        id: 'number',
        name: 'Number',
        subtopics: [
          'Count, read, and write numbers up to 100',
          'Compare and order numbers up to 100',
          'Addition and subtraction within 20',
          'Introduction to multiplication (repeated addition)',
          'Understanding halves and quarters (fractions)'
        ]
      },
      {
        id: 'geometry',
        name: 'Geometry',
        subtopics: [
          'Recognize and name 2D and 3D shapes',
          'Describe position and direction (left, right, up, down)'
        ]
      },
      {
        id: 'measurement',
        name: 'Measurement',
        subtopics: [
          'Compare lengths, mass, and capacity using non-standard units',
          'Tell the time to the hour and half-hour',
          'Recognize coins and simple money addition'
        ]
      },
      {
        id: 'data-handling',
        name: 'Data Handling',
        subtopics: [
          'Sort and classify objects',
          'Use pictograms and simple tables'
        ]
      },
      {
        id: 'problem-solving',
        name: 'Problem Solving',
        subtopics: [
          'Apply addition/subtraction in simple word problems'
        ]
      }
    ]
  },
  'grade-2': {
    id: 'grade-2',
    name: 'Grade 2 (Year 2)',
    description: 'Building on foundational math skills',
    topics: [
      {
        id: 'number',
        name: 'Number',
        subtopics: [
          'Count, read, and write numbers up to 1000',
          'Addition and subtraction within 100',
          'Multiplication and division facts (2, 5, 10)',
          'Fractions: halves, quarters, and thirds'
        ]
      },
      {
        id: 'geometry',
        name: 'Geometry',
        subtopics: [
          'Recognize and describe properties of 2D and 3D shapes',
          'Identify lines of symmetry'
        ]
      },
      {
        id: 'measurement',
        name: 'Measurement',
        subtopics: [
          'Use standard units: cm, m, g, kg, ml, l',
          'Tell time to the quarter hour',
          'Money: simple change calculations'
        ]
      },
      {
        id: 'data-handling',
        name: 'Data Handling',
        subtopics: [
          'Collect and present data using tally charts and bar charts'
        ]
      },
      {
        id: 'problem-solving',
        name: 'Problem Solving',
        subtopics: [
          'Multi-step word problems with addition and subtraction'
        ]
      }
    ]
  },
  // Add more grades following the same pattern
  // I'll add a few more grades as examples
  'grade-3': {
    id: 'grade-3',
    name: 'Grade 3 (Year 3)',
    description: 'Expanding mathematical understanding',
    topics: [
      {
        id: 'number',
        name: 'Number',
        subtopics: [
          'Numbers up to 10,000',
          'Addition and subtraction with carrying/borrowing',
          'Multiplication and division facts (up to 10 × 10)',
          'Fractions: halves, thirds, quarters, tenths'
        ]
      },
      {
        id: 'geometry',
        name: 'Geometry',
        subtopics: [
          'Identify angles (right, acute, obtuse)',
          'Perimeter of simple shapes'
        ]
      },
      {
        id: 'measurement',
        name: 'Measurement',
        subtopics: [
          'Time: to the nearest 5 minutes',
          'Length, mass, capacity in metric units'
        ]
      },
      {
        id: 'data-handling',
        name: 'Data Handling',
        subtopics: [
          'Interpret bar charts and tables'
        ]
      },
      {
        id: 'problem-solving',
        name: 'Problem Solving',
        subtopics: [
          'Two-step problems in all four operations'
        ]
      }
    ]
  },
  'grade-4': {
    id: 'grade-4',
    name: 'Grade 4 (Year 4)',
    description: 'Developing more complex math skills',
    topics: [
      {
        id: 'number',
        name: 'Number',
        subtopics: [
          'Numbers up to 100,000',
          'Formal written methods for addition/subtraction',
          'Multiplication/division with larger numbers',
          'Fractions and decimals (tenths, hundredths)'
        ]
      },
      {
        id: 'geometry',
        name: 'Geometry',
        subtopics: [
          'Angles: measure and compare',
          'Symmetry and reflection',
          'Area and perimeter'
        ]
      },
      {
        id: 'measurement',
        name: 'Measurement',
        subtopics: [
          'Convert units (cm to m, g to kg, ml to l)',
          'Time: digital and analogue to the minute'
        ]
      },
      {
        id: 'data-handling',
        name: 'Data Handling',
        subtopics: [
          'Line graphs and pictograms'
        ]
      },
      {
        id: 'problem-solving',
        name: 'Problem Solving',
        subtopics: [
          'Apply number facts to real-life problems'
        ]
      }
    ]
  },
  'grade-5': {
    id: 'grade-5',
    name: 'Grade 5 (Year 5)',
    description: 'Advanced mathematical concepts and applications',
    topics: [
      {
        id: 'number',
        name: 'Number',
        subtopics: [
          'Numbers up to 1,000,000',
          'Negative numbers in context',
          'Multiplying and dividing by 10, 100, 1000',
          'Fractions: equivalent fractions, addition, and subtraction',
          'Decimals and percentages'
        ]
      },
      {
        id: 'geometry',
        name: 'Geometry',
        subtopics: [
          'Properties of triangles and quadrilaterals',
          'Coordinates (first quadrant)',
          'Angle sums in polygons'
        ]
      },
      {
        id: 'measurement',
        name: 'Measurement',
        subtopics: [
          'Area and perimeter of rectangles and compound shapes',
          'Volume and capacity'
        ]
      },
      {
        id: 'data-handling',
        name: 'Data Handling',
        subtopics: [
          'Interpret line graphs and simple pie charts'
        ]
      },
      {
        id: 'problem-solving',
        name: 'Problem Solving',
        subtopics: [
          'Multi-step problems with mixed operations'
        ]
      }
    ]
  },
  'grade-6': {
    id: 'grade-6',
    name: 'Grade 6 (Year 6)',
    description: 'Mastery of primary mathematics concepts',
    topics: [
      {
        id: 'number',
        name: 'Number',
        subtopics: [
          'Numbers beyond 1,000,000',
          'Prime numbers, factors, multiples',
          'Ratio and proportion',
          'Fractions: multiply/divide fractions',
          'Decimals: 4 operations',
          'Percentages and their equivalence with fractions/decimals'
        ]
      },
      {
        id: 'geometry',
        name: 'Geometry',
        subtopics: [
          'Coordinates in four quadrants',
          'Transformations: translation, reflection, rotation',
          'Area of triangles and parallelograms'
        ]
      },
      {
        id: 'measurement',
        name: 'Measurement',
        subtopics: [
          'Converting between units (metric)',
          'Volume of cubes and cuboids'
        ]
      },
      {
        id: 'data-handling',
        name: 'Data Handling',
        subtopics: [
          'Mean, median, mode, and range',
          'Complex bar and line graphs'
        ]
      },
      {
        id: 'problem-solving',
        name: 'Problem Solving',
        subtopics: [
          'Real-life problems involving percentages, ratio, and algebraic reasoning'
        ]
      }
    ]
  }
};

export const getGrade = (gradeId: string) => {
  return mathCurriculum[gradeId] || null;
};

export const getAllGrades = () => {
  return Object.values(mathCurriculum);
};

// helper untuk ambil random subtopic dari sebuah grade
export const getRandomSubtopic = (gradeId: string): string | null => {
  const grade = mathCurriculum[gradeId];
  if (!grade) return null;

  // pilih topic random
  const topic = grade.topics[Math.floor(Math.random() * grade.topics.length)];
  if (!topic || topic.subtopics.length === 0) return null;

  // pilih subtopic random
  const subtopic = topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  return subtopic;
};

