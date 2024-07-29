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
              <div className="flex flex-col">
                <button
                  style={{ width: "300px", fontWeight: "bold" }}
                  className={isSelected == index ? "selected-button" : "button"}
                  onClick={() => setIsSelected(index)}
                >
                  {text}
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
