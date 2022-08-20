import { Link, Outlet, useParams, useSearchParams } from 'react-router-dom';

export function Home() {
    return (
        <div>
            <h1>[ 홈페이지 ]</h1>
            <nav>
                <Link to="about">회사소개</Link><br />
                <Link to="events">이벤트</Link><br />
                <Link to="products">제품</Link><br />
                <Link to="contact">고객지원</Link><br />
            </nav>
        </div>
    )
}

// http://localhost:3000/about
export function About() {
    return (
        <div>
            <h1>[ 회사소개 ]</h1>
            <Outlet />
        </div>
    )
}
// http://localhost:3000/about/service
// http://localhost:3000/about/history
// http://localhost:3000/about/location

export function Service() {
    return (
        <div>
            <h2>[ 서비스 ]</h2>
            <p>서비스</p>
        </div>
    )
}

export function History() {
    return (
        <div>
            <h2>[ 연혁 ]</h2>
            <p>회사 연혁 소개</p>
        </div>
    )
}

export function Location() {
    return (
        <div>
            <h2>[ 위치 ]</h2>
            <p>회사 위치 소개</p>
        </div>
    )
}



// http://localhost:3000/events
export function Events() {
    return (
        <div>
            <h1>[ 이벤트 ]</h1>
        </div>
    )
}

const data = {
    '1' : {
        name : 'iPhone13',
        price : 150
    },
    '2' : {
        name : 'iPhone14',
        price : 170
    } 
}

// http://localhost:3000/products
export function Products() {
    // 쿼리스트링 :?productId=1&productBrand=LG
    const [ searchParams, setSearchParams ] = useSearchParams();
    console.log(searchParams.get('productId'));
    console.log(searchParams.get('productBrand'));


    // URL 파라미터
    // const params = useParams();
    // console.log(params);
    // ver1
    // const productId = params.productId;

    // ver2
    // const product = data[params.productId];
    
    // ver3 : 없는 데이터를 처리하는 방법
    // console.log(product? 'true' : 'false');

    // ver4 : ver2는 주석처리해야함
    const productId = searchParams.get('productId');
    const product = data[productId];

    return (
        <div>
            {/* ver1 */}
            {/* <h1>[ 제품 {productId}  ]</h1>
            <div>
                <p>{data[productId].name}</p>
                <p>{data[productId].price}</p>
            </div> */}

            {/* ver2 & 3 */}
            {product? 
            (<>
                <h1>[ 제품 {productId}  ]</h1>
                <div>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </div>
            </>)
            :
            (<>
                <p>존재하지 않는 데이터입니다.</p>
            </>)
            }
        </div>
    )
}


export function Product1() {
    return (
        <div>
            <h2>[ 제품 1 ]</h2>
            
        </div>
    )
}

export function Product2() {
    return (
        <div>
            <h2>[ 제품 2 ]</h2>
        </div>
    )
}

// http://localhost:3000/contact
export function Contact() {
    return (
        <div>
            <h1>[ 고객지원 ]</h1>
        </div>
    )
}
