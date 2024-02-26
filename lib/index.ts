"use server";

import { Item, URLPREFIX, LNURL } from "./types";

export async function getTypes(flag: string) {
  let data: Item[] = [];

  if (flag === "LN") {
    data = await fetch(LNURL).then((res) => res.json());
  } else if (flag === "LD") {
    data = await fetch(URLPREFIX + "/LoveAndDeepspace.json").then((res) =>
      res.json()
    );
  } else if (flag === "BW") {
    data = await fetch(URLPREFIX + "/LoveAndDeepspace.json").then((res) =>
      res.json()
    );
  }

  const uniqueTypes = new Set<string>();

  data.forEach((item) => {
    uniqueTypes.add(item.type);
  });

  const typesArray = Array.from(uniqueTypes);

  return typesArray;
}

export async function getAllItem(flag: string) {
  let data: Item[] = [];

  if (flag === "LN") {
    data = await fetch(LNURL).then((res) => res.json());
  } else if (flag === "LD") {
    data = await fetch(URLPREFIX + "/LoveAndDeepspace.json").then((res) =>
      res.json()
    );
  } else if (flag === "BW") {
    data = await fetch(URLPREFIX + "/LoveAndDeepspace.json").then((res) =>
      res.json()
    );
  }

  // add id to each item
  data.forEach((item: Item, index: any) => {
    item.id = index;
  });

  return data;
}

export async function getItemById(id: string) {
  let data: Item[] = [];

  const data1 = await fetch(LNURL).then((res) => res.json());
  // const data2 = await fetch(URLPREFIX + "/LoveAndDeepspace.json").then((res) =>
  //   res.json()
  // );
  // data = await fetch(URLPREFIX + "/LoveAndDeepspace.json").then((res) =>
  //   res.json()
  // );

  // data.push(...data1);
  // data.push(...data2);

  data = data1;

  // add id to each item
  data.forEach((item: Item, index: any) => {
    item.id = index;
  });

  return data.find((item) => item.id.toString() === id);
}
