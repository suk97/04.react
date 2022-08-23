import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Redux() {
    const [ number, setNumber ] = useState(0); 

    // function WestMarket2({ number }) {
    function WestMarket2() {
        const number = useSelector(state => state);
        console.log(number)

        return(
            <div>
                <h2>WestMarket2 : {number}</h2>
            </div>
        )
    }

    function WestMarket1({ number }) {
        return(
            <div>
                <h2>WestMarket1</h2>
                <WestMarket2 number={number} />
            </div>
        )
    }

    function EastMarket2({ onIncrease }) {
        const dispatch = useDispatch();

        return(
            <div>
                <h2>EastMarket2</h2>
                <button onClick={() => dispatch({type:'add'})}>+1</button>
            </div>
        )
    }

    function EastMarket1({ onIncrease }) {
        return(
            <div>
                <h2>EastMarket1</h2>
                <EastMarket2 onIncrease={onIncrease} />
            </div>
        )
    }

    return(
        <div id='container'>
            <h1>Market</h1>
            <div id='markets'>
                <WestMarket1 number={number} />
                <EastMarket1 onIncrease={() => {setNumber(number + 1)}} />
            </div>
        </div>
    );
}

export default Redux;