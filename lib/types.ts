export const LNURL =
  "https://raw.githubusercontent.com/TSHOGX/data/main/processor/LN/LN.json";

export const URLPREFIX =
  "https://raw.githubusercontent.com/TSHOGX/data/main/processor/";

export const MEDIAPREFIX =
  "https://raw.githubusercontent.com/TSHOGX/data/main/processor/media/";

export type Item = {
  title: string;
  character: string;
  card_name: string;
  stars: string;
  activity: string;
  type: string;
  description: string;
  bilibili_video: string[];
  weibo: string;
  weibo_imgs: string[];
  created_at: string;
  id: string;
};
