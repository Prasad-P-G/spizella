import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ImageBuilder from "../Utility/ImageBuilder";

const imageList = [
  {
    url: "./Images/Surveillance Systems/DVR Surveillance.jpeg",
    text: "DVR Surveillance",
  },
  {
    url: "./Images/Surveillance Systems/Industrial Security.jpeg",
    text: "Industrial Security",
  },
  {
    url: "./Images/Surveillance Systems/Security system.jpeg",
    text: "Security system",
  },
  {
    url: "./Images/Surveillance Systems/Home security.jpeg",
    text: "Home security",
  },
  {
    url: "./Images/Surveillance Systems/Home security2.jpeg",
    text: "Home security",
  },
  {
    url: "./Images/Surveillance Systems/Video Surveillance.jpeg",
    text: "Video Surveillance",
  },
];

export default function Surveillance_System() {
  const [imagesLists, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const handlePageClick = (imagesLists) => {
    setImages(imageList);
    setPageNumber(imagesLists.selected);
    console.log("selcted Page number : " + imagesLists.selected);
  };

  return (
    <>
      <div>
        <div className="sub-heading">Surveillance System</div>
        <ImageBuilder imageLists={imageList}></ImageBuilder>
      </div>
    </>
  );
}
