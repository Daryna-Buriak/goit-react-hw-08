import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logOut());
    navigate("/login");
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography variant="subtitle1" sx={{ color: "white" }}>
        Welcome, {user.name}
      </Typography>
      <Button variant="outlined" color="inherit" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
}
