import { useEffect, useState } from 'react'
import AddTodo from './AddTodo';
import { Flex, Text, Input, Box, Spinner } from '@chakra-ui/react';
import TodoList from './TodoList';
import { deleteTodo, getTodos, postTodo, updateTodo, getTodosByQuery } from '../api';

const Todo = () => {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');

    const handleChange = (textValue) => {
        setText(textValue);
    }

    const handleQuery = () => {
        getTodosByQuery(query)
            .then(res => setTodos(res.data)).catch(err => console.log(err));
    }

    useEffect(() => {
        handleQuery();
    }, [query])

    const handleGetTodos = () => {
        setLoading(true);
        getTodos()
            .then(res => {
                setTodos(res.data);
                setLoading(false)
            })
            .catch(err => {
                setLoading(false);
                console.log(err)
            });
    }

    useEffect(() => {
        handleGetTodos();
    }, [])

    const handleAddTodo = () => {
        if (text === '') return;

        const todo = {
            title: text,
            status: false
        }

        postTodo(todo)
            .then(res => handleGetTodos()).catch(err => console.log(err));
        setText('');
    }

    const handleToggle = (id, status) => {
        updateTodo(id, status)
            .then(res => handleGetTodos()).catch(err => console.log(err));
    }

    const handleDelete = (id) => {
        deleteTodo(id)
            .then(res => handleGetTodos()).catch(err => console.log(err));
    }

    return (
        <Flex w='100vw' h='100vh' bgColor='gray.200' direction='column' gap='1rem' alignItems='center'>
            <Box bgColor='black' p='.4rem' w='100vw'>
                <Text as='b' color='white' textAlign='center'>To-Do List</Text>
            </Box>

            <Input w='25vw' h='5vh' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' onChange={(e) => setQuery(e.target.value)} placeholder='Search something...' />

            <AddTodo handleChange={handleChange} handleAddTodo={handleAddTodo} />

            {loading && <Spinner color='red.500' size='lg' />}
            {!loading && <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />}
        </Flex>
    )
}

export default Todo