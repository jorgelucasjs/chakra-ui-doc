import React from 'react';
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	RadioGroup,
	HStack,
	Radio,
	Stack,
	useDisclosure,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	Text,
	ModalFooter,
	InputGroup,
	InputLeftAddon,
	InputRightAddon
} from '@chakra-ui/react';

export default function FormControlModal(): JSX.Element {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<div>
			<>
				<Button onClick={onOpen}>Open Modal</Button>
				<Modal isOpen={true} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Modal Title</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
						<Stack spacing={4}>
									<InputGroup>
										<InputLeftAddon children='+234' />
										<Input type='tel' placeholder='phone number' />
									</InputGroup>

									{/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
									<InputGroup size='sm'>
										<InputLeftAddon children='https://' />
										<Input placeholder='mysite' />
										<InputRightAddon children='.com' />
									</InputGroup>
								</Stack>
						</ModalBody>
						<ModalFooter>
							<Button colorScheme='blue' mr={3} onClick={onClose}>
								Close
							</Button>
							<Button variant='ghost'>Secondary Action</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</>
		</div>
	);
}
