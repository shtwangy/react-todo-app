import React, {FC} from 'react';
import TextField from "@material-ui/core/TextField";

interface Props {
    fullWidth: boolean;
    label: string;
    multiline: boolean;
    required: boolean;
    rows: number;
    value: string;
    type: React.InputHTMLAttributes<unknown>['type'];
    onChange: () => void;
}

const TextInput: FC<Props> = (props: Props) => {
    return (
        <TextField
            fullWidth={props.fullWidth}
            label={props.label}
            margin="dense"
            multiline={props.multiline}
            required={props.required}
            rows={props.rows}
            value={props.value}
            type={props.type}
            onChange={props.onChange}
        />
    );
};

export default TextInput;
