import Image from 'next/image'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-brand-gold">창업 문의</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            황금쭈꾸미집과 함께 성공적인 창업을 시작하세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-gold">
                전국 가맹문의
              </h3>
              <div className="space-y-6">
                <div className="flex items-center text-xl">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-bold text-brand-gold">1577-6615</span>
                </div>
                
                <div className="flex items-center text-lg text-gray-300">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div>평일: 09:00 - 18:00</div>
                    <div>토요일: 09:00 - 13:00</div>
                    <div>일요일 및 공휴일 휴무</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-brand-gold mb-4">창업 지원 혜택</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                  <span>체계적인 창업 교육 프로그램</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                  <span>매장 운영 노하우 전수</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                  <span>지속적인 마케팅 지원</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                  <span>원재료 안정적 공급</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6 text-center">
              창업 상담 신청
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">이름</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  placeholder="이름을 입력해주세요"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">연락처</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  placeholder="연락처를 입력해주세요"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">희망 지역</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  placeholder="희망 지역을 입력해주세요"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">문의 내용</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  placeholder="문의 내용을 입력해주세요"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-red hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                상담 신청하기
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Brand Section */}
        <div className="mt-20 pt-16 border-t border-gray-700 text-center">
          <div className="mb-8">
            <Image
              src="/files/e9c9fbfb95f43.png"
              alt="황금쭈꾸미집 로고"
              width={200}
              height={60}
              className="mx-auto mb-4"
            />
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 황금쭈꾸미집. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}