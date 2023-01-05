import React from 'react';
import { Box, Container, Text, Flex, Grid, Button, SimpleGrid } from '@chakra-ui/react';

export default function Gradient(): JSX.Element {

	/* Here's the list of supported direction shorthands and their respective values:
	{
		"to-t": "to top",
		"to-tr": "to top right",
		"to-r": "to right",
		"to-br": "to bottom right",
		"to-b": "to bottom",
		"to-bl": "to bottom left",
		"to-l": "to left",
		"to-tl": "to top left"
	}*/

	return (
		<div>
			<Box w='100%' h='200px' bgGradient='linear(to-r, green.200, pink.500)' />
			<Box w='100%' h='200px' bgGradient='linear(to-l, #7928CA, #FF0080)' />

		</div>
	);
}
