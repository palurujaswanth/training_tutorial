import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Code2, MonitorPlay, Copy, Check } from 'lucide-react';
import { tutorialData } from '../data';

export function TutorialView() {
  const { dayId } = useParams();
  const [activeTab, setActiveTab] = useState('preview');
  const [copied, setCopied] = useState(false);
  
  const tutorial = tutorialData.find(d => d.day === parseInt(dayId));
  
  // Reset tab when switching days
  useEffect(() => {
    setActiveTab('preview');
  }, [dayId]);

  if (!tutorial) {
    return <Navigate to="/day/1" replace />;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(tutorial.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div className="tutorial-header">
        <h2 className="tutorial-title">Day {tutorial.day}: {tutorial.title}</h2>
        <div className="tutorial-meta">
          <div className="tags">
            {tutorial.tags.map(tag => (
              <span key={tag} className={`tag ${tag}`}>{tag}</span>
            ))}
          </div>
        </div>
        
        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'preview' ? 'active' : ''}`}
            onClick={() => setActiveTab('preview')}
          >
            <MonitorPlay size={18} /> Preview
          </button>
          <button 
            className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`}
            onClick={() => setActiveTab('code')}
          >
            <Code2 size={18} /> Source Code
          </button>
        </div>
      </div>
      
      <div className="tutorial-content">
        {activeTab === 'preview' ? (
          <div className="iframe-container">
            <iframe 
              srcDoc={tutorial.content}
              title={`Day ${tutorial.day} Preview`}
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          </div>
        ) : (
          <div className="code-container">
            <div className="code-header">
              <span className="code-lang">html</span>
              <button onClick={handleCopy} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-secondary)' }}>
                {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre>
              <code>{tutorial.content}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
