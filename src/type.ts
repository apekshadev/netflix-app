export interface RootState {
  language: {
    locale: 'en' | 'hindi';
  };
}

export interface LanguageObject {
  play: string,
  moreInfo: string,
  gpt: {
    search: string;
    placeholder: string;
  };
  search: {
    placeholder: string;
  };
  movieType: {
    topRated: string,
    popular: string,
    upcoming: string,
    nowPlaying: string
  }
}

export interface Language {
  en: LanguageObject;
  hindi: LanguageObject;
}
export interface TitleProps {
  title?: string;
  overview?: string;
  id?: number;
}
export interface videoId {
  id?: number;
}
export interface ModalProps {
  movieKey?: any;
  movie?: any;
  handleClose?: () => void;
  open?: any;

}
export interface movieListProps {
  title?: string;
  movies?: any;
}
export interface CardProps {
  movie?: any;
}
export interface DropDownProps {
  items?: any;
  icon?: any;
  onchange?: any;
}
export interface InputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  class?: string;
  onchange?: any;
  error?: string | null | undefined;
}