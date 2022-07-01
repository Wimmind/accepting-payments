import { FC, useState, forwardRef } from 'react'
import { Box, TextField, Button, Grid } from '@mui/material'
import MaskedInput from './MaskedInput'

const CustomInput: FC = (props) => {
  const { mask, ...other } = props;

  return (
    <TextField
      {...other}
      InputProps={{
        inputComponent: MaskedInput,
      }}
      variant="standard"
    />
  );
}

export default CustomInput;

//{...materialUi} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
