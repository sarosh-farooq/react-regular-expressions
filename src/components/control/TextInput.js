import React from 'react'
import { TextField, Box } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';


export default function Input(props) {

    const { name, label, value, error = null, onChange, placeholder, onKeyDown, onKeyUp, min, max, type, endIcon, disabled, minValue } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder || ""}
            disabled={disabled || false}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Box component={endIcon} size='small' sx={{ fontSize: '18px !important', ml: 1 }} />
                    </InputAdornment>
                ),
            }}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            inputProps={{ minLength: min, maxLength: max, min: minValue }}
            size='small'
            fullWidth={true}
            {...(error && { error: true, helperText: error })}
            sx={{
                // width: '100%',
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderRadius: '12px'
                    },
                },
                '& .MuiOutlinedInput-input': {
                    // fontSize: '14px'
            }
            }}
/>
    )
}
