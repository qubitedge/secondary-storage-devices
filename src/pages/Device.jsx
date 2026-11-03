import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { devices, getDevice } from '../data/devices';
import { getComponentsByDevice } from '../data/componentsData';
import Scene3D from '../components/Scene3D';

export default function Device() {
  const { id } = useParams();
  const d = getDevice(id);

  // Active selected part for the interactive component inspector
  const [selectedPartIndex, setSelectedPartIndex] = useState(0);
  // Active step for the data flow
  const [activeStep, setActiveStep] = useState(0);

  // Find previous and next devices for smooth sequential navigation
  const currentIndex = devices.findIndex(x => x.id === d.id);
  const prevDevice = devices[(currentIndex - 1 + devices.length) % devices.length];
  const nextDevice = devices[(currentIndex + 1) % devices.length];

  // Components related to this device from componentsData
  const deviceComponents = getComponentsByDevice(d.id);
  const selectedPart = d.parts[selectedPartIndex] || d.parts[0];
  const matchingDetail = deviceComponents.find(c => 
    c.name.toLowerCase().includes(selectedPart.toLowerCase()) ||
    selectedPart.toLowerCase().includes(c.name.toLowerCase().split(' ')[0])
  );

  return (
    <div className="page device-page">
      {/* Device Hero */}
      <section className="device-hero" style={{ '--accent': d.color }}>
        <div className="device-hero-info">
          <div className="breadcrumbs">
            <Link to="/en" className="breadcrumb-link">Atelier Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/en/explore" className="breadcrumb-link">Explore Components</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{d.short}</span>
          </div>

          <div className="eyebrow">STORAGE LAB • {d.tag.toUpperCase()}</div>
          <h1>{d.name}<span>{d.short}</span></h1>
          <p className="lead">{d.detailedOverview || d.summary}</p>

          <div className="fact-card" style={{ borderColor: d.color + '40', background: d.color + '0d' }}>
            <span className="fact-badge" style={{ background: d.color }}>KEY INSIGHT</span>
            <p>{d.fact}</p>
          </div>

          <div className="quick-metric-row">
            <div className="metric-item">
              <span className="metric-label">Typical Speed</span>
              <b>{d.speed}</b>
            </div>
            <div className="metric-item">
              <span className="metric-label">Access Latency</span>
              <b>{d.latency}</b>
            </div>
            <div className="metric-item">
              <span className="metric-label">Max Capacity</span>
              <b>{d.typicalCapacity}</b>
            </div>
          </div>
        </div>

        <div className="device-hero-visual">
          <div className="visual-badge">3D INTERACTIVE LAB (DRAG TO ROTATE)</div>
          <Scene3D type={d.id} accent={d.color} label={d.short} />
        </div>
      </section>

      {/* Interactive Anatomy & Data Flow Grid */}
      <section className="lab-grid">
        {/* Interactive Parts & Components Panel */}
        <div className="panel parts-panel">
          <div className="panel-header">
            <div>
              <div className="eyebrow">INTERACTIVE ANATOMY</div>
              <h2>Parts & Internal Components</h2>
            </div>
            <Link to="/en/explore" className="subtle-link">View all components →</Link>
          </div>
          <p className="panel-desc">Click any component below to inspect its operational role, materials, and physics:</p>

          <div className="parts-interactive-layout">
            <div className="parts-pill-list">
              {d.parts.map((p, i) => (
                <button
                  key={p}
                  className={`part-pill-btn ${selectedPartIndex === i ? 'active' : ''}`}
                  onClick={() => setSelectedPartIndex(i)}
                  style={{ '--part-accent': d.color }}
                >
                  <span className="part-num" style={{ background: selectedPartIndex === i ? d.color : undefined }}>
                    {i + 1}
                  </span>
                  <span className="part-label">{p}</span>
                  {selectedPartIndex === i && <span className="active-dot" style={{ background: d.color }}></span>}
                </button>
              ))}
            </div>

            {/* Spotlight Card for Selected Part */}
            <div className="part-spotlight-card" style={{ borderColor: d.color + '33' }}>
              <div className="spotlight-header">
                <span className="spotlight-tag" style={{ background: d.color + '20', color: d.color }}>
                  PART {selectedPartIndex + 1} OF {d.parts.length}
                </span>
                <h3>{selectedPart}</h3>
              </div>
              <p className="spotlight-text">
                {matchingDetail ? matchingDetail.function : partText(selectedPart, d.id)}
              </p>

              {matchingDetail && (
                <div className="spotlight-extra">
                  <div className="extra-item">
                    <span className="extra-label">Underlying Physics:</span>
                    <p>{matchingDetail.physics}</p>
                  </div>
                  <div className="extra-item">
                    <span className="extra-label">Materials / Specs:</span>
                    <p>{matchingDetail.specs}</p>
                  </div>
                </div>
              )}

              <div className="spotlight-footer">
                <Link to="/en/explore" className="chip-link">
                  Open in Full Component Explorer ↗
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive How It Works Stepper */}
        <div className="panel how-panel">
          <div className="panel-header">
            <div>
              <div className="eyebrow">DATA EXECUTION FLOW</div>
              <h2>How {d.short} Works</h2>
            </div>
            <div className="stepper-controls">
              <button 
                className="step-nav-btn"
                disabled={activeStep === 0}
                onClick={() => setActiveStep(s => Math.max(0, s - 1))}
              >
                ← Prev
              </button>
              <span className="step-counter">{activeStep + 1} / {d.how.length}</span>
              <button 
                className="step-nav-btn"
                disabled={activeStep === d.how.length - 1}
                onClick={() => setActiveStep(s => Math.min(d.how.length - 1, s + 1))}
              >
                Next →
              </button>
            </div>
          </div>

          <p className="panel-desc">Step-by-step lifecycle of reading and writing information:</p>

          <div className="steps-flow">
            {d.how.map((text, i) => (
              <div 
                key={text} 
                className={`step-item ${activeStep === i ? 'active' : ''}`}
                onClick={() => setActiveStep(i)}
              >
                <div className="step-badge" style={{ borderColor: activeStep === i ? d.color : undefined, background: activeStep === i ? d.color : undefined, color: activeStep === i ? '#ffffff' : undefined }}>
                  {i + 1}
                </div>
                <div className="step-content">
                  <p>{text}</p>
                </div>
                {i < d.how.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Grid: Infographic + Specifications Table */}
      <section className="bottom-grid">
        <div className="poster-card">
          <div className="poster-header">
            <span className="poster-eyebrow">HIGH-RESOLUTION EDUCATIONAL INFOGRAPHIC</span>
            <h3>{d.name} Visual Breakdown</h3>
          </div>
          <div className="poster-img-wrap">
            <img src={d.image} alt={`${d.name} educational infographic`} />
          </div>
        </div>

        <div className="panel specs-panel">
          <div className="eyebrow">ENGINEERING PROFILE</div>
          <h2>Specifications & Characteristics</h2>
          <div className="specs-list">
            {d.specs.map(([prop, val]) => (
              <div key={prop} className="spec-row">
                <span className="spec-name">{prop}</span>
                <b className="spec-value">{val}</b>
              </div>
            ))}
          </div>

          <div className="device-use-box" style={{ borderColor: d.color + '33', background: d.color + '0a' }}>
            <span className="use-badge" style={{ background: d.color }}>OPTIMAL USE CASES</span>
            <p>{d.use}</p>
          </div>
        </div>
      </section>

      {/* Sequential Device Navigation Bar */}
      <section className="device-bottom-nav">
        <Link to={prevDevice.route} className="nav-card prev" style={{ '--card-accent': prevDevice.color }}>
          <span className="nav-dir">← PREVIOUS LAB</span>
          <b>{prevDevice.name}</b>
          <small>{prevDevice.tag}</small>
        </Link>
        <Link to="/en/compare" className="nav-card center">
          <span className="nav-dir">CROSS REFERENCE</span>
          <b>Compare All 6 Devices</b>
          <small>Side-by-side technical matrix</small>
        </Link>
        <Link to={nextDevice.route} className="nav-card next" style={{ '--card-accent': nextDevice.color }}>
          <span className="nav-dir">NEXT LAB →</span>
          <b>{nextDevice.name}</b>
          <small>{nextDevice.tag}</small>
        </Link>
      </section>
    </div>
  );
}

function partText(p, id) {
  const map = {
    Platters: 'Rigid magnetic disks where binary data is recorded along microscopic concentric tracks.',
    'Spindle motor': 'Rotates the platters at precision speeds from 5,400 to 15,000 RPM with fluid dynamic bearings.',
    'Read/write head': 'Ultra-sensitive magnetoresistive sensor flying 3-5 nanometers above platter surfaces.',
    'Actuator arm': 'High-acceleration swinging arm that sweeps the heads across cylinder tracks.',
    'Voice-coil motor': 'Electromagnetic coil suspended in a neodymium magnet field providing micro-second seek speeds.',
    'SATA interface': 'Carries high-speed serial data commands and electrical power between drive and host system.',
    'NAND flash': 'Non-volatile silicon charge-trap cells storing electrons to represent bits.',
    Controller: 'High-performance multi-core ASIC coordinating wear leveling, error correction, and I/O traffic.',
    'DRAM/cache': 'Fast volatile buffer caching the Flash Translation Layer (FTL) mapping table for instant lookups.',
    'Power management': 'Monitors supply voltages and manages power loss protection capacitors.',
    PCB: 'Multi-layer printed circuit board carrying high-speed traces and silicon ICs.',
    Interface: 'PCIe NVMe or SATA bus lanes connecting directly to the computer motherboards.',
    'USB connector': 'Universal physical plug carrying 5V bus power and differential USB data pairs.',
    'LED indicator': 'Blinks during read/write transactions to alert against premature drive ejection.',
    Casing: 'Ruggedized shell protecting delicate semiconductor dies from static, shock, and pocket debris.',
    'Metal contacts': 'Gold-plated friction pins ensuring corrosion-resistant electrical connection with host readers.',
    'Write-protect switch': 'Mechanical slider that physically signals readers to enforce read-only data safety.',
    'Label / Outer Cover': 'Identifies card generation, speed class ratings, and seals the internal dies.',
    'Label layer': 'Top protective silk-screen surface identifying album, film, or software data.',
    'Protective layer': 'Ultra-hard UV-cured spin-coated resin shielding against scratches and atmospheric oxygen.',
    'Reflective layer': 'Vacuum-sputtered aluminum, silver alloy, or gold reflecting the laser beam back to sensors.',
    'Data layer': 'Sub-micron spiral track of microscopic pits and lands etched into the polycarbonate disc.',
    'Polycarbonate base': 'Crystal-clear 1.2 mm optical-grade polycarbonate substrate acting as an optical lens.',
    'Tape reel': 'Motorized hub spooling and tensioning over 1,000 meters of continuous magnetic ribbon.',
    'Magnetic tape': 'Ultra-thin PEN ribbon coated with nano-scale Barium Ferrite particles for 30-year archival.',
    Capstan: 'Precision motor-driven shaft regulating uniform ribbon velocity across the recording head.',
    'Guide rollers': 'Ceramic low-friction pins keeping ribbon strictly aligned with sub-micron vertical tolerance.',
    'Cartridge casing': 'High-impact polymer shell with reel locks protecting the tape during robotic handling.'
  };
  return map[p] || 'An essential structural or functional component of this storage system.';
}
