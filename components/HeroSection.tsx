"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-700 to-orange-600 opacity-90" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              대한민국 쭈꾸미 맛의
              <br />
              <span className="text-yellow-400">기준을 세우다</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl mb-8 text-red-100"
            >
              황금쭈꾸미집의 특별한 레시피로
              <br />
              최고의 맛을 경험하세요
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8"
              >
                <Phone className="mr-2 h-5 w-5" />
                창업문의 1577-6615
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-project-primary"
              >
                <MapPin className="mr-2 h-5 w-5" />
                가맹점 찾기
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 text-center"
            >
              <div>
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-red-100">전국 가맹점</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">24K</div>
                <div className="text-sm text-red-100">프리미엄 품질</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">No.1</div>
                <div className="text-sm text-red-100">쭈꾸미 프랜차이즈</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-[url('/images/hero-dish.jpg')] bg-cover bg-center" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-4 -right-4 bg-yellow-500 text-black rounded-full p-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">HOT</div>
                  <div className="text-sm">인기메뉴</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;