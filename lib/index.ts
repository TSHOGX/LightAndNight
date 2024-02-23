"use server";

import { promises as fs } from "fs";
import { Item } from "./types";

export async function getTags(flag: string) {
  let data: Item[] = [];
  if (flag === "LN") {
    const file01 = await fs.readFile(
      process.cwd() + "/app/data/LightAndNight-01.json",
      "utf8"
    );
    data.push(...JSON.parse(file01));
    const file02 = await fs.readFile(
      process.cwd() + "/app/data/LightAndNight-02.json",
      "utf8"
    );
    data.push(...JSON.parse(file02));
    const file03 = await fs.readFile(
      process.cwd() + "/app/data/LightAndNight-03.json",
      "utf8"
    );
    data.push(...JSON.parse(file03));
  } else if (flag === "LD") {
    const file = await fs.readFile(
      process.cwd() + "/app/data/LoveAndDeepspace.json",
      "utf8"
    );
    data = JSON.parse(file);
  } else if (flag === "BW") {
    const file = await fs.readFile(
      process.cwd() + "/app/data/BeyondTheWorld.json",
      "utf8"
    );
    data = JSON.parse(file);
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
    const file01 = await fs.readFile(
      process.cwd() + "/app/data/LightAndNight-01.json",
      "utf8"
    );
    data.push(...JSON.parse(file01));
    const file02 = await fs.readFile(
      process.cwd() + "/app/data/LightAndNight-02.json",
      "utf8"
    );
    data.push(...JSON.parse(file02));
    const file03 = await fs.readFile(
      process.cwd() + "/app/data/LightAndNight-03.json",
      "utf8"
    );
    data.push(...JSON.parse(file03));
  } else if (flag === "LD") {
    const file = await fs.readFile(
      process.cwd() + "/app/data/LoveAndDeepspace.json",
      "utf8"
    );
    data = JSON.parse(file);
  } else if (flag === "BW") {
    const file = await fs.readFile(
      process.cwd() + "/app/data/BeyondTheWorld.json",
      "utf8"
    );
    data = JSON.parse(file);
  }

  //   const newData: SmallItem[] = data.map((item) => ({
  //     title: item.title,
  //     href: item.href,
  //   }));

  return data;
}
