import { Box, Link, List, Stack, Typography } from '@mui/material';
import React, { FC, useEffect, useRef, useState } from 'react';
import { toLocalDateStringShort } from '../../../../../../utilities';
import {
  StyledExperienceConnector,
  StyledExperienceBullet,
  StyledExperienceLine,
  StyledExperienceInfoWrapper,
  StyledExperienceStickyHeader,
  StyledExperienceListItem,
} from './ExperienceInfo.styles';
import ContractInfo from './ContractInfo';
import InternshipInfo from './InternshipInfo';
import TechnologyChip from './TechnologyChip';

type Role = {
  title: string;
  accomplishments: string[];
  startDate: Date;
  endDate?: Date;
};

type ExperienceInfoProps = {
  roles: Role[];
  companyName: string;
  companyUrl: string;
  contractCompany?: string;
  contractCompanyUrl?: string;
  technologies: string[];
  contract?: boolean;
  internship?: boolean;
};

const ExperienceInfo: FC<ExperienceInfoProps> = (props: ExperienceInfoProps) => {
  const {
    roles,
    companyName,
    companyUrl,
    contractCompany,
    contractCompanyUrl,
    technologies,
    contract,
    internship,
  } = props;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const refs = roles.map(() => useRef<HTMLDivElement>(null));
  const [distances, setDistances] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const calculateDistances = () => {
      refs.forEach((ref: React.RefObject<HTMLDivElement>, index: number) => {
        if (ref.current) {
          const rect1 = ref.current.getBoundingClientRect();
          const nextRef = refs[index + 1];
          if (nextRef && nextRef.current) {
            const rect2 = nextRef.current.getBoundingClientRect();
            const distanceX = rect2.left - rect1.left;
            const distanceY = rect2.top - rect1.top;
            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
            setDistances((prev: { [key: number]: number }) => {
              return { ...prev, [index]: distance };
            });
          }
        }
      });
    };

    calculateDistances();

    window.addEventListener('resize', calculateDistances);

    return () => {
      window.removeEventListener('resize', calculateDistances);
    };
  }, []);

  return (
    <StyledExperienceInfoWrapper>
      {roles.length === 1 && (
        <>
          <Typography
            variant="h6"
            component="span"
            sx={{ color: (theme) => theme.palette.custom.green.type }}
          >
            {roles[0].title}
            <Typography
              variant="h6"
              component="span"
              sx={{ color: (theme) => theme.palette.custom.yellow.symbol }}
            >
              {' @ '}
            </Typography>
            <Link href={companyUrl} target="_blank" rel="noopener noreferrer">
              {companyName}
            </Link>
          </Typography>
          {contract && (
            <ContractInfo company={contractCompany} companyUrl={contractCompanyUrl} />
          )}
          {internship && <InternshipInfo />}
          <Typography
            variant="paragraphBold"
            mt={0.5}
            sx={{ color: (theme) => theme.palette.custom.blue.const }}
          >
            {`${toLocalDateStringShort(roles[0].startDate)} - ${
              roles[0].endDate ? toLocalDateStringShort(roles[0].endDate) : 'Present'
            }`}
          </Typography>

          <List sx={{ listStyleType: 'circle', listStylePosition: 'inside', mt: 1 }}>
            {roles[0].accomplishments.map((accomplishment: string, index: number) => (
              <StyledExperienceListItem key={index}>
                <Typography variant="paragraph" component="span">
                  {accomplishment}
                </Typography>
              </StyledExperienceListItem>
            ))}
          </List>
        </>
      )}

      {roles.length > 1 && (
        <Box>
          <StyledExperienceStickyHeader mb={1}>
            <Typography pl={1} variant="h6">
              <Link href={companyUrl} target="_blank" rel="noopener noreferrer">
                {companyName}
              </Link>
            </Typography>
          </StyledExperienceStickyHeader>

          <Stack direction="column">
            {roles.map((role: Role, index: number) => (
              <Stack direction="row" key={index} gap={1.5}>
                <Box>
                  <StyledExperienceConnector>
                    <StyledExperienceBullet ref={refs[index]} />
                    {index < roles.length - 1 && (
                      <StyledExperienceLine sx={{ height: distances[index] - 20 }} />
                    )}
                  </StyledExperienceConnector>
                </Box>
                <Box mb={1}>
                  <Typography
                    variant="h6"
                    sx={{ color: (theme) => theme.palette.custom.green.type }}
                  >
                    {role.title}
                  </Typography>
                  {contract && (
                    <ContractInfo
                      company={contractCompany}
                      companyUrl={contractCompanyUrl}
                    />
                  )}
                  {internship && <InternshipInfo />}
                  <Typography
                    variant="paragraphBold"
                    mt={0.5}
                    sx={{ color: (theme) => theme.palette.custom.blue.const }}
                  >
                    {`${toLocalDateStringShort(role.startDate)} - ${
                      role.endDate ? toLocalDateStringShort(role.endDate) : 'Present'
                    }`}
                  </Typography>
                  <List sx={{ listStyleType: 'circle', listStylePosition: 'inside' }}>
                    {role.accomplishments.map((accomplishment: string, index: number) => (
                      <StyledExperienceListItem key={index}>
                        <Typography variant="paragraph" component="span">
                          {accomplishment}
                        </Typography>
                      </StyledExperienceListItem>
                    ))}
                  </List>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Box>
      )}

      <Stack direction="row" gap={0.5} flexWrap="wrap" mt={1}>
        {technologies.map((technology: string, index: number) => (
          <TechnologyChip key={index} name={technology} />
        ))}
      </Stack>
    </StyledExperienceInfoWrapper>
  );
};
export default ExperienceInfo;
