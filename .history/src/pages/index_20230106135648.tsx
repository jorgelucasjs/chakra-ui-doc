import React from 'react';
import { Box, Container, Text, Flex, Grid, Button, SimpleGrid, Wrap, WrapItem, VStack } from '@chakra-ui/react';


export default function index(): JSX.Element {

	return (
		<Wrap p={5}>
			<Container maxW='md' bg='blue.600' color='white'>
				<div>md Container</div>
			</Container>
			<Container maxW='1050px' bg='purple.600' color='white'>
				<div>550px Container</div>
			</Container>
			<Container maxW='container.sm' bg='green.400' color='#262626'>
				<div>container.sm Container</div>
			</Container>

			<Container maxW='2xl' bg='blue.600' centerContent>
				<Box padding='4' bg='blue.400' color='black' maxW='md'>
					There are many benefits to a joint design and development system. Not only
					does it bring benefits to the design team, but it also brings benefits to
					engineering teams. It makes sure that our experiences have a consistent look
					and feel, not just in our design specs, but in production.
				</Box>
			</Container>
		</Wrap>
	);
}
