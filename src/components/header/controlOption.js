import React from "react";
import './styles/ControlOption.css'

function ControlOption(props){
    return (
        <div id={props.id} className="inline control_options">
            <img src={props.icon} alt={props.text} />
            {props.text}
            {props.new && <span>NEW</span>}
        </div>
    )
}

export default ControlOption;