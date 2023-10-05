import { FC } from 'react';
import { Typography, Box } from '@mui/material';
import { AppGridData, AppGridProps, AppGrid } from '@benbeck764/react-components-grid';
import { createCardViewDefinitions } from './ProjectsGrid.card';
import { Project } from '../../Work.config';

type ProjectsGridProps = {
  projects: Project[];
};

const ProjectsGrid: FC<ProjectsGridProps> = (props: ProjectsGridProps) => {
  const { projects } = props;

  const gridData: AppGridData<Project> = {
    pages: [
      {
        items: projects,
        pageIndex: 0,
        pageSize: projects.length,
        isLoading: false,
      },
    ],
    totalItemCount: projects.length,
    totalPageCount: 1,
    pagingMode: 'none',
  };

  const gridProps: AppGridProps<Project> = {
    data: gridData,
    cardView: createCardViewDefinitions(),
    displayMode: 'card',
    //cursorStyle: 'pointer',

    //onItemClicked: onPoemSelected,
    noItemsMessage: <Typography variant="paragraph">No projects found.</Typography>,
  };
  return (
    <Box sx={{ mt: 2 }}>
      <AppGrid {...gridProps} />
    </Box>
  );
};

export default ProjectsGrid;
