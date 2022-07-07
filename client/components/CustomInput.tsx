import { FC, useState, forwardRef, RefCallback } from 'react'
import { Box, TextField, Button, Grid, InputLabel, Input, FormControl } from '@mui/material'
import MaskedInput from './MaskedInput'

import { IMaskInput } from 'react-imask';

interface MaskedInputProps {
  onChange: (event: { name: string; value: string }) => void;
  name: string;
}

const CustomInput: FC = (props) => {
  const { mask, label, ...other } = props;

  const MaskedInput = forwardRef<HTMLElement, MaskedInputProps>((props, ref) => {
    const { onChange, ...other } = props;

    return (
      <IMaskInput
        {...other}
        mask={mask}
        definitions={{ '#': /[1-9]/ }}
        inputRef={ref as RefCallback<HTMLTextAreaElement | HTMLInputElement>}
        onAccept={(value) => onChange({ name: props.name, value })}
        overwrite
      />
    );
  })

  return (
    <FormControl variant="standard">
      <InputLabel htmlFor="formatted-text-mask-input">{label}</InputLabel>
      <Input
        {...other}
        id="formatted-text-mask-input"
        inputComponent={MaskedInput as any}
      />
    </FormControl>
  );
}

export default CustomInput;

//{...materialUi} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
