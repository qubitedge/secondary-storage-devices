import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { componentsData, componentCategories, technologyFilters } from '../data/componentsData';
import { devices } from '../data/devices';

export default function ExploreComponents() {
  const [selectedTech, setSelectedTech] = useState('all');
  const [selectedCat, setSelectedCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeComponent, setActiveComponent] = useState(null);

  const filteredComponents = useMemo(() => {
    return componentsData.filter(comp => {
      const matchTech = selectedTech === 'all' || comp.deviceId === selectedTech;
      const matchCat = selectedCat === 'all' || comp.category === selectedCat;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = !q || 
        comp.name.toLowerCase().includes(q) ||
        comp.deviceName.toLowerCase().includes(q) ||
        comp.summary.toLowerCase().includes(q) ||
        comp.physics.toLowerCase().includes(q) ||
        comp.specs.toLowerCase().includes(q);

      return matchTech && matchCat && matchQuery;
    });
  }, [selectedTech, selectedCat, searchQuery]);

  return (
    <div className="page explore-page">
      {/* Hero Section */}
      <section className="explore-hero">
        <div className="eyebrow">COMPONENT ANATOMY • SECONDARY STORAGE</div>
        <h1>Explore Storage<br /><span>Components & Physics</span></h1>
        <p className="lead">
          Deconstruct what lies beneath the casing. From electromagnetic giant magnetoresistance
          and quantum tunneling flash cells to blue-violet lasers and 1-kilometer archival ribbons.
        </p>

        {/* Quick Architecture Pipeline */}
        <div className="arch-pipeline-wrap">
          <div className="arch-pipeline-label">STORAGE I/O PIPELINE STAGES (CLICK TO FILTER):</div>
          <div className="arch-pipeline">
            <button 
              className={`pipeline-node ${selectedCat === 'interface' ? 'active' : ''}`}
              onClick={() => setSelectedCat(selectedCat === 'interface' ? 'all' : 'interface')}
            >
              <span className="p-num">01</span>
              <span className="p-title">Host Interface</span>
              <span className="p-sub">SATA, NVMe, USB, Bus</span>
            </button>
            <div className="pipeline-arrow">→</div>
            <button 
              className={`pipeline-node ${selectedCat === 'controller' ? 'active' : ''}`}
              onClick={() => setSelectedCat(selectedCat === 'controller' ? 'all' : 'controller')}
            >
              <span className="p-num">02</span>
              <span className="p-title">Controller & Silicon</span>
              <span className="p-sub">ASIC, Firmware, DRAM</span>
            </button>
            <div className="pipeline-arrow">→</div>
            <button 
              className={`pipeline-node ${selectedCat === 'mechanics' ? 'active' : ''}`}
              onClick={() => setSelectedCat(selectedCat === 'mechanics' ? 'all' : 'mechanics')}
            >
              <span className="p-num">03</span>
              <span className="p-title">Motors & Mechanics</span>
              <span className="p-sub">VCM, Spindles, Capstans</span>
            </button>
            <div className="pipeline-arrow">→</div>
            <button 
              className={`pipeline-node ${selectedCat === 'heads' ? 'active' : ''}`}
              onClick={() => setSelectedCat(selectedCat === 'heads' ? 'all' : 'heads')}
            >
              <span className="p-num">04</span>
              <span className="p-title">Heads & Optics</span>
              <span className="p-sub">TMR Heads, Laser Diodes</span>
            </button>
            <div className="pipeline-arrow">→</div>
            <button 
              className={`pipeline-node ${selectedCat === 'media' ? 'active' : ''}`}
              onClick={() => setSelectedCat(selectedCat === 'media' ? 'all' : 'media')}
            >
              <span className="p-num">05</span>
              <span className="p-title">Physical Media</span>
              <span className="p-sub">Platters, NAND, Pits, Tape</span>
            </button>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="explore-controls">
        <div className="controls-row">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search components by name, physics, or specs (e.g., 'laser', 'platters', 'NAND', 'spindle')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-btn" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>
          <div className="count-pill">
            Showing <b>{filteredComponents.length}</b> of {componentsData.length} parts
          </div>
        </div>

        {/* Technology Filter Pills */}
        <div className="filter-group">
          <span className="filter-label">Filter by Device:</span>
          <div className="pills-scroll">
            {technologyFilters.map(t => (
              <button
                key={t.id}
                className={`filter-pill ${selectedTech === t.id ? 'active' : ''}`}
                onClick={() => setSelectedTech(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="filter-group">
          <span className="filter-label">Filter by Role:</span>
          <div className="pills-scroll">
            {componentCategories.map(c => (
              <button
                key={c.id}
                className={`filter-pill ${selectedCat === c.id ? 'active' : ''}`}
                onClick={() => setSelectedCat(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Components Grid */}
      <section className="components-grid">
        {filteredComponents.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">🔎</span>
            <h3>No components match your search</h3>
            <p>Try resetting the filters or typing a different keyword like "NAND", "spindle", or "laser".</p>
            <button className="primary" onClick={() => { setSelectedTech('all'); setSelectedCat('all'); setSearchQuery(''); }}>
              Reset all filters
            </button>
          </div>
        ) : (
          filteredComponents.map(comp => {
            const dev = devices.find(d => d.id === comp.deviceId);
            return (
              <div 
                key={comp.id} 
                className="component-card"
                style={{ '--accent': comp.color }}
                onClick={() => setActiveComponent(comp)}
              >
                <div className="comp-card-top">
                  <span className="comp-icon">{comp.icon}</span>
                  <span className="comp-device-tag" style={{ background: comp.color + '15', color: comp.color }}>
                    {comp.deviceName}
                  </span>
                </div>
                <h3>{comp.name}</h3>
                <p className="comp-summary">{comp.summary}</p>
                <div className="comp-meta">
                  <div className="spec-snippet">
                    <span className="spec-label">Specs & Material:</span>
                    <span className="spec-val">{comp.specs}</span>
                  </div>
                </div>
                <div className="comp-card-footer">
                  <span className="inspect-link">Deep dive inspection ↗</span>
                </div>
              </div>
            );
          })
        )}
      </section>

      {/* Component Detail Inspector Modal */}
      {activeComponent && (
        <div className="modal-overlay" onClick={() => setActiveComponent(null)}>
          <div className="inspector-modal" onClick={e => e.stopPropagation()} style={{ '--accent': activeComponent.color }}>
            <div className="modal-header">
              <div className="modal-title-group">
                <span className="modal-icon">{activeComponent.icon}</span>
                <div>
                  <div className="modal-eyebrow">
                    PART OF: {activeComponent.deviceName.toUpperCase()}
                  </div>
                  <h2>{activeComponent.name}</h2>
                </div>
              </div>
              <button className="modal-close-btn" onClick={() => setActiveComponent(null)}>✕</button>
            </div>

            <div className="modal-body">
              <div className="inspector-section">
                <h4>🎯 Primary Functional Role</h4>
                <p>{activeComponent.function}</p>
              </div>

              <div className="inspector-section">
                <h4>🔬 Working Physics & Principles</h4>
                <p>{activeComponent.physics}</p>
              </div>

              <div className="inspector-section">
                <h4>📐 Technical Specifications & Materials</h4>
                <p>{activeComponent.specs}</p>
              </div>

              <div className="inspector-section failure">
                <h4>⚠️ Degradation Factors & Failure Modes</h4>
                <p>{activeComponent.failureMode}</p>
              </div>

              <div className="inspector-tip" style={{ borderColor: activeComponent.color }}>
                <b>✦ Engineering Secret:</b> {activeComponent.vitalTip}
              </div>
            </div>

            <div className="modal-footer">
              <Link 
                to={activeComponent.deviceRoute} 
                className="primary-link"
                onClick={() => setActiveComponent(null)}
              >
                Inspect in {activeComponent.deviceName} 3D Lab →
              </Link>
              <button className="ghost-btn" onClick={() => setActiveComponent(null)}>
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
