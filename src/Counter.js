import { SetCounter } from "./SetCounter";
import { useCount } from "./useCount";

export const Counter = () => {
  const incident = 'Incident';
  const { count, increment, decrement, set } = useCount();

  const handleSet = () => set(0);

  const handleIncrement = () =>  increment();
  const handleDecrement = () => decrement();

  /* const actions = useActions({
    increment, decrement, set
  });
  */

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
