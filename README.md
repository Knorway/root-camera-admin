# 루트 카메라 재고관리 어드민 패널

온라인 카메라 샵의 재고관리를 위해 만들어진 관리자 페이지 프로젝트입니다.

## 프로젝트 데모

https://root-admin.herokuapp.com/ (데모아이디로 로그인하기 버튼 클릭)

## 개요

-   [스택 및 배포](#스택-및-배포)
-   [기능](#기능)
-   [프로젝트 후기](#프로젝트-후기)

## 스택 및 배포 <a id='스택-및-배포'></a>

**프론트**

-   React(CRA), Redux, Redux-actions
-   (기타) [devias kit](https://github.com/devias-io/material-kit-react)을 사용하여 제작하였습니다.

**백엔드**

-   Node.js, Express
-   (데이터베이스) MongoDB, Mongoose
-   (Auth) Passport, JWT

**배포**

-   Heroku

## 기능 <a id='기능'></a>

-   [유저 인증](#유저-인증)
-   [상품 등록](#상품-등록)
-   [상품 수정 및 관리](#상품-수정-및-관리)
-   [상품 검색](#상품-검색)

    <br/>
    <br/>
    <br/>

### 유저인증 <a id='유저-인증'></a>

![유저인증_1](https://github.com/Knorway/ImageBucket/blob/main/ImageBucket/project/root-admin/login_1.gif?raw=true)
<br />

-   HTTP Authorization header에 jwt 토큰을 담아 서버와 통신합니다.
-   유저정보는 로컬 스토리지에 저장되며 이 값을 리덕스 스토어의 디폴트 값으로 사용합니다.
-   앱의 성격상 로그인 페이지와 404페이지를 제외한 모든 페이지는 유저 인증을 요구합니다.

<details>
<summary>관련 코드</summary>
<div>
<br/>

**프론트**

[frontend/src/utils/useAuth.jsx](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/utils/useAuth.js)

[frontend/src/utils/modules/index.js](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/modules/index.js)

[frontend/src/views/auth/LoginView.jsx](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/views/auth/LoginView.jsx#L32)

**서버**

[backend/middlewares/authMiddleware.js](https://github.com/Knorway/root-camera-admin/blob/master/backend/middlewares/authMiddleware.js)

[backend/controllers/userController.js](https://github.com/Knorway/root-camera-admin/blob/master/backend/controllers/userController.js)

</div>
</details>
<br/>

### 상품 등록 <a id='상품-등록'></a>

![상품등록_1](https://github.com/Knorway/ImageBucket/blob/main/ImageBucket/project/root-admin/stock_1.gif?raw=true)
<br />

-   상단의 재고 추가 버튼을 눌러 DB에 임의의 pin이 부여된 빈 상품을 만들고 그 결과를 받아 새로운 상품을 표시합니다
-   한번에 많은 양의 재고를 등록하게 되는 점과 원래 엑셀을 사용했던 클라이언트와 의견을 조율하여 가장 원하는 방향으로 제작하게 되었습니다.
-   디테일 페이지를 들어가지 않고도 빠른 재고 입력과 마크업이 가능하게 수정 필드를 배치하며 디테일 페이지와의 기능을 분리했습니다.

<details>
<summary>관련 코드</summary>
<div>
<br/>

**프론트**

[frontend/src/view/stocks/StockListView/StockList.jsx](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/views/stocks/StockListView/StocksList.jsx#L34)

[frontend/src/view/stocks/StockListView/StockListItem.jsx](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/views/stocks/StockListView/StockListItem.jsx#L28)

[frontend/src/view/stocks/StockListView/Toolbar.jsx](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/views/stocks/StockListView/Toolbar.jsx#L38)

[frontend/src/view/stocks/AutoTotalCostField.jsx](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/views/stocks/AutoTotalCostField.jsx#L12)

[frontend/src/util/useCreateStock.js](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/utils/useCreateStock.js)

[frontend/src/modules/stock.js](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/modules/stock.js)

**서버**

[backend/controllers/stockContoller.js](https://github.com/Knorway/root-camera-admin/blob/master/backend/controllers/stockController.js)

</div>
</details>
<br/>

### 상품 수정 및 관리 <a id='상품-수정-및-관리'></a>

-   **상품 수정**

![상품관리_1](https://github.com/Knorway/ImageBucket/blob/main/ImageBucket/project/root-admin/stock_2.gif?raw=true)
<br />

-   재고 등록이후 디테일한 재고 수정기능과 판매된 상품으로 전환하고 싶은 페이지를 위한 기능이 있는 페이지입니다.
-   상단 토글 버튼을 눌러 판매금액이나 세부사항을 설정 가능하며 이 상태로 저장하게 될 경우 상품은 재고 페이지에서 판매 페이지로 넘어가게 됩니다.
-   재고 리스트 페이지와 마찬가지로 자동 계산필드가 적용되어 있습니다.
-   수정된 상품들의 필드는 리덕스 스토어의 해당 객체에 쌓여 저장 버튼을 누를 때 한꺼번에 서버에 보내게 됩니다.

<details>
<summary>관련 코드</summary>
<div>
<br/>

**프론트**

[frontend/src/modules/editedStocks.js](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/modules/editedStocks.js)

[frontend/src/views/stocks/StockDetailView/index.jsx](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/views/stocks/StockDetailView/index.jsx#L23)

[frontend/src/views/stocks/StockDetailView/StockDetailIn.jsx](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/views/stocks/StockDetailView/StockDetailIn.jsx#L26)

[frontend/src/views/stocks/StockDetailView/StockDetailOut.jsx](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/views/stocks/StockDetailView/StockDetailOut.jsx#L31)

**서버**

[backend/controllers/stockContoller.js](https://github.com/Knorway/root-camera-admin/blob/master/backend/controllers/stockController.js#L77)

</div>
</details>
<br/>

-   **상품 판매**

![상품관리_2](https://github.com/Knorway/ImageBucket/blob/main/ImageBucket/project/root-admin/sale_1.gif?raw=true)
<br />

-   판매 완료로 설정된 재고들은 판매 카테고리에서 관리하게 됩니다.
-   상품 등록 페이지와 마찬가지로 판매 상품에 대한 빠른 조회나 수정이 가능하게 아코디언 필드가 추가 되어있습니다.

<details>
<summary>관련 코드</summary>
<div>
<br/>

**프론트**

[frontend/src/views/sales/SaleListView/SalesList.jsx](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/views/sales/SaleListView/SalesList.jsx#L36)

[frontend/src/views/sales/SaleListView/SalesListItem.jsx](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/views/sales/SaleListView/SalesListItem.jsx#L33)

[frontend/src/views/sales/AutoProfitField.jsx](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/views/sales/AutoProfitField.jsx)

**서버**

[backend/controllers/salesController.js](https://github.com/Knorway/root-camera-admin/blob/master/backend/controllers/saleController.js)

</div>
</details>
<br/>

### 상품 검색 <a id='상품-검색'></a>

![상품조회_1](https://github.com/Knorway/ImageBucket/blob/main/ImageBucket/project/root-admin/search_1.gif?raw=true)
<br />

-   가장 중요한 몇가지 필드들에 대해서 세부 검색이 가능한 검색창입니다.
-   날짜를 지정해서 검색하는 것도 가능하며 검색어를 포함하여 그 기간내의 상품을 조회합니다.
-   또한 상기된 정보를 포함하는 리덕스 스토어를 참고하여 페이지네이션을 할 때도 적용됩니다.

<details>
<summary>관련 코드</summary>
<div>
<br/>

**프론트**

[frontend/src/modules/searchQuery.js](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/modules/searchQuery.js)

[frontend/src/utils/useSearchQuery.js](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/utils/useSearchQuery.js)

[frontend/src/utils/useToolbar.js](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/utils/useToolbar.js)

**서버**

[backend/controllers/stockContoller.js](https://github.com/Knorway/root-camera-admin/blob/master/backend/controllers/stockController.js#L5)

</div>
</details>
<br/>

**많은 컴포넌트에서 공통으로 사용되는 리덕스 모듈 및 커스텀 훅들**

<details>
<summary>관련 코드</summary>
<div>
<br/>

[frontend/src/modules/request.js](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/modules/request.js)

[frontend/src/modules/utils/createRequestThunk.js](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/modules/utils/createRequestThunk.js)

[frontend/src/utils/useRequest.js](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/utils/useRequest.js)

[frontend/src/utils/useToolbar.js](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/utils/useToolbar.js)

[frontend/src/utils/useAuth.js](https://github.com/Knorway/root-camera-admin/blob/master/frontend/src/utils/useAuth.js)

</div>
</details>
<br/>

## 프로젝트 후기 <a id='프로젝트-후기'></a>

온라인 카메라 샵을 운영하는 지인을 위해 먼저 제안하여 만들어 지게 된 어드민 페이지 입니다. 여러 이유로 결국 완성까지는 가지 못했지만([해당 포스트](https://knorway.github.io/posts/2020-06-27)) 최초의 의도인 학습적인 측면에서는 많은 도움이 됐던 프로젝트 입니다. 독학으로 학습을 하며 무엇을 왜 배워야 하는지 구체적인 필요보다 다음 것을 배워야한다는 불안감이 많이 있었는데 그것보다 내가 지금 현재 가진 것으로 어디까지 할 수 있는지, 의미있는 것을 만들 수 있는지에 대한 고민이 있어 먼저 제안하게 됐고 시작하게 됐던 프로젝트 입니다.
기술적인 측면에서는 원래 관리하던 엑셀파일을 MongoDB에 넣는 것부터 시작해 리덕스로 꽤 많은 양의 데이터를 원격으로 가져오는 등 많은 경험을 하게 됐습니다.
그에 따라 일정하고 일관된 패턴과 커스텀 훅을 만드는 것을 최선으로 구조를 설계하려고 노력했습니다. 아쉬운 점은 이러한 일관된 구조를 위해 간단한 처리는 간단하게 처리해도 됐을 텐데 일관성을 위해 복잡한 패턴과 구조에 억지로 맞추는 경우도 생겨 리덕스로 구조가 커지면 이렇게 되는 걸까 내 시야가 좁은 걸까 하는 고민도 많이 했습니다.
또한 어드민 앱의 특성상 한 화면에 보여지는 폼이 적게는 50개에서 수백개가 되고 템플릿이 사용한 마테리얼 UI도 꽤나 무거워서 글자를 타이핑 하는 시간만큼의 시간이 다시 걸려야 글자가 표시되는 이슈가 발생해 필요에 의해 최적화를 해야만 했던 프로젝트이기도 합니다. 해당 이슈는 submit 할 때 단 한번만 필요한 값을 계속해서 컴포넌트에서 의존하고 있었던 것이 문제였고 이와 관련한
생성/업데이트/조회 등의 모든 로직을 리덕스 컴포넌트로 이전하고 thunk 함수내의 getState로 조회 하는 그 순간 참고해 값을 서버로 보내는 것으로 해결했습니다. 가장 아쉬운 것은
사용자가 있는 최종 프로덕트 버전까지 가지 못했다는 점입니다. 원래 엑셀을 사용하여 관리를 하던 경험을 최대한 주기 위해 UX적인 측면도 함께 맞춰나가며 순조로운 측면도 있었지만
최종 제품이 나오기 위해선 정말 더 많은 노력이나 사전 협의가 중요하다는 것, 유저와의 대화나 의견조율이 얼마나 중요한지 알게되었습니다.
