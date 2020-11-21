import React, {FC} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {TextInput} from "./UIKit";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

interface Props {
}

const useStyles = makeStyles(() => ({
    form: {
        alignItems: 'center',
        minHeight: '10vh',
        justifyContent: 'center',
        display: 'flex',
    }
}));

const Form: FC<Props> = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.form}>
            <TextInput
                fullWidth={false}
                label={"Input Task"}
                multiline={false}
                required={false}
                rows={1}
                type={"text"}
            />
            <IconButton>
                <AddIcon />
            </IconButton>
        </div>
    );
};

export default Form;
