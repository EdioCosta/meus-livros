import { VStack, Heading, set } from '@gluestack-ui/themed';
import { Header } from '../components/Header';
import { useState } from 'react';
import { Input } from '../components/Input';
import { Alert } from 'react-native';
import { Button } from '../components/Button';
import { useContext } from 'react';
import { BooksContext } from '../screens/BooksContext';
import { useNavigation } from '@react-navigation/native';
import { useBooks } from './BooksContext';

export function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { addBook } = useBooks();
  const navigation = useNavigation();

  async function handleNewBook() {
    if (!title || !description) {
      return Alert.alert('Cadastro', 'Preencha todos os campos');
    }

    function formatDate(dateString: string) {
      const date = new Date(dateString);
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
    }

    setIsLoading(true);

    await addBook({
      title,
      description,
      when: formatDate(new Date().toISOString()),
      status: 'reading',
    });
    setIsLoading(false);
    navigation.goBack();
  }

  return (
    <VStack flex={1} bg="$#323238" px={22} pb={22}>
      <Header title="Novo livro" />

      <Input placeholder="Título" mt={4} onChangeText={setTitle} />

      <Input
        placeholder="Resumo"
        flex={1}
        multiline
        mt={15}
        textAlignVertical="top"
        onChangeText={setDescription}
      />

      <Button
        title="Cadastrar"
        isLoading={isLoading}
        onPress={handleNewBook}
        mt={15}
        mb={40}
        mb={50}
        ml={25}
        borderRadius="$lg"
      />
    </VStack>
  );
}
