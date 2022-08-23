import logo from './logo.svg';
import './App.css';
import Redux from './components/Redux/Redux';
import { createStore } from 'redux';
import { useReducer } from 'react';
import { Provider } from 'react-redux';




function App() {

  function reducer(state, action) {
    switch (action.type) {
      case 'add':
          return state + 1;
        break;
    
      default:
        return state;
    }


    return state;
  }

  const store = createStore(reducer, 0, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  

  return (
    <Provider store={store}>
      <Redux />
    </Provider>
  );
}

export default App;
