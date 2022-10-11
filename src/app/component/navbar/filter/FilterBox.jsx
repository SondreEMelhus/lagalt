import React, { useEffect } from "react";
import IndustryBox from "./IndustryBox";
import KeywordBox from "./KeywordBox";
import SkillBox from "./SkillBox";

import '../../../../css/filterBox.css'
import { Accordion } from "react-bootstrap";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

export default function FilterBox () {

    return (
        <div>
            <Accordion>
                <AccordionItem>
                    <AccordionHeader>Filter</AccordionHeader>
                        <AccordionBody className="filter-box">
                            <IndustryBox className='filter-option' />
                            <KeywordBox className='filter-option' />
                            <SkillBox className='filter-option' />
                        </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    )
}