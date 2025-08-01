# 황금쭈꾸미집 클론 사이트

황금쭈꾸미집 웹사이트를 클래식 HTML/CSS/JavaScript로 클론한 프로젝트입니다.

## 🚀 배포 링크
[Vercel에서 확인하기](배포 후 링크 추가 예정)

## 📁 프로젝트 구조
```
octopus-landing/
├── index.html          # 메인 HTML 파일
├── assets/             # 정적 리소스 폴더
│   ├── *.css          # 스타일시트 파일들
│   ├── *.js           # JavaScript 파일들
│   └── *.png/jpg      # 이미지 파일들
├── vercel.json        # Vercel 배포 설정
└── README.md          # 프로젝트 설명
```

## 🛠 기술 스택
- **HTML5** - 마크업 구조
- **CSS3** - 스타일링 (Tailwind CSS, Bootstrap 포함)
- **JavaScript** - 인터랙션 및 기능
- **Vue.js 3** - 프론트엔드 프레임워크
- **jQuery** - DOM 조작 및 이벤트 처리
- **Font Awesome** - 아이콘
- **Pretendard** - 한글 웹 폰트

## ✨ 주요 기능
- 🔄 원페이지 스크롤 디자인
- 📱 반응형 웹 디자인 (모바일/태블릿/데스크톱)
- 🖼️ 이미지 갤러리 및 라이트박스
- 🎠 캐러셀/슬라이더 컴포넌트
- 📍 주소 검색 (Daum 우편번호 API)
- 📺 YouTube 동영상 임베드
- 📱 모바일 햄버거 메뉴
- ⚡ 이미지 Lazy Loading
- 🎯 부드러운 스크롤 효과

## 🚀 로컬 실행 방법
```bash
# 프로젝트 클론
git clone [repository-url]
cd octopus-landing

# 로컬 서버 실행 (Python 3)
python -m http.server 8000

# 또는 Node.js 사용
npx serve .

# 브라우저에서 http://localhost:8000 접속
```

## 📦 Vercel 배포 방법
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel --prod
```

## 📝 수정 사항
- 원본 `황금쭈꾸미집.html`을 `index.html`로 변환
- `황금쭈꾸미집_files/` 경로를 `assets/`로 수정
- Chrome Extension 관련 코드 제거
- Vercel 배포를 위한 설정 파일 추가

## 🎯 레퍼런스
이 프로젝트는 황금쭈꾸미집 공식 웹사이트를 클론한 것으로, 학습 목적으로 제작되었습니다.