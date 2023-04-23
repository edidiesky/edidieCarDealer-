
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes() {
	const [price, setPrice] = useState(23900)
  return (
    <Box width={'100%'}>
      <Slider
        defaultValue={30000}
        aria-label="Small"
        size='large'
        valueLabelDisplay="auto"
        value={price}
        onChange={(e)=> setPrice(e.target.value)}
        min={23900} max={49500}
      />
    </Box>
  );
}