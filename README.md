# react-news-app

> **NewsAPI**를 사용하여 카테고리별 헤드라인을 제공하는 **React + Vite** 기반 뉴스 웹 애플리케이션이다.

---

## 1. 개요
본 프로젝트는 **NewsAPI**에서 받아온 데이터를 React의 **상태 관리**와 **styled-components**로 작성된 UI에 결합해, 사용자가 원하는 뉴스 카테고리를 손쉽게 탐색하도록 설계한다. 간결한 코드 구조와 반응형 디자인을 지향한다.

## 2. 주요 기능
- **카테고리 필터링**  
  `Business | Entertainment | General | Health` 등 카테고리 버튼을 클릭해 즉시 헤드라인을 전환한다.  
- **반응형 UI**  
  `styled-components`의 미디어 쿼리를 활용해 데스크톱·태블릿·모바일 해상도에 자동 대응한다.  
- **API 통신 모듈화**  
  `src/hooks/useNewApi.js`에서 Axios 호출 로직을 캡슐화해 재사용성을 높인다.  
- **컴포넌트 단위 스타일링**  
  `Box`, `Button`, `HeaderTextCon` 등 모든 UI 요소를 CSS-in-JS로 관리해 전역 CSS 충돌을 방지한다.

## 3. 기술 스택
| 영역 | 사용 기술 |
|------|-----------|
| **프레임워크** | React 18, Vite |
| **스타일링** | styled-components |
| **HTTP 통신** | Axios |
| **패키지 매니저** | npm *(Yarn 미사용)* |

## 4. 프로젝트 구조
react-news-app/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  ├─ Header.jsx         # 카테고리 네비게이션
│  │  └─ StyledCom.jsx      # 스타일 컴포넌트 데모
│  ├─ hooks/
│  │  └─ useNewApi.js       # NewsAPI 호출 모듈
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
└─ vite.config.js

## 5. 시작하기

### 5-1. 필수 사전 준비
1. [NewsAPI](https://newsapi.org/) 회원가입 후 **API Key** 발급
2. 프로젝트 루트에 `.env` 파일 생성
3. VITE_APP_NEWS_API_KEY=  **!!YOUR_NEWSAPI_KEY!!**

### 5-2. 설치 및 실행
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev     # http://localhost:5173

# 프로덕션 빌드
npm run build   # dist/ 생성

# 로컬 빌드 미리보기
npm run preview
```

## 6. 스크린샷
> 필요 시 `public/screenshots/` 폴더에 이미지를 추가하고 아래 경로를 수정한다.  
> `<img src="public/screenshots/desktop-demo.png" width="80%" alt="데스크톱 화면 예시">`

## 7. 환경 변수
| 변수명 | 설명 |
|--------|------|
| `VITE_APP_NEWS_API_KEY` | NewsAPI 개인 키 |

## 8. 커밋 메시지 컨벤션
- 유형 : `feat`, `fix`, `refactor`, `docs`, `chore`
- 예시 : `feat: 카테고리 선택 시 스크롤 위치 초기화`

## 9. 향후 개선 과제
- 무한 스크롤 및 **IntersectionObserver** 기반 추가 로딩
- 테스트 코드(Vitest) 및 CI 워크플로 도입
- 다국어(Localization) 지원

## 10. 라이선스
MIT License를 따른다. 자세한 내용은 `LICENSE` 파일을 확인한다.
