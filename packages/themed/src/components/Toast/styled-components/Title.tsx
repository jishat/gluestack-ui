import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    fontWeight: '$medium',
    fontFamily: '$body',
    fontSize: '$md',
    lineHeight: '$md',
    color: '$textLight900',
    _dark: {
      color: '$textDark50',
    },
  },
  {
    componentName: 'ToastTitle',
    ancestorStyle: ['_text'],
  } as const
);
