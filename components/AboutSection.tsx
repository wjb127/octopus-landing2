import Image from 'next/image'

const features = [
  {
    id: 1,
    image: '/files/6792784238de7.png',
    title: '특별한 레시피',
    description: '오직 쭈꾸미만을 위한 특별한 양념과 조리법으로 최고의 맛을 구현합니다.'
  },
  {
    id: 2,
    image: '/files/aa3cadc884859.png',
    title: '프리미엄 재료',
    description: '신선한 쭈꾸미와 엄선된 재료만을 사용하여 품질을 보장합니다.'
  },
  {
    id: 3,
    image: '/files/d026e3399a332.png',
    title: '체계적인 창업 지원',
    description: '전국 가맹문의 1577-6615로 체계적인 창업 프로그램을 제공합니다.'
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            황금쭈꾸미집의 <span className="text-brand-red">경쟁력</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            대한민국 쭈꾸미 맛의 기준을 세우는 황금쭈꾸미집만의 특별함을 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div key={feature.id} className="text-center group">
              <div className="relative w-32 h-32 mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Brand Values */}
        <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                "'쭈편단심'"<br />
                <span className="text-brand-red">오직 쭈꾸미만을 바라보는</span><br />
                한 조각의 붉은 마음
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                황금쭈꾸미집은 쭈꾸미 요리에 대한 진정한 열정과 전문성으로
                언제나 변함없는 맛을 제공합니다. 고객들에게 특별한 경험을
                선사하기 위해 끊임없이 연구하고 발전하고 있습니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                  <span className="text-gray-700">신선한 재료와 특별한 레시피</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                  <span className="text-gray-700">체계적인 가맹점 운영 시스템</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                  <span className="text-gray-700">지속적인 메뉴 개발 및 품질 관리</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-80 rounded-xl overflow-hidden">
                <Image
                  src="/files/ec07f839ab70e.png"
                  alt="황금쭈꾸미집 브랜드"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}