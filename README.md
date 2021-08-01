# musinsa
무신사 과제를 위한 repository입니다.

## 프로젝트 구조
---
### 1. SCSS
entry/scss/
|
|– abstracts/
|   |– _variables.scss    # SCSS 변수
|   |– _placeholder.scss  # SCSS 플레이스홀더
|   |– _mixins.scss       # SCSS 믹스인
|
|– base/
|   |– _reset.scss        # 리셋
|   |– _common.scss       # 공통
|
|– components/
|   |– _button.scss       # 버튼
|   |– _icon.scss         # 아이콘
|   |– _navigation.scss   # 내비게이션
|   |– _swiper.scss       # 스와이프
|
|– layout/
|   |– _header.scss       # 헤더
|   |– _ranking.scss      # 랭킹
|   |– _codi.scss         # 코디
|   |– _update.scss       # 업데이트
|
|– index.scss

### 2. JavaScript
entry/js/
|
|– components/
|   |– swiper.js          # 스와이프
|   |– tab.js             # 탭메뉴
|   |– ranking.js         # 랭킹 배지
|   |– productsLimit.js   # 상품 개수
|   |– scroll.js          # 스크롤
|
|– index.js

### 3. library
libs/
|
|– css/
|   |– swiper/
|        |- 6.8.0/
|             |- swiper-bundle.min.css
|– js/
|   |– swiper/
|        |- 6.8.0/
|             |- swiper-bundle.min.js
| 

### 4. webpack
/
|- webpack.config.js       # 웹팩 설정 파일
|- js-config.js            # js 설정 파일
|- css-config.js           # css 설정 파일

### 5. HTML
/
|- index.html              # 인덱스 html


## 실행 방법
---
### 1. 프로젝트 clone
* [git clone 주소 : https://github.com/yulyul2/musinsa.git] 
* 위 주소로 프로젝트를 받아주세요

### 2. 패키지 설치
``` bash
$ npm install
```
위 명령어로 패키지를 설치해주세요

### 3. 빌드
```bash
$ npm run build 
```
위 명령어로 프로젝트를 빌드합니다

### 4. 결과물 확인
* dist 폴더가 생성 되었다면 폴더안 index.html을 실행하여 확인 하시면 됩니다.

