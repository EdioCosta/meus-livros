import { HStack, VStack, Box, Text } from '@gluestack-ui/themed';
import { ButtonPressable } from '../components/ButtonPressable';
import { Image } from 'react-native';
import { HourglassIcon, SealCheck } from 'phosphor-react-native';
import clock from '../assets/clock.png';
export type BookProps = {
  id: string;
  title: string;
  description: string;
  when: string;
  status: 'reading' | 'finished';
};

type Props = ButtonPressable & {
  data: BookProps;
};

export function Book({ data, ...rest }: Props) {
  const statusColor = data.status === 'reading' ? '#00b37e' : '#fba94c';

  return (
    <ButtonPressable {...rest}>
      <HStack
        bg="gray.600"
        mb={4}
        alignItems="stretch"
        justifyContent="space-between"
        rounded={14}
        overflow="hidden"
      >
        {/* Barra lateral */}
        <Box w={10} bg={statusColor} />

        <Box>
          <VStack flex={1} p={4} justifyContent="center">
            <Text color="white" fontWeight="bold" mb={10}>
              {data.title}
            </Text>
            <Image
              source={clock}
              style={{ width: 25, height: 23, marginTop: 30, marginLeft: 15 }}
            />
            <Text color="white" mt={5}></Text>

            <HStack mt={2} alignItems="center">
              {' '}
              <Text color="$gray" fontSize="$lg" mt={10} ml={2}>
                {data.when}
              </Text>
            </HStack>
          </VStack>
        </Box>

        <Box
          bg="$gray500"
          h={40}
          w={40}
          mr={4}
          alignSelf="center"
          justifyContent="center"
          alignItems="center"
          rounded={25}
        >
          {data.status === 'finished' ? (
            <SealCheck size={24} color={statusColor} style={{ position: 'absolute' }} />
          ) : (
            <HourglassIcon size={23} color={statusColor} style={{ position: 'absolute' }} />
          )}
        </Box>
      </HStack>
    </ButtonPressable>
  );
}
