import React, {FC} from 'react';
import {TodoListItem} from "./index";
import List from "@material-ui/core/List";
import {Todo} from "../types/todo";

interface Props {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
    filteredTodos: Todo[];
}

const TodoList: FC<Props> = (props: Props) => {
    const todos = props.todos;
    const filteredTodos = props.filteredTodos;
    return (
        <div>
            <List>
                {filteredTodos.length > 0 && (
                    filteredTodos.map(
                        todo =>
                            <TodoListItem
                                key={todo.id}
                                todo={todo}
                                todos={todos}
                                setTodos={props.setTodos}
                            />)
                )}
            </List>
        </div>
    );
};

export default TodoList;
