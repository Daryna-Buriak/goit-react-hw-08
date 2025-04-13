import css from "./Contact.module.css";
import { TiUser, TiPhone } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  TextField,
} from "@mui/material";

export default function Contact({ contactItem: { name, number, id } }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const handleEdit = () => {
    dispatch(
      editContact({
        id,
        updatedContact: { name: editedName, number: editedNumber },
      })
    );
    setIsEditing(false);
  };

  return (
    <Card sx={{ mb: 2, p: 2 }}>
      <CardContent>
        {isEditing ? (
          <Stack spacing={2}>
            <TextField
              label="Name"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              fullWidth
            />
            <TextField
              label="Number"
              value={editedNumber}
              onChange={(e) => setEditedNumber(e.target.value)}
              fullWidth
            />
            <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={handleEdit}>
                Save
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                  setEditedName(name);
                  setEditedNumber(number);
                  setIsEditing(false);
                }}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <TiUser size={24} />
              <Typography variant="body1">{name}</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <TiPhone size={24} />
              <Typography variant="body1">{number}</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                onClick={() => {
                  setEditedName(name);
                  setEditedNumber(number);
                  setIsEditing(true);
                }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </Button>
            </Stack>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}
