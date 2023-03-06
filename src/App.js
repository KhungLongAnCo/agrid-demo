import React, { useState } from "react";
import { Radio, Tabs } from "antd";
import "./App.css";
import Intro from "./steps/Intro";
import Config from "./steps/Config";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import Components from "./steps/Components";
import SimpleDemo from "./demo/SimpleDemo";
import ExpandedRowTable from "./demo/ExpandedRow";

const listTab = [
  {
    label: "Intro",
    key: 1,
    children: <Intro />,
  },
  {
    label: "Config",
    key: 2,
    children: <Config />,
  },
  {
    label: "Components",
    key: 3,
    children: <Components />,
  },
  {
    label: "Demo",
    key: 4,
    children: (
      <div>
        <SimpleDemo />
        <ExpandedRowTable />
      </div>
    ),
  },
];

const App = () => {
  const [mode, setMode] = useState("top");

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <div className="App">
      <Tabs
        defaultActiveKey="1"
        tabPosition={mode}
        style={{ height: 220 }}
        items={listTab}
      />
    </div>
  );
};

export default App;
