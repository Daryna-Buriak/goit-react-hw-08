import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Box, Button } from "@mui/material";

const linkStyle = {
  textDecoration: "none",
  color: "white",
  "&.active": {
    fontWeight: "bold",
    borderBottom: "2px solid white",
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box display="flex" gap={2}>
      <Button component={NavLink} to="/" sx={linkStyle}>
        Home
      </Button>
      {isLoggedIn && (
        <Button component={NavLink} to="/contacts" sx={linkStyle}>
          Contacts
        </Button>
      )}
    </Box>
  );
}
