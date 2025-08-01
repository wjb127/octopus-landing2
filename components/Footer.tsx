"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">황금쭈꾸미집</h3>
            <p className="text-sm mb-4">
              대한민국 쭈꾸미 맛의 기준을 세우다
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-project-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-project-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-project-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#brand" className="hover:text-project-primary transition-colors">
                  브랜드 소개
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-project-primary transition-colors">
                  메뉴
                </Link>
              </li>
              <li>
                <Link href="#franchise" className="hover:text-project-primary transition-colors">
                  창업 안내
                </Link>
              </li>
              <li>
                <Link href="#locations" className="hover:text-project-primary transition-colors">
                  가맹점 찾기
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">연락처</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 text-project-primary mt-1" />
                <div>
                  <p className="font-semibold">1577-6615</p>
                  <p className="text-sm">창업문의</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 text-project-primary mt-1" />
                <p className="text-sm">info@24khouses.com</p>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-project-primary mt-1" />
                <p className="text-sm">
                  서울특별시 강남구 테헤란로 123
                  <br />
                  황금빌딩 5층
                </p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">영업시간</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock size={18} className="mr-3 text-project-primary" />
                <span className="text-sm">평일: 09:00 - 18:00</span>
              </li>
              <li className="text-sm ml-9">토요일: 10:00 - 15:00</li>
              <li className="text-sm ml-9">일요일 및 공휴일 휴무</li>
            </ul>
            <div className="mt-6">
              <Link
                href="#franchise"
                className="inline-block bg-project-primary text-white px-6 py-2 rounded-full hover:bg-project-primary-dark transition-colors"
              >
                창업 상담 신청
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-sm"
        >
          <p>
            © 2024 황금쭈꾸미집. All rights reserved. |{" "}
            <Link href="#" className="hover:text-project-primary transition-colors">
              개인정보처리방침
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:text-project-primary transition-colors">
              이용약관
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;