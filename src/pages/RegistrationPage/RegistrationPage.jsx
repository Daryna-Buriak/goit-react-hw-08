import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { Container, Typography } from "@mui/material";

export default function RegisterPage() {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Register your account
      </Typography>
      <RegistrationForm />
    </Container>
  );
}
