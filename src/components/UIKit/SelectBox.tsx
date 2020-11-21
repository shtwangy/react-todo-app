import React, {FC} from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/styles";

interface Props {
    label: string;
    required: boolean;
    value?: string;
    options: {
        id: string;
        name: string;
    }[];
    select: () => void
}

const useStyles = makeStyles({
    formControl: {
        minWidth: 128,
    }
});

const SelectBox: FC<Props> = (props: Props) => {
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl}>
            <InputLabel>{props.label}</InputLabel>
            <Select
                required={props.required}
                value={props.value}
                onChange={props.select}
            >
                {props.options.map(option => (
                    <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
};

export default SelectBox;
