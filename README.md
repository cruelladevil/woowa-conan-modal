# woowa-conan-modal

간단한 모달을 구현할 수 있는 라이브러리입니다.

## 설치 방법

```sh
$ npm install woowa-conan-modal
# or
$ yarn add woowa-conan-modal
```

## 사용 방법

### BottomSheet 컴포넌트 불러오기

```js
import BottomSheet from 'woowa-conan-modal';
```

## Props

trigger: 모달을 열기 위한 요소. React element 형태로 전달합니다.
children: 모달 내부에 들어갈 컨텐츠입니다.

### Props 예시

```js
import BottomSheet from 'woowa-conan-modal';

function App() {
  return (
    <div>
      <BottomSheet trigger={<button>모달 열기</button>}>
        <h2>제목</h2>
        <p>내용</p>
      </BottomSheet>
    </div>
  );
}

export default App;
```
