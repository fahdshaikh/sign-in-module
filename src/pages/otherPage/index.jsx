import React, { useState } from "react";
import CTabA from "../../components/CTabA";
import tabData from "./tabData.js";

const OtherComponent = () => {
  const [activeTab, setActiveTab] = useState("Maths");
  return (
    <div>
      <CTabA data={tabData} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default OtherComponent;
