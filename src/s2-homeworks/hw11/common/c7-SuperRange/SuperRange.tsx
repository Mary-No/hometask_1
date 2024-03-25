import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 300,
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
            size="small"
        />
    )
}

export default SuperRange
