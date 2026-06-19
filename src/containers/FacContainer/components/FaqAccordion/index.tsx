"use client";

import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

import styles from "./FaqAccordion.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

const FaqAccordion = ({ items }: FaqAccordionProps) => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenedIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <div className={styles.FaqAccordion}>
      {items.map((item, index) => {
        const isOpen = openedIndex === index;

        return (
          <div key={item.question} className={styles.faqItem}>
            <button
              type="button"
              className={styles.questionButton}
              onClick={() => handleToggle(index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>

              <IoChevronDown
                size={22}
                className={isOpen ? styles.iconOpen : styles.icon}
              />
            </button>

            {isOpen && (
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
