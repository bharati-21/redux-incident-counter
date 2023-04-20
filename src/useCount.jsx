import { useSelector } from 'react-redux';
import { useActions } from './useActions';
import { increment, decrement, set } from './actions';

export const useCount = () => {
  const count = useSelector(({ count }) => count);
  const actions = useActions({
    increment,
    decrement,
    set
  });

  return { count, ...actions };
};
