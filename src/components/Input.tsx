import { Input as GluestackInput, InputField } from '@gluestack-ui/themed';
import { ReactNode } from 'react';
import { TextInputProps } from 'react-native';

interface CustomInputProps extends TextInputProps {
  inputLeftElement?: ReactNode;
}

export function Input({ inputLeftElement, ...rest }: CustomInputProps) {
  return (
    <GluestackInput
      w={350}
      bg="$gray700"
      h={40}
      size="md"
      borderRadius="$xl"
      px="$1"
      $focus={{
        borderWidth: 2,
        borderColor: '$yellow500',
        bg: '$gray700',
      }}
      {...rest}
    >
      {inputLeftElement}
      <InputField color="$white" fontFamily="$body" placeholderTextColor="$gray300" {...rest} />
    </GluestackInput>
  );
}
