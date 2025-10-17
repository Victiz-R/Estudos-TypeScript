import React from "react";
import FilhoFunction from "./FilhoFunction";

const PaiFunction = () => {
    const handleChildClick = () => {
        console.log("Clicou no botão do elemento filho!");
    }
  return (
    <FilhoFunction onChildClick={handleChildClick}/>
  )
}

export default PaiFunction