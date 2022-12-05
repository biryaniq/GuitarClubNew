import Head from 'next/head';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Layout from '../components/Layout/Layout';
import { PageHero } from '../components/Layout/PageHero';
import { Feature, FeaturesGrid } from '../components/Layout/Features';

export default function HomePage() {
  return (
    <Layout>
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
      {/* <div>hi</div> */}
      <PageHero />
      <FeaturesGrid
        title="What we do here"
        description="What do we do here? Why do we exist? Where are we located? Find out on the next episode of Dragon Ball Z!"
      />
    </Layout>
  );
}
