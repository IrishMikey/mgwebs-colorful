import React from "react";

type GalleryProps = (typeof galleryImgs)[number];

import { galleryImgs } from "@/lib/data";
import Image from "next/image";
import { Card, CardBody } from "@nextui-org/react";

export default function Photo({ imageUrl }: GalleryProps) {
  const photoWidth = imageUrl.width
  console.log("photowid: "+photoWidth)
  return (
    <Card className="py-4 mt-5">
      <CardBody className="overflow-visible py-2 ">
      <Image
        src={imageUrl}
        alt=""
        quality={95}
        className="object-cover rounded-xl"
      ></Image>
      </CardBody>
    </Card>
  );
}
