import React from "react";

type GalleryProps = (typeof galleryImgs)[number];

import { galleryImgs } from "@/lib/data";
import Image from "next/image";
import { Card, CardBody } from "@nextui-org/react";
import { animate, motion } from "framer-motion";

export default function Photo({ imageUrl }: GalleryProps) {
  const photoWidth = imageUrl.width
  return (
    <motion.div
    initial={{opacity:0, y:-100}}  animate={{opacity:1, y:0}} transition={{delay:0.2}} whileHover={{scale:1.1}}>

    <Card className="" >
      <CardBody className=" ">
      <Image
        src={imageUrl}
        alt=""
        quality={95}
        className="object-cover rounded-xl max-w-[364px] sm:max-w-[300px]"
        ></Image>
      </CardBody>
    </Card>
        </motion.div>
  );
}
