# BECHEF

### 밀키트 판매 매장 검색 사이트

![readme](https://github.com/user-attachments/assets/e881fbcf-2e9a-4888-a4f3-c691c7798d86)


- 배포 URL: https://gentle-field-017139e00.5.azurestaticapps.net
- Admin ID: admin
- Admin PWD: admin1111


## 프로젝트 소개

- 사용자가 주변 밀키트 판매점의 위치와 재고를 실시간으로 확인가능한 웹사이트 입니다.
- 개인의 경험을 리뷰와 찜 기능으로 기록, 공유 할 수 있습니다.

## 프로젝트 목적

온라인 밀키트사이트전문점에서 주문시 자신에게 도달하기까지의 시간이 걸리지만 이 사이트를 이용하여 자신의 위치에서 가까운 밀키트 판매점을 검색하여 바로 구매가 가능하게 하려는 목적을 가지고 이 사이트를 만들었습니다.

## 팀원 구성

- 김용현
- 강민석
- 오승록
- 이지원

## 개발 기간

- 개발 기간: 2024.06.20 ~ 2024.08.06

## 개발환경 및 개발언어

- Front:
  - React, HTML, tailwindCSS
- Back:
  - Java, SpringBoot, JWT, SpringSecurity
- DataBase:
  - MySQL, Dbeaver
- TeamSpace:
  - Notion, Github
- 배포 환경:
  - Azure
 
## 역할 분담

### 김용현
- UI: 지도, 마이페이지
- 기능: 매장 검색, 마이페이지 리뷰와 점 확인기능, 로그인/회원가입, 메인페이지 백엔드 구현

### 강민석
- UI: 관리자 페이지
- 기능: 회원관리, 메뉴등록, 재고 수정, 관리자페이지, 상세페이지 백엔드 구현

### 오승록
- UI: 로그인/회원가입 페이지
- 기능: 로그인/회원가입 유효성 및 중복 검사

### 이지원
- UI: 매장 상세페이지
- 기능: 매장 정보 불러오기, 찜하기 기능, 리뷰와 별점 등록, 수정 및 삭제

# 프로젝트 페이지별 기능

## 메인 페이지

### 주요 기능
1. 서비스 접속 즉시 현재 위치 기반 검색창과 지도가 나타납니다.
2. 검색 후 리뷰, 별점순 정렬이 가능합니다.
3. 검색 후 검색결과를 누르면 매장 정보 화면으로 이동합니다.
4. 로그인 후 마이페이지 버튼을 누르면 리뷰와 찜 기록이 나타납니다.
5. 리뷰와 찜 리스트에서 원하는 것을 클릭하면 해당 매장으로 이동합니다.

## 프로젝트 페이지별 기능

### 메인 페이지화면
![메인 페이지](https://github.com/user-attachments/assets/b846fb2a-d7f4-4711-b3c6-4d42e8a5b291)

### 매장 상세 정보
![매장 상세 정보](https://github.com/user-attachments/assets/770c4fca-ccd2-4650-8bdc-5167e13d21f3)

---

## 추가 기능 설명
- **지도 기능**: Kakao Maps API를 활용하여 실시간 위치 기반 검색 제공
- **리뷰 시스템**: 사용자 경험을 바탕으로 한 별점 및 코멘트 기능
- **찜하기**: 관심 매장을 저장하고 쉽게 접근할 수 있는 기능



