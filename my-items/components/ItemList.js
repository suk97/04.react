import React from 'react';

function convertingDate(ms) {
    // console.log(`converting : ${ms}`);
    const date = new Date(ms);
    return `${date.getFullYear()}. ${date.getMonth()+1}. ${date.getDate()}`;
}


function Item ( { item, onDelete } ) {
    // console.log(item);
    const { calorie, content, createdAt, imgUrl, title } = item;
    // const date = new Date(createdAt)
    const handleDelete = () => {
        onDelete(item.id);
    }

    return (
        <div>
            {/* imgUrl 을 활용하여 각 아이템의 이미지가 출력되도록 */}
            <div><img src={imgUrl}></img></div>
            <div>{title}</div>
            <div>{calorie} kcal</div>
            <div>{content}</div>
            {/* <div>{date.toLocaleDateString()}</div> */}
            <div>{convertingDate(createdAt)}</div>
            <button onClick={handleDelete}>삭제</button>
            <button onClick={handleDelete}>수정</button>
            {/* createAt 을 활용하여 각 아이템의 등록 일자를 출력
             (단, 형태를 2022. 08. 16) */}
        </div>
    )
}

function ItemList ({ items, onDelete }) {
    return(
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    {/* const { calorie, content, createdAt, imgUrl, title } = item; */}
                    <Item item={item} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
  
}

export default ItemList;