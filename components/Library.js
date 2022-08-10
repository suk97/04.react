import React from "react";
import Book from "./Book";

// ver1 : function Library(props) {
// ver2 : function Library({bookName, bookPrice})
function Library({bookName, bookPrice}) {
    // ver1 props 객체 이용
    // console.log(props)
    
    // ver2 자바스크립트에서의 비구조화 할당 이용
    // --> 책 가격 : price가 red로 출력되도록 지정
    // const {bookName, bookPrice} = props;
    

    // ver3 props를 사용하지 않고 화면에 결과를 출력하는 방법 --> 확장하여 볼것
    // --> children

    // ver4 책 3개를 출력
    // 책 이름: react 실습1
    // 책 가격: 15000
    // 책 이름: react 실습2
    // 책 가격: 20000
    // 책 이름: react 실습3
    // 책 가격: 25000

    return(
        <div>
            {/* ver1 : props.bookName/Price */}
            {/* ver2 : bookName/Price */}
            {/* <h1>{`책 이름 : ${bookName}`}</h1> */}
            {/* <h1>{`책 가격 : ${bookPrice}`}</h1> */}
            
            {/* ver4 : 컴포넌트 추출 --> BOOK 컴포넌트를 만드는 과정 */}
            <Book bookName="React 실습1" bookPrice={15000}/>
            <Book bookName="React 실습2" bookPrice={20000}/>
            <Book bookName="React 실습3" bookPrice={25000}/>
        </div>
    );
}

export default Library;