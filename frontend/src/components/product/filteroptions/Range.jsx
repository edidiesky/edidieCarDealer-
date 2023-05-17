import React, { useState } from "react";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";

export default function SliderSizes({
  minValue,
  setMinValue,
  maxValue,
  setMaxValue
}) {

  // return (
  //   <Box width={"100%"}>
  //     {/* <Slider
  //       valueLabelDisplay="auto"
  //       value={value}
  //       onChange={onChange}
  //       aria-labelledby="range-slider"
  //       getAriaValueText = {() => {
  //         return `${value}`;
  //      }}
  //     /> */}
  //     <Slider
  //       getAriaLabel={() => "Select Range"}
  //       value={value}
  //       onChange={onChange}
  //       valueLabelDisplay="auto"
  //       getAriaValueText={() => {
  //         return `${value}`;
  //       }}
  //     />
  //   </Box>
  // );
  return (
    <form className="w-100 flex">
      <div className=" w-100">
        <MultiRangeSlider
          min={0}
          max={100000}
          step={5}
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e) => {
            setMinValue(e.minValue);
            setMaxValue(e.maxValue);
          }}
        ></MultiRangeSlider>
      </div>
    </form>
  );
}
