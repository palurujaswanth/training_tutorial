import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Rocket } from 'lucide-react';
import { tutorialData } from '../data';

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">
          <BookOpen size={24} color="var(--accent-primary)" />
          Web Tutorials
        </h1>
      </div>
      
      <div className="nav-links">
        {tutorialData.map((tutorial) => (
          <NavLink 
            key={tutorial.day} 
            to={`/day/${tutorial.day}`}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <div className="nav-item-top">
              <span className="nav-day">Day {tutorial.day}</span>
            </div>
            <div className="nav-title">{tutorial.title}</div>
            <div className="tags">
              {tutorial.tags.map(tag => (
                <span key={tag} className={`tag ${tag}`}>{tag}</span>
              ))}
            </div>
          </NavLink>
        ))}
        
        <div style={{ margin: '1rem 0', height: '1px', background: 'var(--border-color)' }}></div>
        
        <NavLink 
          to="/deploy"
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          <div className="nav-item-top">
            <span className="nav-day" style={{ color: 'var(--accent-primary)' }}>Guide</span>
          </div>
          <div className="nav-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Rocket size={16} /> Deploy to Netlify
          </div>
        </NavLink>
      </div>
    </div>
  );
}
