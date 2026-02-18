import { Navigate} from 'react-router-dom';
 
export  let AuthPrivateRoute = ({authStatus,children}) =>{
    if(authStatus){
      return children
    }
    else{
        return <Navigate to='/'></Navigate>
    }
  }