import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  useMantineTheme,
  createStyles,
} from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock, TablerIcon } from '@tabler/icons';

export const MOCKDATA = [
  {
    icon: IconUser,
    title: 'Weekly Jam Sessions',
    description:
      "Every week we host in-person jam sessions on campus. Members will have the opportunity to meet up and play music together. These make up the majority of the club's regularly scheduled meetings.",
  },
  {
    icon: IconGauge,
    title: 'Guitar Lessons',
    description:
      'New to guitar and want to learn? We offer group lessons throughout the school year! We also have small focused lessons on specific techniques and styles for intermediate players.',
  },

  {
    icon: IconLock,
    title: 'Free Equipment Rental',
    description:
      'If you need to borrow a guitar, we have you covered. The club provides spare acoustic and classical guitars which are available for anyone in the club to use!',
  },
  {
    icon: IconCookie,
    title: 'Live Performance Opportunities',
    description:
      'We constantly seek out small venues for our members to perform at. Currently we are partnered with the Cridge Center for the Family for concerts.',
  },
  {
    icon: IconMessage2,
    title: 'Contests and Events',
    description:
      'Throughout the year the Guitar Club hosts small contests and get-togethers for members to partake in.',
  },
  {
    icon: IconGauge,
    title: 'Volunteering Opportunities',
    description:
      "Want to help run the club and gain experience? We'd love to have you join our team!",
  },
];

interface FeatureProps {
  icon: TablerIcon;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  const theme = useMantineTheme();
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size={20} stroke={1.5} />
      </ThemeIcon>
      <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>{title}</Text>
      <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
  data?: FeatureProps[];
}

export function FeaturesGrid({ title, description, data = MOCKDATA }: FeaturesGridProps) {
  const { classes, theme } = useStyles();
  const features = data.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={theme.spacing.xl * 2}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
