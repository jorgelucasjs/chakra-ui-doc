import React from 'react';
import { Box, Text, Flex, FormControl, FormLabel, Input, Button, Center, Wrap, WrapItem, Container } from '@chakra-ui/react';


export default function index(): JSX.Element {

	return (
		<Container>
			<Center bg={'#F1F1F1'} >
				<Box h={300} w={'32%'} mt={200}>
					<Box p={6} pb={0}>
						<Text fontSize='2xl' mb={1} fontWeight='bold'>Bem-vindo ao Toque task!</Text>
						<Text fontSize='14' color={'#555555'}>
							Precisamos de algumas informações para criar seu perfil!
							Ah,você pode editar essas informações depois.
						</Text>
					</Box>

					<Box bg='#fff' p={5} mt={3} borderRadius={5} border='1px solid #ddd'>
						<FormControl>
							<FormLabel fontSize='14' mb='4'>Informe seu email</FormLabel>
							<Input type='email' placeholder='example@gmail.com' />
							<Button
								w={'100%'}
								mt={2}
								bg='#DD0000'
								color='#fff'
								fontSize='14'
								_hover={{ bg: '#f00' }}
							>Próximo passo </Button>
						</FormControl>
					</Box>
				</Box>
			</Center>
		</Container>
	);
}
