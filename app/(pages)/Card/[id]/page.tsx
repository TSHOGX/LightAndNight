import { getItemById } from "@/lib";
import { Link } from "@nextui-org/react";
import ImageView from "@/component/imageView";

export default async function Card({ params }: { params: { id: string } }) {
  const item = await getItemById(params.id);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" container px-6 mx-auto my-12 flex flex-col gap-6">
      <div className=" gap-12 grid grid-cols-1 sm:grid-cols-2">
        <div className=" flex flex-col">
          <ImageView images={item["weibo pics"]} />
        </div>

        <div className=" flex flex-col gap-12">
          <div>{item.title}</div>

          {item["bilibili video"] ? (
            item["bilibili video"].map((video, i) => (
              <Link
                isExternal
                showAnchorIcon
                href={video}
                key={i}
                className=" justify-end uppercase"
              >
                Video
              </Link>
            ))
          ) : (
            <Link
              isExternal
              showAnchorIcon
              isDisabled
              href="#"
              className=" justify-end uppercase"
            >
              Video
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
