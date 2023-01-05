import React from 'react';
import { Box, Container, Text, Flex, Grid, Button, SimpleGrid } from '@chakra-ui/react';

export default function ColorMode(): JSX.Element {
	const { colorMode, toggleColorMode } = useColorMode()
/* Chakra UI comes with built-in support for managing color mode in your apps.

By default, most of Chakra's components are dark mode compatible. In some scenarios, 
you might need to make your component respond to color mode.

Tip: Chakra stores the color mode in localStorage or in cookies and appends a className 
to the body to ensure the color mode is persistent.
In case you need to reset the color mode, you must delete the item from localStorage or 
cookies, so on next page load the value is initialized 
like the first time user visited the page. */

	return (
		<div>

		</div>
	);
}
