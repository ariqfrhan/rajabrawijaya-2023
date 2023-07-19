import Image from "next/image";
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import style from "./Rangkaian.module.css";
import RangkaianSlide from "@/components/RangkaianSlide/RangkaianSlide";

const slides = [
  {
    id: 1,
    Heading: "PKKMB",
    EventSchedule: "32 Agustus - 12 November 2023",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit illo vitae consequuntur minima odit, doloremque vero nemo expedita iste eum non debitis voluptate, eligendi dolorem!",
  },
  {
    id: 2,
    Heading: "OH",
    EventSchedule: "32 Agustus - 12 November 2023",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit illo vitae consequuntur minima odit, doloremque vero nemo expedita iste eum non debitis voluptate, eligendi dolorem sit amet, consectetur adipisicing elit. Impedit illo vitae consequuntur minima odit, doloremque vero nemo expedita!",
  },
  {
    id: 3,
    Heading: "slide3",
    EventSchedule: "32 Agustus - 12 November 2023",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit illo vitae consequuntur minima odit, doloremque vero nemo expedita iste eum non debitis voluptate, eligendi dolorem! ipsum dolor sit amet, consectetur adipisicing elit. Impedit illo vitae consequuntur minima odit, doloremque vero nemo expedita iste eum non debitis voluptate, eligendi dolorem!",
  },
];

const Rangkaian = () => {
  return (
    <section className=" bg-primary">
      <div className="container py-8">
        <div className="flex rounded-2xl overflow-hidden h-[750px] gap-2">
          <div className=" flex flex-col bg-accent flex-[.75] py-2">
            <div className={`${style.patternKawung} relative`}>
              <img
                src="/assets/images/RangkaianUtamaNaga.png"
                alt="logo-naga-kawung"
                className={`${style.logoCenterLeftSection}`}
              />
            </div>

            <h2 className="h2 px-8 h-full flex justify-center items-center text-primary text-center text-[100px]">
              RANGKAIAN UTAMA
            </h2>

            <div className={`${style.patternKawung} w-full h-[37px]`}></div>
          </div>

          <div
            className={`${style.bgImage} flex-1 flex flex-col items-center p-8 gap-12 h-full`}
          >
            <div className="bg-white rounded-[30px] px-8 py-1">
              <Image src="/assets/logo.png" alt="logo" width={200} height={0} />
            </div>

            <RangkaianSlide slides={slides} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rangkaian;
