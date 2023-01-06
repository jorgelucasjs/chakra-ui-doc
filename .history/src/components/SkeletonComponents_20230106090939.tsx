import React from 'react';
import { Box, Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';

export default function SkeletonComponents(): JSX.Element {

	return (
		<div>
			<Box padding='6' boxShadow='lg' bg='white'>
				<SkeletonCircle size='10' />
				<SkeletonText mt='4' noOfLines={4} spacing='8' skeletonHeight='2' />
			</Box>
			<Spinner color='red.500' />
		</div>
	);
}
