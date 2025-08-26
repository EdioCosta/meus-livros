import React from 'react';
import { Pressable, Text } from '@gluestack-ui/themed';
import type { ComponentProps, ReactNode } from 'react';

export type ButtonPressable = ComponentProps<typeof Pressable> & {
  label?: string;
  children?: ReactNode;
};

export function ButtonPressable({ label, children, ...props }: ButtonPressable) {
  const renderContent = () => {
    if (children) {
      // Se o children for string, envolve com <Text>
      return typeof children === 'string' ? <Text color="$white">{children}</Text> : children;
    }
    // Se não houver children, mas houver label, renderiza o label no <Text>
    if (label) {
      return <Text color="$white">{label}</Text>;
    }
    return null;
  };

  return (
    <Pressable
      {...props}
      bg="$gray300"
      px="$4"
      py="$2"
      rounded="$md"
      $pressed={{ bg: '$primary600' }}
      alignItems="center"
      justifyContent="center"
    >
      {typeof children === 'string' ? <Text color="$white">{children}</Text> : children}
      {!children && label && <Text color="$white">{label}</Text>}
    </Pressable>
  );
}
