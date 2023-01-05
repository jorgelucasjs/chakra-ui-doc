import * as React from 'react';
import PagesRouter from './routes';
import { extendTheme, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme/theme';

export default function App(): JSX.Element {

	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<PagesRouter />
		</ChakraProvider>
	);
}
