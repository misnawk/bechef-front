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

### 주요 기능
1. 서비스 접속 즉시 현재 위치 기반 검색창과 지도가 나타납니다.
2. 검색 후 리뷰, 별점순 정렬이 가능합니다.
3. 검색 후 검색결과를 누르면 매장 정보 화면으로 이동합니다.
4. 로그인 후 마이페이지 버튼을 누르면 리뷰와 찜 기록이 나타납니다.
5. 리뷰와 찜 리스트에서 원하는 것을 클릭하면 해당 매장으로 이동합니다.

# 

### 메인 페이지 화면
![메인 페이지](https://github.com/user-attachments/assets/b846fb2a-d7f4-4711-b3c6-4d42e8a5b291)
- 서비스 접속 초기화면으로 검색창과 지도가 나타납니다.
- 검색 후 리뷰, 별점순 정렬이 가능합니다.
- 검색 후 검색결과를 누르면 매장 정보 화면으로 이동합니다.

 
### 매장 상세 화면
![매장 상세 정보](https://github.com/user-attachments/assets/770c4fca-ccd2-4650-8bdc-5167e13d21f3)
- 로그인후 마이페이지 버튼을 누르면 리뷰와 찜 기록이 나타납니다.
- 리뷰와 찜 리스트에서 원하는 것을 클릭하면 해당 매장으로 이동합니다.

## 지도 보기 화면
![지도 보기](https://github.com/user-attachments/assets/8dba85d6-b2ed-4c0b-9325-0537f589d125)
- 현재 위치 버튼을 누르게 되면 자신의 위치를 반영해 지도가 이동하며 마커로 표시해줍니다.
- 마우스 휠, 확대, 축소버튼으로 지도의 확대 축소가 가능합니다.


## 회원 탈퇴 화면
![회원탈퇴(4)](https://github.com/user-attachments/assets/31403b40-3c8c-42d5-98b2-bda1edc68102)
- 회원탈퇴 버튼 클릭시 알림창으로 한번 더 확인후 진행합니다.


## 회원가입 페이지 화면
![회원가입(6)](https://github.com/user-attachments/assets/e1e0d16a-975f-42f6-82a8-6587a26242b1)
- 회원가입시 유효성 검사를 통해 회원가입을 진행합니다.
- 회원가입시 springSecurity 에서 제공하는 BCryptPasswordEncoder 를사용하여 PW가 암호화됩니다.

## 로그인 페이지 화면
![로그인(5)](https://github.com/user-attachments/assets/7ac603aa-d5e2-4c08-8c66-e6dc78e07417)
- 프론트에서는 서버에게 
- 서버는 암호화된 PW를 비밀키를 사용해서 검증합니다. 


## 매장 상세페이지 화면
![전체적인 메뉴페이지](https://github.com/user-attachments/assets/2fae2d1b-8a83-49fc-b37c-1d8bbf588139)
![메뉴](https://github.com/user-attachments/assets/ae8523ff-96b2-4439-87f8-8eef15e145fc)
- 각 매장의 정보를 표시합니다.
- 메뉴정보, 리뷰 부분은 정보가 많기에 스크롤기능을 사용해 좀 더 보기 편하게 만들었습니다.

## 찜 화면
![찜(9)](https://github.com/user-attachments/assets/957df134-beeb-42a3-90e5-0ec1dbd71772)
- 하트 버튼으로 찜 기능을 구성하였습니다.

## 리뷰등록/리뷰수정/리뷰삭제 화면
![리뷰 등록,수정,삭제(9)](https://github.com/user-attachments/assets/640276bf-162c-4645-bd81-80f24504fc36)
- 리뷰 등록

## 관리자페이지/회원강퇴 화면
![관리자페이지(13)](https://github.com/user-attachments/assets/52ae6465-9205-41d5-b066-3a23178553a3)
- 로그인시 jwt토큰에 role을 넣어서 role이 관리자일경우 관리자 페이지로 이동합니다.
- 관리자 페이지중 회원관리에서 회원을 삭제할 수 있습니다.

## 상품등록 화면
![상품등록(14)](https://github.com/user-attachments/assets/9ae048b1-3940-4d1a-a8ac-b695255e58a1)
- 관리자 페이지중 메뉴등록에서 각 매장별 메뉴를 등록 할 수 있습니다

## 상품 수량 화면
![재고 수정 영상(12)](https://github.com/user-attachments/assets/3b4f49fd-a94f-49f6-95e0-bd62e2045411)
- 관리자 페이지중 재고수정에서 각 매장별 메뉴의 재고를 수정 할 수 있습니다.


## 느낀점

- 김용현
  - 이번 프로젝트를 통해 Spring Boot를 이용한 서버 구현과 React에서 지도 API를 사용하는 것이 처음엔 복잡하고 어려웠습니다. 두 기술을 통합하여 RESTful API를 설계하는 데 많은 어려움이 있었지만, 팀원들과 긴밀히 협력하고 다양한 온라인 자료를 활용하여 성공적으로 프로젝트를 완료할 수 있었습니다.
 
- 강민석
  - 리액트로 첫 프로젝트를 진행하면서 수많은 어려움이있었지만 그만큼 자신이 크게 성장했음을 알았습니다.
프로젝트 초기에 걱정도많았지만 , 프로젝트를 즐기고 있는 저를 발견하며 뿌듯함을 느꼈습니다. 또한, 팀원들과의 활발한 소통을 통해 다양한 지식과 기술을 습득할 수 있었고, 이러한 과정을 거쳐 프로젝트의 결과물도 만족스럽게 완성될수있었습니다.
  
- 이지원
  - 찜, 리뷰, 별점 등 쉬워보이는 기능들이 생각보다 복잡하고 유기적으로 엮여있다는 걸 알게 되었다. 또한 프론트와 데이터베이스, 서버간의 연동에 대해서 파악하고 이해하여 공부할 수 있었다. 내가 부족한게 뭐고 무엇을 더 잘할 수 있는지 파악할 수 있었으며 팀원간의 협업과 일정관리의 중요성에 대해 습득할 수 있었다.
  
- 오승록
  - 코딩으로 팀 단위의 프로젝트를 한게 처음이라
새로운 경험이었고 짧은 기간동안 많이 배웠습니다. 프로젝트를 진행하면서 저 자신에게 부족함을 많이 느꼈고 기능 구현에만 집중하느라 제대로 기록을 남기지 못한게 개인적으로 아쉬웠습니다. 그래도 팀원들 덕분에 무사히 프로젝트를 마칠 수 있어서 정말 감사하다고 말씀드리고 싶습니다
