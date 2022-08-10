import React from "react";

function Watch() {
    return (
        <div>
            <h1>Hello, React</h1>
            <h3>NOW TIME: {new Date().toLocaleTimeString()}</h3>
        </div>
    );
}

export default Watch;