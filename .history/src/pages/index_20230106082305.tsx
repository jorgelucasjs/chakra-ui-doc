import React from 'react';
import { Box, Container, Text, Flex, Grid, Button, SimpleGrid } from '@chakra-ui/react';
import Gradient from '../components/Gradient';
import ColorMode from '../components/ColorMode';
import ModalComponent from '../components/ModalComponent';
import TabsComponents from '../components/TabsComponents';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react':

export default function index(): JSX.Element {

	return (
		<Box p={10}  h={'100vh'}>
			{/* <Gradient /> */}
			{/* <ColorMode /> */}
			{/* <ModalComponent /> */}

			{/* <TabsComponents /> */}
			<CircularProgress value={80} />
		</Box>
	);
}
