import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function SliderSizes({ value, onChange }) {
  return (
    <Box width={"100%"}>
      <Slider
        valueLabelDisplay="auto"
        value={value}
        onChange={onChange}
        aria-labelledby="range-slider"
        getAriaValueText = {() => {
          return `${value}`;
       }}
      />
    </Box>
  );
}
