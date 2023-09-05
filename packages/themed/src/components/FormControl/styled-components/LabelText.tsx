import { styled } from '../../styled';
import { Text } from '../../Text';

export default styled(
  Text,
  {
    fontWeight: '$medium',
    fontFamily: '$body',
    color: '$textLight900',
    _dark: {
      color: '$textDark50',
    },
  },
  {
    componentName: 'FormControlLabelText',
    ancestorStyle: ['_labelText'],
  } as const
);
