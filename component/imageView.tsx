"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageView({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex flex-row gap-4">
        {images.map((imageURL, i) => (
          <Image
            key={i}
            id={imageURL}
            className=" w-20 h-20 object-cover"
            src={imageURL}
            alt={i.toString()}
            width={40}
            height={40}
            loading="lazy"
            onClick={() => setSelectedImage(i)}
          />
        ))}
      </div>
      <Image
        alt="Network Error"
        className="z-0 w-full h-full object-cover "
        src={images[selectedImage]}
        width={500}
        height={500}
        loading="lazy"
      />
    </div>
  );
}
