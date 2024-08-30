import { Box, CircularProgress } from "@mui/material";

export const IsLoading = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};
