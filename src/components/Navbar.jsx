import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      backgroundColor: "#007bff",
      color: "white"
    }}>
      <h2>Job Portal</h2>

      <div>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>
          Home
        </Link>
        <Link to="/jobs" style={{ color: "white" }}>
          Jobs
        </Link>
      </div>
    </div>
  );
};

export default Navbar;