# ✅ Bucketlist Cards

버킷리스트 형식의 체크리스트를 제공하는 카드 UI 기반 웹 앱입니다.  
React + Tailwind + Vite로 제작되었으며, Google Apps Script와 연동하여 데이터를 읽고 씁니다.

---

## 🛠 기술 스택

- **Frontend**
  - Vite + React + TypeScript
  - Tailwind CSS
- **Backend**
  - Google Apps Script (스프레드시트 연동 API)
- **배포**
  - Netlify

---

## 📁 주요 폴더 구조

```
bucketlist-cards-main/
├── appscript/ # Google Apps Script 코드 (서버 역할)
│ └── Code.gs
├── public/ # 정적 자산
│ └── favicon.png
├── src/ # 프론트엔드 소스 코드
│ ├── components/ # 카드 UI, 프로그레스 바, 로딩 화면 등
│ │ ├── Card.tsx
│ │ ├── CardGrid.tsx
│ │ ├── ProgressBar.tsx
│ │ └── LoadingScreen.tsx
│ ├── App.tsx # 메인 앱 로직 (fetch, toggle 등)
│ ├── App.css
│ ├── index.css # Tailwind 및 글로벌 스타일
│ ├── main.tsx
│ └── types.ts # ChecklistItem 타입 정의
├── index.html
├── package.json
└── vite.config.ts
```

---

## ⚙️ 환경 변수 설정

`.env` 파일에 아래 항목을 추가하세요:

```env
VITE_APP_SCRIPT_URL=https://script.google.com/macros/s/.../exec
```

- 해당 URL은 배포된 Google Apps Script 웹앱 주소여야 합니다.
- action=read로 전체 데이터를 GET, action=update&id=0&is_done=true로 상태를 업데이트합니다.

---

## 🚀 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드 (Netlify 배포용)
npm run build
```

## 🧩 핵심 기능

- 카드 형태의 체크리스트 UI (Card.tsx, CardGrid.tsx)

- 항목 완료 여부 토글 및 실시간 반영 (App.tsx)

- 진행률 바 표시 (ProgressBar.tsx)

- 로딩 중 전체화면 스피너 제공 (LoadingScreen.tsx)

- Google Apps Script 기반의 DB-less API

## 📡 API 명세

### 📥 GET /?action=read

전체 체크리스트 항목을 불러옵니다.

#### Method: GET

#### Query Parameters:

- action=read (필수)

#### Response (200 OK)

```json
[
  {
    "id": 0,
    "activity": "프랑스어 하기",
    "category": "외국어",
    "is_done": false,
    "updated_at": "2025-05-11T08:16:00.000Z"
  },
  {
    "id": 1,
    "activity": "후쿠오카 가기",
    "category": "여행",
    "is_done": true,
    "updated_at": "2025-05-11T08:16:00.000Z"
  }
]
```

### 🔄 GET /?action=update&id=<id>&is_done=<true|false>

체크리스트 항목의 완료 여부(`is_done`)를 토글합니다.

#### Method: GET

#### Query Parameters:

- action=update (필수)
- id = 항목의 고유 ID (예: 0)
- is_done = true 또는 false

#### Response (200 OK)

```
{
  "message": "Item updated successfully."
}
```

### 📋 데이터 스키마

```ts
type ChecklistItem = {
  id: number; // 고유 식별자
  activity: string; // 할 일 텍스트
  category: string; // 분류 (ex: 일상, 여행)
  is_done: boolean; // 완료 여부
  updated_at: string; // ISO 형식 타임스탬프
};
```
