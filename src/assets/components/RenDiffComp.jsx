import { useState } from "react";
import AdminPanel from "./AdminPanel";
import UserDashboard from "./UserDashboard";
import GuestPage from "./GuestPage";

const SwitchCase = (props) => {
  console.log(props);

  switch (props.permission) {
    case "admin":
      return <AdminPanel />;
    case "user":
      return <UserDashboard />;
    default:
      return <GuestPage />;
  }
};

const RenDiffComp = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value.toLowerCase());
          }}
          placeholder="your role"
        />
      </form>
      <SwitchCase permission={value} />
      {/* {SwitchCase({})} */}
    </>
  );
};

export default RenDiffComp;

// ### **Exercise 4: Rendering Different Components**
// **Task:**
// Build a component that displays different child components based on a user role (`userRole`):
// - `AdminPanel` component if the role is `admin`.
// - `UserDashboard` component if the role is `user`.
// - `GuestPage` component if no role is set.

// **Hints:**
// - Use `switch-case` or conditional rendering.
