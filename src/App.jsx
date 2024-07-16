import React from "react";
import Card from "./components/Card";
import "./App.css";
const App = () => {
  return (
    <div>
      <Card titile="Mastermind School" desc="English Medium School" />
      <Card title="Mc Donalds" desc="Fastfood Item" />
      <Card title="HolidayIn resort" desc="Five statr Hotel" />
      <Card title="American Bank" desc="Your Banking here" />
    </div>
  );
};

export default App;
