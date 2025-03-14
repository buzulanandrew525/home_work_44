import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/slices/counterSlice';

export function Counters() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
        <h3>Redux Tolkit: {count}</h3>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
};

export default Counters;