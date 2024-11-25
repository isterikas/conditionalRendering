import { useState } from "react";
const LoadingButton = () => {
  const [isLoading, setLoading] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(true);

  const changeLoginStatus = () => {
    setLoading((prev) => !prev);
  };
  const changeStatus = () => {
    setLoggedIn((prev) => !prev);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <p>Please log in</p>
      )}
      <button onClick={changeLoginStatus}>Loading button</button>
      <button onClick={changeStatus}>Log in/out</button>
    </>
  );
};

export default LoadingButton;

// ### **Exercise 2: Conditional Rendering with Multiple States**
// **Task:**
// Build a component that displays:
// - "Loading..." if `isLoading` is true.
// - "Welcome, User!" if `isLoggedIn` is true and `isLoading` is false.
// - "Please log in" if `isLoggedIn` is false and `isLoading` is false.

// **Hints:**
// - Use multiple conditions with `if-else` or ternary operators.
