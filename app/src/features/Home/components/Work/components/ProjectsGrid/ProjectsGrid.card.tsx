import { AppGridCardViewDefinitions } from '@benbeck764/react-components';
import ProjectCard from './components/ProjectCard';
import { Project } from '../../Work.config';

export const createCardViewDefinitions = (): AppGridCardViewDefinitions<Project> => ({
  xs: {
    virtualizedProps: {
      enabled: true,
      useWindowScroll: true,
    },
    getContent: (item: Project) => {
      return <ProjectCard project={item} />;
    },
    columnCount: 1,
    columnSpacing: 0,
  },
  lg: {
    virtualizedProps: {
      enabled: true,
      useWindowScroll: true,
    },
    getContent: (item: Project) => {
      return <ProjectCard project={item} />;
    },
    columnCount: 2,
  },
  xl: {
    virtualizedProps: {
      enabled: true,
      useWindowScroll: true,
    },
    getContent: (item: Project) => {
      return <ProjectCard project={item} />;
    },
    columnCount: 3,
    rowSpacing: 2,
  },
});
