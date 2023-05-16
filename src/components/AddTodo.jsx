import { Button, ModalBody, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Input } from '@chakra-ui/react'
import React from 'react'

const AddTodo = ({ handleChange, handleAddTodo }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const addTodo = () => {
        handleAddTodo();
        onClose();
    }

    return (
        <>
            <Button bgColor='green.500' colorScheme='green' onClick={onOpen}>Add Todo</Button>

            <Modal w='50vw' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Enter Todo Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input type='text' onChange={(e) => handleChange(e.target.value)} autoFocus placeholder='Eg- Do Meditation' />
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' colorScheme='blue' mr={3} onClick={addTodo}>
                            ADD
                        </Button>
                        <Button variant='ghost' colorScheme='red' onClick={onClose}>CANCEL</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddTodo 