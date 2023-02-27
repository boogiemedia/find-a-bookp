import React from "react";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

export default function ToolBar() {
  const [category, setCategory] = React.useState("");
  const handleChange = (event: { target: { value: string } }) => {
    setCategory(event.target.value);
  };
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
    },
  }));
  return (
    <Toolbar
      sx={{
        backgroundColor: "white",
      }}
    >
      <Typography noWrap component="div">
        From price
      </Typography>
      <FormControl sx={{ m: 1, width: "10ch" }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-price"
          endAdornment={<InputAdornment position="end">$</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
        />
      </FormControl>
      <Typography noWrap component="div">
        To price
      </Typography>
      <FormControl sx={{ m: 1, width: "10ch" }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-price"
          endAdornment={<InputAdornment position="end">$</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
        />
      </FormControl>
      <Typography noWrap component="div" sx={{ marginLeft: "20px" }}>
        Category
      </Typography>
      <FormControl sx={{ m: 1 }} variant="standard">
        <NativeSelect
          id="demo-customized-select-native"
          value={category}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </Toolbar>
  );
}
