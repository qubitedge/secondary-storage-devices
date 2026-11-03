export const devices = [
  {
    id: 'hdd',
    slug: 'hdd',
    aliases: ['hdd', 'hard-disk', 'hard-drive'],
    name: 'Hard Disk Drive',
    short: 'HDD',
    tag: 'Magnetic storage',
    category: 'magnetic',
    color: '#0284c7', // vibrant sky blue
    lightAccent: '#e0f2fe',
    route: '/en/hdd',
    image: '/infographics/hdd.png',
    summary: 'Stores data magnetically on rapidly spinning rigid platters using electromagnetic read/write heads.',
    detailedOverview: 'Hard Disk Drives have been the backbone of high-capacity persistent storage for decades. They use magnetic recording technology where microscopic magnetic domains on rapidly rotating platters represent binary 1s and 0s. A voice-coil actuated arm positions sensitive read/write heads just nanometers above the platters on an aerodynamic cushion of air.',
    speed: '80 – 250 MB/s sequential',
    latency: '4 – 15 ms (seek + rotational)',
    typicalCapacity: '1 TB – 24 TB',
    costPerGb: 'Lowest ($0.015 / GB)',
    durability: 'Moderate (sensitive to physical shocks and vibration)',
    parts: [
      'Platters',
      'Spindle motor',
      'Read/write head',
      'Actuator arm',
      'Voice-coil motor',
      'SATA interface'
    ],
    use: 'Large-capacity desktop PCs, network-attached storage (NAS), data centers, surveillance DVRs, and mass archiving.',
    fact: 'The read/write head flies just 3 to 5 nanometers above the spinning platter — smaller than the width of a strand of human DNA or a smoke particle!',
    specs: [
      ['Technology', 'Magnetic recording (PMR / SMR)'],
      ['Moving parts', 'Yes (platters & actuator arm)'],
      ['Spindle Speed', '5,400 to 7,200 RPM (enterprise up to 15,000)'],
      ['Data Access', 'Random access (with mechanical latency)'],
      ['Interface', 'SATA 3.0 (6 Gb/s) / SAS (12 Gb/s)'],
      ['Typical Role', 'Mass storage & bulk data archiving']
    ],
    how: [
      'The spindle motor spins the magnetic platters up to thousands of rotations per minute.',
      'The controller receives an LBA (Logical Block Addressing) read or write command from the host system.',
      'The voice-coil motor pivots the actuator arm, positioning the read/write head directly over the requested cylinder track.',
      'For writing: electromagnetic induction alters the polarity of magnetic domains on the platter surface.',
      'For reading: the magnetoresistive head senses magnetic flux transitions and converts them into electrical signals decoded into digital bytes.'
    ]
  },
  {
    id: 'ssd',
    slug: 'ssd',
    aliases: ['ssd', 'solid-state-drive', 'nvme'],
    name: 'Solid State Drive',
    short: 'SSD',
    tag: 'Flash storage',
    category: 'flash',
    color: '#7c3aed', // royal violet
    lightAccent: '#ede9fe',
    route: '/en/ssd',
    image: '/infographics/ssd.png',
    summary: 'Stores data electronically in non-volatile 3D NAND flash memory chips with zero moving parts.',
    detailedOverview: 'Solid State Drives revolutionized computing by replacing spinning magnetic disks with high-speed semiconductor flash memory. Modern SSDs utilize 3D NAND flash cells stacked up to hundreds of layers high. An intelligent multi-core controller coordinates flash translation, wear leveling, error correction, and high-speed data transfers across PCIe NVMe or SATA buses.',
    speed: '500 MB/s (SATA) up to 7,500+ MB/s (Gen 4 NVMe)',
    latency: '0.02 – 0.1 ms (instantaneous access)',
    typicalCapacity: '256 GB – 8 TB',
    costPerGb: 'Moderate ($0.07 – $0.12 / GB)',
    durability: 'High (no moving parts, resistant to drop and shock)',
    parts: [
      'NAND flash',
      'Controller',
      'DRAM/cache',
      'Power management',
      'PCB',
      'Interface'
    ],
    use: 'High-speed operating system drives, gaming PCs, ultra-thin laptops, high-performance servers, and creative workstations.',
    fact: 'Unlike HDDs that can overwrite data in-place, SSDs must erase an entire flash block before writing new pages to it, requiring specialized garbage collection.',
    specs: [
      ['Technology', '3D NAND Flash (SLC/TLC/QLC)'],
      ['Moving parts', 'None (100% solid state)'],
      ['Read Latency', '< 0.05 ms'],
      ['Data Access', 'Pure random electronic access'],
      ['Interface', 'PCIe 4.0/5.0 NVMe or SATA III'],
      ['Typical Role', 'Primary OS, fast application launch & games']
    ],
    how: [
      'The host CPU sends a read or write request over high-speed PCIe NVMe or SATA lanes.',
      'The multi-core SSD controller checks its DRAM cache and Flash Translation Layer (FTL) mapping table.',
      'For reading: electrical voltages are applied across NAND flash cell word-lines to sense trapped charge levels.',
      'For writing: electrons are tunneled through an insulating dielectric layer into charge-trap or floating-gate storage cells.',
      'Wear leveling and error correction (LDPC) automatically distribute writes evenly to maximize lifespan and data integrity.'
    ]
  },
  {
    id: 'usb',
    slug: 'usb-flash',
    aliases: ['usb', 'usb-flash', 'thumb-drive', 'pen-drive'],
    name: 'USB Flash Drive',
    short: 'USB Drive',
    tag: 'Portable flash',
    category: 'flash',
    color: '#0284c7', // vibrant blue
    lightAccent: '#e0f2fe',
    route: '/en/usb-flash',
    image: '/infographics/usb.png',
    summary: 'A compact, pocket-sized removable flash memory drive plugging directly into USB ports.',
    detailedOverview: 'USB flash drives (popularly known as thumb drives or pen drives) combine non-volatile NAND flash memory with an integrated USB controller inside a protective, pocketable housing. They replaced floppy disks and rewritable CDs as the universal medium for transferring files, creating bootable operating system installers, and keeping offline portable backups.',
    speed: '30 – 400 MB/s (depending on USB 2.0 vs USB 3.2)',
    latency: '< 1 ms',
    typicalCapacity: '16 GB – 512 GB',
    costPerGb: 'Low ($0.05 – $0.15 / GB)',
    durability: 'High (rugged casing, immune to magnetic fields)',
    parts: [
      'USB connector',
      'Controller',
      'NAND flash',
      'LED indicator',
      'Casing'
    ],
    use: 'Transferring documents and files between computers, creating bootable recovery media, and quick physical data transit.',
    fact: 'Flash memory inside a USB drive maintains stored electrical charge inside insulated microscopic cells for over 10 years without requiring any battery power.',
    specs: [
      ['Technology', 'NAND Flash memory'],
      ['Interface', 'USB Type-A / Type-C (USB 3.2 Gen 1/2)'],
      ['Hot Swappable', 'Yes (Plug and play)'],
      ['Moving parts', 'None'],
      ['Portability', 'Extreme (pocket sized keychain form)'],
      ['Typical Role', 'File transport & bootable OS tools']
    ],
    how: [
      'The drive is plugged into a USB host port, drawing 5V direct electrical current through the bus pins.',
      'The USB controller negotiates standard USB Mass Storage device enumeration with the host operating system.',
      'When copying a file, data packets are serialized across differential data lines (D+/D- or SuperSpeed lanes).',
      'The internal controller programs charge into non-volatile NAND flash cells.',
      'Unplugging cuts power, but the trapped electrons stay securely stored in the dielectric layers.'
    ]
  },
  {
    id: 'card',
    slug: 'memory-card',
    aliases: ['card', 'memory-card', 'sd', 'microsd', 'sd-card'],
    name: 'Memory Card (SD / microSD)',
    short: 'SD / microSD',
    tag: 'Removable flash',
    category: 'flash',
    color: '#059669', // rich emerald
    lightAccent: '#d1fae5',
    route: '/en/memory-card',
    image: '/infographics/memory-card.png',
    summary: 'Ultra-compact wafer-thin removable flash storage engineered for cameras, smartphones, and mobile electronics.',
    detailedOverview: 'Secure Digital (SD) and microSD cards pack high-density NAND flash dies and an ultra-miniaturized controller into a wafer-thin package measuring as small as 15 × 11 × 1 mm. Standardized speed classes (UHS-I, UHS-II, V30, V90) guarantee sustained write speeds required for continuous raw burst photography and high-bitrate 4K/8K video recording.',
    speed: '80 – 300 MB/s (UHS-I up to UHS-II)',
    latency: '< 1 ms',
    typicalCapacity: '32 GB – 1.5 TB',
    costPerGb: 'Low to Moderate ($0.08 – $0.18 / GB)',
    durability: 'High (waterproof, shock-resistant, airport X-ray proof)',
    parts: [
      'NAND flash',
      'Controller',
      'Metal contacts',
      'Write-protect switch',
      'Casing'
    ],
    use: 'Digital DSLR and mirrorless cameras, action cams (GoPro), drones, Nintendo Switch, smartphones, and embedded single-board computers (Raspberry Pi).',
    fact: 'A microSD card can store 1.5 terabytes of data inside a silicon sliver weighing less than 0.25 grams — holding hundreds of thousands of high-res photos.',
    specs: [
      ['Technology', 'Stacked Die NAND Flash'],
      ['Form Factors', 'microSD, SD Card, CFexpress'],
      ['Gold Contacts', '8 pins (microSD) / 9-17 pins (SD UHS-II)'],
      ['Write Protection', 'Mechanical switch on full-size SD'],
      ['Environmental', 'Waterproof, shock-proof, X-ray proof'],
      ['Typical Role', 'Embedded & photographic media expansion']
    ],
    how: [
      'The card inserts into an SD/microSD host slot, engaging gold-plated spring friction pins.',
      'The host initiates communication using SPI or high-speed SD bus protocols (up to UHS-II dual rows).',
      'The integrated ASIC micro-controller translates host commands and manages internal block wear.',
      'During 4K video recording, high-speed buffer memory ensures uninterrupted sequential write streams.',
      'Data is retained non-volatiles when transferred between cameras, laptops, and card readers.'
    ]
  },
  {
    id: 'optical',
    slug: 'optical-discs',
    aliases: ['optical', 'optical-discs', 'cd', 'dvd', 'blu-ray', 'disc'],
    name: 'Optical Discs (CD / DVD / Blu-ray)',
    short: 'CD / DVD / Blu-ray',
    tag: 'Laser storage',
    category: 'optical',
    color: '#d97706', // warm amber
    lightAccent: '#fef3c7',
    route: '/en/optical-discs',
    image: '/infographics/optical.png',
    summary: 'Circular discs storing binary data as microscopic pits and lands etched into a reflective layer read by a laser beam.',
    detailedOverview: 'Optical storage revolutionized commercial music, cinema, and software distribution across three technological generations: Compact Disc (CD, 700 MB), Digital Versatile Disc (DVD, 4.7 GB), and Blu-ray Disc (BD, 25–100 GB). Optical discs are immune to electromagnetic pulses and power surges, making them popular for offline physical media and durable archival.',
    speed: '1.2 MB/s (CD) to 36 MB/s (12x Blu-ray)',
    latency: '100 – 250 ms (mechanical seek and spin-up)',
    typicalCapacity: '700 MB (CD) • 4.7 GB (DVD) • 25–100 GB (Blu-ray)',
    costPerGb: 'Low for bulk distribution ($0.03 – $0.06 / GB)',
    durability: 'Moderate to High (safe from magnets; sensitive to scratches and UV degradation)',
    parts: [
      'Label layer',
      'Protective layer',
      'Reflective layer',
      'Data layer',
      'Polycarbonate base'
    ],
    use: 'Distribution of movies, music albums, console video games, historical archives, and immutable cold backups (M-DISC).',
    fact: 'Blu-ray discs use a shorter 405 nm blue-violet laser with a high numerical aperture lens, allowing data pits to be squeezed five times closer together than on a DVD.',
    specs: [
      ['Technology', 'Optical laser reflection (Pits & Lands)'],
      ['Laser Wavelengths', 'CD (780 nm IR), DVD (650 nm Red), BD (405 nm Blue)'],
      ['Disc Diameter', '120 mm standard (1.2 mm thickness)'],
      ['Access Mode', 'Spiral track (Continuous constant linear velocity)'],
      ['Immunity', '100% immune to magnetic fields & static EMP'],
      ['Typical Role', 'Commercial media distribution & permanent recordkeeping']
    ],
    how: [
      'A spindle motor spins the optical disc at varying rotational speeds to maintain constant linear velocity.',
      'A laser diode emits a concentrated coherent light beam focused onto the microscopic spiral track by an objective lens.',
      'When the laser strikes a "land" (flat surface), light reflects directly back into the photodetector sensor.',
      'When the laser hits a microscopic "pit" (depression), destructive phase interference scatters the light, causing a drop in detected intensity.',
      'The photodiode electronics detect these brightness transitions, decoding them into binary data frames.'
    ]
  },
  {
    id: 'tape',
    slug: 'magnetic-tape',
    aliases: ['tape', 'magnetic-tape', 'lto'],
    name: 'Magnetic Tape (LTO)',
    short: 'LTO Tape',
    tag: 'Archive storage',
    category: 'tape',
    color: '#e11d48', // vibrant rose
    lightAccent: '#ffe4e6',
    route: '/en/magnetic-tape',
    image: '/infographics/tape.png',
    summary: 'High-density magnetic ribbon wound on reels inside durable cartridges, engineered for massive long-term cold archives.',
    detailedOverview: 'Linear Tape-Open (LTO) magnetic tape is the undisputed champion of large-scale enterprise data archiving, ransomware recovery, and long-term compliance storage. A single modern LTO-9 cartridge holds 18 TB of uncompressed data (up to 45 TB compressed) on a half-inch wide ribbon over 1,000 meters long. Tape consumes zero electrical power while resting on a shelf.',
    speed: '400 MB/s (native stream) / Up to 1,000 MB/s compressed',
    latency: '50 – 120 seconds (seek time to rewind tape to target file)',
    typicalCapacity: '12 TB – 45 TB per cartridge (LTO-8 / LTO-9)',
    costPerGb: 'Lowest total cost of ownership ($0.005 – $0.008 / GB)',
    durability: 'Ultra-High (shelf life of 30+ years in controlled climate)',
    parts: [
      'Tape reel',
      'Magnetic tape',
      'Read/write head',
      'Capstan',
      'Guide rollers',
      'Cartridge casing'
    ],
    use: 'Hyperscale cloud cold storage (AWS Glacier), national scientific archives (CERN), hospital health records, bank compliance backups, and air-gapped ransomware defense.',
    fact: 'Magnetic tape provides a true physical "air gap" — when a tape cartridge is stored in a vault or library slot, no cyberattacker or malware can touch or overwrite it!',
    specs: [
      ['Technology', 'Linear Serpentine Magnetic Recording (BaFe)'],
      ['Tape Ribbon Length', '1,035 meters (over 1 kilometer of tape!)'],
      ['Tape Thickness', '5.2 micrometers (thinner than a red blood cell)'],
      ['Access Mode', 'Sequential access (streaming)'],
      ['Shelf Life', '30 years under standard climate conditions'],
      ['Typical Role', 'Exabyte-scale enterprise archive & disaster recovery']
    ],
    how: [
      'An automated robotic arm or operator loads the tape cartridge into the drive mechanism.',
      'The drive leader pin catches the tape ribbon and threads it along ceramic guide rollers across the stationary read/write head assembly.',
      'Dual precision reel motors maintain constant ribbon tension and speed past the multi-channel head.',
      'The write head writes dozens of parallel microscopic tracks simultaneously in a serpentine back-and-forth pattern along the kilometer of ribbon.',
      'When reading, giant magnetoresistive sensors decode the magnetic flux reversals at streaming data rates up to 400 MB/s.'
    ]
  }
];

export function getDevice(slugOrId) {
  if (!slugOrId) return devices[0];
  const normalized = String(slugOrId).toLowerCase().trim();
  
  // 1. Direct id match
  let found = devices.find(d => d.id.toLowerCase() === normalized);
  if (found) return found;

  // 2. Direct slug match
  found = devices.find(d => d.slug.toLowerCase() === normalized);
  if (found) return found;

  // 3. Route match (e.g. /en/usb-flash or usb-flash)
  found = devices.find(d => 
    d.route.toLowerCase() === normalized || 
    d.route.toLowerCase() === `/en/${normalized}` ||
    d.route.toLowerCase().endsWith(`/${normalized}`)
  );
  if (found) return found;

  // 4. Aliases match
  found = devices.find(d => d.aliases && d.aliases.some(a => a.toLowerCase() === normalized));
  if (found) return found;

  // 5. Fallback to first device
  return devices[0];
}
