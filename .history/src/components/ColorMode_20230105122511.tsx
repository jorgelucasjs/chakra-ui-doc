import React from 'react';
import { Box, Container, Text, Flex, Grid, Button, SimpleGrid, useColorMode, useColorModeValue } from '@chakra-ui/react';

export default function ColorMode(): JSX.Element {
	const { colorMode, toggleColorMode } = useColorMode();
	/* Chakra UI comes with built-in support for managing color mode in your apps.
	
	By default, most of Chakra's components are dark mode compatible. In some scenarios, 
	you might need to make your component respond to color mode.
	
	Tip: Chakra stores the color mode in localStorage or in cookies and appends a className 
	to the body to ensure the color mode is persistent.
	In case you need to reset the color mode, you must delete the item from localStorage or 
	cookies, so on next page load the value is initialized 
	like the first time user visited the page. */
	const bg = useColorModeValue('red.500', 'red.200');
	const color = useColorModeValue('white', 'gray.800');

	return (
		<header>
			<Button onClick={toggleColorMode}>
				Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
			</Button>

			<Box mb={4} bg={bg} color={color}>
				This box's style will change based on the color mode.
			</Box>
		</header>
	);
}
