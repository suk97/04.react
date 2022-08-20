import { Outlet, useNavigate } from "react-router-dom";


function Common() {

    const navigator = useNavigate();

    const goBack = () => {
        navigator(-1);
    }

    const goForward = () => {
        navigator(1);
    }

    return(
        <div>
            <header
                style={{
                    height: '30px',
                    background: 'gray'
                }}
            >
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goForward}>앞으로가기</button>
            </header>

            <main>
                <Outlet />
            </main>

            <footer
                style={{
                    height: '30px',
                    background: 'gray'
                }}
            ></footer>
        </div>
    )
}

export default Common;