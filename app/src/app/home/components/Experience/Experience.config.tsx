import { TabItem } from '@benbeck764/react-components/Tabs';
import ExperienceInfo from './components/ExperienceInfo/ExperienceInfo';

export const experienceTabs: TabItem[] = [
  {
    label: 'True Anomaly',
    children: (
      <ExperienceInfo
        roles={[
           {
            title: 'Principal Software Engineer',
            accomplishments: ['Spearheading the architectural design and development of the next-generation user interface for the Mosaic Software Platform, a React (TypeScript) based command & control/mission planning software platform.'],
            startDate: new Date(2025, 7),
          },
          {
            title: 'Staff Software Engineer',
            accomplishments: [],
            startDate: new Date(2025, 1),
            endDate: new Date(2025, 7)
          },
          {
            title: 'Senior Software Engineer',
            accomplishments: [],
            startDate: new Date(2023, 11),
            endDate: new Date(2025, 1),
          },
        ]}
        companyName="True Anomaly"
        companyUrl="https://www.trueanomaly.space"
        technologies={['TypeScript', 'React', 'Jotai', 'D3.js', 'three.js']}
      />
    ),
  },
  {
    label: 'BenBeck.dev',
    children: (
      <ExperienceInfo
        roles={[
          {
            title: 'Technical Architect',
            accomplishments: [
              'Designed and implemented an efficient ordering portal for a major food distribution company, improving their operational efficiency.',
              'Led and supervised a dynamic team of 5-10 developers, providing guidance and support to enhance their professional growth.',
              'Created a suite of strategic business intelligence tools for a specialized data consultancy firm, enabling data-driven decision making.',
              'Established a robust ecosystem of nearly a dozen Power BI apps, empowering users with comprehensive data visualization and analysis capabilities.',
            ],
            startDate: new Date(2021, 0),
            endDate: new Date(2023, 11),
          },
        ]}
        companyName="BenBeck.dev"
        companyUrl="https://benbeck.dev"
        technologies={[
          'Microsoft Azure',
          'TypeScript',
          'React',
          'Redux',
          'React Native',
          'Node.js',
          'SQL Server',
        ]}
      />
    ),
  },
  {
    label: 'ADM',
    children: (
      <ExperienceInfo
        roles={[
          {
            title: 'Senior Software Engineer',
            accomplishments: [
              'Designed and implemented production and supply chain optimization tools for enhanced efficiency.',
              'Created a production scheduling tool that significantly reduced production time by over 30%.',
              'Developed a user-friendly platform for creating customized "tasting sessions" to attract multiple potential clients.',
            ],
            startDate: new Date(2020, 3),
            endDate: new Date(2021, 3),
          },
        ]}
        companyName="ADM"
        companyUrl="https://www.adm.com"
        contractCompany="Apex Systems"
        contractCompanyUrl="https://www.apexsystems.com"
        technologies={[
          'Microsoft Azure',
          'C#',
          'TypeScript',
          'Angular',
          'NgRx',
          'D3.js',
          'React',
          'SQL Server',
        ]}
        contract={true}
      />
    ),
  },
  {
    label: 'Concurrency',
    children: (
      <ExperienceInfo
        roles={[
          {
            title: 'Senior Software Developer',
            accomplishments: [
              'Developed POC/MVP solutions using NLP for invoice processing with an exceptional accuracy rate of over 98%.',
              'Designed and implemented a proactive monitoring system that resulted in significant cost savings through effective risk management alerts.',
            ],
            startDate: new Date(2019, 5),
            endDate: new Date(2020, 3),
          },
          {
            title: 'Blockchain Architect',
            accomplishments: [
              'Led a team of 3 developers in the successful implementation of customized consortium blockchain POC solutions.',
              'Demonstrated the value and applicability of private/consortium blockchains through presales efforts and use case evangelism.',
            ],
            startDate: new Date(2019, 0),
            endDate: new Date(2019, 5),
          },
        ]}
        companyName="Concurrency, Inc."
        companyUrl="https://www.concurrency.com"
        technologies={[
          'Microsoft Azure',
          'C#',
          'Solidity',
          'TypeScript',
          'Angular',
          'React',
          'SQL Server',
        ]}
      />
    ),
  },
  {
    label: 'Microsoft',
    children: (
      <ExperienceInfo
        roles={[
          {
            title: 'Software Engineer',
            accomplishments: [
              'Developed an Ethereum (Parity PoA) template for Microsoft Azure, enabling streamlined blockchain deployment.',
              'Contributed to the development of 5 other ledger templates including Hyperledger Fabric and IPFS, expanding the range of options available.',
              'Conducted multiple POCs to evaluate the potential of emerging ledger technologies, providing valuable insights for future advancements.',
            ],
            startDate: new Date(2018, 7),
            endDate: new Date(2019, 0),
          },
        ]}
        companyName="Microsoft"
        contractCompany="TEKsystems"
        companyUrl="https://www.microsoft.com"
        contractCompanyUrl="https://www.teksystems.com"
        technologies={[
          'Microsoft Azure',
          'Bash',
          'PowerShell',
          'Solidity',
          'C#',
          'TypeScript',
          'Node.js',
          'Python',
        ]}
        contract={true}
      />
    ),
  },
  {
    label: 'Concurrency',
    children: (
      <ExperienceInfo
        roles={[
          {
            title: 'Software Developer',
            accomplishments: [
              'Solely developed a real-time fetal/maternal heartrate & vitals monitoring portal.',
              'Assisted with the development of an IoT solution for foundry management.',
              'Architected & developed numerous web portals and internal IT tools.',
              'Assisted with an IdentityServer solution for a smaller financial company.',
            ],
            startDate: new Date(2016, 10),
            endDate: new Date(2018, 7),
          },
          {
            title: 'Associate Software Developer',
            accomplishments: [
              'Joined the Modern Applications team (focused on cloud, web, security, IoT and blockchain).',
              'Developed & architected a data aggregation portal for mid-large sized dental providers.',
            ],
            startDate: new Date(2016, 6),
            endDate: new Date(2016, 10),
          },
        ]}
        companyName="Concurrency, Inc."
        companyUrl="https://www.concurrency.com"
        technologies={[
          'Microsoft Azure',
          'C#',
          'TypeScript',
          'Angular',
          'AngularJS',
          'D3.js',
          'SQL Server',
          'Power BI',
        ]}
      />
    ),
  },
  {
    label: 'Advicent',
    children: (
      <ExperienceInfo
        roles={[
          {
            title: 'Software Development Intern',
            accomplishments: [
              'Primarily worked on front-end web applications targeted for financial advisors and their respective clients.',
              'Assisted in back-end development and integration of 3rd party financial APIs.',
            ],
            startDate: new Date(2015, 5),
            endDate: new Date(2016, 2),
          },
        ]}
        companyName="Advicent"
        companyUrl="https://www.advicentsolutions.com"
        technologies={[
          'JavaScript',
          'AngularJS',
          'jQuery',
          'C#',
          'WCF',
          'SQL Server',
          'HTML',
          'CSS',
          'SASS',
        ]}
        internship={true}
      />
    ),
  },
  {
    label: 'Cognex',
    children: (
      <ExperienceInfo
        roles={[
          {
            title: 'Software Engineering Intern',
            accomplishments: [
              'Developed an internal tool for managing, monitoring and controlling internal office resource usage.',
              'Worked closely with the QA team performing UI automation testing.',
            ],
            startDate: new Date(2014, 5),
            endDate: new Date(2014, 11),
          },
        ]}
        companyName="Cognex"
        companyUrl="https://www.cognex.com"
        technologies={[
          'JavaScript',
          'Node.js',
          'Express.js',
          'jQuery',
          'C#',
          'WCF',
          'XML',
          'HTML',
          'CSS',
        ]}
        internship={true}
      />
    ),
  },
];
