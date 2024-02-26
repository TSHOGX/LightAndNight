"use server";

import { Item, URLPREFIX, LNURL } from "./types";

export async function getActivity(flag: string) {
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

  const activitySet = new Set<string>();

  data.forEach((item) => {
    activitySet.add(item.activity);
  });

  return Array.from(activitySet);
}

export async function getCharacter(flag: string) {
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

  const characterSet = new Set<string>();

  data.forEach((item) => {
    characterSet.add(item.character);
  });

  return Array.from(characterSet);
}

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

  return Array.from(uniqueTypes);
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

  return data.find((item) => item.id === id);
}
