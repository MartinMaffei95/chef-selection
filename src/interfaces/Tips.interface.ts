import { GenericPost } from '.';

export interface Tip extends GenericPost {
  content: {
    paragraph: string;
    image: string;
  }[];
}
