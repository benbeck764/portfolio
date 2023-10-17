import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import SectionHeader from '../_common/SectionHeader';
import ProjectsGrid from './components/ProjectsGrid/ProjectsGrid';
import { projects } from './Work.config';

const Work: FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Box component="section" id="work">
      <SectionHeader title="// Project Work" />
      <Box mt={2}>{mounted && <ProjectsGrid projects={projects} />}</Box>
    </Box>
  );
};

export default Work;
