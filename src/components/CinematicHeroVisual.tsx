import React, { useState, useEffect } from 'react';
import { Play, Pause, Maximize2, Disc, Eye, Zap, Shield, Volume2 } from 'lucide-react';

export const CinematicHeroVisual: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [seconds, setSeconds] = useState(14);
  const [frames, setFrames] = useState(28);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setFrames((f) => {
        if (f >= 23) {
          setSeconds((s) => (s >= 59 ? 0 : s + 1));
          return 0;
        }
        return f + 1;
      });
    }, 42); // ~24 fps
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl bg-[#0A1019] border border-[#1D3045] overflow-hidden shadow-[0_0_50px_rgba(0,140,255,0.15)] group">
      {/* Outer Glow Ring */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#008CFF]/20 via-[#19B5FF]/10 to-transparent blur-xl pointer-events-none" />

      {/* Viewfinder Display Area */}
      <div className="relative aspect-[16/10] bg-[#05070B] overflow-hidden select-none">
        {/* Background Atmosphere & Anamorphic Flare */}
        <div className="absolute inset-0 bg-radial from-[#008CFF]/15 via-[#05070B]/90 to-[#05070B]" />

        {/* Studio Grid / Stage Light Floor */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 radial-mask" />

        {/* Anamorphic Horizontal Blue Streak */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#19B5FF] to-transparent shadow-[0_0_20px_#008CFF] opacity-75" />

        {/* Central Geometric 3D Cinema Motif */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Rotating Reticle */}
            <div className={`absolute inset-0 rounded-full border border-dashed border-[#008CFF]/40 ${isPlaying ? 'animate-[spin_20s_linear_infinite]' : ''}`} />
            <div className="absolute inset-4 rounded-full border border-[#1D3045] opacity-60" />
            <div className="absolute inset-10 rounded-full border border-[#19B5FF]/30" />

            {/* Glowing EDC Monogram in Viewfinder */}
            <div className="flex flex-col items-center justify-center z-10">
              <div className="text-3xl font-black tracking-wider text-white font-heading chrome-gradient drop-shadow-[0_0_20px_rgba(0,140,255,0.8)]">
                EDC
              </div>
              <div className="text-[10px] tracking-[0.4em] text-[#19B5FF] font-bold uppercase mt-1">
                PRODUCTION
              </div>
            </div>

            {/* Focus brackets */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#19B5FF]" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#19B5FF]" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#19B5FF]" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#19B5FF]" />
          </div>
        </div>

        {/* HUD Overlay - Top Bar */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between text-[11px] font-mono text-[#A7B3C3] pointer-events-none">
          <div className="flex items-center gap-2">
            <span className={`inline-block w-2.5 h-2.5 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-slate-600'}`} />
            <span className="text-white font-bold">{isPlaying ? 'REC' : 'STBY'}</span>
            <span className="text-[#19B5FF] font-mono font-bold">
              00:14:{seconds < 10 ? `0${seconds}` : seconds}:{frames < 10 ? `0${frames}` : frames}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-[#0A1019] border border-[#1D3045] text-white">
              6K RAW
            </span>
            <span className="text-[#A7B3C3]">24.00 FPS</span>
            <span className="text-emerald-400 font-bold">BAT 98%</span>
          </div>
        </div>

        {/* HUD Overlay - Bottom Bar */}
        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-[11px] font-mono text-[#A7B3C3] pointer-events-none">
          <div className="flex items-center gap-3">
            <span>SHUTTER 180.0°</span>
            <span className="text-white font-bold">ISO 800</span>
            <span>WB 5600K</span>
            <span className="text-[#19B5FF]">f/1.8</span>
          </div>

          {/* Simulated Audio VU Meter */}
          <div className="flex items-center gap-1.5 bg-[#0A1019]/80 px-2 py-1 rounded border border-[#1D3045]">
            <Volume2 className="w-3 h-3 text-[#008CFF]" />
            <div className="flex gap-0.5 items-end h-3">
              <span className="w-1 bg-[#19B5FF] h-2 animate-pulse" />
              <span className="w-1 bg-[#19B5FF] h-3 animate-pulse delay-75" />
              <span className="w-1 bg-[#19B5FF] h-1.5 animate-pulse delay-150" />
              <span className="w-1 bg-[#008CFF] h-2.5 animate-pulse" />
              <span className="w-1 bg-emerald-400 h-2 animate-pulse" />
            </div>
            <span className="text-[9px] text-[#A7B3C3]">-6dB</span>
          </div>
        </div>

        {/* Center Crosshair */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
          <div className="w-8 h-px bg-white" />
          <div className="h-8 w-px bg-white absolute" />
        </div>

        {/* Viewfinder Control Trigger */}
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors focus:outline-none cursor-pointer"
          aria-label={isPlaying ? 'Pause viewfinder' : 'Start viewfinder'}
        >
          <div className="w-12 h-12 rounded-full bg-[#05070B]/80 backdrop-blur-md border border-[#1D3045] group-hover:border-[#008CFF] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
            {isPlaying ? <Pause className="w-5 h-5 text-[#19B5FF]" /> : <Play className="w-5 h-5 text-[#008CFF] ml-0.5" />}
          </div>
        </button>
      </div>

      {/* Meta Bar Underneath */}
      <div className="p-5 bg-[#0A1019] border-t border-[#1D3045] space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[#A7B3C3] font-bold">
              Agency Master Feed
            </div>
            <div className="text-sm font-bold text-white mt-0.5 flex items-center gap-2">
              <span>EDC Cinema & Growth Engine</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-[#19B5FF] bg-[#008CFF]/15 px-2.5 py-1 rounded border border-[#008CFF]/30 font-semibold">
              Broadcast Ready
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 rounded-lg bg-[#0D1521] border border-[#1D3045] flex items-center justify-between">
            <span className="text-[#A7B3C3]">Pillars</span>
            <span className="font-semibold text-white">Create • Market • Build</span>
          </div>
          <div className="p-2 rounded-lg bg-[#0D1521] border border-[#1D3045] flex items-center justify-between">
            <span className="text-[#A7B3C3]">Color Pipeline</span>
            <span className="font-semibold text-[#19B5FF]">ACES / DaVinci</span>
          </div>
        </div>
      </div>
    </div>
  );
};
