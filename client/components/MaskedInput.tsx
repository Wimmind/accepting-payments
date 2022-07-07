import { forwardRef } from 'react'
import { IMaskInput } from 'react-imask';

interface MaskedInput {
    onChange: any,
    name: string,
    mask: string
}

const MaskedInput = forwardRef((props, ref) => {
    const { onChange, name, ...other } = props;
    console.log(other)
    return (
        <IMaskInput
            {...other}
            definitions={{ '#': /[1-9]/ }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name, value } })}
        />
    );
});

export default MaskedInput;