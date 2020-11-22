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
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
}

const useStyles = makeStyles(() => ({
    todo: {
        margin: '0.5rem',
        background: 'white',
        color: 'black',
        transition: 'all 1s ease'
    },
    completedTodo: {
        margin: '0.5rem',
        background: 'white',
        color: 'black',
        transition: 'all 1s ease',
        opacity: '0.5'
    }
}));

const TodoListItem: FC<Props> = (props: Props) => {
    const classes = useStyles();
    const todos = props.todos;
    const todo = props.todo;

    const completeHandler = () => {
        props.setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    };

    const deleteHandler = () => {
        props.setTodos(todos.filter(el => el.id !== todo.id))
    };

    return (
        <ListItem className={todo.completed ? classes.completedTodo : classes.todo}>
            <ListItemText
                primary={todo.text}
                primaryTypographyProps={{style: {textDecoration: todo.completed ? 'line-through' : ''}}}
            />
            <ListItemSecondaryAction>
                <IconButton
                    aria-label="complete"
                    color="primary"
                    onClick={completeHandler}
                >
                    <DoneIcon />
                </IconButton>
                <IconButton
                    edge="end"
                    aria-label="delete"
                    color="secondary"
                    onClick={deleteHandler}
                >
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default TodoListItem;
