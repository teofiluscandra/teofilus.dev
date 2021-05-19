import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

const DarkModeSwitch = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      position="fixed"
      top="15px"
      right="10px"
      color={'secondary'}
      variant="ghost"
      _hover={{ bg: 'rgba(0,0,0,.2)' }}
      _focus={{ boxShadow: 'none' }}
      aria-label="Toggle dark mode"
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
    />
  );
};

export default DarkModeSwitch;
