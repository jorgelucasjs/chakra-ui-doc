import React from 'react';
import { Box, Container, Text, Flex, Grid, Button, SimpleGrid, Wrap, WrapItem, VStack, Center, Heading } from '@chakra-ui/react';


export default function index(): JSX.Element {

	return (
		<Flex justify={'center'} bg={'#F1F1F1'} height='100vh'>
			<Heading>
				
			</Heading>
			<Box bg='#fff' p={10} m={10} h={300}>
				<Text fontSize='2xl' mb={1}>Bem-vindo ao Toque task!</Text>
				<Text fontSize='xs'>Precisamos de algumas informações para criar seu perfil! Ah,
					você pode editar essas informações depois.</Text>
			</Box>
		</Flex>
	);
}
