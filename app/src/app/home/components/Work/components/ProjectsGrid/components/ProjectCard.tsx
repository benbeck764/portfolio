import { FC, useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { StyledCard, StyledComingSoonBadge } from './ProjectCard.styles';
import { useHovered } from '../../../../../../../utilities';
import { Project } from '../../../Work.config';
import { StyledEllipsingTextContainer } from '@benbeck764/react-components';
import { Theme, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: FC<ProjectCardProps> = (props: ProjectCardProps) => {
  const { project } = props;
  const cardFocusRef = useRef<HTMLDivElement>();
  const hovered = useHovered(cardFocusRef);
  const theme = useTheme();

  return (
    <>
      {project && (
        <StyledComingSoonBadge
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          overlap="rectangular"
          badgeContent={
            <Typography
              variant="paragraphBold"
              fontWeight={900}
              sx={{ color: (theme: Theme) => theme.palette.common.white }}
            >
              Coming Soon
            </Typography>
          }
          invisible={!project.comingSoon}
        >
          <StyledCard ref={cardFocusRef}>
            <Stack direction="column" justifyContent="space-between" height="100%">
              <Box p={2}>
                <Stack
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="space-between"
                  gap={1}
                >
                  <Box>
                    <StyledEllipsingTextContainer
                      lines={2}
                      reserveHeight={
                        +(
                          theme.typography.paragraphLarge.fontSize
                            ?.toString()
                            .replace('px', '') || 0
                        ) * +(theme.typography.paragraphLarge.lineHeight?.toString() || 0)
                      }
                    >
                      <Typography
                        variant="paragraphLarge"
                        sx={{
                          fontWeight: 700,
                          color: (theme) => theme.palette.custom.pink.symbol,
                          textDecoration: hovered ? 'underline' : 'none',
                        }}
                      >
                        {project.name}
                      </Typography>
                    </StyledEllipsingTextContainer>
                  </Box>
                  <Stack direction="row" gap={1}>
                    {project.gitHubUrl && (
                      <Link
                        href={project.gitHubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} source code on GitHub`}
                      >
                        <GitHubIcon
                          sx={{ color: (theme) => theme.palette.custom.yellow.symbol }}
                        />
                      </Link>
                    )}
                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Read more about ${project.name} on external website`}
                      >
                        <OpenInNewIcon
                          sx={{ color: (theme) => theme.palette.custom.yellow.symbol }}
                        />
                      </Link>
                    )}
                  </Stack>
                </Stack>

                <Typography
                  variant="paragraph"
                  mt={2}
                  sx={{ color: (theme) => theme.palette.custom.green.type }}
                >
                  {project.description}
                </Typography>
              </Box>
              <Stack direction="row" gap={0.5} flexWrap="wrap" mt={2} p={2}>
                {project.technologies.map((technology: string, index: number) => (
                  <Typography
                    key={index}
                    variant="paragraphSmall"
                    sx={{ color: (theme: Theme) => theme.palette.custom.blue.variable }}
                  >
                    {technology}
                    <Typography
                      key={index}
                      variant="paragraphSmall"
                      component="span"
                      sx={{ color: (theme: Theme) => theme.palette.common.white }}
                    >
                      {index < project.technologies.length - 1 ? ' | ' : ''}
                    </Typography>
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </StyledCard>
        </StyledComingSoonBadge>
      )}
    </>
  );
};

export default ProjectCard;
