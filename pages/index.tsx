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
        title="What we do"
        description="Our club's mission is to provide an accessible place for all members of the UVic community to play the world's best instrument!"
      />
    </Layout>
  );
}
