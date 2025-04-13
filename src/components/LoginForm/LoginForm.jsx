import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { logIn } from "../../redux/auth/operations";
import { TextField, Button, Stack, Typography, Paper } from "@mui/material";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      {({ handleChange, values }) => (
        <Form autoComplete="off">
          <Paper
            elevation={3}
            sx={{
              p: 4,
              maxWidth: 400,
              mx: "auto",
              mt: 4,
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <Stack spacing={3}>
              <Typography variant="h5" align="center">
                Log In
              </Typography>

              <TextField
                label="Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                required
                fullWidth
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Log In
              </Button>
            </Stack>
          </Paper>
        </Form>
      )}
    </Formik>
  );
}
