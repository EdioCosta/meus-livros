import { Text, Button, IButtonProps, useTheme } from '@gluestack-ui/themed';

type Props = Partial<IButtonProps> & {
  title: string;
  isActive?: boolean;
  type: 'reading' | 'finished';
};

export function Filter({ title, isActive = false, type, ...rest }: Props) {
  const { colors } = useTheme();

  const colorType = type === 'reading' ? '#00b37e' : '#fba94c';
  return (
    <Button
      variant="outline"
      borderColor={isActive ? colorType : 'gray'}
      bgColor="#323238"
      width={150}
      size="sm"
      {...rest}
    >
      <Text color={isActive ? colorType : '#22c55e'} fontSize="$xs" textTransform="uppercase">
        {title}
      </Text>
    </Button>
  );
}
