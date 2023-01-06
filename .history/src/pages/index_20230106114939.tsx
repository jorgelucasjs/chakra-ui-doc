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
		<VStack>
			<Container maxW='md' bg='blue.600' color='white'>
				<
			</Container>
			<Container maxW='550px' bg='purple.600' color='white'>
				"550px" Container
			</Container>
			<Container maxW='container.sm' bg='green.400' color='#262626'>
				"container.sm" Container
			</Container>
		</VStack>
	);
}
