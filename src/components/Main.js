//import "../style/App.scss";
import Form from "./Form";
import Preview from "./Preview";
import "../style/layout/_card-page.scss";
import React, { useState } from "react";

function Main() {
  // paletas
  const [selectedPalette, setSelectedPalette] = useState("1");

  const handleChangePalette = (ev) => {
    const newValue = ev.currentTarget.value;

    setSelectedPalette(newValue);
  };
  // paletas end
  return (
    <main className="main">
      <Preview selectedPalette={selectedPalette} />
      <Form
        selectedPalette={selectedPalette}
        changePalette={handleChangePalette}
      />
    </main>
  );
}

export default Main;
