import React from 'react';
import { Box, Text, Flex, FormControl, FormLabel, Input, Button, Heading } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function RegisterStepOne() {

	const breakpoints = { base: '100%', sm: '80%', md: '32%' };

	return (
		<Flex justify={'center'}>
			<Box width={breakpoints} mt={200} >
				<Box p={3} pb={0}>
					<Heading as='h1' fontSize='2xl' mb={1} fontWeight='bold'>Bem-vindo ao Toque task!</Heading>
					<Text fontSize='14' color={'#555555'} lineHeight='5'>
						Precisamos de algumas informações para criar seu perfil!
						Ah,você pode editar essas informações depois.
					</Text>
				</Box>
				<Box bg='#fff' p={5} mt={3} borderRadius={5} border='1px solid #ddd'>
					<FormControl as='form'>
						<FormLabel fontSize='14' mb='4'>Informe seu email</FormLabel>
						<Input
							type='email'
							placeholder='example@gmail.com'
							required
						/>
						<Button
							w={'100%'}
							mt={2}
							bg='#DD0000'
							color='#fff'
							fontSize='14'
							_hover={{ bg: '#f00' }}
							_active={{ bg: '#b90505' }}
							type='submit'
						>Próximo passo <ArrowForwardIcon fontSize='16' ml={2} /> </Button>
					</FormControl>
				</Box>
			</Box>
		</Flex>
	);
}
