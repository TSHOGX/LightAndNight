"use client";

import { getTags, getAllItem } from "@/lib";
import { useState, useEffect } from "react";

import { Divider, Link, Select, SelectItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { Item, MEDIAPREFIX } from "@/lib/types";

export default function LightAndNight() {
  const [tags, setTags] = useState<string[]>();
  const [selectedTag, setSelectedTag] = useState<Set<string>>(new Set(["All"]));
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchData() {
      await getTags("LN").then((res) => {
        setTags(["All"].concat(res));
      });
      await getAllItem("LN").then((res) => {
        setItems(res);
      });
    }
    fetchData();
  }, []);

  if (!tags || !items) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" container px-6 mx-auto my-12 flex flex-col gap-6">
      <div className=" text-2xl w-fit mx-auto">光与夜之恋</div>
      <Select
        label="Select an tag"
        className="max-w-xs mx-auto"
        selectedKeys={selectedTag}
        // @ts-ignore
        onSelectionChange={setSelectedTag}
      >
        {tags.map((tag, i) => (
          <SelectItem key={tag} value={i}>
            {tag}
          </SelectItem>
        ))}
      </Select>
      <div className=" gap-6 grid grid-cols-1 mx-auto sm:grid-cols-4">
        {items
          .filter((item) => {
            if (selectedTag.has("All")) {
              return true;
            }
            return selectedTag.has(item.character_name);
          })
          .map((item, index) => (
            <Link href={`/Card/${item.id}`} key={index}>
              <Card
                className=" h-96 w-64"
                shadow="sm"
                isPressable
                onPress={() => console.log("item pressed")}
              >
                {/* <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    What to watch
                  </p>
                  <h4 className="text-white font-medium text-large">
                    {item.title}
                  </h4>
                </CardHeader> */}
                <CardFooter className="absolute z-10 bottom-0 text-small uppercase text-white justify-end">
                  {item.video ? "go for video" : ""}
                </CardFooter>
                {item.pics_weibo[0] === "" ? (
                  <video
                    autoPlay
                    width="500"
                    height="500"
                    controls
                    preload="none"
                  >
                    <source src={`${item.video_weibo[0]}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    alt="Network Error"
                    className="z-0 object-cover"
                    // src="/images/card-example-4.jpeg"
                    src={`${item.pics_weibo[0]}`}
                    width={500}
                    height={500}
                    loading="lazy"
                  />
                )}
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
}
