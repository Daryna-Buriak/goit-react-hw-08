import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { Container, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <PageTitle>Welcome to ContactBook 📇</PageTitle>

      <Box
        sx={{
          mt: 4,
          p: 4,
          borderRadius: 4,
          boxShadow: 3,
          backgroundColor: "background.paper",
          textAlign: "center",
        }}
      >
        {isLoggedIn ? (
          <>
            <Typography variant="h5" gutterBottom>
              Welcome back, {user.name}!
            </Typography>
            <Typography variant="body1" mb={3}>
              You can view and manage your contacts on the Contacts page.
            </Typography>
            <Button
              component={Link}
              to="/contacts"
              variant="contained"
              color="primary"
            >
              Go to Contacts
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5" gutterBottom>
              Easily manage all your contacts in one place!
            </Typography>
            <Typography variant="body1" mb={3}>
              Please register or log in to start using ContactBook.
            </Typography>
            <Box display="flex" justifyContent="center" gap={2}>
              <Button
                component={Link}
                to="/register"
                variant="contained"
                color="primary"
              >
                Register
              </Button>
              <Button
                component={Link}
                to="/login"
                variant="outlined"
                color="primary"
              >
                Log In
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
}
