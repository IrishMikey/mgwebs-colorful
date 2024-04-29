import data from "./content/data.json";
import { useState, useEffect } from "react";
import { Card, Image, Chip, UseDisclouser } from "@nextui-org/react"; // import your Card, Image, Chip components from your library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import NextImage from "next/image";

interface Work {
  company_name: string;
  img: { src: string; height: number; width: number }[];
  built_with: string[];
}

const WorksCard = () => {
  const [works, setWorks] = useState([] as Work[]);

  useEffect(() => {
    // Set the works state with the data from JSON
    setWorks(data);
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      <h2>test</h2>
      {works.map((work, index) => (
        <Card
          key={index}
          //onPress={onOpen} Assuming you have the onOpen function defined somewhere
          isPressable={true}
          className="flex w-full flex-col gap-2 rounded-[1rem] bg-zinc-500 bg-opacity-30 px-[0.625rem] pb-[0.625rem] shadow  backdrop-blur-lg backdrop-filter transition-all hover:scale-[1.01] active:scale-100"
        >
          <div className="flex w-full items-center justify-between py-[13px] ">
            <h4 className="text-[1.125rem] font-semibold">
              {work.company_name}
            </h4>
            <FontAwesomeIcon icon={faExpand} />
          </div>
          <Image
            as={NextImage}
            src={work.img.src}
            height={work.img.height}
            width={work.img.with}
            alt={`Desktop screenshot of ${work.company_name}`}
          />
          <div className="flex items-center justify-between">
            {work.built_with.map((tech, index) => (
              <Chip key={index} color="default" radius="md">
                {tech}
              </Chip>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default WorksCard;
