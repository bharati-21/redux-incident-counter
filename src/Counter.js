import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, set } from "./actions";
import { SetCounter } from "./SetCounter";

export const Counter = () => {
  const incident = 'Incident';
  const count = useSelector(({ count }) => count);
  const dispatch = useDispatch();

  const handleSet = () => {
    dispatch(set(0));
  }

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleSet}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
