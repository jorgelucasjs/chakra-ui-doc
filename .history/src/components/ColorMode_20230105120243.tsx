import React from 'react';
import { Box, Container, Text, Flex, Grid, Button, SimpleGrid } from '@chakra-ui/react';

export default function ColorMode(): JSX.Element {

	

	return (
		<Flex flexWrap='wrap' gap='24px' justifyContent='space-evenly'>
			{/* adding backdrop-filter property to the element */}
			<Box sx={outerBoxStyles}>
				<Box sx={innerBoxStyles} backdropFilter='invert(100%)'>
					Box with Backdrop Filter
				</Box>
			</Box>
			{/* adding backdrop-blur property to the element */}
			<Box sx={outerBoxStyles}>
				<Box sx={innerBoxStyles} backdropFilter='auto' backdropBlur='8px'>
					Box with Backdrop Blur
				</Box>
			</Box>
			{/* adding backdrop-contrast property to the element */}
			<Box sx={outerBoxStyles}>
				<Box sx={innerBoxStyles} backdropFilter='auto' backdropContrast='30%'>
					Box with Backdrop Contrast
				</Box>
			</Box>
		</Flex>
	);
}
