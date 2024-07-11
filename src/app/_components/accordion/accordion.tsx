"use client";

import { useState } from "react";
import { AccordionProps } from "./accordion.types";
import { IconChevronDown, IconChevronUp } from "../icons/icons";

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  function toggleAccordion(index: number) {
    setActiveIndex(activeIndex === index ? null : index);
  }
  return (
    <div className="accordion">
      {data.length === 0 && <p>این دوره سوالات متداول ندارد</p>}
      {data.map((item, index) => (
        <div key={`accordion-${item.id}`}>
          <h2 className="accordion-title">
            <button
              onClick={() => toggleAccordion(index)}
              type="button"
              className={`${
                index === activeIndex ? "text-white" : "text-base-content"
              }`}
            >
              <span>{item.title}</span>
              {activeIndex === index ? (
                <IconChevronUp width={18} />
              ) : (
                <IconChevronDown width={18} />
              )}
            </button>
          </h2>
          {activeIndex === index && (
            <div className={`accordion-content`}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
