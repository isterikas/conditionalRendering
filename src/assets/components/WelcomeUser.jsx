import { useState } from "react";
const WelcomeUser = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  const changeStatus = () => {
    setLoggedIn((prev) => !prev);
  };

  return (
    <>
      {isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in</p>}
      <button onClick={changeStatus}>Log in/out</button>
    </>
  );
};

export default WelcomeUser;

// ### **Exercise 1: Basic Conditional Rendering**
// **Task:**
// Create a component that displays "Welcome, User!" if a user is logged in (`isLoggedIn` is true) and "Please log in" if not.

// **Hints:**
// - Use an `if` statement or a ternary operator to conditionally render the text.
// - Add a button to toggle the `isLoggedIn` state.
