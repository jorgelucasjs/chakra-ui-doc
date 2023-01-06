import React from 'react';
import { Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react';

export default function SkeletonComponents(): JSX.Element {

	return (
		<div>
			<Stack display='flex'
				alignItems='center'
				justifyContent='space-between'
				flexWrap='wrap'
				p={10}>
				<Skeleton height='220px' />
				
			</Stack>
		</div>
	);
}
