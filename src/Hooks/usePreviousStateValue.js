import React, { useRef, useEffect } from "react";

const usePreviousStateValue = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePreviousStateValue;
