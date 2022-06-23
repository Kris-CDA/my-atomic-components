import React, { useState, FunctionComponent } from 'react';

const MyButton: FunctionComponent = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
    count is: {count}
    </button>
  );
};

export default MyButton;