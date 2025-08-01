"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "베이직",
    description: "소규모 창업을 위한 기본 패키지",
    price: "3,500",
    features: [
      "기본 인테리어 지원",
      "초기 교육 프로그램",
      "레시피 및 운영 매뉴얼",
      "마케팅 기본 지원",
      "식자재 공급 시스템",
    ],
    recommended: false,
  },
  {
    name: "프리미엄",
    description: "성공적인 창업을 위한 풀 패키지",
    price: "5,000",
    features: [
      "프리미엄 인테리어 지원",
      "집중 교육 프로그램 (2주)",
      "레시피 및 운영 매뉴얼",
      "통합 마케팅 지원",
      "식자재 공급 시스템",
      "개업 홍보 지원",
      "운영 컨설팅 (6개월)",
    ],
    recommended: true,
  },
  {
    name: "엔터프라이즈",
    description: "대규모 사업을 위한 맞춤형 패키지",
    price: "상담",
    features: [
      "맞춤형 인테리어 설계",
      "VIP 교육 프로그램",
      "독점 지역권 협의",
      "프리미엄 마케팅 전략",
      "전담 컨설턴트 배정",
      "특별 혜택 제공",
    ],
    recommended: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            창업 패키지 안내
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            성공적인 창업을 위한 맞춤형 패키지를 선택하세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 ${
                plan.recommended
                  ? "bg-gradient-to-br from-red-500 to-red-600 text-white shadow-2xl scale-105"
                  : "bg-gray-50 text-gray-900 shadow-lg"
              }`}
            >
              {plan.recommended && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                    <Star size={16} className="mr-1" />
                    추천
                  </div>
                </motion.div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.recommended ? "text-red-100" : "text-gray-600"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  {plan.price === "상담" ? (
                    <span className="text-3xl font-bold">{plan.price}</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className={`ml-2 ${plan.recommended ? "text-red-100" : "text-gray-600"}`}>
                        만원
                      </span>
                    </>
                  )}
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <Check
                      size={20}
                      className={`mr-3 mt-0.5 flex-shrink-0 ${
                        plan.recommended ? "text-yellow-400" : "text-green-500"
                      }`}
                    />
                    <span className={`text-sm ${plan.recommended ? "text-red-50" : "text-gray-700"}`}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.recommended
                    ? "bg-white text-red-600 hover:bg-gray-100"
                    : "bg-project-primary text-white hover:bg-project-primary-dark"
                }`}
                size="lg"
              >
                {plan.price === "상담" ? "문의하기" : "신청하기"}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="w-12 h-12 text-project-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">특별 혜택 안내</h3>
            <p className="text-gray-600 mb-6">
              지금 창업 상담을 신청하시면 다음과 같은 혜택을 드립니다
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-bold text-project-primary mb-2">창업 지원금</h4>
                <p className="text-sm text-gray-600">
                  조건 충족 시 최대 1,000만원 지원
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-bold text-project-primary mb-2">인테리어 할인</h4>
                <p className="text-sm text-gray-600">
                  제휴 업체 통한 20% 할인 혜택
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-bold text-project-primary mb-2">마케팅 무료</h4>
                <p className="text-sm text-gray-600">
                  개업 후 3개월 마케팅 무료 지원
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;