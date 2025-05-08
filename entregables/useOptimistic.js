import { useState, useReducer } from 'react';

function useOptimistic(initialValue, optimisticUpdate) {
  const [value, setValue] = useState(initialValue);
  const [optimisticValue, setOptimisticValue] = useReducer(
    (state, action) => {
      if (typeof action === 'function') {
        return action(state);
      }
      return state;
    },
    initialValue
  );

  const setOptimistic = (update) => {
    setOptimisticValue((prev) => {
      if (typeof update === 'function') {
        return optimisticUpdate(prev, update(prev));
      }
      return optimisticUpdate(prev, update);
    });
  };

  return [optimisticValue, setOptimistic];
}

export default useOptimistic;
