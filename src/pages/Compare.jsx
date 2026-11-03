import React, { useState } from 'react';
import { devices } from '../data/devices';
import { Link } from 'react-router-dom';

const comparisonRows = [
  {
    feature: 'Storage Technology',
    hdd: 'Magnetic Recording (PMR/SMR)',
    ssd: '3D NAND Flash (Charge-trap)',
    usb: 'NAND Flash Silicon',
    card: 'Stacked Die NAND Flash',
    optical: 'Laser Optical Interference',
    tape: 'Barium Ferrite (BaFe) Tape'
  },
  {
    feature: 'Moving Mechanical Parts',
    hdd: 'Yes (platters & motor arm)',
    ssd: 'No (100% solid state)',
    usb: 'No moving parts',
    card: 'No moving parts',
    optical: 'Yes (spinning drive spindle)',
    tape: 'Yes (reels & tape transport)'
  },
  {
    feature: 'Typical Sequential Speed',
    hdd: '120 – 250 MB/s',
    ssd: '500 – 7,500+ MB/s',
    usb: '30 – 400 MB/s',
    card: '80 – 300 MB/s (UHS-II)',
    optical: '1.2 – 36 MB/s (12x BD)',
    tape: '300 – 400 MB/s (streaming)'
  },
  {
    feature: 'Access Latency / Seek',
    hdd: '4 – 15 ms (mechanical)',
    ssd: '0.02 – 0.1 ms (instant)',
    usb: '< 1 ms (electronic)',
    card: '< 1 ms (electronic)',
    optical: '100 – 250 ms',
    tape: '50 – 120 seconds (seek)'
  },
  {
    feature: 'Common Capacity Range',
    hdd: '1 TB – 24 TB',
    ssd: '256 GB – 8 TB',
    usb: '16 GB – 512 GB',
    card: '32 GB – 1.5 TB',
    optical: '700 MB – 100 GB',
    tape: '12 TB – 45 TB / cartridge'
  },
  {
    feature: 'Cost per Gigabyte',
    hdd: 'Very Low (~$0.015 / GB)',
    ssd: 'Moderate (~$0.08 / GB)',
    usb: 'Low-Mod (~$0.10 / GB)',
    card: 'Moderate (~$0.12 / GB)',
    optical: 'Low in bulk (~$0.04 / GB)',
    tape: 'Lowest (~$0.006 / GB)'
  },
  {
    feature: 'Shock & Vibration Tolerance',
    hdd: 'Vulnerable (head crash risk)',
    ssd: 'Extremely high (durable)',
    usb: 'Very high (pocket durable)',
    card: 'High (water & shock proof)',
    optical: 'Sensitive to scratches',
    tape: 'High (rugged cartridge casing)'
  },
  {
    feature: 'Unpowered Shelf Retention',
    hdd: '3 – 6 years (spindle lube/charge)',
    ssd: '1 – 3 years (unpowered leakage)',
    usb: '3 – 8 years (charge retention)',
    card: '3 – 8 years',
    optical: '10 – 30+ yrs (M-DISC: 1,000)',
    tape: '30+ years (climate vault)'
  }
];

const useCasePresets = [
  {
    title: 'PC Gaming & Boot Drive',
    desc: 'Instant game loading, rapid Windows boot, zero stutter in open-world environments.',
    recommendation: 'ssd',
    why: 'SSDs provide sub-millisecond random 4K read latencies and multi-gigabyte bandwidth that eliminates asset loading stutters.'
  },
  {
    title: 'Mass Video Storage & NAS',
    desc: 'Archiving 40 Terabytes of raw video files and family media on a home or studio server.',
    recommendation: 'hdd',
    why: 'HDDs offer the most economical cost per terabyte for online, always-accessible mass storage arrays.'
  },
  {
    title: 'Drone & 4K Cinema Camera',
    desc: 'Recording 4K 60fps high-bitrate ProRes video inside a flying camera or handheld gimbal.',
    recommendation: 'card',
    why: 'microSD / SD cards provide ultra-lightweight, waterproof, and shock-resistant storage with guaranteed V60/V90 write speeds.'
  },
  {
    title: 'Air-Gapped Ransomware Archive',
    desc: 'Long-term financial records, scientific datasets, and unhackable disaster backups.',
    recommendation: 'tape',
    why: 'LTO Magnetic Tape offers an air-gapped physical barrier, zero idle electricity consumption, and a 30-year archival shelf life.'
  },
  {
    title: 'Quick Physical File Transfer',
    desc: 'Sharing documents with a colleague, printing at a kiosk, or creating a bootable OS recovery key.',
    recommendation: 'usb',
    why: 'USB flash drives plug seamlessly into any computer without requiring cables or internet connections.'
  }
];

