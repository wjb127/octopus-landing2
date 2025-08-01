"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: "브랜드 소개", href: "#brand" },
    { title: "메뉴", href: "#menu" },
    { title: "창업 안내", href: "#franchise" },
    { title: "가맹점 찾기", href: "#locations" },
    { title: "문의하기", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "text-2xl font-bold",
                isScrolled ? "text-project-primary" : "text-white"
              )}
            >
              황금쭈꾸미집
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "font-medium transition-colors hover:text-project-primary",
                    isScrolled ? "text-gray-700" : "text-white"
                  )}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="#franchise"
                className="bg-project-primary text-white px-6 py-2 rounded-full hover:bg-project-primary-dark transition-colors"
              >
                창업문의
              </Link>
            </motion.div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden transition-colors",
              isScrolled ? "text-gray-700" : "text-white"
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-4 space-y-3">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-project-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
              >
                <Link
                  href="#franchise"
                  className="block w-full text-center bg-project-primary text-white px-6 py-3 rounded-full hover:bg-project-primary-dark transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  창업문의
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;