import Image from "next/image";
import Link from "next/link";
import { api } from "~/trpc/server";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  // const product: Product = await getProductInfo(params.id);
  const card = await api.card.getOne.query({ id: params.id });
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#dcdffc] to-[#babdfa] text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          {/* <img
            className=" w-56 rounded-lg object-cover"
            src={card.image}
            alt={card.id}
          /> */}
          <Link className="" href={card.image}>
            <Image
              src={card.image}
              alt="Picture of the author"
              className=" rounded-lg object-cover" // h-56 w-36
              width={224}
              height={516}
              // layout="responsive"
              loading="lazy"
            />
          </Link>
          <div className=" flex flex-col gap-4">
            <div className=" text-2xl font-bold">
              {card.name} | {card.character}
            </div>

            <div>
              [{card.level}] [{card.type}] [{card.source}]
            </div>

            <div>系列: {card.series}</div>

            <div>星级: {card.star}</div>

            <div>备注: {card.discription}</div>

            <Link
              className=" underline-offset-3 underline hover:text-gray-500"
              href={card.video}
              target="_blank"
            >
              剧情视频 →
            </Link>
          </div>
        </div>

        {/* Foot */}
        <div className=" ">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://github.com/TSHOGX"
            target="_blank"
          >
            <div className=" text-sm">@TSHOGX</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
