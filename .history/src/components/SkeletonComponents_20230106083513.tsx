import React from 'react';
import { Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react';

export default function SkeletonComponents(): JSX.Element {

	return (
		<div>
			<Stack>
				<Skeleton height='220px' />
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
			</Stack>
		</div>
	);
}
