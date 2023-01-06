import React from 'react';
import { Box, Container, Text, Flex, Grid, Button, SimpleGrid, Wrap, WrapItem, VStack } from '@chakra-ui/react';
import Gradient from '../components/Gradient';
import ColorMode from '../components/ColorMode';
import ModalComponent from '../components/ModalComponent';
import TabsComponents from '../components/TabsComponents';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import SkeletonComponents from '../components/SkeletonComponents';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import FormControl from '../components/FormControl';

export default function index(): JSX.Element {

	return (
		<VStack p={5}>
			<Container maxW='md' bg='blue.600' color='white'>
				<div>md Container</div>
			</Container>
			<Container maxW='1050px' bg='purple.600' color='white'>
				<div>550px Container</div>
			</Container>
			<Container maxW='container.sm' bg='green.400' color='#262626'>
				<div>container.sm Container</div>
			</Container>

			<Container maxW='2xl' bg='blue.600' centerContent>
				<Box padding='4' bg='blue.400' color='black' maxW='md'>
					There are many benefits to a joint design and development system. Not only
					does it bring benefits to the design team, but it also brings benefits to
					engineering teams. It makes sure that our experiences have a consistent look
					and feel, not just in our design specs, but in production.
				</Box>
			</Container>
		</VStack>
	);
}
