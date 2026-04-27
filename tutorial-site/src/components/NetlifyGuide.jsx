import React from 'react';
import { Cloud, GitBranch, Globe, Play, ArrowRight } from 'lucide-react';

export function NetlifyGuide() {
  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <div className="tutorial-header">
        <h2 className="tutorial-title">Deploy to Netlify</h2>
        <p style={{ color: 'var(--text-secondary)' }}>A step-by-step guide to take your website from development to production.</p>
      </div>
      
      <div className="guide-container">
        
        <div className="guide-step">
          <div className="step-number">1</div>
          <h3>Initialize Git Repository</h3>
          <p>Before deploying, you need to push your code to a Git repository (like GitHub, GitLab, or Bitbucket).</p>
          <div className="code-container" style={{ marginBottom: '1rem', marginTop: '1rem' }}>
            <div className="code-header"><span className="code-lang">terminal</span></div>
            <pre style={{ height: 'auto', padding: '1rem' }}>
              <code>
git init{"\n"}
git add .{"\n"}
git commit -m "Initial commit"
              </code>
            </pre>
          </div>
          <p>Create a new repository on <Globe size={16} style={{display: 'inline', verticalAlign: 'text-bottom'}} /> GitHub and push your code there.</p>
        </div>

        <div className="guide-step">
          <div className="step-number">2</div>
          <h3>Create a Netlify Account</h3>
          <p>Go to Netlify and sign up using your GitHub account. This makes it incredibly easy to link your repositories.</p>
          <a href="https://app.netlify.com/signup" target="_blank" rel="noreferrer" className="btn-primary">
            <Cloud size={18} /> Sign up on Netlify
          </a>
        </div>

        <div className="guide-step">
          <div className="step-number">3</div>
          <h3>Import Your Project</h3>
          <p>Once logged into Netlify:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            <li>Click on <strong>"Add new site"</strong> and select <strong>"Import an existing project"</strong></li>
            <li>Choose <strong>GitHub</strong> as your Git provider and authorize Netlify.</li>
            <li>Search for your tutorial repository and select it.</li>
          </ul>
        </div>

        <div className="guide-step">
          <div className="step-number">4</div>
          <h3>Configure Build Settings</h3>
          <p>Netlify usually auto-detects Vite settings, but ensure they are correct:</p>
          <div style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <p><strong>Base directory:</strong> <code>/</code> (or leave empty)</p>
            <p><strong>Build command:</strong> <code>npm run build</code></p>
            <p><strong>Publish directory:</strong> <code>dist</code></p>
          </div>
        </div>

        <div className="guide-step">
          <div className="step-number">5</div>
          <h3>Deploy and Live!</h3>
          <p>Click the <strong>"Deploy site"</strong> button.</p>
          <p>Netlify will now build your project. Within a minute, you will get a live production URL where your tutorial website is hosted!</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', marginTop: '1rem', fontWeight: 'bold' }}>
            <Play fill="currentColor" size={16} /> Your site is live!
          </div>
        </div>
        
      </div>
    </div>
  );
}
