import React, { useState } from 'react';
import FileInput from './FileInput';

function ItemForm ( { onSubmitData } ) {

    const [ value, setValue ] = useState({
        title: '',
        calorie: 0,
        content: '',
        imgFile: null
    });
    
    // const [ title, setTitle ] = useState('');
    // const [ calorie, setCalorie ] = useState(0);
    // const [ content, setContent ] = useState('');

    // const onTitleChange = (e) => setTitle(e.target.value);
    // const onContentChange = (e) => setContent(e.target.value);
    // const onCalorieChange = (e) =>setCalorie(e.target.value);

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        handleValueChange(name, convertNumber(type, value));
    }

    const handleValueChange = (name, value) => {

        setValue((previousValue) => ({
            ...previousValue,
            [name]: value
        }));
    }


    function convertNumber(type, value) {
        // 칼로리를 숫자로 변경 - 기능 ==> 함수화!!
        switch (type) {
            case 'number':
                return Number(value) || 0;

            default:
                return value;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(value);
        value.createdAt = Date.now();

        onSubmitData(value);
    }


    
    return(
        <form onSubmit={handleSubmit}>
            <FileInput
                name="imgFile"
                value={value.imgFile}
                onChange={handleValueChange}
            />
            <input
                placeholder='title'
                type="text"
                name="title"
                value={value.title}
                // onChange={handleValueChange}
                onChange={handleInputChange}
            />
            <input
                placeholder='calorie'
                type="number"
                name="calorie"
                value={value.calorie}
                // onChange={handleValueChange}                
                onChange={handleInputChange}                
            />
            <input
                placeholder='content'
                type="text"
                name="content"
                value={value.content}
                // onChange={handleValueChange}                
                onChange={handleInputChange}                
            />
            <button type="submit" >추가</button>
        </form>
    );
}

export default ItemForm;