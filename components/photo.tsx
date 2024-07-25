import React from "react";

type GalleryProps = (typeof galleryImgs)[number];

import { galleryImgs } from "@/lib/data";
import Image from "next/image";
import { Card } from "@nextui-org/react";

export default function Photo({ imageUrl }: GalleryProps) {
  const photoWidth = imageUrl.width
  console.log("photowid: "+photoWidth)
  return (
    <Card className={'min-w-fit p4'}>
      <Image
        src={imageUrl}
        alt=""
        quality={95}
        className="shadow-black-800 rounded-lg h-[10rem] w-auto"
      ></Image>
    </Card>
  );
}
