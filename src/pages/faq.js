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

export default function FAQ() {
  return (
    <Layout
      title="FAQ"
      description="Frequently asked questions about OsdagBridge.">
      <main>
        <div className="page-header container">
          <h1>Frequently Asked Questions</h1>
          <p>Can't find what you're looking for? Open an issue on GitHub or check the User Guide.</p>
        </div>

        <section>
          <div className="container faq-container">
            <details className="faq-item" open>
              <summary>What is OsdagBridge?</summary>
              <div className="faq-body">
                <p>OsdagBridge is a modular, shared-core plugin for the analysis and design of steel bridges, built as part of the
                Osdag ecosystem. It shares a single Python core across a desktop app, a web app, and a CLI.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Which bridge types are supported today?</summary>
              <div className="faq-body">
                <p>Plate girder bridges are supported today. Additional bridge types (e.g. box girder, truss) can be added
                through the plugin architecture as they're developed.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Which operating systems are supported?</summary>
              <div className="faq-body">
                <p>Prebuilt installers are available for <strong>Windows</strong> and <strong>Linux</strong>. macOS isn't
                packaged yet — see <Link to="/installation">Building from source</Link> for how to run OsdagBridge on any
                platform with Python 3.11+.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Is OsdagBridge free and open source?</summary>
              <div className="faq-body">
                <p>Yes. OsdagBridge is licensed under the LGPL-3.0 License — see the{' '}
                <a href="https://github.com/osdag-admin/OsdagBridge/blob/dev/LICENSE" target="_blank" rel="noopener">LICENSE</a>{' '}
                file for full terms.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>What analysis solvers does it support?</summary>
              <div className="faq-body">
                <p>OsdagBridge ships a native lightweight FEM solver and integrates with OpenSeesPy and OspGrillage.
                Solvers are switchable at runtime via adapters, so you can compare results across backends.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Which design codes are implemented?</summary>
              <div className="faq-body">
                <p>IRC:6–2017, IRC:22–2015, and IRC:24–2010 are implemented under
                <code>core/utils/codes/</code>, covering load models, load combinations, material factors, and code checks.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>The Windows installer triggers a SmartScreen warning — is that expected?</summary>
              <div className="faq-body">
                <p>Yes, for now. The installer isn't code-signed yet, so Windows SmartScreen may flag it as unrecognized.
                Choose <em>More info</em> → <em>Run anyway</em> to proceed. Code signing is on the roadmap.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How do I uninstall OsdagBridge?</summary>
              <div className="faq-body">
                <p>On Windows, use <em>Add or Remove Programs</em> or the uninstaller shortcut created during install.
                On Linux, run the bundled <code>Uninstall-OsdagBridge.sh</code> script from the install directory.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How do I build OsdagBridge from source?</summary>
              <div className="faq-body">
                <p>Clone the repository and install in editable mode:</p>
                <div className="code-box-group">
                  <CodeBox code="git clone https://github.com/osdag-admin/OsdagBridge.git" />
                  <CodeBox code="cd OsdagBridge" />
                  <CodeBox code="pip install -e ." />
                </div>
                <p className="mt-2">See the <Link to="/installation">Installation page</Link> for the full walkthrough.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Where do I report a bug or request a feature?</summary>
              <div className="faq-body">
                <p>Open an issue on the{' '}
                <a href="https://github.com/osdag-admin/OsdagBridge/issues" target="_blank" rel="noopener">GitHub issue tracker</a>.
                Please include your OS, OsdagBridge version, and steps to reproduce.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How can I contribute?</summary>
              <div className="faq-body">
                <p>Fork the repository, create a feature branch, make sure <code>pytest</code> passes, and open a pull request. See the{' '}
                <a href="https://github.com/garvit000/OsdagBridge/blob/dev/developer_guide.md" target="_blank" rel="noopener">Developer Guide</a>{' '}
                for more detail.</p>
              </div>
            </details>
          </div>
        </section>
      </main>
    </Layout>
  );
}
