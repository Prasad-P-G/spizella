import React, { useEffect, useState } from "react";
import ImageBuilder from "../Utility/ImageBuilder";

const imageList = [
  { url: "./Images/Access Control Systems/Tripod.jpg", text: "Tripod" },
  {
    url: "./Images/Access Control Systems/Tripod Bridge.jpg",
    text: "Tripod Bridge",
  },
  {
    url: "./Images/Access Control Systems/Full_Height_2 Line Turnstile.jpg",
    text: "Full Height 2-Line Turnstile",
  },
  {
    url: "./Images/Access Control Systems/Flap Barrier-Gate.jpg",
    text: "Flap Barrier-Gate",
  },
  {
    url: "./Images/Access Control Systems/P Type Swing Gate.jpg",
    text: "P-Type Swing Gate",
  },
  {
    url: "./Images/Access Control Systems/Turnstile lock.jpeg",
    text: "Turnstile lock",
  },
  {
    url: "./Images/Access Control Systems/Full_Height_Turnstile.jpg",
    text: "Full Height Turnstile",
  },
  {
    url: "./Images/Access Control Systems/Full_Height_4 Line Turnstile.jpeg",
    text: "Full Height 4 Line Turnstile",
  },
  {
    url: "./Images/Access Control Systems/Full_Height_3 Line Turnstile.jpeg",
    text: "Full Height 3 Line Turnstile",
  },
  {
    url: "./Images/Access Control Systems/Boom Barrier.jpeg",
    text: "Boom Barrier",
  },
  {
    url: "./Images/Access Control Systems/Bollards.jpeg",
    text: "Bollards",
  },
  {
    url: "./Images/Access Control Systems/Bollards2.jpeg",
    text: "Bollards",
  },
  {
    url: "./Images/Access Control Systems/Automatic Boom Barrier.jpeg",
    text: "Automatic Boom Barrier",
  },
];

export default function Access_control_System() {
  const [startPoint, setstartPoint] = useState(0);
  const [endPoint, setendPoint] = useState(10);
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {
    setCurrentList(imageList.slice(0, 10));
  }, []);

  const ChangeImageList = () => {
    // setstartPoint(11);
    // setendPoint(13);
    console.log("change image list called");
    setCurrentList(imageList.slice(11, 13));
  };

  return (
    <>
      <div className="sub-heading">Acess Security Systems</div>
      <p className="DescText">
        Access control is a data security process that enables organizations to
        manage who is authorized to access corporate data and resources. Secure
        access control uses policies that verify users are who they claim to be
        and ensures appropriate control access levels are granted to users.
      </p>
      <div>
        <ImageBuilder imageLists={imageList}></ImageBuilder>
      </div>
      {/* <div className="next">
        <a className="btn" onClick={ChangeImageList}>
          Next
        </a>
      </div> */}
    </>
  );
}
