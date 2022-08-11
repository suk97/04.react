import React, { useState, useRef } from 'react'


function Input() {
    const [inputs, setInputs] = useState({
        // state 관리를 객체로 
        name: '',
        lastName: ''

    });

    

    const nameInput = useRef();

    // 비구조화 할당1
    const { name, lastName } = inputs; // inputs.name 이 아니라 name만 호출해서 이용가능
    console.log(name);

    const onChange = (e) => {
        console.log(e.target);
        // e.target 비구조화 할당
        const { name, value } = e.target

        setInputs({
            ...inputs, // 스프레드 문법을 통해 다른 객체를 만들어 전달
            [name]: value
        });
    }
    
    const onReset = () => {
        setInputs({
            name: '',
            lastName: ''
        });
        nameInput.current.focus();
    }



    return (
        <div>
          <input
            name="name"
            placeholder="name"
            onChange={onChange}
            value={name} // 인풋박스 리셋
            ref={nameInput}
          />
          <input
            name="lastName"
            placeholder="lastName"
            onChange={onChange}
            value={lastName} // 인풋박스 리셋
            ref={nameInput}
          />
          <button onClick={onReset}>Reset</button>
          <div>
            <b>NAME: </b> {name} -------------
            <b>LASTNAME: </b> {lastName}
            
          </div>
        </div>
      );    
}

export default Input;