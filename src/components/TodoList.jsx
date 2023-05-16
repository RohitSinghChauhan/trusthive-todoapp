import React from 'react'
import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import SingleTodo from './SingleTodo'

const TodoList = ({ todos, handleToggle, handleDelete }) => {

    if (todos.length < 1) {
        return 'Please add some Todos!'
    }
    return (
        < TableContainer >
            <Table variant='simple'>
                <Thead>
                    <Tr bgColor='royalblue'>
                        <Th color='white'>Todo</Th>
                        <Th color='white'>Status</Th>
                        <Th></Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {todos?.map((todo) => (
                        <Tr key={todo.id} bgColor='teal.400'>
                            <SingleTodo todo={todo} index={todo.id} handleToggle={handleToggle} handleDelete={handleDelete} />
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer >
    )
}

export default TodoList