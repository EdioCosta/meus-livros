import { HStack, VStack, useTheme, Text } from '@gluestack-ui/themed';
import { IconProps } from 'phosphor-react-native';
import { ElementType } from 'react';

type Props = {
  title: string;
  description: string;
  icon: ElementType<IconProps>;
  titleSize?: string;
};

export function BookDetails({ title, description, icon: Icon, titleSize }: Props) {
  const { colors } = useTheme();

  return (
    <VStack bg="$#323238" p={5} rounded={14} mt={5}>
      <HStack alignItems="center" mb={4}>
        <Icon color="#59a6e4ff" />
        <Text color="#000000ff" fontSize="$md" ml={2} textTransform="uppercase">
          {title}
        </Text>
      </HStack>

      {!!description && (
        <Text color="white" fontSize="$md">
          {description}'
        </Text>
      )}
    </VStack>
  );
}
