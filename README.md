# Secondary Storage Atelier

A standalone beginner-friendly educational website for Secondary Storage Devices, designed in the same Computer-Atelier / Main-Memory learning style.

## Included
- Explore landing page
- Interactive 3D device viewer for HDD, SSD, USB flash drive, memory card, optical discs, and magnetic tape
- Device-specific labs with parts, functions, data flow, quick specifications, and generated educational infographic
- Comparison table
- Knowledge-check quiz
- Responsive dark/cyber atelier UI
- React Router routes under `/en/...`

## Routes
- `/en`
- `/en/hdd`
- `/en/ssd`
- `/en/usb-flash`
- `/en/memory-card`
- `/en/optical-discs`
- `/en/magnetic-tape`
- `/en/compare`
- `/en/quiz`

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to Vercel
Import this folder/repository into Vercel. The project uses Vite, so the default build command is `npm run build` and the output directory is `dist`.

## Notes
The current 3D objects are procedural Three.js/React Three Fiber models, so the site works without external GLB files. The `public/infographics` folder contains the six educational posters generated for the device chapters. Real GLB models can be added later under `public/models` and loaded with a GLTF/GLB loader.