export default function Compare() {
  const [selectedUseCase, setSelectedUseCase] = useState(0);
  const activePreset = useCasePresets[selectedUseCase];
  const recommendedDevice = devices.find(d => d.id === activePreset.recommendation);

  return (
    <div className="page compare-page">
      {/* Hero */}
      <section className="simple-hero">
        <div className="eyebrow">TECHNICAL MATRIX & SELECTION</div>
        <h1>Compare the Storage Family</h1>
        <p>
          Each secondary storage medium is engineered around fundamental trade-offs: 
          speed versus cost, durability versus capacity, and random access versus serial streaming.
        </p>
      </section>

      {/* Interactive Storage Matchmaker */}
      <section className="matchmaker-section">
        <div className="matchmaker-header">
          <span className="eyebrow">STORAGE MATCHMAKER WIZARD</span>
          <h2>What is your primary use case?</h2>
          <p>Select a real-world scenario to discover the optimal secondary storage technology:</p>
        </div>

        <div className="scenario-pills">
          {useCasePresets.map((preset, index) => (
            <button
              key={preset.title}
              className={`scenario-pill ${selectedUseCase === index ? 'active' : ''}`}
              onClick={() => setSelectedUseCase(index)}
            >
              {preset.title}
            </button>
          ))}
        </div>

        {recommendedDevice && (
          <div className="matchmaker-result-card" style={{ '--accent': recommendedDevice.color }}>
            <div className="result-left">
              <span className="result-badge" style={{ background: recommendedDevice.color }}>
                OPTIMAL CHOICE
              </span>
              <h3>{recommendedDevice.name} ({recommendedDevice.short})</h3>
              <p className="result-desc"><b>Scenario:</b> {activePreset.desc}</p>
              <div className="result-why">
                <b>Why this fits best:</b> {activePreset.why}
              </div>
            </div>
            <div className="result-right">
              <div className="result-specs-box">
                <div><span>Typical Speed:</span> <b>{recommendedDevice.speed}</b></div>
                <div><span>Latency:</span> <b>{recommendedDevice.latency}</b></div>
                <div><span>Durability:</span> <b>{recommendedDevice.durability}</b></div>
              </div>
              <Link to={recommendedDevice.route} className="primary" style={{ background: recommendedDevice.color }}>
                Enter {recommendedDevice.short} 3D Lab →
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* Comparison Table */}
      <section className="section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">FULL SPECIFICATION MATRIX</div>
            <h2>Side-by-side engineering comparison</h2>
          </div>
          <Link to="/en/explore" className="subtle-link">
            Explore all internal components →
          </Link>
        </div>

        <div className="compare-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th className="feature-col">Feature / Metric</th>
                {devices.map(d => (
                  <th key={d.id} className="device-col">
                    <Link to={d.route} className="th-link">
                      <span className="th-dot" style={{ background: d.color }}></span>
                      <b>{d.short}</b>
                      <small>{d.name}</small>
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr key={row.feature} className={idx % 2 === 0 ? 'even-row' : ''}>
                  <td className="feature-cell">{row.feature}</td>
                  <td className="val-cell">{row.hdd}</td>
                  <td className="val-cell">{row.ssd}</td>
                  <td className="val-cell">{row.usb}</td>
                  <td className="val-cell">{row.card}</td>
                  <td className="val-cell">{row.optical}</td>
                  <td className="val-cell">{row.tape}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="compare-bottom-links">
          <span className="links-label">Quick Jump to 3D Labs:</span>
          <div className="links-row">
            {devices.map(d => (
              <Link 
                to={d.route} 
                key={d.id} 
                className="compare-device-chip"
                style={{ '--chip-color': d.color }}
              >
                <span className="chip-dot" style={{ background: d.color }}></span>
                {d.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
