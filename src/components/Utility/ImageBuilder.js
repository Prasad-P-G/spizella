import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

export default function ImageBuilder({ imageLists }) {
  const [imageDta, setImageData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [NoOfItems, setNoOfItems] = useState(0);
  const [currentData, setcurrentData] = useState([]);

  const handlePageClick = (imageDta) => {
    console.log(imageDta.selected);
    fetchData(imageDta.selected);
  };

  const fetchData = (currentPageNumber) => {
    //setPageNumber(currentPageNumber);
    setImageData(imageLists);
  };

  //On load of page
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("images"));
    if (!data) {
      localStorage.setItem("images", JSON.stringify(imageLists));
    }
    setImageData(imageLists);
    //setImageData(imageDta.slice(0, 10));

    //let data = JSON.parse(localStorage.getItem("images"));
  }, []);

  console.log("page loaded");
  console.log(imageDta);
  console.log(imageLists);

  return (
    <>
      {/* <div>
       
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          pageCount={25}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakLinkClassName={"page-link"}
          activeClassName="active"
        ></ReactPaginate>
      </div> */}

      <div className="imgBuilder">
        {imageDta.map((imgObjes) => {
          return (
            <div>
              <div>
                <img
                  src={imgObjes.url}
                  width={200}
                  height={200}
                  className="imageBuild"
                  alt=""
                ></img>
                <h3 className="imgText">{imgObjes.text}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
