import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  return (
    <Layout
      title="Open-Source Steel Bridge Design"
      description="OsdagBridge is a modular, open-source software for the analysis and design of steel girder bridges following IS and IRC guidelines.">
      <main>
        {/* Hero */}
        <section className="hero-custom">
          <div className="container text-center">
            <span className="eyebrow">Part of the Osdag ecosystem</span>
            <h1 className="hero-title">OsdagBridge</h1>
            <p className="lead">
              OsdagBridge is a cross-platform free and open-source software for the 
              analysis and design of steel girder bridges, following the Indian Standards (IS) and Indian Road Congress (IRC) guidelines.
            </p>
            <div className="badge-row">
              <img src="https://img.shields.io/github/v/release/garvit000/OsdagBridge?label=latest%20release" alt="Latest release" />
              <img src="https://img.shields.io/github/downloads/garvit000/OsdagBridge/total?label=downloads" alt="Downloads" />
              <img src="https://img.shields.io/github/license/garvit000/OsdagBridge" alt="License" />
            </div>
            <div className="btn-group">
              <a className="btn btn-primary" href="https://github.com/garvit000/OsdagBridge/releases/latest/download/OsdagBridge-Setup.exe">
                Download for Windows
              </a>
              <a className="btn btn-secondary" href="https://github.com/garvit000/OsdagBridge/releases/latest/download/OsdagBridge-Linux.sh">
                Download for Linux
              </a>
              <Link className="btn btn-outline" to="/docs/1-introduction">
                User Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="alt-section">
          <div className="container">
            <div className="section-title">
              <h2>Why OsdagBridge</h2>
              <p>First open-source software developed for IRC-based bridge design.</p>
            </div>
            <div className="grid-features">
              <div className="card-custom">
                <h3>Free and Open Source</h3>
                <p>No licence fee, no seat limits, no renewal. Download it, use it on any number of machines, and inspect every calculation behind the results.</p>
              </div>
              <div className="card-custom">
                <h3>Install in Minutes, Design in Minutes</h3>
                <p>A straightforward installer and a guided workflow take you from a fresh setup to a completed short-span composite girder design in a single sitting.</p>
              </div>
              <div className="card-custom">
                <h3>Minimal Inputs, Full Control</h3>
                <p>Start with span, carriageway width and material properties, and OsdagBridge supplies defaults for everything else, based on IRC provisions and industry best practice. Override any parameter, section or material when your project demands it.</p>
              </div>
              <div className="card-custom">
                <h3>IRC Clauses Built In</h3>
                <p>Load models, combinations, material factors and code checks follow IRC:6-2017, IRC:22-2015 and IRC:24-2010. The clause references are shown alongside the results, so every check is traceable.</p>
              </div>
              <div className="card-custom">
                <h3>Complete Superstructure Design, Visualised</h3>
                <p>Deck slab, girders, shear connectors, stiffeners and bracing are designed together, then rendered as an interactive 3D model you can rotate and inspect before finalising.</p>
              </div>
              <div className="card-custom">
                <h3>Reports, Quantities and BIM Export</h3>
                <p>Generate a detailed design report with the full calculation trail and a bill of quantities, and export the 3D model to IFC for use in your BIM and CAD workflows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="screenshots-section">
          <div className="container">
            <div className="section-title">
              <h2>Highlighted features</h2>
              <p>Screenshots of the Template page, 3D CAD, plots and report.</p>
            </div>
            <div className="grid-screenshots">
              <div className="screenshot-card">
                <img src={useBaseUrl('/images/template_page.png')} alt="OsdagBridge template page" loading="lazy" />
                <span className="screenshot-label">Template Page</span>
              </div>
              <div className="screenshot-card">
                <img src={useBaseUrl('/images/3d-cad.png')} alt="OsdagBridge 3D CAD model view" loading="lazy" />
                <span className="screenshot-label">3D CAD Model</span>
              </div>
              <div className="screenshot-card">
                <img src={useBaseUrl('/images/plots.png')} alt="OsdagBridge analysis plots" loading="lazy" />
                <span className="screenshot-label">Analysis Plots</span>
              </div>
              <div className="screenshot-card">
                <img src={useBaseUrl('/images/report-preview.png')} alt="OsdagBridge report preview" loading="lazy" />
                <span className="screenshot-label">Report Preview</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}