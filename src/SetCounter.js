import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "./actions";

export const SetCounter = () => {
    const dispatch = useDispatch();
    const countFromStore = useSelector(({ count }) => count);
    const [count, setCount] = useState(countFromStore);

    useEffect(() => {
        setCount(countFromStore);
    }, [countFromStore])

    const handleCountNumberChange = e => setCount(e.target.value, 10);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(count));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input id="set-to" type="number" value={count} onChange={handleCountNumberChange} />
        <input type="submit" />
      </form>
    </section>
  );
};
