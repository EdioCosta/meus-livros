import React, { useState } from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Box, Text, Icon, set } from '@gluestack-ui/themed';
import { Input } from '../components/Input';
import { Image } from 'react-native';
import { Button } from '../components/Button';

import book1 from '../assets/book1.png';
import envelope from '../assets/envelope.png';
import key from '../assets/key.png';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/AppRoutes';

type SignInScreenProp = NativeStackNavigationProp<RootStackParamList, 'signin'>;

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<SignInScreenProp>();

  function handleSignIn() {
    setIsLoading(true);
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'home' }],
        }),
      );
    }, 1000);
  }
  return (
    <Box flex={1} bg="$#323238" alignItems="center" justifyContent="center" p="$4">
      <Image source={book1} style={{ width: 100, height: 100 }} resizeMode="contain" />
      <Text color="$gray00" fontSize="$xl" mb="$8">
        Acesse sua conta
      </Text>

      <Box maxW={350} w="90%" mb="$3" alignSelf="center">
        <Input
          placeholder="E-mail"
          inputLeftElement={
            <Image
              source={envelope}
              style={{ width: 26, height: 26, marginLeft: 12 }}
              resizeMode="contain"
            />
          }
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Box>
      <Box maxW={350} w="90%" mb="$6" alignSelf="center">
        <Input
          placeholder="Senha"
          inputLeftElement={
            <Image
              source={key}
              style={{ width: 26, height: 26, marginLeft: 12 }}
              resizeMode="contain"
            />
          }
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Box>

      <Box maxW={350} w="90%" alignSelf="center">
        <Button title="Entrar" onPress={handleSignIn} isLoading={isLoading} mb={50} ml={25} />
      </Box>
    </Box>
  );
}
