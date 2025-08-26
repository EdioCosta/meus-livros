import {
  Button as ButtonGluestackInput,
  IButtonProps,
  Heading,
  ButtonText,
} from '@gluestack-ui/themed';

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonGluestackInput
      bg="$yellow300"
      h="$9"
      w="$300"
      fontSize="$md"
      rounded="sm"
      borderRadius={10}
      _pressed={{ bg: 'yellow' }}
      {...rest}
    >
      <ButtonText color="black" fontSize="$lg">
        {title}
      </ButtonText>
    </ButtonGluestackInput>
  );
}
