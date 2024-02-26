"use client";

import { getTypes, getAllItem, getCharacter, getActivity } from "@/lib";
import { useState, useEffect } from "react";

import { Divider, Link, Select, SelectItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { Item } from "@/lib/types";

export default function LightAndNight() {
  const [types, setTypes] = useState<string[]>();
  const [selectedType, setSelectedType] = useState<Set<string>>(
    new Set(["All"])
  );
  const [characters, setCharacters] = useState<string[]>();
  const [selectedCharacter, setSelectedCharacter] = useState<Set<string>>(
    new Set(["All"])
  );
  const [activity, setActivity] = useState<string[]>();
  const [selectedActivity, setSelectedActivity] = useState<Set<string>>(
    new Set(["All"])
  );

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchData() {
      await getTypes("LN").then((res) => {
        setTypes(["All"].concat(res));
      });
      await getCharacter("LN").then((res) => {
        setCharacters(["All"].concat(res));
      });
      await getActivity("LN").then((res) => {
        setActivity(["All"].concat(res));
      });
      await getAllItem("LN").then((res) => {
        setItems(res);
      });
    }
    fetchData();
  }, []);

  if (!types || !items || !characters || !activity) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" container px-6 mx-auto my-12 flex flex-col gap-6">
      <div className=" text-2xl w-fit mx-auto">光与夜之恋</div>
      <div className=" flex flex-col sm:flex-row gap-2">
        <Select
          label="Select an Type"
          className="max-w-xs mx-auto"
          selectedKeys={selectedType}
          // @ts-ignore
          onSelectionChange={setSelectedType}
        >
          {types.map((tag, i) => (
            <SelectItem key={tag} value={i}>
              {tag}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Select an Character"
          className="max-w-xs mx-auto"
          selectedKeys={selectedCharacter}
          // @ts-ignore
          onSelectionChange={setSelectedCharacter}
        >
          {characters.map((tag, i) => (
            <SelectItem key={tag} value={i}>
              {tag}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Select an Activity"
          className="max-w-xs mx-auto"
          selectedKeys={selectedActivity}
          // @ts-ignore
          onSelectionChange={setSelectedActivity}
        >
          {activity.map((tag, i) => (
            <SelectItem key={tag} value={i}>
              {tag}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className=" gap-6 grid grid-cols-1 mx-auto sm:grid-cols-4">
        {items
          .filter((item) => {
            if (selectedType.has("All")) {
              return true;
            }
            return selectedType.has(item.type);
          })
          .filter((item) => {
            if (selectedCharacter.has("All")) {
              return true;
            }
            return selectedCharacter.has(item.character);
          })
          .filter((item) => {
            if (selectedActivity.has("All")) {
              return true;
            }
            return selectedActivity.has(item.activity);
          })
          .map((item, index) => (
            <Link href={`/Card/${item.id}`} key={index}>
              <Card
                className=" h-96 w-64"
                shadow="sm"
                isPressable
                onPress={() => console.log("item pressed")}
              >
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    What to watch
                  </p>
                  <h4 className="text-white font-medium text-large">
                    {item.title}
                  </h4>
                </CardHeader>
                <CardFooter className="absolute z-10 bottom-0 text-small uppercase text-white justify-end">
                  {item.bilibili_video ? "go for video" : ""}
                </CardFooter>
                <Image
                  alt="Network Error"
                  className="z-0 object-cover"
                  // src="/images/card-example-4.jpeg"
                  src={`${item.weibo_imgs[0]}`}
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
}
