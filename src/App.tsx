import React, { useState, useEffect } from 'react';
import './App.css';
import {Form, TodoList} from "./components";
import {Todo} from "./types/todo";

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([] as Todo[]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([] as Todo[]);

    const filterHandler = () => {
        switch(status){
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => !todo.completed));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

    useEffect(() => {
        filterHandler();
    }, [todos, status]);

    return (
        <div className="App">
            <header>
                <h1>Shtwangy's ToDo List</h1>
            </header>
            <Form
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                setInputText={setInputText}
                status={status}
                setStatus={setStatus}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
            />
        </div>
    );
}

export default App;
