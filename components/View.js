import React from "react";

function View({children}) {
    // console.log(props.children);

    const childrenstyle = {
        border: '4px dashed navy',
        margin: 20,
        padding: 20
    }
    
    return(
        <div style={childrenstyle}>
            {children}
        </div>
    )
}

export default View;