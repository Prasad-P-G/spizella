import React from "react";

export default function SecurityFamilyGroup({
  securityFamilies,
  isSelected,
  setIsSelected,
}) {
  return (
    <>
      <div className="button-container">
        {securityFamilies.map((text, index) => {
          return (
            <>
              <div
                className="flex flex-col"
                style={{
                  borderRadius: "20px",
                  textAlign: "center",
                  padding: "0",
                }}
              >
                <button
                  style={{ textAlign: "center" }}
                  className={isSelected == index ? "selected-button" : "button"}
                  onClick={() => setIsSelected(index)}
                >
                  <div className="groupButton">{text}</div>
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
