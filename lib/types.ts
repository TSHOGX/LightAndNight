export const LNURL =
  "https://raw.githubusercontent.com/TSHOGX/data/main/processor/LN/LNlocal.json";

export const URLPREFIX =
  "https://raw.githubusercontent.com/TSHOGX/data/main/processor/";

export const MEDIAPREFIX =
  "https://raw.githubusercontent.com/TSHOGX/data/main/processor/media/";

export type Item = {
  title: string;
  character: string;
  "card name": string;
  stars: string;
  activity: string;
  type: string;
  description: string;
  "bilibili video": string[];
  weibo: string;
  "weibo pics": string[];
  "local pics": string[];
  id: string;
};
