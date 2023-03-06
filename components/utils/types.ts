export interface Topic {
  number: number;
  title: string;
  subTitles: { title: string; route: string }[];
}
