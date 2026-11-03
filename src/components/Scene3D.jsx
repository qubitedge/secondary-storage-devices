import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows, Text } from '@react-three/drei';

function HDD() {
  return (
    <group rotation={[0.25, -0.25, 0]}>
      {/* Base Chassis */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4.4, 0.55, 3.1]} />
        <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Top Cover Inset */}
      <mesh position={[0, 0.29, 0]}>
        <boxGeometry args={[4.2, 0.05, 2.9]} />
        <meshStandardMaterial color="#64748b" metalness={0.85} roughness={0.2} />
      </mesh>
      {/* Magnetic Platters */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[-0.7, 0.35 + i * 0.08, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.15, 1.15, 0.04, 64]} />
          <meshStandardMaterial color="#f1f5f9" metalness={0.95} roughness={0.12} />
        </mesh>
      ))}
      {/* Spindle Hub */}
      <mesh position={[-0.7, 0.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.15, 32]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Actuator Arm */}
      <mesh position={[0.8, 0.48, 0]} rotation={[0, 0, -0.28]}>
        <boxGeometry args={[1.9, 0.07, 0.16]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.25} />
      </mesh>
      {/* Read/Write Head Slider Tip */}
      <mesh position={[0.0, 0.47, 0]}>
        <boxGeometry args={[0.18, 0.05, 0.12]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={0.3} />
      </mesh>
      {/* Voice Coil Motor Assembly */}
      <mesh position={[1.65, 0.45, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 0.2, 32]} />
        <meshStandardMaterial color="#475569" metalness={0.8} />
      </mesh>
    </group>
  );
}

function SSD() {
  return (
    <group rotation={[0.2, -0.3, 0]}>
      {/* PCB Board */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4.4, 0.15, 2.3]} />
        <meshStandardMaterial color="#0f172a" roughness={0.4} />
      </mesh>
      {/* Copper/Thermal traces overlay */}
      <mesh position={[0, 0.08, 0]}>
        <boxGeometry args={[4.3, 0.02, 2.2]} />
        <meshStandardMaterial color="#1e293b" metalness={0.6} />
      </mesh>
      {/* 3D NAND Flash Chips */}
      {[-1.25, -0.2, 0.85].map((x, i) => (
        <mesh key={i} position={[x, 0.18, 0]}>
          <boxGeometry args={[0.85, 0.1, 1.4]} />
          <meshStandardMaterial color="#111827" roughness={0.25} metalness={0.2} />
        </mesh>
      ))}
      {/* Main Controller ASIC */}
      <mesh position={[1.6, 0.19, 0]}>
        <boxGeometry args={[0.65, 0.12, 1.2]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.15} />
      </mesh>
      {/* DRAM Cache Chip */}
      <mesh position={[1.6, 0.18, -0.75]}>
        <boxGeometry args={[0.4, 0.09, 0.5]} />
        <meshStandardMaterial color="#1e1b4b" roughness={0.3} />
      </mesh>
      {/* Gold PCIe Interface Pins */}
      <mesh position={[-2.15, 0.08, 0]}>
        <boxGeometry args={[0.3, 0.05, 1.6]} />
        <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}

function USB() {
  return (
    <group rotation={[0.15, -0.35, 0.05]}>
      {/* Main Body */}
      <mesh position={[-0.4, 0, 0]}>
        <boxGeometry args={[2.8, 0.7, 1.2]} />
        <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Metal USB-A Plug */}
      <mesh position={[1.5, 0, 0]}>
        <boxGeometry args={[1.2, 0.52, 0.88]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.92} roughness={0.15} />
      </mesh>
      {/* Internal Plastic Tongue */}
      <mesh position={[1.7, 0.1, 0]}>
        <boxGeometry args={[0.6, 0.1, 0.7]} />
        <meshStandardMaterial color="#0284c7" />
      </mesh>
      {/* Accent Grip Strip */}
      <mesh position={[-0.4, 0.36, 0]}>
        <boxGeometry args={[1.6, 0.03, 0.6]} />
        <meshStandardMaterial color="#0284c7" emissive="#0284c7" emissiveIntensity={0.4} />
      </mesh>
      {/* Lanyard Hole */}
      <mesh position={[-1.75, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.2, 0.2, 0.4, 16]} />
        <meshStandardMaterial color="#475569" />
      </mesh>
    </group>
  );
}

