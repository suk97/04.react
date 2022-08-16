import { useState } from 'react';
import './App.css';
import mockItems from './db/mock.json';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState('');

  // 1. 수정 기능
  // 2. styled-components
  // 3. json 비동기 요청
  // 4. 오늘 배운 내용 최종 정리




  // ver2
  // 정렬에 대한 함수를 하나로 합치는 방법
  // const handleOrder = (e) => {
  //   let order = e.target.name;
  //   const orderedItems = [...items].sort((item1, item2) => item2[order] - item1[order]);
  //   setItems(orderedItems);
  //   }
  
  
  // ver 1
  // 최신순 정렬
  // const handleNewest = () => {
  //   // sort 함수는 원본배열을 가리키고, 정렬한다 (이미 items에 값이 변경 됨)
  //   const newestItems = items.sort((item1, item2) => item2.createdAt - item1.createdAt);
  //   console.log(newestItems);
  //   // 이미 items와 newestItems의 값이 같기 때문에 렌더링이 일어나지 않음
  //   // 렌더링을 위해 새로운 배열을 만들어주자 (값을 추가하는 것이 아니기 때문에 [...])
  //   setItems([...newestItems]);
  // }

  // // 칼로리순 정렬
  // const handleCalorie = () => {
  //   const newestItems = items.sort((item1, item2) => item2.calorie - item1.calorie);
  //   console.log(newestItems);
  //   setItems([...newestItems]);
  // }


  // ver3
  const handleNewest = () => setOrder('createdAt')
  const handleCalorie = () => setOrder('calorie')
  
  const orderedItems = items.sort((item1, item2) => item2[order] - item1[order]);
  
  // 삭제
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  // 추가
  const handleInsert = (newItem) => {
    // console.log(newItem);
    setItems((prevItems) => [newItem, ...prevItems]);
  }

  const handleUpdate = () => {
    
  }


  return (
    <div>
      <ItemForm
        onSubmitData={handleInsert}
      />
      {/* <button name="createdAt" onClick={handleOrder}>최신순</button>
      <button name="calorie" onClick={handleOrder}>칼로리순</button> */}
      <button onClick={handleNewest}>최신순</button>
      <button onClick={handleCalorie}>칼로리순</button>
      <ItemList 
        // ver2
        items={items}
        onDelete={handleDelete}    
        orderedItems={orderedItems}
      />
    </div>
  );
  }

export default App;
