import React from "react";

function Book({bookName, bookPrice}) {
    return(
        <div>
        <h1>{`책 이름 : ${bookName}`}</h1>
        <h1>{`책 가격 : ${bookPrice}`}</h1>
        </div>
    );
}

export default Book;