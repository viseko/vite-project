import { useState } from "react";
import calcVh from "../lib/calc-vh";


export default function useVh() {
  const [vh, setVh] = useState(calcVh());

  window.addEventListener("resize", () => {
    setVh(calcVh());
  });

  return vh;
}