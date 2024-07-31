import React from "react";

type GalleryProps = (typeof galleryImgs)[number];

import { galleryImgs } from "@/lib/data";
import Image from "next/image";
import { Card, CardBody } from "@nextui-org/react";

export default function Photo({ imageUrl }: GalleryProps) {
  return (
    <Card className="">
      <CardBody className=" ">
      <Image
        src={imageUrl}
        alt=""
        quality={95}
        className="object-cover rounded-xl  sm:max-w-[300px]"
      ></Image>
      </CardBody>
    </Card>
  );
}
