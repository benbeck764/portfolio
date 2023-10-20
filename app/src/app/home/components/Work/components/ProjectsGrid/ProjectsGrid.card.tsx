import ProjectCard from './components/ProjectCard';
import { Project } from '../../Work.config';
import { AppGridCardViewDefinitions } from '@benbeck764/react-components-grid';

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
