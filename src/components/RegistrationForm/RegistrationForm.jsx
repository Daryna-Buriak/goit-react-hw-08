import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { register } from "../../redux/auth/operations";
import { toast } from "react-toastify";
import { TextField, Button, Stack, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validatePassword = (password) => {
    if (password.length < 7) {
      return "Password must be at least 7 characters long";
    }
  };

  const handleSubmit = (values, actions) => {
    const { name, email, password } = values;

    if (!name || !email || !password) {
      toast.error("Please fill in all required fields");
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    dispatch(register(values)).then(() => {
      navigate("/");
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
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
              <TextField
                label="Username"
                name="name"
                value={values.name}
                onChange={handleChange}
                required
                fullWidth
              />
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
                helperText="Password must be at least 7 characters"
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Register
              </Button>
            </Stack>
          </Paper>
        </Form>
      )}
    </Formik>
  );
}
