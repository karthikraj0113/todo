import Counter from './container/Counter/index';
import Todo from './container/Todo/index';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import JwtSample from './container/jwt/jwt';
function App() {
  return (
    <div className="App">
     
        <Routes>
           <Route path="/" element={<JwtSample/>}></Route>
          <Route path="/todo" element={<Todo></Todo>}></Route>
          <Route path="/Counter" element={<Counter></Counter>}></Route>
          <Route path='/Jwt' element ={<JwtSample></JwtSample>} />
          <Route path = '*' element ={<p> Not found </p>} />
        </Routes>
      
    </div>
  );
}

export default App;