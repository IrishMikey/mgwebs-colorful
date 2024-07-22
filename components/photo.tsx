import React from "react";

type GalleryProps = (typeof galleryImgs)[number];

import { galleryImgs } from "@/lib/data";
import Image from "next/image";
import { Card } from "@nextui-org/react";

export default function Photo({ imageUrl }: GalleryProps) {
  return (
    <Card className="max-h-[20.5rem] max-w-[42rem] overflow-hidden px-4 py-2 last:mb-0 sm:mb-2 sm:h-[18rem]">
      <Image
        src={imageUrl}
        alt=""
        quality={95}
        className="shadow-black-800 rounded-lg"
      ></Image>
    </Card>
  );
}
