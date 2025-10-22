import React from "react";

export default function TextField() {
  const [count, setCount] = React.useState<number>(0);

  return (
    <>
      <h1>Cssss - {count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        INCREMENT
      </button>
    </>
  );
}
