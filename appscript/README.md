# Google Apps Script API 백엔드

## 엔드포인트

- **Read**: `GET ?action=read`
- **Update**: `GET ?action=update&id={number}&is_done={true|false}`

## 사용 시트

- SHEET_URL: https://docs.google.com/spreadsheets/d/xxxxx/edit
- SHEET_NAME: bucketlist

## 주요 코드

- `doGet()`: read, update 처리
- `handleRead()`: 전체 데이터 불러오기
- `handleUpdate()`: ID 기반 상태 변경
