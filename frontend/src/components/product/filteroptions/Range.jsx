import React, { useState } from "react";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";

export default function SliderSizes({
  minValue,
  setMinValue,
  maxValue,
  setMaxValue
}) {

  return (
    <form className="w-100 flex">
      <div className=" w-100">
        <MultiRangeSlider
          min={0}
          max={maxValue}
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
