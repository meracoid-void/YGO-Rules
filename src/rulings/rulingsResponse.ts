export interface RulingsResponse {
    cards: number[];
    notes: Record<string, unknown>; // Assuming 'notes' could be a complex object; adjust as needed
    qaData: {
      en: QAData;
    };
    tags: string[];
  }
  
  interface QAData {
    answer: string;
    id: number;
    question: string;
    thisSrc: SourceInfo;
    title: string;
    tlSrc: SourceInfo;
    translationStatus: string;
  }
  
  interface SourceInfo {
    date: string;
    misc?: string; // Optional, as it may not be present in all sources
    type: number;
  }