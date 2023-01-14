import { useState } from "react";

const Button: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => setCount((prev) => prev + 1);

  return <button onClick={handleClick}>MY BUTTON - {count}</button>;
};

export default Button;
