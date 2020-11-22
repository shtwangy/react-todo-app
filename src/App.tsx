import React, { useState } from 'react';
import './App.css';
import {Form, TodoList} from "./components";
import {Todo} from "./types/todo";

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([] as Todo[]);
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
            />
            <TodoList todos={todos}/>
        </div>
    );
}

export default App;
