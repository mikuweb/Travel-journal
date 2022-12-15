import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import data from "./data";

const cardDisplay = data.map((item) => {
  return <Card key={item.id} item={item} />;
});

function App() {
  console.log(data)
  return (
    <div className="container">
      <Header />
      {cardDisplay}
    </div>
  );
}

export default App;
