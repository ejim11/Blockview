import {StaticImageData} from "next/image";

export interface Topic {
  number: number;
  title: string;
  subTitles: { title: string; route: string }[];
}


export interface HomeData {
  title: string;
  text: string;
  image: StaticImageData
}