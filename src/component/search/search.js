import styles from "./search.module.scss";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { grey } from "@mui/material/colors";
function Search({ setSearch, search }) {
  return (
    <>
      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
        <FilledInput
          id="outlined-adornment-search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="outlined-adornment-password" edge="end">
                <SearchSharpIcon
                  fontSize="large"
                  sx={{ color: grey[900], fontWeight: "bold" }}
                ></SearchSharpIcon>
              </IconButton>
            </InputAdornment>
          }
          label="Search"
        />
      </FormControl>
    </>
  );
}
export default Search;
