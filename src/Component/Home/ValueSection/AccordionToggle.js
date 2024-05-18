import React, { useState } from "react";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";

const AccordionToggle = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AccordionItem
      className={`value__accordion-item ${expanded ? "expanded" : ""}`}
    >
      <AccordionItemHeading>
        <AccordionItemButton
          className="value__accordion-header"
          onClick={() => setExpanded(!expanded)}
        >
          <i className={`bx ${item.icon} value__accordion-icon`}></i>
          <h3 className="value__accordion-title">{item.title}</h3>
          <div className="value__accordion-arrow">
            <MdOutlineArrowDropDown size={20} />
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p className="value__accordion-description">{item.description}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default AccordionToggle;
