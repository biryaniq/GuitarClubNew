import { Button, ButtonProps, Group } from '@mantine/core';
import { DiscordIcon } from '@mantine/ds';

export function DiscordButton(props: ButtonProps) {
  return (
    <Button
      leftIcon={<DiscordIcon size={24} />}
      size="lg"
      sx={(theme) => ({
        padding: '16px',
        backgroundColor: theme.colorScheme === 'dark' ? '#5865F2' : '#5865F2',
        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.fn.lighten('#5865F2', 0.05)
              : theme.fn.darken('#5865F2', 0.05),
        },
        fontSize: '20px',
      })}
      {...props}
    />
  );
}
