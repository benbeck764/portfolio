import { FC } from 'react';
import { Box } from '@mui/material';
import SectionHeader from '../_common/SectionHeader';
import ProjectsGrid from './components/ProjectsGrid/ProjectsGrid';
import { projects } from './Work.config';

const Work: FC = () => {
  return (
    <Box component="section" id="work">
      <SectionHeader title="// Project Work" />
      <Box mt={2}>
        <ProjectsGrid projects={projects} />
      </Box>
    </Box>
  );
};

export default Work;
