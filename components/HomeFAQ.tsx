"use client"
import React, { useState } from "react";

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does your hospital provide?",
      answer:
        "We provide emergency care, specialist consultations, diagnostic tests, surgery, maternity care, and follow-up treatment.",
    },
    {
      question: "Do you accept health insurance?",
      answer:
        "Yes, we partner with a wide network of health insurance providers. Please bring your insurance card during your visit to verify coverage.",
    },
    {
      question: "Can I visit without an appointment?",
      answer:
        "Walk-ins are always welcome for emergency and urgent care. For routine specialist consultations, booking in advance ensures minimal wait times.",
    },
    {
      question: "What should I bring to my appointment?",
      answer:
        "Please bring a valid government ID, your health insurance card, a list of current medications, and any recent medical records or test results.",
    },
    {
      question: "Can family members visit patients?",
      answer:
        "Yes, family visitation is permitted during designated visiting hours. Specific guidelines vary by department to ensure patient rest and safety.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white w-full max-w-2xl mx-auto px-4 mt-20 md:w-1/2">
      <div className="flex flex-col">
        <p className="text-cyan-500 font-semibold text-xs tracking-wider uppercase">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <h2 className="text-gray-900 font-bold text-2xl md:text-3xl mt-1 mb-6">
          Have Questions? We Have Answers.
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-cyan-100 rounded-xl overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 text-left font-medium text-gray-900 hover:bg-cyan-50/50 transition-colors focus:outline-hidden"
                >
                  <span className="text-base md:text-lg font-semibold pr-4">
                    {faq.question}
                  </span>
                  <div className="shrink-0 p-1 rounded-full bg-cyan-50 border border-cyan-200">
                    <svg
                      className={`h-5 w-5 text-cyan-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {isOpen ? (
                        <path d="M5 12h14" />
                      ) : (
                        <path d="M12 5v14M5 12h14" />
                      )}
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed border-t border-cyan-50 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;