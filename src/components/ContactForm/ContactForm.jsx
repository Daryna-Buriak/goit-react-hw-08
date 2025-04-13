import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { TextField, Button, Box, Stack } from "@mui/material";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .required("This field is required")
    .min(3, "Must be min 3 characters")
    .max(50),
  number: Yup.string()
    .required("This field is required")
    .min(3, "Must be min 3 characters")
    .max(50),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const telFieldId = useId();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={UserSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <Stack spacing={2} sx={{ maxWidth: 400 }}>
            <Field
              name="name"
              as={TextField}
              id={nameFieldId}
              label="Name"
              fullWidth
              error={touched.name && !!errors.name}
              helperText={<ErrorMessage name="name" />}
            />

            <Field
              name="number"
              as={TextField}
              id={telFieldId}
              label="Number"
              fullWidth
              error={touched.number && !!errors.number}
              helperText={<ErrorMessage name="number" />}
            />

            <Button type="submit" variant="contained" color="primary">
              Add Contact
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
