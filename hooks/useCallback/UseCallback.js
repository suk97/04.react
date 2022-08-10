import React, { useCallback, useState, useEffect } from "react";

function UseCallback() {
    const [number, setNumber] = useState(0);
    
    // const showNumber = () => {
    //     console.log(`Show Number : ${number}`);
    // }
    
    // useEffect에 showNumber를 추적하게 지정함
    // 화살표로 숫자를 변경시, showNumber 함수는 변경되지 않았음에도
    // useEffect가 계속해서 실행됨
    
    // --> 그 이유는
    // number의 상태가 계속 갱신되고, UseCallback 컴포넌트는 랜더링이 계속 일어나게 된다.
    // 그 결과, 컴포넌트 내부에 있는 모둔 변수, 함수가 재실행되고
    // 함수 혹은 객체는 실행될 때마다 새로운 주소값을 갖게됨
    // 이는 다른 객체로 인식 되어 useEffect에서는 계속해서
    // showNumber 함수가 변경되었다고 판단하게 됨
    // 그 결과, useEffect가 계속 실행 됨
    
    // useCallback 사용
    // const showNumber = useCallback(() => {
    //         console.log(`Show Number : ${number}`);
    // }, []);
    
    // useMemo는 특정 결과값을 재사용, useCallback은 특정 함수를 새로 만들지 않고 재사용

    const showNumber = useCallback(() => {
            console.log(`Show Number : ${number}`);
    }, [number]);

    useEffect(() => {
        console.log('변경 상태 확인');
    }, [showNumber]);

    // 
    const [toggle, setToggle] = useState(true);
    

    return (
        <div>
            <input type="number" onChange={(e) => {setNumber(e.target.value)}}></input>
            <br />
            <button onClick={showNumber}>Show Number</button>
            <br />
            <button onClick={() => {setToggle(!toggle)}}>{toggle.toString()}</button>
        </div>
    );
}

export default UseCallback;