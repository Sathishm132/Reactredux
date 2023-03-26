import Counter from './components/Counter';
import {Provider, useSelector} from "react-redux"
import stored from './store';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth';


function App() {
  const auth=useSelector(state=>state.auth.authentication)
  return (
    <>  <Header/>{auth&&<UserProfile/>}
    {!auth&&<Auth/>}<Counter />
    </>
   
     );
}

export default App;
