import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          {siteConfig.title}
        </h1>

        <p className="hero__subtitle">
          Bridge Analysis and Design Software
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/user_guide">
            Open User Guide
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="OsdagBridge"
      description="OsdagBridge User Guide">
      <HomepageHeader />

      <main>
        <section className={styles.introSection}>
          <div className="container">
            <h2>OsdagBridge Documentation</h2>

            <p>
              OsdagBridge is a software tool for bridge analysis and design.
              This documentation provides guidance on project setup, inputs,
              analysis, design, visualization, results, and report generation.
            </p>

            <Link
              className="button button--primary button--lg"
              to="/docs/user_guide">
              Read the User Guide
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}