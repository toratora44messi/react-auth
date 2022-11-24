import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export const ImageAvatars = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="http://www.w3.org/2000/svg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </Stack>
  );
}