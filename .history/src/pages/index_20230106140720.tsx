import React from 'react';
import { Box, Container, Text, Flex, Grid, Button, SimpleGrid, Wrap, WrapItem, VStack, Center } from '@chakra-ui/react';


export default function index(): JSX.Element {

	return (
		<Flex justify={'center'} bg={'#F1F1F1'} height='100vh'>
			<Box bg='#fff' p={10} m=>
				<Text fontSize='2xl'>Bem-vindo ao Toque task!</Text>
				<Text fontSize='xs'>Precisamos de algumas informações para criar seu perfil! Ah,
					você pode editar essas informações depois.</Text>
			</Box>
		</Flex>
	);
}
