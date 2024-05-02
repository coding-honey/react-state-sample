import { useState } from 'react';

export default function UseState() {
  const [cnt, setCnt] = useState(0);
  console.log('initCnt: ' + cnt);

  function handleChange() {
    const prevCnt = cnt;

    setCnt(cnt + 1); // param: value
    // setCnt((cnt) => cnt + 1); // param: function

    console.log(`prev: ${prevCnt} / next: ${cnt}`); // prev: 0 / next: 0
  }

  return (
    <div>
      <div>count: {cnt}</div>
      <button type={'button'} onClick={() => handleChange()}>
        +
      </button>
    </div>
  );
}
