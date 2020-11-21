import React, {FC} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {SelectBox, TextInput} from "./UIKit";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import {Todo} from "../types/todo";

interface Props {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
    inputText: string;
    setInputText: (s: string) => void;
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

    const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        props.setInputText(e.target.value);
    };

    const submitTodoHandler = () => {
        console.log('submit');
        props.setTodos([
            ...props.todos,
            {
                text: props.inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ]);
        props.setInputText('');
    };
    const filters = [
        {id: 'all', name: 'ALL'},
        {id: 'completed', name: 'Completed'},
        {id: 'uncompleted', name: 'Uncompleted'}
    ];
    return (
        <div className={classes.form}>
            <TextInput
                fullWidth={false}
                label={"Add Task..."}
                multiline={false}
                required={false}
                rows={1}
                value={props.inputText}
                type={"text"}
                onChange={inputTextHandler}
            />
            <IconButton onClick={submitTodoHandler}>
                <AddIcon />
            </IconButton>
            <div>
                <SelectBox
                    label={'FILTER'}
                    required={true}
                    value={'ALL'}
                    options={filters}
                    select={() => {}}
                />
            </div>
        </div>
    );
};

export default Form;
