const DynamicList = () => {
  const tasks = ["do the dishes", "mop the floor", "go grocery shopping"];
  // const tasks = []

  return (
    <>
      <h3>List of tasks:</h3>
      <ul>
        {tasks.length ? (
          tasks.map((task) => <li key={Math.random()}>{task}</li>)
        ) : (
          <li>No tasks available.</li>
        )}
      </ul>
    </>
  );
};

export default DynamicList;

// ### **Exercise 5: Dynamic Lists with Conditional Rendering**
// **Task:**
// Display a list of tasks, but:
// - Show "No tasks available" if the `tasks` array is empty.
// - Render each task in the list if the array has items.

// **Hints:**
// - Use `tasks.length` to check if the array is empty.

// ---
