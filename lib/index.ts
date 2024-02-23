"use server";

import { Item } from "./types";

const url_prefix =
  "https://raw.githubusercontent.com/TSHOGX/data/main/bilibili_game";

export async function getTags(flag: string) {
  let data: Item[] = [];
  if (flag === "LN") {
    const file01 = await fetch(url_prefix + "/LightAndNight-01.json").then(
      (res) => res.json()
    );
    data.push(...file01);
    const file02 = await fetch(url_prefix + "/LightAndNight-02.json").then(
      (res) => res.json()
    );
    data.push(...file02);
    const file03 = await fetch(url_prefix + "/LightAndNight-03.json").then(
      (res) => res.json()
    );
    data.push(...file03);
  } else if (flag === "LD") {
    const file = await fetch(url_prefix + "/LoveAndDeepspace.json").then(
      (res) => res.json()
    );
    data = file;
  } else if (flag === "BW") {
    const file = await fetch(url_prefix + "/BeyondTheWorld.json").then((res) =>
      res.json()
    );
    data = file;
  }

  const uniqueTags = new Set<string>();

  data.forEach((item) => {
    uniqueTags.add(item.tag);
  });

  const tagsArray = Array.from(uniqueTags);

  return tagsArray;
}

export async function getAllItem(flag: string) {
  let data: Item[] = [];
  if (flag === "LN") {
    const file01 = await fetch(url_prefix + "/LightAndNight-01.json").then(
      (res) => res.json()
    );
    data.push(...file01);
    const file02 = await fetch(url_prefix + "/LightAndNight-02.json").then(
      (res) => res.json()
    );
    data.push(...file02);
    const file03 = await fetch(url_prefix + "/LightAndNight-03.json").then(
      (res) => res.json()
    );
    data.push(...file03);
  } else if (flag === "LD") {
    const file = await fetch(url_prefix + "/LoveAndDeepspace.json").then(
      (res) => res.json()
    );
    data = file;
  } else if (flag === "BW") {
    const file = await fetch(url_prefix + "/BeyondTheWorld.json").then((res) =>
      res.json()
    );
    data = file;
  }

  //   const newData: SmallItem[] = data.map((item) => ({
  //     title: item.title,
  //     href: item.href,
  //   }));

  return data;
}
