import React, { useState } from 'react';
import { Layers, Video, Share2, Palette, Code, TrendingUp, Cpu } from 'lucide-react';

interface ProjectImageProps {
  src: string;
  alt: string;
  category: string;
  className?: string;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  'Video Production': Video,
  'Social Media': Share2,
  'Branding & Design': Palette,
  'Web Development': Code,
  'Digital Marketing': TrendingUp,
  'AI & Automation': Cpu,
};

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  category,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const IconComponent = iconMap[category] || Layers;

  if (hasError) {
    return (
      <div className={`w-full h-full bg-gradient-to-br from-[#0D1521] via-[#0A1019] to-[#05070B] flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-25" />
        <div className="w-12 h-12 rounded-xl bg-[#008CFF]/15 border border-[#008CFF]/40 flex items-center justify-center text-[#19B5FF] mb-3 relative z-10 shadow-lg">
          <IconComponent className="w-6 h-6" />
        </div>
        <div className="text-xs font-bold uppercase tracking-wider text-white relative z-10">
          {category}
        </div>
        <div className="text-[11px] text-[#A7B3C3] mt-1 relative z-10 line-clamp-1 max-w-[200px]">
          {alt}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
};
