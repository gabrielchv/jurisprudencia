export interface Decision {
  id: string;
  processNumber: string;
  court: string;
  relevance: string;
  chamber: string;
  title: string;
  theme: string;
  date: string;
  snippet: string;
  originalLink: string;
}

export interface SearchPayload {
  query: string;
  courts: string[];
  chambers: string[];
  period: string;
}