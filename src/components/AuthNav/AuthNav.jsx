import { NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";

const linkStyle = {
  textDecoration: "none",
  color: "white",
  "&.active": {
    fontWeight: "bold",
    borderBottom: "2px solid white",
  },
};

export default function AuthNav() {
  return (
    <Box display="flex" gap={2}>
      <Button component={NavLink} to="/register" sx={linkStyle}>
        Register
      </Button>
      <Button component={NavLink} to="/login" sx={linkStyle}>
        Log In
      </Button>
    </Box>
  );
}
