import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { devices } from '../data/devices';

export default function Layout({ children }) {
  // Theme state: defaults to light mode as requested!
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('atelier-theme') || 'light';
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('atelier-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-shell">
      {/* Top Header Bar */}
      <header className="topbar">
        <div className="topbar-left">
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            ☰
          </button>

          <Link to="/en" className="brand" onClick={() => setMobileMenuOpen(false)}>
            <span className="brand-mark">SA</span>
            <div className="brand-text">
              <span className="brand-eyebrow">SECONDARY STORAGE</span>
              <b>Atelier Lab</b>
            </div>
          </Link>
        </div>

        <nav className="desktop-nav">
          <NavLink to="/en" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/en/explore" className={({ isActive }) => (isActive ? 'active' : '')}>
            <span>Explore Components</span>
            <span className="nav-badge">25+</span>
          </NavLink>
          <NavLink to="/en/compare" className={({ isActive }) => (isActive ? 'active' : '')}>
            Compare
          </NavLink>
          <NavLink to="/en/quiz" className={({ isActive }) => (isActive ? 'active' : '')}>
            Quiz
          </NavLink>
        </nav>

        <div className="topbar-right">
          <Link to="/en/explore" className="quick-search-chip">
            <span className="search-icon">🔍</span>
            <span>Search Parts</span>
            <kbd className="kbd-shortcut">K</kbd>
          </Link>

          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            aria-label="Toggle Color Theme"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <aside className={`sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-section">
          <div className="side-title">EXPLORATION & TOOLS</div>
          <NavLink 
            className="side-item feature-link" 
            to="/en/explore"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="side-icon-box" style={{ background: '#3b82f6', color: '#ffffff' }}>
              🔬
            </span>
            <div>
              <b>Explore Components</b>
              <small>Deconstruct 25+ parts</small>
            </div>
          </NavLink>

          <NavLink 
            className="side-item feature-link" 
            to="/en/compare"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="side-icon-box" style={{ background: '#8b5cf6', color: '#ffffff' }}>
              📊
            </span>
            <div>
              <b>Compare Matrix</b>
              <small>Matchmaker & Specs</small>
            </div>
          </NavLink>

          <NavLink 
            className="side-item feature-link" 
            to="/en/quiz"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="side-icon-box" style={{ background: '#10b981', color: '#ffffff' }}>
              🎯
            </span>
            <div>
              <b>Knowledge Quiz</b>
              <small>Test your mastery</small>
            </div>
          </NavLink>
        </div>

        <div className="sidebar-section">
          <div className="side-title">STORAGE DEVICE LABS</div>
          {devices.map((d, i) => (
            <NavLink 
              className="side-item device-link" 
              key={d.id} 
              to={d.route}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="side-num-badge" style={{ background: d.color, color: '#ffffff' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <b>{d.short}</b>
                <small>{d.name}</small>
              </div>
            </NavLink>
          ))}
        </div>

        <div className="sidebar-footer">
          <div className="footer-pill">
            <span className="status-indicator"></span>
            <span>Secondary Storage Atelier v2.0</span>
          </div>
        </div>
      </aside>

      {/* Main Page Content */}
      <main onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}>
        {children}
      </main>
    </div>
  );
}
