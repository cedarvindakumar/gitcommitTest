import React, { useRef } from 'react';

function UseRef() {
  const inputRef:any = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UseRef;