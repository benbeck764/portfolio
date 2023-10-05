import { AppGridCardViewDefinitions } from '@benbeck764/react-components-grid';
import ProjectCard from './components/ProjectCard';
import { Project } from '../../Work.config';

export const createCardViewDefinitions = (): AppGridCardViewDefinitions<Project> => ({
  xs: {
    getContent: (item: Project) => {
      return <ProjectCard project={item} />;
    },
    columnCount: 1,
  },
  lg: {
    getContent: (item: Project) => {
      return <ProjectCard project={item} />;
    },
    columnCount: 2,
  },
  xl: {
    getContent: (item: Project) => {
      return <ProjectCard project={item} />;
    },
    columnCount: 3,
  },
});
