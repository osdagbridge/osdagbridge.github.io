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

export default function Installation() {
  const [activeTab, setActiveTab] = useState('windows');

  return (
    <Layout
      title="Installation"
      description="How to install OsdagBridge on Windows and Linux, or build it from source.">
      <main>
        <div className="page-header container">
          <h1>Installation</h1>
          <p>Pick an installer for your platform, install via Conda, or build OsdagBridge from source.</p>
        </div>

        <section>
          <div className="container">
            <div className="tabs-container">
              <button 
                className={`tab-btn ${activeTab === 'windows' ? 'active' : ''}`}
                onClick={() => setActiveTab('windows')}>
                Windows
              </button>
              <button 
                className={`tab-btn ${activeTab === 'linux' ? 'active' : ''}`}
                onClick={() => setActiveTab('linux')}>
                Linux
              </button>
              <button 
                className={`tab-btn ${activeTab === 'conda' ? 'active' : ''}`}
                onClick={() => setActiveTab('conda')}>
                Conda
              </button>
              <button 
                className={`tab-btn ${activeTab === 'source' ? 'active' : ''}`}
                onClick={() => setActiveTab('source')}>
                Build from Source
              </button>
            </div>

            <div>
              {/* Windows Tab */}
              {activeTab === 'windows' && (
                <div className="tab-panel">
                  <div className="requirements-card">
                    <div className="requirements-title">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                      <span>System Requirements</span>
                    </div>
                    <div className="requirements-grid">
                      <div className="req-item">
                        <span className="req-label">Operating System</span>
                        <span className="req-value">Windows 10 or higher (64-bit)</span>
                      </div>
                      <div className="req-item">
                        <span className="req-label">Architecture</span>
                        <span className="req-value">64-bit (x86_64)</span>
                      </div>
                      <div className="req-item">
                        <span className="req-label">Memory (RAM)</span>
                        <span className="req-value">4 GB min (8 GB recommended)</span>
                      </div>
                      <div className="req-item">
                        <span className="req-label">Disk Space</span>
                        <span className="req-value">15 GB+ free space (~1 GB installer, expands to 10+ GB)</span>
                      </div>
                    </div>
                  </div>

                  <ol className="steps-list">
                    <li>
                      <h3>Download the installer</h3>
                      <p>Grab the latest Windows installer directly from GitHub Releases:</p>
                      <div className="btn-group">
                        <a className="btn btn-secondary" href="https://github.com/garvit000/OsdagBridge/releases/latest/download/OsdagBridge-Setup.exe">
                          Download OsdagBridge-Setup.exe
                        </a>
                      </div>
                    </li>
                    <li>
                      <h3>Run the installer</h3>
                      <p>Double-click <code>OsdagBridge-Setup.exe</code> and follow the on-screen prompts.</p>
                      <div className="callout warning">
                        <strong>Windows SmartScreen notice</strong>
                        <p>Since the installer isn't yet code-signed, Windows may show a "Windows protected your PC" prompt. Click <em>More info</em> → <em>Run anyway</em> to continue.</p>
                      </div>
                    </li>
                    <li>
                      <h3>Launch OsdagBridge</h3>
                      <p>Use the desktop shortcut or the Start Menu entry created by the installer.</p>
                    </li>
                    <li>
                      <h3>Uninstalling</h3>
                      <p>Use <em>Add or Remove Programs</em>, or run the uninstaller shortcut created alongside the app.</p>
                    </li>
                  </ol>
                </div>
              )}

              {/* Linux Tab */}
              {activeTab === 'linux' && (
                <div className="tab-panel">
                  <div className="requirements-card">
                    <div className="requirements-title">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                      <span>System Requirements</span>
                    </div>
                    <div className="requirements-grid">
                      <div className="req-item">
                        <span className="req-label">Operating System</span>
                        <span className="req-value">Ubuntu 20.04+, Debian 11+, Fedora 36+</span>
                      </div>
                      <div className="req-item">
                        <span className="req-label">Architecture</span>
                        <span className="req-value">64-bit (x86_64)</span>
                      </div>
                      <div className="req-item">
                        <span className="req-label">Memory (RAM)</span>
                        <span className="req-value">4 GB min (8 GB recommended)</span>
                      </div>
                      <div className="req-item">
                        <span className="req-label">Disk Space</span>
                        <span className="req-value">15 GB+ free space (~1 GB installer, expands to 10+ GB)</span>
                      </div>
                    </div>
                  </div>

                  <ol className="steps-list">
                    <li>
                      <h3>Download the installer</h3>
                      <p>Grab the latest Linux shell installer directly from GitHub Releases:</p>
                      <div className="btn-group">
                        <a className="btn btn-secondary" href="https://github.com/garvit000/OsdagBridge/releases/latest/download/OsdagBridge-Linux.sh">
                          Download OsdagBridge-Linux.sh
                        </a>
                      </div>
                    </li>
                    <li>
                      <h3>Make it executable</h3>
                      <CodeBox code="chmod +x OsdagBridge-Linux.sh" />
                    </li>
                    <li>
                      <h3>Run the installer</h3>
                      <CodeBox code="./OsdagBridge-Linux.sh" />
                      <p>Follow the prompts to choose an install location. By default OsdagBridge installs to <code>$HOME/OsdagBridge</code>.</p>
                    </li>
                    <li>
                      <h3>Launch OsdagBridge</h3>
                      <p>Launch from applications menu → OsdagBridge</p>
                    </li>
                    <li>
                      <h3>Uninstalling</h3>
                      <p>Run the bundled uninstall script from the install directory:</p>
                      <CodeBox code="$HOME/OsdagBridge/Uninstall-OsdagBridge.sh" />
                    </li>
                  </ol>
                </div>
              )}

              {/* Conda Tab */}
              {activeTab === 'conda' && (
                <div className="tab-panel">
                  <div className="requirements-card">
                    <div className="requirements-title">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                      <span>Prerequisites &amp; Requirements</span>
                    </div>
                    <div className="requirements-grid">
                      <div className="req-item">
                        <span className="req-label">Operating System</span>
                        <span className="req-value">Windows 10+, 64-bit Linux, or macOS</span>
                      </div>
                      <div className="req-item">
                        <span className="req-label">Package Manager</span>
                        <span className="req-value">Conda (Miniconda or Anaconda)</span>
                      </div>
                      <div className="req-item">
                        <span className="req-label">Memory (RAM)</span>
                        <span className="req-value">4 GB min (8 GB recommended)</span>
                      </div>
                      <div className="req-item">
                        <span className="req-label">Disk Space</span>
                        <span className="req-value">12+ GB free disk space</span>
                      </div>
                    </div>
                  </div>

                  <ol className="steps-list">
                    <li>
                      <h3>Create the Conda environment</h3>
                      <p>Create a dedicated environment with OsdagBridge and all required channels:</p>
                      <CodeBox code="conda create -n osdagbridge_env -c gsrathore -c osdag -c geompy -c conda-forge osdagbridge" />
                    </li>
                    <li>
                      <h3>Activate the environment</h3>
                      <CodeBox code="conda activate osdagbridge_env" />
                    </li>
                    <li>
                      <h3>Launch OsdagBridge</h3>
                      <CodeBox code="osdagbridge" />
                    </li>
                  </ol>
                </div>
              )}

              {/* Source Tab */}
              {activeTab === 'source' && (
                <div className="tab-panel">
                  <p className="tab-intro">For <span className="highlight-text">contributors</span>, or platforms without a prebuilt installer (e.g. macOS).</p>

                  <div className="requirements-card">
                    <div className="requirements-title">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                      <span>Prerequisites &amp; Requirements</span>
                    </div>
                    <div className="requirements-grid">
                      <div className="req-item">
                        <span className="req-label">Operating System</span>
                        <span className="req-value">Windows 10+, 64-bit Linux, or macOS</span>
                      </div>
                      <div className="req-item">
                        <span className="req-label">Environment Manager</span>
                        <span className="req-value">Conda (Miniconda or Anaconda)</span>
                      </div>
                      <div className="req-item">
                        <span className="req-label">Tools</span>
                        <span className="req-value"><code>git</code>, <code>conda</code></span>
                      </div>
                      <div className="req-item">
                        <span className="req-label">Disk Space &amp; RAM</span>
                        <span className="req-value">12+ GB disk space · 8 GB RAM</span>
                      </div>
                    </div>
                  </div>

                  <ol className="steps-list">
                    <li>
                      <h3>Clone the repository</h3>
                      <div className="code-box-group">
                        <CodeBox code="git clone https://github.com/osdag-admin/OsdagBridge.git" />
                        <CodeBox code="cd OsdagBridge" />
                      </div>
                    </li>
                    <li>
                      <h3>Set up Conda environment</h3>
                      <p>Create and activate the environment with all required CAD, Qt, and analysis dependencies:</p>
                      <div className="code-box-group">
                        <CodeBox code="conda env create -f environment.yml" />
                        <CodeBox code="conda activate osdagbridge-env" />
                      </div>
                    </li>
                    <li>
                      <h3>Install in editable mode</h3>
                      <CodeBox code="pip install -e ." />
                    </li>
                    <li>
                      <h3>Run the desktop app</h3>
                      <CodeBox code="python -m osdagbridge.desktop" />
                    </li>
                    <li>
                      <h3>Or run the CLI <span className="badge-soon">Coming Soon</span></h3>
                      <CodeBox code="osdagbridge analyze project.yaml --solver native" />
                    </li>
                  </ol>
                </div>
              )}
            </div>

            <p className="text-center mt-4">
              Continue to <Link to="/getting-started">Getting Started</Link> for a full walkthrough of the desktop app and upcoming CLI/web interfaces.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
