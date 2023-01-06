import React from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
  } from '@chakra-ui/react';

export default function ModalComponent(): JSX.Element {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<header>
		
		</header>
	);
}
