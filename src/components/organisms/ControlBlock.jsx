import React from "react";
import styled from "styled-components";
import { assoc } from "ramda";
import { Input } from "@mui/material";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";

import { getSelectOptions, getRolesOptions } from "../../utils.js";

function ControlBlock({ data, onChange, searchValues }) {
  const handleChange = (name) => (e) => {
    onChange(assoc(name, e.target.value, searchValues));
  };

  return (
    <Wrapper>
      <Input
        placeholder="Enter ship name..."
        value={searchValues.name}
        onChange={handleChange("name")}
      />

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="Home port">Home port</InputLabel>
        <Select
          labelId="Home port"
          id="Home port"
          value={searchValues.home_port}
          label="Home port"
          onChange={handleChange("home_port")}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {getSelectOptions(data, "home_port").map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="Type">Type</InputLabel>
        <Select
          labelId="Type"
          id="Type"
          value={searchValues.type}
          label="Type"
          onChange={handleChange("type")}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {getSelectOptions(data, "type")?.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="Role">Role</InputLabel>
        <Select
          labelId="Role"
          id="Role"
          value={searchValues.role}
          label="Role"
          onChange={handleChange("role")}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {getRolesOptions(data)?.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  height: 80px;
  background-color: lightgrey;

  input {
    margin-left: 20px;
  }
`;
export default ControlBlock;
