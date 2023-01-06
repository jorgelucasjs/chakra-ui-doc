import React from 'react';
import { Box, Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

export default function SkeletonComponents(): JSX.Element {

	return (
		<div>
			<Box padding='6' boxShadow='lg' bg='white'>
				<SkeletonCircle size='10' />
				<SkeletonText mt='4' noOfLines={4} spacing='8' skeletonHeight='2' />
			</Box>
			<div>
				<Stack direction='row' spacing={4}>
					<Spinner size='xs' />
					<Spinner size='sm' />
					<Spinner size='md' />
					<Spinner size='lg' />
					<Spinner size='xl' />
				</Stack>
			</div>

			<div>
				<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.200'
					color='blue.500'
					size='xl'
				/>
			</div>

			<Button
      onClick={() =>
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
		</div>
	);
}
