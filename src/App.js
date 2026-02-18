import Counter from './container/Counter/index';
import Todo from './container/Todo/index';
import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import JwtSample from './container/jwt/jwt';
import { useState } from 'react';
import {AuthPrivateRoute} from './PrivateRoute'
import Cookies from 'js-cookie';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
function App() {
  // const [auth,setAuth] = useState(true);
  let auth = Cookies.get('Auth')
  auth = Number(auth)
  return (
    <div className="App">
     <Provider store={store}>
        <Routes>
           <Route path="/" element={<JwtSample/>}></Route>
          <Route path="/todo" element={<AuthPrivateRoute authStatus = {auth}>
            <Todo/>
          </AuthPrivateRoute>}></Route>
          <Route path="/Counter" element={<Counter></Counter>}></Route>
          <Route path='/Jwt' element ={<JwtSample></JwtSample>} />
          <Route path = '*' element ={<p> Not found </p>} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;