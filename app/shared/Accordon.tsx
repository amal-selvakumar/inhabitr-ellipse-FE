import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

interface AccordionProps {
  title: string;
  details: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className=" rounded-lg overflow-hidden">
      <button
        onClick={toggleAccordion}
        className="flex items-center justify-between w-full p-4  focus:outline-none"
      >
        <span className="text-s font-bold">{title}</span>
        {isOpen ? (
          <HiChevronUp  />
        ) : (
          <HiChevronDown  />
        )}
      </button>
      {isOpen && (
        <div className="p-4 ">
          {details}
        </div>
      )}
    </div>
  );
};

export default Accordion;
