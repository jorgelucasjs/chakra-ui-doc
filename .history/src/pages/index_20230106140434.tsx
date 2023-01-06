import React from 'react';
import { Box, Container, Text, Flex, Grid, Button, SimpleGrid, Wrap, WrapItem, VStack, Center } from '@chakra-ui/react';


export default function index(): JSX.Element {

	return (
		<Wrap bg={'#F1F1F1'} height='100vh'>
			<Flex justify={'center'} align='center' bg={'#fff'}  bg={'#F1F1F1'} height='100vh'>
				<Box>
					<Text fontSize='4xl'>Bem-vindo ao Toque task!</Text>
					<Text fontSize='xs'>Precisamos de algumas informações para criar seu perfil! Ah, 
					você pode editar essas informações depois.</Text>
				</Box>
			</Flex>
		</Wrap>
	);
}
