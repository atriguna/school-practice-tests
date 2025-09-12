export type SubTopic = {
  id: string;
  title: string;
  description: string;
  hasPractice: boolean;
  videos?: { title: string; url: string }[];
};

export type Topic = {
  id: string;
  name: string;
  description?: string;
  subtopics: (string | SubTopic)[];
};

export type Grade = {
  id: string;
  name: string;
  description: string;
  topics: Topic[];
};

export const mathCurriculum: Record<string, Grade> = {
  // =========================
  // GRADE 1 (Cambridge Stage 1)
  // =========================
  'grade-1': {
    id: 'grade-1',
    name: 'Grade 1 (Year 1)',
    description: 'Introduction to basic mathematical concepts',
    topics: [
      {
        id: 'number',
        name: 'Number',
        description: 'Counting, place value, early operations, and simple fractions',
        subtopics: [
          {
            id: 'counting-0-100',
            title: 'Counting to 100 (forwards & backwards)',
            description:
              'Count objects and numbers up to 100, say what comes before/after, and fill in missing numbers in a sequence.',
            hasPractice: true,
            videos: [
              { title: 'Math for Kids', url: 'https://www.youtube.com/embed/WoTAwBmz_l4?si=XEym0Ezeei3XpgEs' }
            ]
          },
          {
            id: 'place-value-tens-ones',
            title: 'Place value: tens and ones',
            description:
              'Understand tens as groups of ten and ones as single units. Build numbers like 45 = 4 tens and 5 ones.',
            hasPractice: true,
            videos: [
              { title: 'Math for Kids', url: 'https://www.youtube.com/embed/NkPRiYAxiYg?si=VIJeOtUL_oRvwtdA&amp;controls=0' }
            ]
            
          },
          {
            id: 'compare-order-100',
            title: 'Compare and order numbers to 100',
            description:
              'Use <, >, = and put sets of numbers in order from smallest to largest and vice versa.',
            hasPractice: true,
            videos: [
              { title: 'Math for Kids', url: 'https://www.youtube.com/embed/Qn87cKHa7v4?si=BgNpilXLf1uiX4x6&amp;controls=0' }
            ]
          },
          {
            id: 'addition-20',
            title: 'Addition within 20',
            description:
              'Use strategies like counting on, doubles, and making ten to add small numbers quickly.',
            hasPractice: true,
            videos: [
              { title: 'Math for Kids', url: 'https://www.youtube.com/embed/uQiUTFO78Jk?si=iNlCHP6TjRPNgYdt&amp;controls=0' }
            ]
          },
          {
            id: 'subtraction-20',
            title: 'Subtraction within 20',
            description:
              'Count back on a number line and link subtraction to addition (e.g., 13 − 5 = 8 because 8 + 5 = 13).',
            hasPractice: true,
            videos: [
              { title: 'Math for Kids', url: 'https://www.youtube.com/embed/q7I8HXWj37s?si=F9dYBDWqBEmFtbWS&amp;controls=0' }
            ]
          },
          {
            id: 'intro-multiplication',
            title: 'Introduction to multiplication (equal groups)',
            description:
              'See multiplication as equal groups and arrays (e.g., 3 groups of 4 make 12).',
            hasPractice: true,
            videos: [
              { title: 'Math for Kids', url: 'https://www.youtube.com/embed/DgeZnmEpX40?si=ozG5X_iDnrIU9OWS&amp;controls=0' }
            ]
          },
          {
            id: 'fractions-halves-quarters',
            title: 'Fractions: halves and quarters',
            description:
              'Recognise and find 1/2 and 1/4 of shapes and small sets; talk about fair sharing.',
            hasPractice: true,
            videos: [
              { title: 'Math for Kids', url: 'https://www.youtube.com/embed/NFJLxia1kGE?si=SYZB7p0QNYKinaJA&amp;controls=0' }
            ]
          },
        ],
      },
      {
        id: 'measurement',
        name: 'Measurement',
        description: 'Compare and use simple measures',
        subtopics: [
          {
            id: 'length-mass-capacity',
            title: 'Length, mass, and capacity (compare & order)',
            description:
              'Use informal units first, then cm/m, g/kg, ml/l to compare longer/shorter, heavier/lighter, more/less.',
            hasPractice: true,
            videos: [
              { title: 'Math for Kids', url: 'https://www.youtube.com/embed/jNFevCpkRoY?si=llq9i9HvOLddSjeb&amp;controls=0' }
            ]
          },
          {
            id: 'time-hour-half',
            title: 'Time: o’clock and half past',
            description:
              'Tell and show times to the hour and half hour; talk about morning, afternoon, evening.',
            hasPractice: true,
            videos: [
              { title: 'Math for Kids', url: 'https://www.youtube.com/embed/rrayvaGIuMY?si=elC2iLWox3RkIBrP&amp;controls=0' }
            ]
          },
        ],
      },
      {
        id: 'geometry',
        name: 'Geometry',
        description: '2D and 3D shapes; position and direction',
        subtopics: [
          {
            id: '2d-shapes',
            title: '2D shapes',
            description:
              'Name and spot circles, triangles, squares, and rectangles in real life.',
            hasPractice: true,
            videos: [
              { title: 'Math for Kids', url: 'https://www.youtube.com/embed/NmaKlT2Zrfk?si=dar0M2hC5s7G3dcZ&amp;controls=0' }
            ]
          },
          {
            id: '3d-shapes',
            title: '3D shapes',
            description:
              'Recognise cubes, cuboids, spheres, cones, and cylinders; describe faces and curved surfaces.',
            hasPractice: true,
            videos: [
              { title: 'Math for Kids', url: 'https://www.youtube.com/embed/TFRlPBAyPLo?si=aJCn_Jui5WHHUljC&amp;controls=0' }
            ]
          },
          {
            id: 'position-direction',
            title: 'Position and direction',
            description:
              'Use words like on, under, next to, above, below, left, and right in simple activities.',
            hasPractice: true,
            videos: [
              { title: 'Math for Kids', url: 'https://www.youtube.com/embed/qfUxzdorVzQ?si=zOscJSaOtvI1v6L4&amp;controls=0' }
            ]
          },
        ],
      },
      {
        id: 'data',
        name: 'Data & Statistics',
        description: 'Collect and display simple data',
        subtopics: [
          {
            id: 'tally-pictogram',
            title: 'Tally and pictograms',
            description:
              'Collect class data (e.g., favourite fruit) and show it using tallies and pictograms; say which is most/least.',
            hasPractice: true,
            videos: [
              { title: 'Math for Kids', url: 'https://www.youtube.com/embed/vVdY36jjmXI?si=t1P6m9Q3y7Jn28Wf&amp;controls=0' }
            ]
          },
        ],
      },
    ],
  },

  // =========================
  // GRADE 2 (Cambridge Stage 2)
  // =========================
  'grade-2': {
    id: 'grade-2',
    name: 'Grade 2 (Year 2)',
    description: 'Place value to 1000, developing strategies, early tables',
    topics: [
      {
        id: 'number',
        name: 'Number',
        description: 'Place value to 1000; addition/subtraction; 2,5,10 facts; simple fractions',
        subtopics: [
          {
            id: 'place-value-1000',
            title: 'Place value to 1000',
            description:
              'Read, write, and order numbers to 1000; understand hundreds, tens, ones; round to the nearest 10.',
            hasPractice: true,
          },
          {
            id: 'add-sub-2-3-digits',
            title: 'Addition & subtraction (2–3 digits)',
            description:
              'Use mental partitioning and column methods (with/without regrouping); check answers with inverse.',
            hasPractice: true,
          },
          {
            id: 'facts-2-5-10',
            title: 'Multiplication & division facts: 2, 5, 10',
            description:
              'Skip count, make arrays, and use fact families (e.g., 5×6=30 → 30÷5=6).',
            hasPractice: true,
          },
          {
            id: 'fractions-simple',
            title: 'Fractions: 1/2, 1/3, 1/4, 3/4',
            description:
              'Find fractions of shapes/sets; place simple fractions on a number line between 0 and 1.',
            hasPractice: true,
          },
        ],
      },
      {
        id: 'measurement',
        name: 'Measurement',
        description: 'Standard units, time to 5 minutes, and money',
        subtopics: [
          {
            id: 'length-mass-capacity-std',
            title: 'Length, mass, capacity (standard units)',
            description:
              'Use cm/m, g/kg, ml/l; read scales in steps of 2, 5, 10; compare and order measures.',
            hasPractice: true,
          },
          {
            id: 'time-five-min',
            title: 'Time to 5 minutes',
            description:
              'Tell time to five minutes; read and make simple timetables; find durations.',
            hasPractice: true,
          },
          {
            id: 'money-calc-change',
            title: 'Money: totals and change',
            description:
              'Add coins and notes to find totals; calculate simple change at a class “shop”.',
            hasPractice: true,
          },
        ],
      },
      {
        id: 'geometry',
        name: 'Geometry',
        description: 'Shape properties, turns, symmetry, and simple coordinates',
        subtopics: [
          {
            id: 'shape-properties',
            title: '2D/3D shape properties',
            description:
              'Describe edges, vertices, and faces; match common 3D shapes to simple nets.',
            hasPractice: true,
          },
          {
            id: 'turns-symmetry',
            title: 'Turns and symmetry',
            description:
              'Quarter/half turns; use a mirror to check lines of symmetry in simple shapes.',
            hasPractice: true,
          },
          {
            id: 'coordinates-q1',
            title: 'Coordinates (quadrant I)',
            description:
              'Plot points using (x, y) with positive numbers only; follow simple grid routes.',
            hasPractice: true,
          },
        ],
      },
      {
        id: 'data',
        name: 'Data & Statistics',
        description: 'Pictograms, tables, and bar charts',
        subtopics: [
          {
            id: 'pictogram-bar',
            title: 'Pictograms and bar charts',
            description:
              'Create and read pictograms and bar charts with simple scales; answer comparison questions.',
            hasPractice: true,
          },
        ],
      },
    ],
  },

  // =========================
  // GRADE 3 (Cambridge Stage 3)
  // =========================
  'grade-3': {
    id: 'grade-3',
    name: 'Grade 3 (Year 3)',
    description: 'Place value to 10,000, fluent addition/subtraction, 3–4–8 facts',
    topics: [
      {
        id: 'number',
        name: 'Number',
        description: 'Larger place value; efficient add/sub; 3,4,8 facts; unit fractions',
        subtopics: [
          {
            id: 'place-value-10000',
            title: 'Place value to 10,000 & rounding',
            description:
              'Understand thousands; estimate and round to the nearest 10/100; place numbers on number lines.',
            hasPractice: true,
          },
          {
            id: 'fluent-add-sub',
            title: 'Fluent addition & subtraction (3–4 digits)',
            description:
              'Choose efficient mental vs column strategies; use exchanging; estimate to check reasonableness.',
            hasPractice: true,
          },
          {
            id: 'facts-3-4-8',
            title: 'Multiplication & division facts: 3, 4, 8',
            description:
              'Recall facts for 3, 4, 8; use arrays and distributive thinking; scale facts by tens.',
            hasPractice: true,
          },
          {
            id: 'fractions-unit',
            title: 'Fractions as numbers (unit fractions)',
            description:
              'Place fractions on a number line; find simple equivalences (e.g., 1/2 = 2/4); fraction of a quantity.',
            hasPractice: true,
          },
        ],
      },
      {
        id: 'measurement',
        name: 'Measurement',
        description: 'Perimeter, time (including 24h), and money',
        subtopics: [
          {
            id: 'perimeter-2d',
            title: 'Perimeter of 2D shapes',
            description:
              'Measure and add side lengths; solve missing side problems on grids and simple shapes.',
            hasPractice: true,
          },
          {
            id: 'time-24h',
            title: 'Time: 12/24-hour, durations',
            description:
              'Read 12/24-hour clocks; find start/end times and durations; interpret simple timetables.',
            hasPractice: true,
          },
          {
            id: 'money-problems',
            title: 'Money problems',
            description:
              'Work with totals and change in multi-coin situations; compare costs in simple contexts.',
            hasPractice: true,
          },
        ],
      },
      {
        id: 'geometry',
        name: 'Geometry',
        description: 'Right angles, shape properties, symmetry, coordinates',
        subtopics: [
          {
            id: 'right-angles',
            title: 'Right angles and turns',
            description:
              'Identify right angles in shapes and daily objects; describe turns using quarter/half/three-quarter.',
            hasPractice: true,
          },
          {
            id: 'shape-classify',
            title: 'Classify 2D/3D shapes',
            description:
              'Use properties (sides, vertices, faces) to group shapes; spot symmetry lines.',
            hasPractice: true,
          },
          {
            id: 'coordinates-1q',
            title: 'Coordinates (quadrant I)',
            description:
              'Plot and read points; draw simple paths and polygons on a grid.',
            hasPractice: true,
          },
        ],
      },
      {
        id: 'data',
        name: 'Data & Statistics',
        description: 'Bar charts, tables, and time graphs',
        subtopics: [
          {
            id: 'bar-time-graphs',
            title: 'Bar charts & time graphs',
            description:
              'Choose appropriate scales; compare categories; describe increases/decreases over time.',
            hasPractice: true,
          },
        ],
      },
    ],
  },

  // =========================
  // GRADE 4 (Cambridge Stage 4)
  // =========================
  'grade-4': {
    id: 'grade-4',
    name: 'Grade 4 (Year 4)',
    description: 'Place value to 100,000, tables to 12×12, area & angles',
    topics: [
      {
        id: 'number',
        name: 'Number',
        subtopics: [
          {
            id: 'pv-100k-negatives',
            title: 'Place value to 100,000 & negatives',
            description:
              'Order and round large numbers; use negative numbers in real contexts (temperature, altitude).',
            hasPractice: true,
          },
          {
            id: 'written-add-sub-4d',
            title: 'Written addition & subtraction (4 digits)',
            description:
              'Secure column methods with exchanging and check using inverse operations.',
            hasPractice: true,
          },
          {
            id: 'facts-to-12x12',
            title: 'Multiplication & division to 12×12',
            description:
              'Fluent facts, short multiplication, division with remainders, and context interpretation.',
            hasPractice: true,
          },
          {
            id: 'fractions-equivalence',
            title: 'Fractions & equivalence',
            description:
              'Equivalent fractions, simplify, add/subtract with same denominators, fractions of quantities.',
            hasPractice: true,
          },
        ],
      },
      {
        id: 'measurement-geometry',
        name: 'Measurement & Geometry',
        subtopics: [
          {
            id: 'perimeter-area-rect',
            title: 'Perimeter & area of rectangles',
            description:
              'Convert units; find perimeters and areas; solve missing-side problems.',
            hasPractice: true,
          },
          {
            id: 'angles-types-symmetry',
            title: 'Angles and symmetry',
            description:
              'Identify acute/right/obtuse angles; reflect shapes; use lines of symmetry.',
            hasPractice: true,
          },
          {
            id: 'time-graphs',
            title: 'Time graphs',
            description:
              'Construct and interpret time graphs; describe changes and total amounts.',
            hasPractice: true,
          },
        ],
      },
    ],
  },

  // =========================
  // GRADE 5 (Cambridge Stage 5)
  // =========================
  'grade-5': {
    id: 'grade-5',
    name: 'Grade 5 (Year 5)',
    description: 'Place value to 1,000,000, long multiplication/division, FDP',
    topics: [
      {
        id: 'number',
        name: 'Number',
        subtopics: [
          {
            id: 'pv-1m-powers10',
            title: 'Place value to 1,000,000 & powers of 10',
            description:
              'Round large numbers; multiply/divide by 10/100/1000; reason about place value.',
            hasPractice: true,
          },
          {
            id: 'add-sub-large',
            title: 'Addition & subtraction (large numbers)',
            description:
              'Efficient column methods; estimate and check; multi-step word problems.',
            hasPractice: true,
          },
          {
            id: 'long-mul-short-div',
            title: 'Long multiplication & short division',
            description:
              'Multiply 2–3 digit by 2 digits; divide with remainders and interpret by context.',
            hasPractice: true,
          },
          {
            id: 'fdp',
            title: 'Fractions, decimals, percentages (FDP)',
            description:
              'Compare/order fractions; convert improper↔mixed; connect fractions to decimals and percentages; find FDP of quantities.',
            hasPractice: true,
          },
        ],
      },
      {
        id: 'measurement-geometry-stats',
        name: 'Measurement, Geometry & Statistics',
        subtopics: [
          {
            id: 'convert-area-volume',
            title: 'Conversions, area & volume',
            description:
              'Convert metric units; perimeter vs area reasoning; count cubic units for volume of cuboids.',
            hasPractice: true,
          },
          {
            id: 'angles-coordinates',
            title: 'Angles & coordinates',
            description:
              'Measure/draw with a protractor; angles on a straight line and at a point; translate/reflect on grids.',
            hasPractice: true,
          },
          {
            id: 'line-graphs-mean',
            title: 'Line graphs & mean (intro)',
            description:
              'Read and construct line graphs; calculate the mean as average; compare datasets.',
            hasPractice: true,
          },
        ],
      },
    ],
  },

  // =========================
  // GRADE 6 (Cambridge Stage 6)
  // =========================
  'grade-6': {
    id: 'grade-6',
    name: 'Grade 6 (Year 6)',
    description: 'Mastery of operations, advanced fractions, ratio, algebra',
    topics: [
      {
        id: 'number',
        name: 'Number & Algebra',
        subtopics: [
          {
            id: 'pv-10m-round-any',
            title: 'Place value to 10,000,000 & rounding to any place',
            description:
              'Order and round large integers/decimals; reason with negative numbers and powers of 10.',
            hasPractice: true,
          },
          {
            id: 'four-ops-mastery',
            title: 'Four operations mastery',
            description:
              'Secure long multiplication/division; use inverses and estimation; interpret remainders sensibly.',
            hasPractice: true,
          },
          {
            id: 'fractions-ops',
            title: 'Fractions: add, subtract, multiply, divide',
            description:
              'Common denominators; multiply fractions; divide fractions by whole numbers; convert between FDP.',
            hasPractice: true,
          },
          {
            id: 'ratio-proportion',
            title: 'Ratio & proportion',
            description:
              'Use ratios and scale factors; solve correspondence problems and simple rates.',
            hasPractice: true,
          },
          {
            id: 'algebra-intro',
            title: 'Algebra (intro)',
            description:
              'Use simple formulae, generate sequences, and solve one-step equations with unknowns.',
            hasPractice: true,
          },
        ],
      },
      {
        id: 'measurement-geometry-stats',
        name: 'Measurement, Geometry & Statistics',
        subtopics: [
          {
            id: 'area-triangle-parallelogram',
            title: 'Area (triangles & parallelograms) and volume',
            description:
              'Use formulas (½×base×height; l×w×h); find missing sides; reason about area vs perimeter.',
            hasPractice: true,
          },
          {
            id: 'angles-polygons-coordinates',
            title: 'Angles in polygons & 4-quadrant coordinates',
            description:
              'Sum of interior angles; plot and transform points in all four quadrants (translate/reflect/rotate).',
            hasPractice: true,
          },
          {
            id: 'pie-graphs-mean-prob',
            title: 'Pie charts, line graphs, mean & chance words',
            description:
              'Read/construct pie charts; compare distributions; calculate mean; use probability words (likely/unlikely).',
            hasPractice: true,
          },
        ],
      },
    ],
  },
};

export const getGrade = (gradeId: string) => mathCurriculum[gradeId] || null;
export const getAllGrades = () => Object.values(mathCurriculum);
