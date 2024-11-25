import { useState } from "react";

const SwitchCase = (props) => {
  switch (props.schoolRole) {
    case "teacher":
    case "lecturer":
      return (
        <div className="bg-white text-green-500 font-bold">
          <p>Subject</p>
        </div>
      );
    case "student":
    case "pupil":
      return (
        <div className="bg-white text-green-500 font-bold">
          <p>Grade</p>
        </div>
      );
    default:
      return <p>Enter your role</p>;
  }
};

const ControlledForm = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <form className="m-3">
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value.toLowerCase());
          }}
          placeholder="your role"
        />
      </form>

      <SwitchCase schoolRole={value} />
    </>
  );
};

export default ControlledForm;

// ### **Exercise 7: Controlled Form with Conditional Fields**
// **Task:**
// Create a form with conditional fields:
// - If `userType` is "student," display a field for "Grade."
// - If `userType` is "teacher," display a field for "Subject."

// **Hints:**
// - Use `useState` for `userType` and conditionally render the fields.

// ---
