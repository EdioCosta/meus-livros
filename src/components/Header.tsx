import {
  useTheme,
  HStack,
  VStack,
  Icon,
  FlatList,
  Center,
  Text,
  Heading,
  ButtonIcon,
  Pressable,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Trash } from 'lucide-react-native';

type Props = {
  title: string;
  onDelete?: () => void;
};

export function Header({ title, onDelete }: Props) {
  const theme = useTheme();
  // console.log(theme);
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <HStack
      w="$full"
      h="$32"
      justifyContent="space-between"
      alignItems="center"
      bg="$gray200"
      pt={12}
      pb={4}
      px={1}
    >
      <Pressable onPress={handleGoBack}>
        <ButtonIcon as={ArrowLeft} color="$#9ca3af" size="xl" />
      </Pressable>

      <Heading color="$white" textAlign="center" fontSize="$xl" flex={1} ml={-6}>
        {title}
      </Heading>
      <Center>
        <Pressable onPress={onDelete}>
          <Trash color="#9ca3af" size={28} />
        </Pressable>
      </Center>
    </HStack>
  );
}
