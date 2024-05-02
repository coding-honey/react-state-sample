import React from 'react';

export default function NoState1() {
  let cnt = 0;
  console.log('initCnt: ' + cnt);

  function handleChange() {
    const prevCnt = cnt;
    cnt = cnt + 1;
    console.log(`prev: ${prevCnt} / next: ${cnt}`);
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
