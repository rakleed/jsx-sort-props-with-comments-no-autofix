const Button = ({ count, setCount, label }) => {
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      {label} {count}
    </button>
  );
};

export default Button;
