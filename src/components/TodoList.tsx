import React, {FC} from 'react';
import {TodoListItem} from "./index";
import List from "@material-ui/core/List";
import {Todo} from "../types/todo";

interface Props {
    todos: Todo[];
}

const TodoList: FC<Props> = (props: Props) => {
    const todos = props.todos;
    return (
        <div>
            <List>
                {todos.length > 0 && (
                    todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)
                )}
            </List>
        </div>
    );
};

export default TodoList;
