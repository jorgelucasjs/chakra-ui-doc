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
} from '@chakra-ui/react';

export default function FormControlModal(): JSX.Element {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const finalRef = React.useRef(null);
	const [scrollBehavior, setScrollBehavior] = React.useState('inside');

	const btnRef = React.useRef(null);
	return (
		<div>
			<FormControl as='fieldset'>
				<Stack spacing={3}>
					<Input placeholder='extra small size' size='xs' />
					<Input placeholder='small size' size='sm' />
					<Input placeholder='medium size' size='md' />
					<Input placeholder='large size' size='lg' />
				</Stack>
			</FormControl>

			<>
			<Button onClick={onOpen}>Open Modal</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text mb={3}>
							Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
							ullamco deserunt aute id consequat veniam incididunt duis in sint
							irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
							officia tempor esse quis.Sunt ad dolore quis aute consequat. Magna
							exercitation reprehenderit magna aute tempor cupidatat consequat
							elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt
							cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris
							do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum
							eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad
							veniam.
						</Text>

						<Text>
							Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
							ullamco deserunt aute id consequat veniam incididunt duis in sint
							irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
							officia tempor esse quis.Sunt ad dolore quis aute consequat. Magna
							exercitation reprehenderit magna aute tempor cupidatat consequat
							elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt
							cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris
							do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum
							eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad
							veniam.
						</Text>
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
