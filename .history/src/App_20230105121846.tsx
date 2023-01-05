import * as React from 'react';
import PagesRouter from './routes';
import { extendTheme, ChakraProvider, ColorModeScript } from '@chakra-ui/react';

export default function App(): JSX.Element {

/* 	const colors = {
		brand: {
			900: '#1a365d',
			800: '#153e75',
			700: '#2a69ac',
		},
	};

	const theme = extendTheme({ colors }); */

	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<PagesRouter />
		</ChakraProvider>
	);
}
