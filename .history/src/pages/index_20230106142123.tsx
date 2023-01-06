import React from 'react';
import { Box, Container, Text, Flex, Grid, Button, SimpleGrid, Wrap, WrapItem, VStack, Center, Heading, FormControl, FormLabel, Input } from '@chakra-ui/react';


export default function index(): JSX.Element {

	return (
		<Flex justify={'center'} bg={'#F1F1F1'} height='100vh'>
			<Box h={300} w={'35%'} mt={100}>
				<Box p={6} pb={0}>
					<Text fontSize='2xl' mb={1}>Bem-vindo ao Toque task!</Text>
					<Text fontSize='xs'>Precisamos de algumas informações para criar seu perfil! Ah,
						você pode editar essas informações depois.</Text>
				</Box>

				<Box bg='#fff' p={5} mt={3}>
					<FormControl>
						<FormLabel>Informe seu email</FormLabel>
						<Input type='email' />
						<Button w={'100%'} mt={2} bg={'#DD0000'} color>Próximo passo  </Button>
					</FormControl>
				</Box>
			</Box>
		</Flex>
	);
}
