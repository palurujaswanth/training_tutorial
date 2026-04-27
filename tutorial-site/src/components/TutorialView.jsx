import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { tutorialData } from '../data';

export function TutorialView() {
  const { dayId } = useParams();
  
  const tutorial = tutorialData.find(d => d.day === parseInt(dayId));

  if (!tutorial) {
    return <Navigate to="/day/1" replace />;
  }

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
      </div>
      
      <div className="tutorial-content" style={{ overflowY: 'auto' }}>
        <div 
          className="theory-container"
          style={{
            background: 'var(--bg-secondary)',
            padding: '2rem',
            borderRadius: 'var(--border-radius)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-lg)',
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: 'var(--text-primary)'
          }}
          dangerouslySetInnerHTML={{ __html: tutorial.content }}
        />
      </div>
    </div>
  );
}
