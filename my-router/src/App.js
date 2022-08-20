import './App.css';
import { Routes, Route } from 'react-router-dom';
import { About, Contact, Events, History, Home, Location, Product1, Product2, Products, Service } from './page';
import Error from './Error';
import Common from './Common';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Common />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}>
            <Route path='service' element={<Service />} />
            <Route path='history' element={<History />} />
            <Route path='location' element={<Location />} />
          </Route>
          <Route path='/events' element={<Events />} />

          {/* 쿼리스트링  http://localhost:3000/products?productId=1*/}
          <Route path='/products/*' element={<Products />}>
          {/* URL 파라미터 http://localhost:3000/products/1*/}
          {/* <Route path=':productId' element={<Product1 />} />
            <Route path='2' element={<Product2 />} /> */}
          </Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
