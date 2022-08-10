import React, { useMemo, useState } from "react";

function UseState () {
    // step01 : import
    // step02 : const [state, setState] = useState(초기값);
    const [number, setNumber] = useState(0);

    const onClickHandler = () => {
        // console.log('클릭 핸들러');
        // state 직접 값을 할당 할 수 없음 --> setNumber()
        // number += 1

        // 클릭 시, 한번에 2가 증가하도록 지정하고 싶다면?
        console.log(number) // 0
        setNumber(number + 1); 
        
          
        // console.log(number) // 1
        // --> setNumber 즉시 number에 대한 값의 변화가 일어나지 않음

        // 클로져와 연관 시켜 생각해 봅시다
        // react

        // State
        // let _value;
        // useState(initialValue) {
        //     if(_value === undefined) {
        //         _value = initialValue;
        //     }
        //     const setState = (newValue) => {
        //         _value = newValue;
        //     }
        //     return [_value, setState]
        // }

        // setState 함수는 자신과 함께 반환이 된 변수를 변경 시키는 것이 아니라
        // 이후에 실행될 useState가 반환할 _value를 변경시키고, 컴포넌트 자체를
        // 재렌더링시킨다. 즉, 변경된 값을 가져오는 함수는 setState가 아니라 useState다



        // 버튼 클릭을 계속 진행 --> 24까지는 변경
        // 24부터는 --> 1로 다시 변경
        let newNumber;
        if(number >= 24) {
            newNumber = 1;
        } else {
            newNumber = number + 1;
        }
        setNumber(newNumber);
      
    }

    return (
        <div>
            <span>Number : {number}</span>
            <button onClick={onClickHandler}>Click!</button>
        </div>
    );
}

export default UseState;