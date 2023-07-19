"use client";
import React, { useState, useEffect } from "react";
import { apiFaq } from "@/lib/api";
import DropdownFaq from "../../components/faq/DropdownFaq";
import FaqAccordion from "../../components/faq/FaqAccordion";

const questData = [
  {
    id: "umumA",
    id_category: "umum",
    quest: "Lorem ipsum dolor sit amet. quest umumA",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer umumA",
  },
  {
    id: "umumB",
    id_category: "umum",
    quest: "Lorem ipsum dolor sit amet. quest umumB",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer umumB",
  },
  {
    id: "rangkaianB",
    id_category: "rangkaian",
    quest: "Lorem ipsum dolor sit amet. quest rangkaianB",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer rangkaianB",
  },
  {
    id: "penugasanB",
    id_category: "penugasan",
    quest: "Lorem ipsum dolor sit amet. quest penugasanB",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer penugasanB",
  },
  {
    id: "acaraB",
    id_category: "acara",
    quest: "Lorem ipsum dolor sit amet. quest acaraB",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer acaraB",
  },
  {
    id: "acaraA",
    id_category: "acara",
    quest: "Lorem ipsum dolor sit amet. quest acaraA",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer acaraA",
  },
  {
    id: "acaraD",
    id_category: "acara",
    quest: "Lorem ipsum dolor sit amet. quest acaraD",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer acaraD",
  },
  {
    id: "acaraC",
    id_category: "acara",
    quest: "Lorem ipsum dolor sit amet. quest acaraC",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer acaraC",
  },
];

const groupData = [
  {
    id: "umum",
    title: "umum",
  },
  {
    id: "rangkaian",
    title: "rangkaian",
  },
  {
    id: "penugasan",
    title: "penugasan",
  },
  {
    id: "acara",
    title: "acara",
  },
  {
    id: "lokasi",
    title: "lokasi",
  },
];

export default function Page() {
  const [quest, setQuest] = useState(null);
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [dataGroup, setDataGroup] = useState(groupData);
  const [dataQuest, setDataQuest] = useState(questData);
  const [active, setActive] = useState(false);
  const [select, setSelect] = useState(1);

  const getData = async () => {
    apiFaq()
      .then((res) => {
        if (res.data.faqs.length > 0) {
          setDataGroup(res.data.category_faqs);
          setDataQuest(res.data.faqs);
        }
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div
        className="w-full h-full absolute overflow-y-scroll drop-shadow-md"
        style={{
          backgroundImage: `url(/assets/images/faqpattern.png)`,
        }}
      >
        <div className="container mx-auto pt-32 relative z-3">
          <h1 className="font-esthetique text-center text-4xl md:text-6xl">
            Pertanyaan dan Jawaban
          </h1>
          <div className="flex flex-row justify-center items-center">
            <div className="bg-white rounded-lg w-2/5 py-2 px-4 items-center mt-4 border-primary border-2">
              <input
                className="w-full ml-1 focus-visible:outline-0 text-body-sm md:text-body-md lg:text-body text-primary"
                placeholder="Bukan buat cari jodoh"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            <div className="flex items-center">
              {dataGroup.map((g) => (
                <DropdownFaq
                  key={g.id} // Use a unique identifier as the key
                  id={g.id}
                  active={group}
                  changeGroup={(n) => setGroup(n)}
                  name={g.title}
                />
              ))}
            </div>
          </div>
          <div className="w-full mt-3 lg:px-12 rounded-lg p-2 flex flex-col">
            {dataQuest
              .filter((q) => {
                if (group == null) {
                  return q;
                } else {
                  return q.id_category == group;
                }
              })
              .filter((q) => {
                if (search != null) {
                  return q.quest.toLowerCase().match(search.toLowerCase());
                } else {
                  return q;
                }
              })
              .map((e) => {
                return (
                  <FaqAccordion
                    key={e.id}
                    id={e.id}
                    active={quest}
                    toggle={(e: any) => {
                      setQuest(e);
                    }}
                    quest={e.quest}
                    answer={e.answer}
                  ></FaqAccordion>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
