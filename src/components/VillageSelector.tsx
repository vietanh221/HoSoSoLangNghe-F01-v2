import React from 'react';
import { CraftVillage } from '../types';
import { MapPin, Calendar, Award } from 'lucide-react';

interface VillageSelectorProps {
  villages: CraftVillage[];
  selectedVillageId: string;
  onSelectVillage: (id: string) => void;
}

export const VillageSelector: React.FC<VillageSelectorProps> = ({
  villages,
  selectedVillageId,
  onSelectVillage
}) => {
  return (
    <div className="border-b border-stone-200 bg-stone-100/60 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="text-xs uppercase tracking-wider text-stone-500 font-medium">
          Hồ sơ số làng nghề lưu trữ
        </div>
        
        {/* Interactive Segmented Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {villages.map((village) => {
            const isSelected = village.id === selectedVillageId;
            return (
              <button
                key={village.id}
                onClick={() => onSelectVillage(village.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 border ${
                  isSelected
                    ? 'bg-amber-900 text-white border-amber-950 shadow-xs'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                }`}
              >
                <span>{village.name}</span>
                <span className={`ml-1.5 opacity-75 text-[11px]`}>({village.province})</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
