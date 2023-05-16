import React from 'react'
import { Button, Text, Td } from '@chakra-ui/react'
import { MdDoneAll, MdRemoveDone } from 'react-icons/md';

const SingleTodo = ({ todo, handleToggle, handleDelete }) => {
    return (
        <>
            <Td><Text color='white' fontSize='1.5rem'>{todo.title}</Text></Td>
            <Td><Text color='white' fontSize='1.5rem'>{todo.status ? <MdDoneAll /> : <MdRemoveDone />}</Text></Td>

            <Td><Button onClick={() => handleToggle(todo.id, todo.status)}>Toggle</Button></Td>
            <Td><Button onClick={() => handleDelete(todo.id)}>Delete</Button></Td>
        </>
    )
}

export default SingleTodo