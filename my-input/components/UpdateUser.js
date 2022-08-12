import React, { useState, useEffect } from "react";

function UpdateUser({ selectedUser, onUpdate }) {

    const [value, setValue] = useState('');

    const onChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        // console.log('hi')
        // step01 : submit 시 전달해야 하는 데이터는 무엇일까?
        // 1) 수정하고자 하는 정보 : value 변수가 가지고 있음 --> 가상의 db 전달
        // 2) 수정하고자 하는 대상(객체) 정보 : id(selectedUser.id)
        onUpdate(selectedUser.id, value);

        e.preventDefault();
    }


    useEffect(() => {
        setValue(selectedUser.name);
    }, []);

    // 초기에 edit 버튼 클릭 시,
    // 이름 정보 수정의 input Value에는
    // 클릭한 객체의 이름이 출력되어야 한다.
    // ==초기값 지정하는 방법 : useEffect

    return(
        <div>
            <form onSubmit={onSubmit}>
                <h3>이름 정보 수정폼</h3>
                <input 
                    type="text" 
                    value={value}
                    onChange={onChange}
                    />
                <button type="submit">modify</button>
            </form>
        </div>
    )
}

export default UpdateUser;