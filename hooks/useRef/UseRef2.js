import React, { useState, useRef, useEffect } from "react";

function UseRef2() {
    const inputRef = useRef();

    useEffect(() => {
        // console.log(inputRef);
        inputRef.current.focus();
    }, []);

    const showUserName = () => {
        alert(inputRef.current.value);
        // 잘못된 입력시 검증 로직 --> 다시 포커싱 하는 기능이 필요
        inputRef.current.value = '';
        inputRef.current.focus();
    }

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="username"></input>
            <button onClick={showUserName}>Login</button>
        </div>
    );
}



export default UseRef2;