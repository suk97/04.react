import React, { useRef, useState } from "react";

function UseRef() {
 
    const [stateNumber, setStateNumber] = useState(0);
    const refNumber = useRef(0);

    let varNumber = 0; 

    const updateStateNumber = () => {
        setStateNumber(stateNumber + 1);
    }
    
    const updateRefNumber = () => {
        refNumber.current += 1;
        console.log('refNumber : ' + refNumber.current);
    }

    const updateVarNumber = () => {
        varNumber = varNumber + 1;
        console.log('varNumber : ' + varNumber);
    }

    const showNumbers = () => {
        console.log(`VarNumber : ${varNumber} --- RefNumber : ${refNumber.current}`);
    }







        
        // 내부적으로는 refNumber.current 가 +1 기능 수행이 되고 있음
        // 그러나, 업데이트 된 값이 화면에 출력은 되지 않음
        // 그 이유는 ref 수행 결과로 렌더링은 일어나지 않기 때문
        // 렌더링이 일어난다는 것은 프로그램 자체에 부담을 줄 수 있음
        // 따라서 ref는 렌더링이 자주 일어나지 않아야 하는 경우에 사용 가능


    return (
            <div>
                <div>
                    <p>StateNumber : {stateNumber}</p>
                    <button onClick={updateStateNumber}>StateNumber+1</button>
                </div>
                <div>
                    {/* 리액트에서는 객체 자체를 출력하고자 할 때, 에러 발생 */}
                    {/* <p>RefNumber : {refNumber}</p> */}
                    <p>RefNumber : {refNumber.current}</p>
                    <button onClick={updateRefNumber}>RefNumber+1</button>
                </div>
                <div>
                    <p>VarNumber : {varNumber}</p>
                    <button onClick={updateVarNumber}>VarNumber+1</button>
                </div>
                <div>
                    <hr />
                    <button onClick={showNumbers}>Show Ref/Var Number</button>
                </div>
            </div>
    );
};

export default UseRef;