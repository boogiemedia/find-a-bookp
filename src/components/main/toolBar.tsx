import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Button from "@mui/material/Button";

//..................End of imports.........................................
interface props {
  reset: any;
  filtredBooks: any;
  handleFilter: any;
  categories: any;
}
//........................end of props...............................

export default function ToolBar({
  reset,
  filtredBooks,
  handleFilter,
  categories,
}: props) {
  const [category, setCategory] = useState<any>([]);
  const handleChange = (event: { target: { value: string } }) => {
    setCategory(event.target.value);
    filtredBooks(event.target.value);
  };
  //...................................End of constants..................................
  function handleReset() {
    reset();
    setCategory("N/A");
  }

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

  //.......................End of styling MUI.........................

  return (
    <Toolbar
      sx={{
        backgroundColor: "white",
      }}
    >
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
          <option aria-label="None" value="N/A">
            N/A
          </option>
          {categories.map((val: any) => (
            <option value={val}>{val}</option>
          ))}
        </NativeSelect>
      </FormControl>
      <Button
        sx={{ marginRight: "20px" }}
        variant="contained"
        size="medium"
        onClick={handleFilter}
      >
        filter
      </Button>
      <Button onClick={handleReset} variant="contained" size="medium">
        reset
      </Button>
    </Toolbar>
  );
}
