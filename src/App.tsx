import { useState } from "react";

import "./App.css";
import BentoMenu from "./components/BentoMenu/BentoMenu";
import MeatballMenu from "./components/meatballMenu/MeatballMenu";

function App() {
  return (
    <>
      <BentoMenu />
      <MeatballMenu />
    </>
  );
}

export default App;
