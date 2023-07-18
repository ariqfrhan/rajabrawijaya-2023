import Image from "next/image";
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import style from "./Rangkaian.module.css";

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

            <div className="flex flex-col gap-8 w-full h-full">
              <div className="flex flex-col items-center gap-2">
                <h2 className="rounded-full bg-white text-secondary font-bold text-[56px] px-12">
                  PKKMB
                </h2>
                <h3 className="rounded-full bg-white text-secondary font-bold text-[40px] px-4">
                  32 Agustus - 12 November 2023
                </h3>
              </div>
              <div className="backdrop-blur-md bg-gradient-to-br from-accent/40 border border-accent/50 rounded-xl p-4 space-y-8">
                <p className=" text-white font-montserrat">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  in laborum officiis provident alias aliquam dolorem molestiae
                  fugit reiciendis, culpa numquam nihil enim velit consectetur?{" "}
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium voluptas, ullam ad provident nemo laboriosam
                  nesciunt, obcaecati in modi voluptatum ducimus minima
                  exercitationem ut consequuntur maiores illo id sequi. Magni.
                </p>

                <div className="flex justify-center items-center">
                  <img
                    src="/assets/images/Naga.png"
                    alt="logo"
                    className="w-16"
                  />
                  <img
                    src="/assets/images/Naga.png"
                    alt="logo"
                    className="w-16 transform scale-x-[-1]"
                  />
                </div>
              </div>

              <div className="mt-auto flex justify-between ">
                <div className="flex items-center justify-center gap-2">
                  <button className="bg-white/30 rounded-full p-1">
                    <FiChevronLeft className="text-white text-5xl" />
                  </button>
                  <span className="text-white text-lg font-montserrat">
                    Sebelum
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white text-lg font-montserrat">
                    Sesudah
                  </span>
                  <button className="bg-white/30 rounded-full p-1">
                    <FiChevronRight className="text-white text-5xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rangkaian;
