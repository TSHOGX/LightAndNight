"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

export function CreateCard() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [level, setLevel] = useState("一段");
  const [star, setStar] = useState("6");
  const [character, setCharacter] = useState("萧逸");
  const [discription, setDiscription] = useState("");
  const [series, setSeries] = useState("");
  const [source, setSource] = useState("限定");
  const [type, setType] = useState("约会");
  const [video, setVideo] = useState("");
  const [image, setImage] = useState("");

  const createCard = api.card.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
      setLevel("一段");
      setStar("6");
      setCharacter("萧逸");
      setDiscription("");
      setSeries("");
      setSource("限定");
      setType("约会");
      setVideo("");
      setImage("");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createCard.mutate({
          name,
          level,
          star,
          character,
          discription,
          series,
          source,
          type,
          video,
          image,
        });
      }}
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="卡面名称"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <select
        value={level}
        onChange={(e) => {
          setLevel(e.target.value);
        }}
        className="w-full rounded-full px-4 py-2 text-black"
      >
        <option value="一段">一段</option>
        <option value="二段">二段</option>
      </select>
      <select
        value={star}
        onChange={(e) => setStar(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      >
        <option value="6">6</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      <select
        value={character}
        onChange={(e) => setCharacter(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      >
        <option value="萧逸">萧逸</option>
        <option value="陆沉">陆沉</option>
        <option value="齐司礼">齐司礼</option>
        <option value="查理苏">查理苏</option>
        <option value="夏鸣星">夏鸣星</option>
      </select>
      <input
        type="text"
        placeholder="介绍"
        value={discription}
        onChange={(e) => setDiscription(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <input
        type="text"
        placeholder="隶属活动"
        value={series}
        onChange={(e) => setSeries(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <select
        value={source}
        onChange={(e) => setSource(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      >
        <option value="限定">限定</option>
        <option value="常驻">常驻</option>
        <option value="生日">生日</option>
        <option value="周年">周年</option>
        <option value="中秋">中秋</option>
        <option value="春节">春节</option>
        <option value="元旦">元旦</option>
        <option value="万圣">万圣</option>
        <option value="-">-</option>
      </select>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      >
        <option value="约会">约会</option>
        <option value="轨迹">轨迹</option>
        <option value="余音">余音</option>
        <option value="侧影">侧影</option>
        <option value="倒带">倒带</option>
        <option value="胶片">胶片</option>
        <option value="邂逅">邂逅</option>
        <option value="未知">未知</option>
      </select>
      <input
        type="text"
        placeholder="视频链接"
        value={video}
        onChange={(e) => setVideo(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <input
        type="text"
        placeholder="图片链接"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createCard.isLoading}
      >
        {createCard.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
