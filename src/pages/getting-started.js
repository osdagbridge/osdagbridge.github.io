import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function CodeBox({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="code-box">
      <code>{code}</code>
      <button className="copy-btn" onClick={handleCopy} aria-label="Copy command" title="Copy to clipboard">
        {copied ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        )}
      </button>
    </div>
  );
}

export default function GettingStarted() {
  return (
    <Layout
      title="Getting Started"
      description="Quick start guide for running OsdagBridge's desktop app, CLI, and web interfaces.">
      <main>
        <div className="page-header container">
          <h1>Getting Started</h1>
          <p>A quick tour of the desktop app, plus a preview of the upcoming CLI and web interfaces.</p>
        </div>

        {/* Section 1: Desktop Application */}
        <section>
          <div className="container">
            <div className="section-title">
              <h2>1. Launch the desktop application</h2>
              <p>The fastest way to get productive if you installed via the Windows or Linux installer.</p>
            </div>
            <ol className="steps-list">
              <li>
                <h3>Open OsdagBridge</h3>
                <p>Use the desktop shortcut created by the installer, or run it manually from a source checkout:</p>
                <CodeBox code="python -m osdagbridge.desktop" />
              </li>
              <li>
                <h3>Create a new bridge project</h3>
                <p>Choose a bridge type (currently Plate Girder Bridge), then fill in the input form covering geometry, materials, and loading.</p>
              </li>
              <li>
                <h3>Run the analysis</h3>
                <p>Hit the design button and let the native solver (OpenSeesPy), or OspGrillage do the heavy lifting for the analysis and design checks.</p>
              </li>
              <li>
                <h3>Generate a report</h3>
                <p>Export a full design report (PDF) once the design passes all IRC code checks.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 2: CLI */}
        <section className="alt-section">
          <div className="container">
            <div className="section-title">
              <h2>2. Command-Line Interface <span className="badge-soon">Coming Soon</span></h2>
              <p>A headless CLI designed for scripting, batch runs, and automated CI pipelines.</p>
            </div>
            <div className="callout info">
              <strong>In Active Development</strong>
              <p>The standalone command-line interface is currently being stabilized and will be available in an upcoming release. Below is a preview of the planned workflow.</p>
            </div>
            <div className="code-box-group">
              <CodeBox code="osdagbridge analyze project.yaml --solver native" />
              <CodeBox code="osdagbridge report project.yaml report.pdf" />
            </div>
            <p className="mt-2">
              Project files will be plain YAML, making them easy to version-control and diff alongside your other engineering artifacts.
            </p>
          </div>
        </section>

        {/* Section 3: Web App */}
        <section>
          <div className="container">
            <div className="section-title">
              <h2>3. Web Application <span className="badge-soon">Coming Soon</span></h2>
              <p>The Django + React stack planned for browser-based, multi-user access.</p>
            </div>
            <div className="callout info">
              <strong>In Active Development</strong>
              <p>The web application frontend and backend are currently under development and will be released in a future update.</p>
            </div>
            <div className="grid-features">
              <div className="card-custom">
                <h3>Backend</h3>
                <p>REST API serving the core bridge computation routines.</p>
                <div className="mt-2">
                  <CodeBox code="python src/osdagbridge/web/backend/manage.py runserver" />
                </div>
              </div>
              <div className="card-custom">
                <h3>Frontend</h3>
                <p>Interactive web UI with 3D bridge visualization.</p>
                <div className="code-box-group mt-2">
                  <CodeBox code="cd src/osdagbridge/web/frontend" />
                  <CodeBox code="npm install" />
                  <CodeBox code="npm start" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
