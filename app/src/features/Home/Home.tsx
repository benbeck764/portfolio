import { Stack, Typography, Divider } from '@mui/material';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <Stack direction="column" gap={1}>
      <Typography variant="h1">Ben Beck</Typography>
      <Typography variant="h2">Ben Beck</Typography>
      <Typography variant="h3">Ben Beck</Typography>
      <Typography variant="h4">Ben Beck</Typography>
      <Typography variant="h5">Ben Beck</Typography>
      <Typography variant="h6">Ben Beck</Typography>
      <Divider color="primary" />
      <Typography variant="paragraph">Paragraph Example</Typography>
      <Typography variant="paragraphBold">Paragraph Bold Example</Typography>
      <Typography variant="paragraphLink">Paragraph Link Example</Typography>
      <Typography variant="paragraphLarge">Paragraph Large Example</Typography>
      <Typography variant="paragraphSmall">Paragraph Small Example</Typography>
      <Typography variant="paragraphSmallBold">Paragraph Small Bold Example</Typography>
      <Typography variant="paragraphExtraSmall">Paragraph Extra Small Example</Typography>
      <Typography variant="paragraphExtraSmallBold">
        Paragraph Extra Small Bold Example
      </Typography>
      <Divider color="primary" />
      <Typography variant="mobileParagraph">Mobile Paragraph Example</Typography>
      <Typography variant="mobileParagraphBold">Mobile Paragraph Bold Example</Typography>
      <Typography variant="mobileParagraphSmall">
        Mobile Paragraph Small Example
      </Typography>
      <Typography variant="mobileParagraphSmallBold">
        Mobile Paragraph Small Bold Example
      </Typography>
    </Stack>
  );
};

export default Home;
