import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/slices/counterSlice";
import { RootState } from "../redux/store";
const Counters = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.counter.value);

  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }

  return <div>
    <h1>Counter: {data}</h1>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Descrement</button>
  </div>;
};

export default Counters;