import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Input from './components/Input';
import InputUser from './components/InputUser';
import ListUser from './components/ListUser';
import Storage from './components/Storage';
// import data from './db/mock.json'
import axios from 'axios'
import { axiosData, fetchData } from './api/getUsers';

function App() {
  // data
  useEffect(() => {
  // fetchData
    const data = fetchData();
    data
      .then(response => response.json())
      .then(data => setUsers(data))

  // axiosData
    // const data = axiosData();
    // data
    //   .then(response => setUsers(response.data))
    }, []);




  const [inputs, setInputs] = useState({
      id: 0,
      name: '',
      lastName: ''
  });

  
  // inputs 객체
  const { name, lastName } = inputs;
  // console.log(name, lastName);
  // const nameInput = useRef();

  // inputs 객체들을 관리할 수 있는 배열 객체

  // const data = [
  //   {
  //     id: 1,
  //     name: 'it',
  //     lastName: 'it'
  //   },
  //   {
  //     id: 2,
  //     name: 'dev',
  //     lastName: 'dev'
  //   }
  // ];

  const [users, setUsers] = useState([]);
  // const [users, setUsers] = useState(data);



  const onChange = (e) => {
      const { name, value } = e.target;

      setInputs({
          ...inputs,
        [name]: value
      });
  }

  const nextId = useRef(3);
  // const [nextId, setNextId] = useState(3);


  const onAdd = () => {
    console.log("onAdd : " + name, lastName);
    // input에 새롭게 작성된 정보를 바탕으로 생성된 객체
    const newUser = {
      id: nextId.current,
      name: name,
      lastName: lastName
    };

    // 새로운 객체를 기존 데이터에 추가
    setUsers(users.concat(newUser));

    nextId.current += 1;



    // 기존 inputs을 모두 초기화
    setInputs({
      name: '',
      lastName: ''
    });
  }

    // 삭제
  const onDelete = (id) => {
    // 삭제 -> setUsers (삭제된 객체 정보)

    // 삭제 로직 구현
    // users 객체에서 내가 클릭한 객체 정보를 활용
    // 만약에 내가 클릭한 객체의 정보가 맞다면(조건)
    // users 객체에서 삭제 (배열에서 해당 객체를 삭제)
    // 삭제 후 최종적으로 uesrs 상태를 갱신
    
    // 어떤 조건 ?  find, findIndex
    // splice --> return


    // setUsers();
    // console.log(id);
    // console.log(users.find((item) => {
    //   console.log(item);
    //   if(users.id == id) {
    //     users.splice(, 1);
    //   }
    // }));
    // const findUser = users.find((user) => {
    //   return user.id == id;
    // });
    // const index = users.indexOf(findUser);
    // users.splice(index ,1)
    setUsers(users.filter(user =>(
      user.id !== id)));
  }


  return (
    // step01
    // <Input />

    // step02
    <div>
      <InputUser 
        name={name}
        lastName={lastName}
        onChange={onChange}
        onAdd={onAdd}   
      />
      <ListUser users={users} onDelete={onDelete} /> 
    {/* <Storage /> */}
    </div>

  );
}

export default App;
