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
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
            variant="filled"
        />
    );
};

export default TextInput;
