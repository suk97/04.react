import React from "react";

class Notice extends React.Component {
    // 생성자
    constructor() {
        super();
        // 컴포넌트 초기 상태 지정
        this.state = "컴포넌트의 상태와 생명 주기를 관리하는 함수 호출";
    }

    componentDidMount() {
        console.log("Mounting 상태()");
    }

    componentDidUpdate() {
        console.log("Updating 상태()");
    }

    componentWillUnmount() {
        console.log("Unmounting 상태()");
    }

    render() {
        return (
            <div>
                <span>{this.state}</span>
            </div>
        );
    }

}

export default Notice;