import React from 'react';
import { Box, Container, Text, Flex, Grid, Button, SimpleGrid, Wrap, WrapItem, VStack, Center } from '@chakra-ui/react';


export default function index(): JSX.Element {

	return (
		<Wrap bg={'#F1F1F1'}>
			<Container>
				<Center>
					<Text as='h1'>Bem-vindo ao Toque task!</Text>
				</Center>
			</Container>
		</Wrap>
	);
}
