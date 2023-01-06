import React from 'react';
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
} from '@chakra-ui/react';

export default function FormControlModal(): JSX.Element {

	return (
		<div>
			<FormControl>
				<FormLabel>Email address</FormLabel>
				<Input type='email' />
				<FormLabel>Email address</FormLabel>
				<Input type='email' />
				<FormHelperText>We ll never share your email.</FormHelperText>
			</FormControl>
		</div>
	);
}
