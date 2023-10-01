import { FC, useRef } from 'react';
import { Box, Stack, Theme, Typography, Link, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { StyledCard, StyledComingSoonBadge } from './ProjectCard.styles';
import { useHovered } from '../../../../../../../utilities';
import { Project } from '../../../Work.config';
import { StyledEllipsingTextContainer } from '@benbeck764/react-components';

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
                      >
                        <GitHubIcon
                          sx={{ color: (theme) => theme.palette.custom.yellow.symbol }}
                        />
                      </Link>
                    )}
                    {project.url && (
                      <Link href={project.url} target="_blank" rel="noopener noreferrer">
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
              <Stack direction="row" gap={0.5} flexWrap="wrap" mt={2} p={1}>
                {project.technologies.map((technology: string, index: number) => (
                  <Typography
                    key={index}
                    variant="paragraphExtraSmall"
                    sx={{ color: (theme: Theme) => theme.palette.custom.blue.variable }}
                  >
                    {technology}
                    {index < project.technologies.length - 1 ? ' | ' : ''}
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