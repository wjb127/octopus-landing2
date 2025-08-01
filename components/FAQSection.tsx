"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "황금쭈꾸미집 창업 비용은 얼마인가요?",
    answer:
      "창업 비용은 매장 규모와 입지에 따라 다르지만, 일반적으로 3,500만원~5,000만원 사이입니다. 자세한 상담을 통해 맞춤형 견적을 제공해드립니다.",
  },
  {
    question: "창업 교육은 어떻게 진행되나요?",
    answer:
      "본사에서 2주간의 집중 교육 프로그램을 제공합니다. 조리 실습, 매장 운영, 고객 서비스, 마케팅 등 창업에 필요한 모든 내용을 체계적으로 교육합니다.",
  },
  {
    question: "로열티는 얼마인가요?",
    answer:
      "매출의 3%를 로열티로 받고 있으며, 이는 업계 최저 수준입니다. 가맹점주님의 수익을 최우선으로 생각합니다.",
  },
  {
    question: "식자재는 어떻게 공급받나요?",
    answer:
      "본사에서 엄선한 고품질 식자재를 안정적으로 공급합니다. 대량 구매를 통한 원가 절감 혜택도 제공해드립니다.",
  },
  {
    question: "창업 후 지원은 어떻게 되나요?",
    answer:
      "개업 후에도 지속적인 관리와 지원을 제공합니다. 정기적인 슈퍼바이저 방문, 신메뉴 교육, 마케팅 지원 등 성공적인 운영을 위한 모든 지원을 아끼지 않습니다.",
  },
  {
    question: "예상 수익은 얼마나 되나요?",
    answer:
      "입지와 운영에 따라 차이가 있지만, 평균적으로 월 매출 3,000만원~5,000만원을 기록하고 있습니다. 성실한 운영 시 안정적인 수익을 기대할 수 있습니다.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <HelpCircle className="w-12 h-12 text-project-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            황금쭈꾸미집 창업에 대해 궁금하신 점을 확인해보세요
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-project-primary flex-shrink-0" />
                  </motion.div>
                </div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white rounded-b-lg px-6 pb-6 -mt-2">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            더 궁금하신 사항이 있으신가요?
          </p>
          <button className="bg-project-primary text-white hover:bg-project-primary-dark px-8 py-3 rounded-full font-medium transition-colors">
            1:1 상담 신청하기
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;