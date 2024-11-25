const GuestPage = () => {
  return (
    <>
      <h1 className="text-shadow">Welcome, please log in</h1>
    </>
  );
};

export default GuestPage;

// ### **Exercise 4: Rendering Different Components**
// **Task:**
// Build a component that displays different child components based on a user role (`userRole`):
// - `AdminPanel` component if the role is `admin`.
// - `UserDashboard` component if the role is `user`.
// - `GuestPage` component if no role is set.

// **Hints:**
// - Use `switch-case` or conditional rendering.
