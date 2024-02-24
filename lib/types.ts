export const URLPREFIX =
  "https://raw.githubusercontent.com/TSHOGX/data/main/processor/";

export const MEDIAPREFIX =
  "https://raw.githubusercontent.com/TSHOGX/data/main/processor/media/";

export type Item = {
  title: string;
  character_name: string;
  card_name: string;
  id: string;
  text: string;
  created_at: string;
  pics_weibo: string[];
  video_weibo: string[];
  media: string[];
  video: string;
};
