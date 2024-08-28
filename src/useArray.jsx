import { useCallback, useState } from "react";

export function useArray(initialArray) {
  const [array, setArray] = useState(initialArray);
  function push(element) {
    setArray((currentArray) => {
      return [...currentArray, element];
    });
  }

  const replace = useCallback((index, element) => {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        element,
        ...currentArray.slice(index + 1),
      ];
    });
  }, []);

  const filter = useCallback((callback) => {
    setArray((currentArray) => {
      return currentArray.filter(callback);
    });
  }, []);

  const remove = useCallback((index) => {
    setArray((currentArray) => [
      ...currentArray.slice(0, index),
      ...currentArray.slice(index + 1),
    ]);
  }, []);

  const clear = useCallback(() => {
    setArray([]);
  }, []);

  const reset = useCallback(() => {
    setArray(initialArray);
  }, [initialArray]);

  return {
    array,
    set: setArray,
    push: push,
    replace: replace,
    filter: filter,
    remove: remove,
    clear: clear,
    reset: reset,
  };
}
