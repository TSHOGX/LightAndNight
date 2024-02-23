"use client";

import { getTags, getAllItem } from "@/lib";
import { useState, useEffect } from "react";

import { Divider, Link, Select, SelectItem } from "@nextui-org/react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Item } from "@/lib/types";

export default function BeyondTheWorld() {
  const [tags, setTags] = useState<string[]>();
  const [selectedTag, setSelectedTag] = useState<Set<string>>(new Set(["All"]));
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchData() {
      await getTags("BW").then((res) => {
        setTags(["All"].concat(res));
      });
      await getAllItem("BW").then((res) => {
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
      <div className=" text-2xl w-fit mx-auto">世界之外</div>
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
      <div className=" gap-2 grid grid-cols-2 sm:grid-cols-4">
        {items
          .filter((item) => {
            if (selectedTag.has("All")) {
              return true;
            }
            return selectedTag.has(item.tag);
          })
          .map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody>{item.title}</CardBody>
              <Divider />
              <CardFooter className=" justify-between">
                <Link
                  className=" text-xs"
                  isExternal
                  showAnchorIcon
                  href={item.href}
                >
                  Video
                </Link>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
}
