import { useDispatch, useSelector } from 'react-redux';
import { AuthAction } from '../store';
import classes from './Header.module.css';

const Header = () => {
  const auth=useSelector(state=>state.auth.authentication)
  const dispatch=useDispatch();
  const loginhandler=()=>{
    dispatch(AuthAction.logout());
  }
 

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
           {auth&&<button onClick={loginhandler}>Logout</button>}
          
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
