import { useState } from 'react';
import {
  useTheme,
  HStack,
  VStack,
  Icon,
  FlatList,
  Center,
  Text,
  Heading,
} from '@gluestack-ui/themed';
import { Pressable, Image, BackHandler } from 'react-native';
import book1 from '../assets/book1.png';
import sair from '../assets/sair.png';
import { Filter } from '../components/Filter';
import { ChatTeardropText } from 'phosphor-react-native';
import { Button } from '../components/Button';
import Loading from '../components/Loading';
import { Book } from '../components/Book';
import { useNavigation } from '@react-navigation/native';
import { useBooks } from './BooksContext';

export type BookProps = {
  id: string;
  title: string;
  description: string;
  when: string;
  status: 'reading' | 'finished';
  finishedAt?: string;
};

export function Home() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [statusSelected, setStatusSelected] = useState<'reading' | 'finished'>('reading');

  const { books } = useBooks();

  function handleNewBook() {
    navigation.navigate('new');
  }

  function handleOpenDetails(book: BookProps) {
    navigation.navigate('details', { bookId: book });
  }

  const filteredBooks: BookProps[] = books.filter((book) => book.status === statusSelected);

  return (
    <VStack flex={1} pb={10} bg="$#323238" alignItems="center" px={8}>
      <HStack
        w="$full"
        h="$24"
        justifyContent="space-between"
        alignItems="center"
        bg="$#323238"
        pt={10}
        pb={34}
        px={6}
      >
        <Image source={book1} style={{ width: 60, height: 60 }} resizeMode="contain" />

        <Pressable onPress={() => navigation.navigate('signin')}>
          <Image source={sair} style={{ width: 30, height: 30 }} />
        </Pressable>
      </HStack>

      <VStack flex={1} px={7}>
        <HStack w="$full" justifyContent="space-between" alignItems="center" mt={6} mb={6} pb={6}>
          <Heading color="$gray100" mb={20} alignItems="center">
            Meus Livros
          </Heading>
          <Text color="$gray" fontSize="$lg">
            {books.length}{' '}
          </Text>
        </HStack>

        <HStack space="lg" mb={8} ml={20}>
          <Filter
            title="Lendo"
            type="reading"
            isActive={statusSelected === 'reading'}
            onPress={() => setStatusSelected('reading')}
          />
          <Filter
            title="Finalizados"
            type="finished"
            isActive={statusSelected === 'finished'}
            onPress={() => setStatusSelected('finished')}
          />
        </HStack>

        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={filteredBooks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }: { item: BookProps }) => (
              <Book data={item} onPress={() => handleOpenDetails(item)} />
            )}
            contentContainerStyle={{ paddingBottom: 40, flexGrow: 1 }}
            ListEmptyComponent={() => (
              <Center pt={20}>
                <ChatTeardropText color="$gray200" size={28} />
                <Text color="$gray" fontSize="$lg" mt={6} textAlign="center">
                  {statusSelected === 'reading'
                    ? 'Voce nao está lendo livros'
                    : 'Voce ainda nao leu livros'}
                </Text>
              </Center>
            )}
          />
        )}

        <Button title="Novo Livro" mt={10} mb={50} ml={25} onPress={handleNewBook} />
      </VStack>
    </VStack>
  );
}
