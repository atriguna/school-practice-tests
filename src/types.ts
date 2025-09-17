export interface DeepSeekMessage {
    role: string;
    content: string;
  }
  
  export interface DeepSeekChoice {
    message?: { content?: string };
  }
  
  export interface DeepSeekResponse {
    choices?: DeepSeekChoice[];
  }
  
  export interface RequestChat {
    message: string;
    userId: string;
  }
  
  export interface RequestQuestion {
    grade: string;
    userId: string;
  }
  
  export interface RequestExplain {
    question: string;
    wrongAnswer: string;
    grade: string;
    userId: string;
  }
  