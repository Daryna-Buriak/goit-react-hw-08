import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { AppBar as MuiAppBar, Toolbar, Box } from "@mui/material";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MuiAppBar position="static" color="primary" elevation={2}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </MuiAppBar>
  );
}
