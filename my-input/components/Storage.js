import React, { useState, useEffect } from "react";

function Storage() {
    // api-test
    fetch('https://suk97.github.io/data/data.json')
        .then(response => response.json())
        .then(data => console.log(data))

    // name useState
    const [name, setName] = useState('');
    
    // 값을 출력하기 위한 배열 객체
    const [result, setResult] = useState([]);

    // 초기값 출력 --> useEffect --> name tracking
    useEffect(() => {
        loadName();
    }, [name]);

    const onChange = (e) => {
        setName(e.target.value);
        setResult([]);
    }


    const saveName = () => {
        // JSON 문자열 형태로 값을 저장
        // "name": {name: "name"}
        const user = {name: name}
        window.localStorage.setItem(name, JSON.stringify(user));

    }

    const loadName = () => {
        // JSON 문자열 -> JSON.parse
        // key - value
        for(let i=0; i < window.localStorage.length; i++) {
            let key = window.localStorage.key(i);
            const value = window.localStorage.getItem(key);
            // console.log(key);
            // console.log(value);
            if(JSON.parse(value).name === name) {
                setResult(result.concat({key, value}));
            }
        }
        // console.log(result);
    }

    return(
        <div>
            <input
                name="userName"
                placeholder="이름을 입력하세요!"
                onChange={onChange}
            />
            <button onClick={saveName}>저장하기</button>
            <button onClick={loadName}> 불러오기</button>
            {/* 출력 로직 */}
            {result.map((data) => (
                <p key={data.key}>{data.key} --- {data.value}</p>
            ))}

        </div>
    );
}

export default Storage;