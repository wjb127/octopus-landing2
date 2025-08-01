"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Utensils, Store, Heart, Sparkles, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "프리미엄 품질",
    description: "엄선된 재료와 특별한 레시피로 최고의 맛을 보장합니다",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Utensils,
    title: "다양한 메뉴",
    description: "쭈꾸미볶음부터 대창, 삼겹살까지 풍부한 메뉴 구성",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Store,
    title: "전국 500개 매장",
    description: "전국 어디서나 만날 수 있는 황금쭈꾸미집",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: Heart,
    title: "고객 만족도 1위",
    description: "고객님들의 사랑으로 성장하는 브랜드",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Sparkles,
    title: "차별화된 맛",
    description: "황금쭈꾸미집만의 특제 양념과 조리법",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: TrendingUp,
    title: "지속적인 성장",
    description: "매년 성장하는 대한민국 대표 쭈꾸미 프랜차이즈",
    color: "from-blue-500 to-blue-600",
  },
];

const FeaturesSection = () => {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            왜 <span className="text-project-primary">황금쭈꾸미집</span>인가?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            대한민국 쭈꾸미 프랜차이즈의 새로운 기준을 제시합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex p-4 rounded-full bg-gradient-to-br ${feature.color} text-white mb-6`}
                >
                  <Icon size={28} />
                </motion.div>

                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`h-1 bg-gradient-to-r ${feature.color} absolute bottom-0 left-0`}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center space-x-8 flex-wrap gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-project-primary">15년</div>
              <div className="text-gray-600">전통의 역사</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-project-primary">500+</div>
              <div className="text-gray-600">전국 매장</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-project-primary">100만+</div>
              <div className="text-gray-600">누적 고객</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-project-primary">98%</div>
              <div className="text-gray-600">재방문율</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;