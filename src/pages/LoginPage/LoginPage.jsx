import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Container, Typography } from "@mui/material";

export default function LoginPage() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <LoginForm />
    </Container>
  );
}
