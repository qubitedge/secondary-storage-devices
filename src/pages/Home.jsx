import React from 'react';
import { Link } from 'react-router-dom';
import { devices } from '../data/devices';
import { componentsData } from '../data/componentsData';
import Scene3D from '../components/Scene3D';

export default function Home() {
  const featuredComponents = [
    componentsData.find(c => c.id === 'ssd-nand'),
    componentsData.find(c => c.id === 'hdd-head'),
    componentsData.find(c => c.id === 'optical-laser-lens'),
    componentsData.find(c => c.id === 'tape-ribbon')
  ].filter(Boolean);

  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow-pill">COMPUTER ORGANIZATION • CHAPTER 02</div>
          <h1>Secondary<br /><span>Storage Atelier</span></h1>
          <p className="hero-description">
            Explore how modern computers preserve data permanently after power is switched off. 
            Step inside 3D interactive laboratories to deconstruct spinning magnetic platters, 
            3D NAND charge-trap flash memory, optical lasers, and petabyte archival tape.
          </p>

          <div className="hero-actions">
            <Link className="primary" to="/en/explore">
              Explore Components ↗
            </Link>
            <Link className="ghost" to="/en/hdd">
              Launch 3D Lab →
            </Link>
            <Link className="ghost subtle" to="/en/compare">
              Compare Table
            </Link>
          </div>

          <div className="stats-row">
            <div className="stat-card">
              <b>06</b>
              <span>Storage Labs</span>
            </div>
            <div className="stat-card">
              <b>25+</b>
              <span>Internal Components</span>
            </div>
            <div className="stat-card">
              <b>3D</b>
              <span>Realtime Models</span>
            </div>
            <div className="stat-card">
              <b>100%</b>
              <span>Light Color UI</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-scene-badge">
            <span className="live-dot"></span> INTERACTIVE 3D LAB: ROTATE & INSPECT
          </div>
          <Scene3D type="ssd" accent="#7c3aed" label="3D NAND Flash Solid State" />
        </div>
      </section>

      {/* Explore Components Showcase Section */}
      <section className="section components-showcase-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">FEATURED ARCHITECTURE</div>
            <h2>Explore Internal Components</h2>
          </div>
          <p>
            Dive into the physics, materials, and engineering breakthroughs that power each storage device.
          </p>
        </div>

        <div className="featured-comp-grid">
          {featuredComponents.map(comp => (
            <Link 
              to="/en/explore" 
              key={comp.id} 
              className="featured-comp-card"
              style={{ '--accent': comp.color }}
            >
              <div className="f-top">
                <span className="f-icon">{comp.icon}</span>
                <span className="f-badge" style={{ background: comp.color + '15', color: comp.color }}>
                  {comp.deviceName}
                </span>
              </div>
              <h3>{comp.name}</h3>
              <p>{comp.summary}</p>
              <div className="f-meta">
                <small>Physics: {comp.physics.slice(0, 75)}...</small>
              </div>
              <span className="f-inspect" style={{ color: comp.color }}>
                Inspect component in detail ↗
              </span>
            </Link>
          ))}
        </div>

        <div className="showcase-cta-bar">
          <div className="cta-copy">
            <b>Want to inspect all 25+ storage components across all devices?</b>
            <p>Filter by storage media, read/write heads, motor mechanics, silicon controllers, and bus interfaces.</p>
          </div>
          <Link to="/en/explore" className="primary">
            Open Full Component Explorer →
          </Link>
        </div>
      </section>

      {/* Memory Hierarchy Section */}
      <section className="concept hierarchy-section">
        <div className="concept-copy">
          <div className="eyebrow">COMPUTER ARCHITECTURE PRINCIPLE</div>
          <h2>The Storage & Memory Hierarchy</h2>
          <p>
            Computer systems rely on a tiered storage pyramid balancing speed, capacity, and cost per gigabyte.
            While CPU cache and RAM provide volatile microsecond working memory, <b>Secondary Storage</b> is 
            engineered for non-volatile persistence — keeping programs, files, and operating systems intact for years.
          </p>
          <div className="hierarchy-stats">
            <div className="h-item">
              <span className="h-dot blue"></span>
              <div>
                <b>Primary Memory (RAM / Cache)</b>
                <small>Volatile • Nanoseconds • $3.00+/GB • Wiped upon power cut</small>
              </div>
            </div>
            <div className="h-item">
              <span className="h-dot purple"></span>
              <div>
                <b>Secondary Storage (SSD / HDD / USB / SD)</b>
                <small>Non-volatile • Microseconds/ms • $0.02-$0.15/GB • Persistent</small>
              </div>
            </div>
            <div className="h-item">
              <span className="h-dot rose"></span>
              <div>
                <b>Tertiary & Offline Archive (LTO Tape / Optical)</b>
                <small>Air-gapped • Seconds/Minutes seek • $0.005/GB • 30+ year longevity</small>
              </div>
            </div>
          </div>
        </div>

        <div className="concept-flow-card">
          <div className="flow-card-title">DATA PERSISTENCE LIFECYCLE</div>
          <div className="flow-steps">
            <div className="flow-node">
              <span className="f-num">01</span>
              <b>CPU Creation</b>
              <small>Data generated in RAM</small>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-node active">
              <span className="f-num">02</span>
              <b>Flush to Storage</b>
              <small>Controller writes to medium</small>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-node">
              <span className="f-num">03</span>
              <b>Power Off</b>
              <small>Zero electricity needed</small>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-node success">
              <span className="f-num">04</span>
              <b>Safe Data</b>
              <small>Retained indefinitely</small>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Map (6 Device Labs) */}
      <section className="section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">THE STORAGE LAB MAP</div>
            <h2>Choose a storage lab to deconstruct</h2>
          </div>
          <p>
            Explore each physical medium, examine high-resolution infographics, and understand data flow step by step.
          </p>
        </div>

        <div className="device-grid">
          {devices.map((d, i) => (
            <Link 
              to={d.route} 
              className="device-card" 
              key={d.id} 
              style={{ '--accent': d.color }}
            >
              <div className="card-top">
                <span className="dev-number">0{i + 1}</span>
                <span className="dev-tag" style={{ background: d.color + '15', color: d.color }}>
                  {d.tag}
                </span>
              </div>
              <div className="mini-scene">
                <Scene3D type={d.id} accent={d.color} />
              </div>
              <h3>{d.name}</h3>
              <p>{d.summary}</p>
              <div className="card-meta">
                <span>Speed: <b>{d.speed.split(' ')[0]} {d.speed.split(' ')[1]}</b></span>
                <span>Moving parts: <b>{d.specs.find(s => s[0] === 'Moving parts')?.[1]}</b></span>
              </div>
              <span className="learn" style={{ color: d.color }}>Enter 3D Lab ↗</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
