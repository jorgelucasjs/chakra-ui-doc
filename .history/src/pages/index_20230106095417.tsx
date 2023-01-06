import React from 'react';
import { Box, Container, Text, Flex, Grid, Button, SimpleGrid, Wrap } from '@chakra-ui/react';
import Gradient from '../components/Gradient';
import ColorMode from '../components/ColorMode';
import ModalComponent from '../components/ModalComponent';
import TabsComponents from '../components/TabsComponents';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import SkeletonComponents from '../components/SkeletonComponents';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
export default function index(): JSX.Element {

	return (
		<Box p={10} h={'100vh'}>
			{/* <Gradient /> */}
			{/* <ColorMode /> */}
			{/* <ModalComponent /> */}

			{/* <TabsComponents /> */}
			{/* <SkeletonComponents /> */}

			<Wrap>
				<WrapItem>
					<Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
				</WrapItem>
				<WrapItem>
					<Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
				</WrapItem>
				<WrapItem>
					<Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
				</WrapItem>
				<WrapItem>
					<Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
				</WrapItem>
				<WrapItem>
					<Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
				</WrapItem>
				<WrapItem>
					<Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
				</WrapItem>
				<WrapItem>
					<Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
				</WrapItem>
			</Wrap>
		</Box>
	);
}
