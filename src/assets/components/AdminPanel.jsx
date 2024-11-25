const AdminPanel = () => {
  return (
    <>
      <h1>Welcome, admin</h1>
    </>
  );
};

export default AdminPanel;

// ### **Exercise 4: Rendering Different Components**
// **Task:**
// Build a component that displays different child components based on a user role (`userRole`):
// - `AdminPanel` component if the role is `admin`.
// - `UserDashboard` component if the role is `user`.
// - `GuestPage` component if no role is set.

// **Hints:**
// - Use `switch-case` or conditional rendering.
