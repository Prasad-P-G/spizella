import React, { useState } from "react";
import SecurityFamilyGroup from "./SecurityFamilyGroup";
import Access_control_System from "./Security_Solutions/Access_control_System";
import Surveillance_System from "./Security_Solutions/Surveillance_System";
import Cyber_Security_Service from "./Security_Solutions/Cyber_Security_Service";
import Others from "./Security_Solutions/Others";

const securityFamily = [
  "Access Control Systems",
  "Surveillance Systems",
  "Cyber Security Services",
  "Other Services",
];

const RenderComponent = ({ index }) => {
  switch (index) {
    case 0:
      return <Access_control_System></Access_control_System>;
      break;
    case 1:
      return <Surveillance_System></Surveillance_System>;
      break;
    case 2:
      return <Cyber_Security_Service />;
      break;

    case 3:
      return <Others />;
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
          securityFamilies={securityFamily}
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
