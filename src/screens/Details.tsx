import { VStack, HStack, Heading, useTheme, ScrollView } from '@gluestack-ui/themed';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Header } from '../components/Header';
import { BookDetails } from '../components/BookDetails';
import { ClipboardTextIcon, SealCheckIcon } from 'phosphor-react-native';
import { Button } from '../components/Button';
import { BookProps } from './Home';
import { useBooks } from './BooksContext';

type RouteParams = {
  bookId: BookProps;
};

type DetailsProps = {
  route: {
    params: {
      book: BookProps;
    };
  };
};

export function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const { bookId } = route.params as RouteParams;
  const { finishBook } = useBooks();
  const { colors } = useTheme();
  const { deleteBook } = useBooks();

  function handleFinish() {
    finishBook(bookId.id);
    navigation.goBack(); // volta para a Home já atualizada
  }

  function handleDelete() {
    deleteBook(bookId.id);
    navigation.goBack();
  }

  return (
    <VStack flex={1} pb={10} bg="$#323238" alignItems="center" px={8}>
      <Header title="Detalhes do livro" onDelete={handleDelete} />
      <ScrollView mx={5} showsVerticalScrollIndicator={false}>
        <BookDetails
          title="Nome do livro"
          icon={SealCheckIcon}
          description={bookId.title}
          titleSize="$sm"
        />

        <BookDetails
          title="Início da leitura"
          icon={SealCheckIcon}
          description={bookId.when}
          titleSize="$sm"
        />

        <BookDetails
          title="Resumo"
          icon={ClipboardTextIcon}
          description={bookId.description || 'Nenhum resumo disponível'}
          titleSize="$sm"
        />

        {bookId.status === 'finished' && (
          <BookDetails
            title="Término da leitura"
            icon={SealCheckIcon}
            description={
              bookId.finishedAt
                ? typeof bookId.finishedAt === 'string'
                  ? bookId.finishedAt
                  : new Date(bookId.finishedAt).toLocaleString('pt-BR')
                : 'Data não disponível'
            }
          />
        )}
      </ScrollView>
      {bookId.status === 'reading' && (
        <Button title="Marcar como lido" mt={10} mb={50} ml={25} onPress={handleFinish} />
      )}
    </VStack>
  );
}
