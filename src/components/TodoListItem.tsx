import React, {FC} from 'react';
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {Todo} from "../types/todo";

interface Props {
    todo: Todo;
}

const useStyles = makeStyles(() => ({
    todo: {
        margin: '0.5rem',
        background: 'white',
        color: 'black',
        transition: 'all 1s ease'
    }
}));

const TodoListItem: FC<Props> = (props: Props) => {
    const classes = useStyles();
    const todo = props.todo;
    return (
        <ListItem className={classes.todo}>
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction>
                <IconButton aria-label="complete" color="primary">
                    <DoneIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" color="secondary">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default TodoListItem;
