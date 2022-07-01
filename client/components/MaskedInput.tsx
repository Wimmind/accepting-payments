import { forwardRef } from 'react'
import { IMaskInput } from 'react-imask';

interface MaskedInput {
    onChange: any,
    name: string
}

const MaskedInput = forwardRef((props, ref) => {
    const { onChange, name, ...other } = props;
    return (
        <IMaskInput
            {...other}
            definitions={{ '#': /[1-9]/ }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name, value } })}
            overwrite
        />
    );
});

export default MaskedInput;