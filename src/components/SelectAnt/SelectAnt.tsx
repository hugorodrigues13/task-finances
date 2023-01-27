import React from "react";
import './styles.css'

const SelectAnt: React.FC = ({...props}) => {


  return (
    <div className="div-group-input">
      <select {...props}  placeholder="Estado"/>
    </div>
  )

}

export default SelectAnt;