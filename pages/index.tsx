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
        description="Our club's mission is to provide a place for all members of the UVic community to connect, jam, and learn."
      />
    </Layout>
  );
}
