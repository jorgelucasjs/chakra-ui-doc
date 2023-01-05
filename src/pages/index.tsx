import React from 'react';
import { Box, Container, Text, Flex, Grid, Button, SimpleGrid } from '@chakra-ui/react';
import Shadow from '../components/Shadow';
import Filter from '../components/Filter';
import BackdropFilters from '../components/BackdropFilters';

export default function index(): JSX.Element {

	return (
		<Box p={10}>
			{/* <Text color='#098' fontSize={'130'} textAlign='center'>Flexbox</Text>
			<Box
				display='flex'
				alignItems='center'
				justifyContent='space-between'
				flexWrap='wrap'
				p={10}
			>
				
				<Box w='20%' h='20' bg='#f00'>1</Box>
				<Box w='20%' h='20' bg='#f90'>2</Box>
				<Box w='20%' h='20' bg='#ddd'>3</Box>
				<Box w='20%' h='20' bg='#000'>4</Box>
				<Box w='20%' h='20' bg='#999'>5</Box>
				<Box w='20%' h='20' bg='#098'>5</Box>
			</Box>

			<Flex
				align={'center'}
				justify={'space-between'}
				wrap='wrap'
				p={10}
			>

				<Box w='20%' h='20' bg='#f00'>1</Box>
				<Box w='20%' h='20' bg='#f90'>2</Box>
				<Box w='20%' h='20' bg='#ddd'>3</Box>
				<Box w='20%' h='20' bg='#000'>4</Box>
				<Box w='20%' h='20' bg='#999'>5</Box>
				<Box w='20%' h='20' bg='#098'>5</Box>
			</Flex> */}

			{/* <Text color='#098' fontSize={'50'} textAlign='center'>Background</Text>
			<Box
				bgImage="url('https://www.section.io/engineering-education/history-of-nodejs/nodejs-use-cases-cover-image.png')"
				bgPosition="center"
				bgRepeat="no-repeat"
				h={500}
				width={'100%'}
			/>

			<Text color='#098' fontSize={'50'} textAlign='center'>Border Radius</Text>
			<Box display='flex'
				alignItems='center'
				justifyContent='center'
				flexWrap='wrap'
				p={10}>

				<Button borderRightRadius="0" m={2}>Button 1</Button>

				<Button borderLeftRadius="0" m={2}>Button 2</Button>

				<Button borderTopRadius="md" m={2}>Button 2</Button>
			</Box> */}

			{/* <Text color='#098' fontSize={'50'} textAlign='center'>Position</Text>

			<Box pos="absolute" top="0" left="0">
				Absolute with top and left
			</Box>
			<Box pos="fixed" w="100%" zIndex={2}>
				Fixed with zIndex
			</Box> */}


			{/* <Shadow /> */}
			{/* <Filter /> */}
			{/* <BackdropFilters /> */}
			{/* <Text color='#098' fontSize={'50'} textAlign='center'>Pseudo</Text>
			<Button
				colorScheme='teal'
				_hover={{
					background: 'white',
					color: 'teal.500',
				}}
			>
				Hover me
			</Button>

			<Box
				role='group'
			>
				<Box
					_hover={{ fontWeight: 'semibold' }}
					_groupHover={{ color: 'tomato' }}
				>
				</Box>
			</Box>

			<Box
				_before={{ content: '"🙂"', display: 'inline-block', mr: '5px' }}
			>
				A pseudo element
			</Box> */}

			<Text color='#098' fontSize={'50'} textAlign='center'>The as prop</Text>
			<Button as='a' target='_blank' variant='outline' href='https://chakra-ui.com'>
				Hello
			</Button>

		</Box>
	);
}
