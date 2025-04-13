import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { setStatusFilter } from "../../redux/filters/slice";
import { TextField, Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const location = useLocation();

  const handleChange = (event) => {
    dispatch(setStatusFilter(event.target.value));
  };

  useEffect(() => {
    dispatch(setStatusFilter(""));
  }, [location.pathname, dispatch]);

  return (
    <Box sx={{ mt: 4, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Find contacts by name
      </Typography>
      <TextField
        type="text"
        value={filter}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        placeholder="Search contacts"
      />
    </Box>
  );
}
