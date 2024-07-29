import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ImageBuilder from "../Utility/ImageBuilder";

const imageList = [
  {
    url: "../Images/Surveillance Systems/DVR Surveillance.jpeg",
    text: "DVR Surveillance",
  },
  {
    url: "../Images/Surveillance Systems/Industrial Security.jpeg",
    text: "Industrial Security",
  },
  {
    url: "../Images/Surveillance Systems/Security system.jpeg",
    text: "Security system",
  },
  {
    url: "../Images/Surveillance Systems/Home security.jpeg",
    text: "Home security",
  },
  {
    url: "../Images/Surveillance Systems/Home security2.jpeg",
    text: "Home security",
  },
  {
    url: "../Images/Surveillance Systems/Video Surveillance.jpeg",
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
        <div className="DescText">
          <div>
            <p>
              These systems can be applied to both interior and exterior areas
              of a building or property. They can operate 24/7, can be designed
              to only record in response to movement, or set to record during
              specific times of the day. The cameras may be conspicuous and out
              in the open to deter crime, or they can be more hidden and
              discreet to record evidence with fewer chances of being tampered
              with. However, it is essential to note that laws regulate the
              placement of security cameras within the workplace. These laws
              vary from state to state, so be sure to contact your state’s labor
              agency to learn what your restrictions are.
            </p>
            <p>
              Footage can be monitored live by a security guard, monitored
              remotely if using an IP camera and system (more on that in a
              moment) by a monitoring company, or can simply be recorded and
              stored by a DVR (digital video recorder) or NVR (network video
              recorder) for review later should the need arise. Finally, video
              surveillance systems are closed – this means its signals are not
              broadcast so that others could intercept and view the content.
              Only authorized users can access the recorded material
            </p>
          </div>
          <ImageBuilder imageLists={imageList}></ImageBuilder>
        </div>
      </div>
    </>
  );
}
