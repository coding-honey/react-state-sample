import React from 'react';

export default function NoState2() {
  let cnt = 0;
  console.log('initCnt: ' + cnt);

  function handleChange() {
    const prevCnt = cnt;
    cnt = cnt + 1;
    console.log(`prev: ${prevCnt} / next: ${cnt}`);

    const $cnt = document.querySelector('#cnt');
    if ($cnt) {
      $cnt.textContent = String(cnt);
    }
  }

  return (
    <div>
      <div>
        count: <span id={'cnt'}>{cnt}</span>
      </div>
      <button type={'button'} onClick={() => handleChange()}>
        +
      </button>
    </div>
  );
}
