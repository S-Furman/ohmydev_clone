export interface Article {
  rating: number;
  title: string;
  img: string;
  tags: string[];
  comments: number;
  author: string;
  date: Date;
  community: string;
  key?: string;
}
