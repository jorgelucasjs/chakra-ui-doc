import React from 'react';
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	RadioGroup,
	HStack,
	Radio,
} from '@chakra-ui/react';

export default function FormControlModal(): JSX.Element {

	return (
		<div>
			<FormControl as='fieldset'>
				<FormLabel as='legend'>Favorite Naruto Character</FormLabel>
				<RadioGroup defaultValue='Itachi'>
					<HStack spacing='24px'>
						<Radio value='Sasuke'>Sasuke</Radio>
						<Radio value='Nagato'>Nagato</Radio>
						<Radio value='Itachi'>Itachi</Radio>
						<Radio value='Sage of the six Paths'>Sage of the six Paths</Radio>
					</HStack>
				</RadioGroup>
				<FormHelperText>Select only if you're a fan.</FormHelperText>
			</FormControl>
		</div>
	);
}