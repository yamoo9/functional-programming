// --------------------------------------------------------------------------
// 📌 [imperative (jQuery) vs. declarative (Functional Programming)]
// --------------------------------------------------------------------------
// - 명령형 vs. 선언형 프로그래밍 스타일
// --------------------------------------------------------------------------
/*@jsx h */
import { createElement as h, createRoot, useState } from '../../library/y9';


// --------------------------------------------------------------------------
// 명령형 프로그래밍 스타일
// - DOM 스크립트 (Vanilla)
// - jQuery 라이브러리 (https://jquery.com)

// eslint-disable-next-line no-undef
// jQuery(($) => {
//   console.log($.fn.version);
// })


// --------------------------------------------------------------------------
// 선언형 프로그래밍 스타일
// - React 라이브러리 (https://react.dev)
// - React 모방 라이브러리 (lib/y9.js)

function App() {

  const [ count, setCount ] = useState(10);

  return (
    <div>
      <h1>React 아님</h1>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <App />
)