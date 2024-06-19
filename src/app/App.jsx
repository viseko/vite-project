import { useState } from "react"

function App() {
  const [count, setCount] = useState(1);

  const handler = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <button
        onClick={handler}
        className={styles.button}
      >
        Current {count}
      </button>
    </>
  )
}

export default App
