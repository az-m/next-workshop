"use client";

import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <p>Count: {count}</p>
    </>
  );
}
