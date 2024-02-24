import { getItemById } from "@/lib";
import Image from "next/image";
import { Link } from "@nextui-org/react";

export default async function Card({ params }: { params: { id: string } }) {
  const item = await getItemById(params.id);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" container px-6 mx-auto my-12 flex flex-col gap-6">
      <div className=" gap-12 grid grid-cols-1 sm:grid-cols-2">
        <div className=" flex flex-col">
          {item.pics_weibo.map((image, i) => (
            <Image
              alt="Network Error"
              key={i}
              className="z-0 w-full h-full object-cover "
              // src="/images/card-example-4.jpeg"
              src={image}
              width={500}
              height={500}
              loading="lazy"
            />
          ))}

          {item.video_weibo.map(
            (video, i) =>
              video !== "" && (
                <video
                  autoPlay
                  width="320"
                  height="384"
                  controls
                  preload="none"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )
          )}
        </div>

        <div className=" flex flex-col gap-12">
          <div dangerouslySetInnerHTML={{ __html: item.text }} />

          {item.video ? (
            <Link
              isExternal
              showAnchorIcon
              href={item.video}
              className=" justify-end uppercase"
            >
              Video
            </Link>
          ) : (
            <Link
              isExternal
              showAnchorIcon
              isDisabled
              href={item.video}
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
