export type Topicenglish = {
    id: string;
    name: string;
    subtopics: string[];
  };
  
  export type Gradeenglish = {
    id: string;
    name: string;
    description: string;
    topics: Topicenglish[];
  };
  
  export const englishCurriculum: Record<string, Gradeenglish> = {
    'grade-1': {
      id: 'grade-1',
      name: 'Grade 1 (Year 1)',
      description: 'Introduction to basic English skills: phonics, reading, writing, speaking & listening',
      topics: [
        {
          id: 'phonics',
          name: 'Phonics & Spelling',
          subtopics: [
            'Recognise and say letter sounds (a–z)',
            'Blend and segment simple CVC words',
            'Read and spell common sight words'
          ]
        },
        {
          id: 'reading',
          name: 'Reading',
          subtopics: [
            'Read short sentences with picture support',
            'Retell simple stories using sequence words',
            'Identify main characters in stories'
          ]
        },
        {
          id: 'writing',
          name: 'Writing',
          subtopics: [
            'Form letters correctly',
            'Write simple words and labels',
            'Write short sentences with capital letters and full stops'
          ]
        },
        {
          id: 'speaking-listening',
          name: 'Speaking & Listening',
          subtopics: [
            'Introduce self and answer simple questions',
            'Listen and respond to short instructions'
          ]
        }
      ]
    },
    'grade-2': {
      id: 'grade-2',
      name: 'Grade 2 (Year 2)',
      description: 'Building vocabulary, fluency in reading, and short writing skills',
      topics: [
        {
          id: 'phonics-spelling',
          name: 'Phonics & Spelling',
          subtopics: [
            'Recognise long vowel sounds (a_e, ee, oa)',
            'Apply spelling rules for plurals (-s, -es)',
            'Use common word endings (-ing, -ed)'
          ]
        },
        {
          id: 'reading',
          name: 'Reading',
          subtopics: [
            'Read short paragraphs with understanding',
            'Answer simple comprehension questions',
            'Identify characters and settings in stories'
          ]
        },
        {
          id: 'writing',
          name: 'Writing',
          subtopics: [
            'Write short stories with beginning, middle, and end',
            'Use punctuation: capital letters, full stops, question marks',
            'Write short descriptive sentences'
          ]
        },
        {
          id: 'speaking-listening',
          name: 'Speaking & Listening',
          subtopics: [
            'Retell familiar stories in order',
            'Speak in full sentences during class activities'
          ]
        }
      ]
    },
    'grade-3': {
      id: 'grade-3',
      name: 'Grade 3 (Year 3)',
      description: 'Expanding grammar, reading comprehension, and descriptive writing',
      topics: [
        {
          id: 'spelling-grammar',
          name: 'Spelling & Grammar',
          subtopics: [
            'Use prefixes and suffixes (un-, re-, -ful, -less, -ly)',
            'Identify and use past, present, and simple future tenses',
            'Form compound sentences using conjunctions (and, but, because)'
          ]
        },
        {
          id: 'reading',
          name: 'Reading',
          subtopics: [
            'Make inferences about characters’ feelings',
            'Identify key facts in non-fiction texts',
            'Read with expression and fluency'
          ]
        },
        {
          id: 'writing',
          name: 'Writing',
          subtopics: [
            'Write short paragraphs with topic sentences',
            'Use adjectives and adverbs to add detail',
            'Plan and write simple descriptive texts'
          ]
        },
        {
          id: 'speaking-listening',
          name: 'Speaking & Listening',
          subtopics: [
            'Take part in small group discussions',
            'Agree and disagree politely with classmates'
          ]
        }
      ]
    },
    'grade-4': {
      id: 'grade-4',
      name: 'Grade 4 (Year 4)',
      description: 'Developing creative writing, wider reading, and confident speaking',
      topics: [
        {
          id: 'grammar-vocab',
          name: 'Grammar & Vocabulary',
          subtopics: [
            'Use complex sentences with conjunctions (although, if, because)',
            'Expand vocabulary with synonyms and antonyms',
            'Identify nouns, verbs, adjectives, and adverbs'
          ]
        },
        {
          id: 'reading',
          name: 'Reading',
          subtopics: [
            'Compare fiction and non-fiction texts',
            'Summarise key ideas from a passage',
            'Identify author’s purpose in writing'
          ]
        },
        {
          id: 'writing',
          name: 'Writing',
          subtopics: [
            'Write imaginative stories with clear setting and characters',
            'Write reports and informal letters',
            'Use punctuation correctly in longer texts'
          ]
        },
        {
          id: 'speaking-listening',
          name: 'Speaking & Listening',
          subtopics: [
            'Give short presentations to the class',
            'Listen and respond to classmates’ questions'
          ]
        }
      ]
    },
    'grade-5': {
      id: 'grade-5',
      name: 'Grade 5 (Year 5)',
      description: 'Strengthening comprehension, persuasive writing, and debate skills',
      topics: [
        {
          id: 'grammar-vocab',
          name: 'Grammar & Vocabulary',
          subtopics: [
            'Use relative clauses (who, which, that)',
            'Use modal verbs (must, should, might, could)',
            'Understand figurative language (similes, metaphors)'
          ]
        },
        {
          id: 'reading',
          name: 'Reading',
          subtopics: [
            'Compare ideas across different texts',
            'Identify author’s viewpoint and bias',
            'Read poetry and analyse rhythm and rhyme'
          ]
        },
        {
          id: 'writing',
          name: 'Writing',
          subtopics: [
            'Write persuasive texts with reasons and examples',
            'Plan and write multi-paragraph essays',
            'Experiment with poetry writing'
          ]
        },
        {
          id: 'speaking-listening',
          name: 'Speaking & Listening',
          subtopics: [
            'Take part in structured debates',
            'Express opinions clearly and respectfully'
          ]
        }
      ]
    },
    'grade-6': {
      id: 'grade-6',
      name: 'Grade 6 (Year 6)',
      description: 'Preparing for secondary school with advanced communication skills',
      topics: [
        {
          id: 'advanced-grammar',
          name: 'Advanced Grammar',
          subtopics: [
            'Use passive voice correctly',
            'Change direct speech into reported speech',
            'Use advanced conjunctions and sentence structures'
          ]
        },
        {
          id: 'reading',
          name: 'Reading',
          subtopics: [
            'Identify themes and moods in stories',
            'Evaluate arguments and evidence in texts',
            'Read critically for bias and reliability'
          ]
        },
        {
          id: 'writing',
          name: 'Writing',
          subtopics: [
            'Use narrative techniques: dialogue, flashback',
            'Write formal essays with introduction, body, conclusion',
            'Plan and write book reviews and analytical pieces'
          ]
        },
        {
          id: 'speaking-listening',
          name: 'Speaking & Listening',
          subtopics: [
            'Deliver structured presentations using notes',
            'Lead and summarise group discussions',
            'Ask and answer probing questions confidently'
          ]
        }
      ]
    }
  };
  
  export const getEnglishGrade = (gradeId: string) => {
    return englishCurriculum[gradeId] || null;
  };
  
  export const getAllEnglishGrades = () => {
    return Object.values(englishCurriculum);
  };
  
  // helper untuk ambil random subtopic dari sebuah grade
  export const getRandomEnglishSubtopic = (gradeId: string): string | null => {
    const grade = englishCurriculum[gradeId];
    if (!grade) return null;
  
    const topic = grade.topics[Math.floor(Math.random() * grade.topics.length)];
    if (!topic || topic.subtopics.length === 0) return null;
  
    return topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  };
  