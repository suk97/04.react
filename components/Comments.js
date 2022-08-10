import React, { Component } from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "it",
        content: "열공해라"
    },
    {
        name: "dev",
        content: "잘할거다"
    },
    {
        name: "friend",
        content: "놀자"
    },

]



function Comments() {
    
    // ver2 반복문 사용
    return(
        <div>
            {
                comments.map(comment => {
                    // console.log(comment);
                    return (
                        <Comment name={comment.name} content={comment.content}/>
                    )
                }) 
            }
        </div>
    );
    
    // ver1
    // return(
    //     <div>
    //         <Comment name={comments[0].name} content={comments[0].content} />
    //         <Comment name={comments[1].name} content={comments[1].content} />
    //         <Comment name={comments[2].name} content={comments[2].content} />
            
    //         {/* 문법 자체가 맞지 않음
    //         for(let i=0; i < 3; i++) {
    //             console.log(i);
    //         } */}
    //     </div>
    // );
}

export default Comments;