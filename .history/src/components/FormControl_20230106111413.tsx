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
	Stack,
} from '@chakra-ui/react';

export default function FormControlModal(): JSX.Element {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const finalRef = React.useRef(null);
	const [scrollBehavior, setScrollBehavior] = React.useState('inside');

	const btnRef = React.useRef(null);
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
