import React from "react";

interface FaqAccordionProps {
  key: string;
  id: string;
  active: string | null;
  toggle: (e: string | null) => void;
  quest: string;
  answer: string;
}

export default function FaqAccordion(props: FaqAccordionProps) {
  const isClicked = props.active === props.id;

  const toggleAccordion = () => {
    if (isClicked) {
      props.toggle(null);
    } else {
      props.toggle(props.id);
    }
  };

  return (
    <div>
      <button
        className="h-fill bg-primary rounded-lg mb-3 text-start w-full"
        onClick={toggleAccordion}
      >
        <div
          className={`bg-primary text-white py-2 px-4 flex justify-between items-center rounded-lg font-montserrat`}
        >
          <div className="flex items-center">
            <img src="/assets/images/kawung-01.png" />
            <p
              className={`${
                props.active == props.id ? "font-normal" : "font-semibold"
              } ml-5`}
            >
              {props.quest}
            </p>
          </div>
          <img
            src="/assets/icons/arrdown.svg"
            width={20}
            className={`${
              isClicked
                ? "rotate-0 transition-all duration-300"
                : "rotate-90 transition-all duration-300"
            }`}
          />
        </div>
      </button>
      <div
        className={`${
          props.active == props.id
            ? "p-4 mb-4 h-fit bg-white text-primary rounded-lg"
            : "h-0 overflow-hidden"
        }`}
      >
        <h6 className={`font-montserrat font-semibold`}>{props.answer}</h6>
      </div>
    </div>
  );
}
