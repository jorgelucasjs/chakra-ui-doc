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
			<Stack spacing={3}>
  <Input placeholder='extra small size' size='xs' />
  <Input placeholder='small size' size='sm' />
  <Input placeholder='medium size' size='md' />
  <Input placeholder='large size' size='lg' />
</Stack>
			</FormControl>
		</div>
	);
}
