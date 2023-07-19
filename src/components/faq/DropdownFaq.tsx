import React from "react";

interface GroupFaqProps {
  key: string;
  id: string;
  active: string | null;
  changeGroup: (id: string) => void;
  name: string;
}

export default function GroupFaq(props: GroupFaqProps) {
  return (
    <button
      className={`${
        props.active == props.id ? "border-b-2 border-solid border-yellow" : ""
      }
    w-fit mx-4 py-2`}
     
    >
      <a
        onClick={() => {
          props.changeGroup(props.id);
        }}
        className="font-poppins text-blue"
      >
        <p>{props.name}</p>
      </a>
    </button>
  );
}
