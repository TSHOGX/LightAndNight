"use server";

import { Item, URLPREFIX } from "./types";

export async function getTags(flag: string) {
  let data: Item[] = [];

  if (flag === "LN") {
    data = await fetch(URLPREFIX + "/LightAndNight.json").then((res) =>
      res.json()
    );
  } else if (flag === "LD") {
    data = await fetch(URLPREFIX + "/LoveAndDeepspace.json").then((res) =>
      res.json()
    );
  } else if (flag === "BW") {
    data = await fetch(URLPREFIX + "/LoveAndDeepspace.json").then((res) =>
      res.json()
    );
  }

  const uniqueTags = new Set<string>();

  data.forEach((item) => {
    uniqueTags.add(item.character_name);
  });

  const tagsArray = Array.from(uniqueTags);

  return tagsArray;
}

export async function getAllItem(flag: string) {
  let data: Item[] = [];

  if (flag === "LN") {
    data = await fetch(URLPREFIX + "/LightAndNight.json").then((res) =>
      res.json()
    );
  } else if (flag === "LD") {
    data = await fetch(URLPREFIX + "/LoveAndDeepspace.json").then((res) =>
      res.json()
    );
  } else if (flag === "BW") {
    data = await fetch(URLPREFIX + "/LoveAndDeepspace.json").then((res) =>
      res.json()
    );
  }

  return data;
}

export async function getItemById(id: string) {
  let data: Item[] = [];

  const data1 = await fetch(URLPREFIX + "/LightAndNight.json").then((res) =>
    res.json()
  );
  const data2 = await fetch(URLPREFIX + "/LoveAndDeepspace.json").then((res) =>
    res.json()
  );
  data = await fetch(URLPREFIX + "/LoveAndDeepspace.json").then((res) =>
    res.json()
  );

  data.push(...data1);
  data.push(...data2);

  return data.find((item) => item.id.toString() === id);
}
