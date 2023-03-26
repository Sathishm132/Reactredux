import { useDispatch, useSelector } from 'react-redux';
import { CounterAction } from '../store';
import classes from './Counter.module.css';


const Counter = () => {
   const count=useSelector(state=>state.counter.counter);
  const dispatch=useDispatch()
  const incrementhandler=()=>{
    dispatch(CounterAction.increament())
  }
  const decreamenthandler=()=>{
    dispatch(CounterAction.decreament())
  }
  const increasehandler=()=>{
    dispatch(CounterAction.increase(10));
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <div>
        <button onClick={incrementhandler}>+</button>
        <button onClick={increasehandler}>+10</button>
        <button onClick={decreamenthandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
