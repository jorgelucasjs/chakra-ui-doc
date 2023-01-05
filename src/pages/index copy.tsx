import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';

export default function index(): JSX.Element {
	return (
		<Container>

			{/* 
			Gradient
			// adding linear gradient and color transitions
			<Box w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)" />

			// adding radial gradient and color transitions
			<Box w="100%" h="200px" bgGradient="radial(gray.300, yellow.400, pink.200)" />

			<Text
				bgGradient="linear(to-l, #7928CA, #FF0080)"
				bgClip="text"
				fontSize="6xl"
				fontWeight="extrabold"
			>
				Welcome to Chakra UI
			</Text> */}

			{/* 
			Typography
			<Text fontSize="md" >Welcome to Chakra UI</Text>

		
			<Text fontSize={32} >Welcome to Chakra UI</Text>

			<Text fontSize='4em' >Welcome to Chakra UI</Text>

			<Text textAlign={['left', 'center']} >Welcome to Chakra UI</Text> */}

			<Box w="100%" h="132px" border={'1px solid #f00'} boxSize='sm'/>

		</Container>
	);
}
