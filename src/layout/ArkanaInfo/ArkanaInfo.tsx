import Image from "next/image";
import Link from "next/link";
import React from "react";

const cardDataList = [
  {
    id: 1,
    link: "/twibbon",
    imageSrc: "/assets/images/Raja.png",
    altText: "Image 1",
    paragraphText: "Twibbon",
  },
  {
    id: 2,
    link: "/attribut",
    imageSrc: "/assets/images/Raja.png",
    altText: "Image 2",
    paragraphText: "Attribut",
  },
  {
    id: 3,
    link: "/panduan",
    imageSrc: "/assets/images/Raja.png",
    altText: "Image 3",
    paragraphText: "Panduan",
  },
];

interface CardProps {
  key: number;
  link: string;
  imageSrc: string;
  altText: string;
  paragraphText: string;
}

const Card = ({ key, link, imageSrc, altText, paragraphText }: CardProps) => {
  return (
    <Link key={key} href={link} className="bg-primary rounded-xl p-6 space-y-6">
      <div className="bg-white rounded-lg w-44 h-44 object-cover overflow-hidden">
        <Image src={imageSrc} alt={altText} width={100} height={100} />
      </div>
      <p className="bodysmall text-[40px] text-white text-center">{paragraphText}</p>
    </Link>
  );
};

const ArkanaInfo = () => {
  return (
    <section className="container">
      <div className="flex py-8">
        <div className="flex flex-col flex-[.45] gap-8">
          <div className="leading-[1]">
            <h2 className="header text-primary font">Arkana </h2>
            <span className="header text-secondary">Info</span>
          </div>

          <button className="self-start bg-secondary text-white font-SpaceGrotesk font-medium text-[20px] px-12 py-4 rounded-lg">
            Lihat lainnya
          </button>
        </div>

        <div className="flex justify-between w-full flex-1">
          {cardDataList.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArkanaInfo;
