import React, { useState } from "react";
import SecurityFamilyGroup from "./SecurityFamilyGroup";
import CustomSoftwareDevelopment from "./SoftwareDS/CustomSoftwareDevelopment";
import MobileApplicationsDevelopment from "./SoftwareDS/MobileApplicationsDevelopment";
import CloudServiceSolutions from "./SoftwareDS/CloudServiceSolutions";

const SoftwareDevServiceyFamily = [
  "Custom Software Development",
  "Mobile Applications Development",
  "Cloud Service Solutions ",
];

const RenderComponent = ({ index }) => {
  switch (index) {
    case 0:
      return <CustomSoftwareDevelopment />;
      break;
    case 1:
      return <MobileApplicationsDevelopment />;
      break;
    case 2:
      return <CloudServiceSolutions />;
      break;

    default:
      break;
  }
};

export default function Security_Solutuions() {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <>
      <div className="heading">Security Solutions</div>
      <div className="app-container">
        <SecurityFamilyGroup
          securityFamilies={SoftwareDevServiceyFamily}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
        <div
          class="vr"
          style={{ height: "200px", margin: "20px", width: "10px" }}
        ></div>
        <div>
          <RenderComponent index={isSelected}></RenderComponent>
        </div>
      </div>
    </>
  );
}
