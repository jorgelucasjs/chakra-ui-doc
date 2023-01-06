import { Box } from '@chakra-ui/react';
import React from 'react';
import RegisterStepOne from '../registration/RegisterStepOne';


export default function index(): JSX.Element {



	return (
		<Box bg={'#F1F1F1'} height='100vh' >
			<RegisterStepOne />
		</Box>
	);
}