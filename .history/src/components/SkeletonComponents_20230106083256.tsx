import React from 'react';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

export default function SkeletonComponents(): JSX.Element {

	return (
		<div>
			<Stack>
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
</Stack>
		</div>
	);
}
