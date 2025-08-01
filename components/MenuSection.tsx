import Image from 'next/image'

const menuItems = [
  {
    id: 1,
    name: '쭈꾸미볶음',
    description: '매콤달콤한 특제 양념으로 볶은 쭈꾸미',
    image: '/files/24d76d54dff1c.png',
    price: '16,000원'
  },
  {
    id: 2,
    name: '삼겹쭈꾸미',
    description: '삼겹살과 쭈꾸미의 환상적인 조합',
    image: '/files/2870484c62648.png',
    price: '18,000원'
  },
  {
    id: 3,
    name: '우삼겹쭈꾸미',
    description: '프리미엄 우삼겹과 쭈꾸미의 특별한 만남',
    image: '/files/295b498d2f1ee.png',
    price: '20,000원'
  },
  {
    id: 4,
    name: '대창쭈꾸미',
    description: '쫄깃한 대창과 쭈꾸미의 완벽한 조화',
    image: '/files/2ecef0a50e5d1.png',
    price: '19,000원'
  }
]

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-brand-red">메뉴</span> 안내
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            황금쭈꾸미집의 시그니처 메뉴들을 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden group-hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-brand-red">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Feature */}
        <div className="mt-20 bg-gradient-to-r from-brand-red to-red-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              특별한 양념의 비밀
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
              황금쭈꾸미집만의 특별한 양념은 오랜 연구 끝에 완성된 레시피입니다.
              매콤하면서도 달콤한 맛의 균형이 쭈꾸미의 쫄깃한 식감과 어우러져
              잊을 수 없는 맛을 만들어냅니다.
            </p>
          </div>
        </div>

        {/* Additional Images */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            '/files/333a18a6bd0a2.jpg',
            '/files/337965f3aa5d2.png',
            '/files/368e212673c31.jpeg',
            '/files/3738797c89abf.png'
          ].map((image, index) => (
            <div key={index} className="relative h-32 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`메뉴 이미지 ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}