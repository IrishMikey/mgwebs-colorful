import worksData from "./data.json";

import { useState, useEffect } from "react";
import {
  Card,
  Image,
  Chip,
  useDisclosure,
  Link,
  Button,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import NextImage from "next/image";

import { Modal, ModalContent, ModalBody, ModalFooter } from "@nextui-org/modal";

// Define interface for work data
type Work = {
  company_name: string;
  card: {
    img: {
      src: string;
      height: number;
      width: number;
    };
    built_with: string[];
  };
  modal: {
    img: string;
    desc: string;
    height: number;
    width: number;
    alt: string;
  }[];
};

const WorksCard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("inside" as "inside");

  const [works, setWorks] = useState([] as Work[]);

  useEffect(() => {
    // Set the works state with the imported JSON data
    setWorks(worksData);
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {works.map((work, index) => (
        <>
          <Card
            key={index}
            onPress={onOpen} // Assuming you have the onOpen function defined somewhere
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
              src={work.card.img.src}
              height={work.card.img.height}
              width={work.card.img.width}
              alt={`Desktop screenshot of ${work.company_name}`}
            />
            <div className="flex items-center justify-between">
              {work.card.built_with.map((tech, index) => (
                <Chip key={index} color="default" radius="md">
                  {tech}
                </Chip>
              ))}
            </div>
          </Card>
          <Modal
            isOpen={isOpen}
            backdrop="opaque"
            hideCloseButton={true}
            onOpenChange={onOpenChange}
            scrollBehavior={scrollBehavior}
            className=""
          >
            {/* PASS isOpen STATE FROM  useDisclosure HOOK*/}
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalBody className="gap-8">
                    <header className="flex flex-initial py-4 text-[2rem] font-semibold">
                      {work.company_name}
                    </header>
                    {work.modal.map((modal, index) => (
                      <>
                        <div
                          className="flex w-full justify-center rounded-[1rem] bg-zinc-800 py-2"
                          key={index}
                        >
                          <Image
                            as={NextImage}
                            width={modal.width}
                            height={modal.height}
                            src={modal.img}
                            alt={modal.alt}
                          ></Image>
                        </div>
                        <p className="text-zinc-300">{modal.desc}</p>
                      </>
                    ))}
                  </ModalBody>
                  <ModalFooter className="">
                    <Button fullWidth={true} color="primary">
                      <Link
                        href="https://bgrsolutions.net"
                        className="flex gap-2 text-white"
                      >
                        Check it out
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </Link>
                    </Button>
                    <Button isIconOnly={true} variant="faded" onPress={onClose}>
                      X
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      ))}
    </div>
  );
};
export default WorksCard;
