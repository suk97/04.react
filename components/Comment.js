import React from "react";

function Comment(props) {
    // props는 read-only 값( 새로운 데이터 할당이 불가능함 )
    return (
        <div>
            <span>{props.name}</span>
            <span>---</span>
            <span>{props.content}</span>
        </div>
    );
}

export default Comment;