import React from 'react';
import { Box, Container, Text, Flex, Grid, Button, SimpleGrid } from '@chakra-ui/react';
import Gradient from '../components/Gradient';
import ColorMode from '../components/ColorMode';
import ModalComponent from '../components/ModalComponent';


export default function index(): JSX.Element {

	return (
		<Box p={10} b>
			{/* <Gradient /> */}
			{/* <ColorMode /> */}
			<ModalComponent />
		</Box>
	);
}
