import { useState } from "react";
const LoggedStatus = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const changeStatus = () => {
    setLoggedIn((prev) => !prev);
  };

  return (
    <>
      {isLoggedIn && <button onClick={changeStatus}>Profile</button>}
      {!isLoggedIn && (
        <div>
          <button onClick={changeStatus}> Log In</button>
          <button>Sign Up</button>
        </div>
      )}
    </>
  );
};

export default LoggedStatus;
// ### **Exercise 3: Conditional Rendering with Elements**
// **Task:**
// Create a component that displays:
// - A "Profile" button if `isLoggedIn` is true.
// - A "Log In" button and "Sign Up" button if `isLoggedIn` is false.

// **Hints:**
// - Use inline `&&` and `||` operators for rendering specific elements.