function Card() {
  return (
    <group rotation={[0.15, -0.25, 0]}>
      {/* SD Card Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.4, 0.12, 2.3]} />
        <meshStandardMaterial color="#1e293b" roughness={0.3} />
      </mesh>
      {/* Top Label Area */}
      <mesh position={[-0.2, 0.07, 0]}>
        <boxGeometry args={[2.8, 0.02, 2.1]} />
        <meshStandardMaterial color="#059669" roughness={0.5} />
      </mesh>
      {/* Gold Interface Contacts */}
      <mesh position={[1.4, 0.08, 0]}>
        <boxGeometry args={[0.5, 0.03, 1.8]} />
        <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.15} />
      </mesh>
      {/* Lock Switch */}
      <mesh position={[-0.8, 0.08, 1.18]}>
        <boxGeometry args={[0.25, 0.1, 0.08]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
    </group>
  );
}

function Optical() {
  return (
    <group rotation={[0.2, -0.3, 0]}>
      {/* Transparent Polycarbonate Substrate */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.75, 1.75, 0.06, 64]} />
        <meshStandardMaterial color="#f8fafc" metalness={0.2} roughness={0.1} transparent opacity={0.85} />
      </mesh>
      {/* Reflective Iridescent Data Layer */}
      <mesh position={[0, 0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.65, 1.65, 0.03, 64]} />
        <meshStandardMaterial color="#38bdf8" metalness={0.95} roughness={0.1} />
      </mesh>
      {/* Center Clamping Hub Hole */}
      <mesh position={[0, 0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 32]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.3} />
      </mesh>
    </group>
  );
}

function Tape() {
  return (
    <group rotation={[0.15, -0.3, 0]}>
      {/* High-Impact Polymer Housing */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.8, 0.8, 2.7]} />
        <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.35} />
      </mesh>
      {/* Clear Window */}
      <mesh position={[0, 0.41, 0]}>
        <boxGeometry args={[2.5, 0.03, 1.6]} />
        <meshStandardMaterial color="#e2e8f0" transparent opacity={0.6} />
      </mesh>
      {/* Left Reel Hub */}
      <mesh position={[-0.8, 0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.2, 32]} />
        <meshStandardMaterial color="#475569" metalness={0.6} />
      </mesh>
      {/* Right Reel Hub with Spooled Tape */}
      <mesh position={[0.8, 0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.75, 0.75, 0.22, 32]} />
        <meshStandardMaterial color="#e11d48" roughness={0.4} />
      </mesh>
      {/* Tape Leader Latch Pin */}
      <mesh position={[1.85, 0, 1.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.08, 0.08, 0.5, 16]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.9} />
      </mesh>
    </group>
  );
}

const modelMap = {
  hdd: <HDD />,
  ssd: <SSD />,
  usb: <USB />,
  'usb-flash': <USB />,
  card: <Card />,
  'memory-card': <Card />,
  optical: <Optical />,
  'optical-discs': <Optical />,
  tape: <Tape />,
  'magnetic-tape': <Tape />
};

export default function Scene3D({ type = 'hdd', accent = '#0284c7', label }) {
  const normalizedType = String(type).toLowerCase();
  const selectedModel = modelMap[normalizedType] || <HDD />;

  return (
    <div className="scene3d">
      <Canvas camera={{ position: [0, 2.4, 7], fov: 40 }}>
        {/* Clean Studio Lighting */}
        <ambientLight intensity={1.6} />
        <directionalLight position={[5, 7, 5]} intensity={2.8} />
        <pointLight position={[-4, 3, -2]} intensity={1.8} color={accent} />
        <pointLight position={[3, -2, 2]} intensity={0.8} color="#ffffff" />

        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.35}>
          {selectedModel}
        </Float>

        {/* Soft Ground Contact Shadow */}
        <ContactShadows 
          position={[0, -1.25, 0]} 
          opacity={0.35} 
          scale={7} 
          blur={2.4} 
          color="#0f172a"
        />

        <OrbitControls enablePan={false} minDistance={4.2} maxDistance={9.5} />

        {label && (
          <Text 
            position={[0, -1.75, 0]} 
            fontSize={0.28} 
            color="#334155" 
            anchorX="center"
            outlineWidth={0.015}
            outlineColor="#ffffff"
          >
            {label}
          </Text>
        )}
      </Canvas>
    </div>
  );
}
