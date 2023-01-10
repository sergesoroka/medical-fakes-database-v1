export interface SuggestionsType {
  suggestions: SuggestionType[]
}

export interface SuggestionType {
  suggestion: string
}

export interface VoxDataType {
  articleId: string;
  link: string;
  imagelink: string;
  title: string;
  tags?: string[];
  authors?: string[]
}


export interface medicalFake {
  id: string;
  theme?: string;
  subtheme?: string;
  discription?: string;
  verdict?: string;
  source?: string;
  date?: string;
  archive_link?: string;
  country?: string;
  disproof?: string;
  tags?:  string
}