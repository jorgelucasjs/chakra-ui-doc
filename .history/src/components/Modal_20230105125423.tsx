import React from 'react';
import { Box, Container, Text, Flex, Grid, Button, SimpleGrid, useColorMode, useColorModeValue } from '@chakra-ui/react';

export default function Modal(): JSX.Element {
	

	return (
		<header>
			<Button onClick={toggleColorMode}>
				Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
			</Button>

			<Box mb={4} bg={bg} color={color}>
				This boxs style will change based on the color mode.
			</Box>
		</header>
	);
}
