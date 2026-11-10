import React from 'react';
import { Award, Volume2, VolumeX, Menu, X } from 'lucide-react';
import { soundscape } from '../utils/audioAmbiance';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenProjectModal: () => void;
  onOpenPassportModal: () => void;
  currentVillageName: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenProjectModal,
  onOpenPassportModal,
  currentVillageName
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = React.useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);

  const toggleSound = () => {
    if (isPlayingAudio) {
      soundscape.stopSoundscape();
      setIsPlayingAudio(false);
    } else {
      const ok = soundscape.startSoundscape(currentVillageName);
      if (ok) setIsPlayingAudio(true);
    }
  };

  const navItems = [
    { id: 'overview', label: 'Hồ sơ làng nghề' },
    { id: 'steps', label: 'Quy trình từng bước' },
    { id: 'artisans', label: 'Nghệ nhân công bố' },
    { id: 'products', label: 'Sản phẩm tiêu biểu' },
    { id: 'passport', label: 'Thẻ di sản số' }
  ];

  const handleNavClick = (id: string) => {
    if (id === 'passport') {
      onOpenPassportModal();
    } else {
      onSelectTab(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200">
      {/* Top Banner announcing assignment author */}
      <div className="bg-[#292524] text-stone-300 px-4 py-1.5 text-xs border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 tracking-wide font-normal">
            <span className="text-amber-400 font-medium">Hồ Sơ Số Làng Nghề Truyền Thống</span>
            <span className="text-stone-500">·</span>
            <span>Mã đề tài: <strong className="text-white font-mono">F01</strong></span>
            <span className="text-stone-500">·</span>
            <span>Sinh viên: <strong className="text-white">Phạm Việt Anh</strong></span>
            <span className="text-stone-500">·</span>
            <span>MSSV: <strong className="text-white font-mono">PH59336</strong></span>
          </div>
          <div className="flex items-center gap-4 text-stone-400 text-[11px]">
            <span className="hidden sm:inline">Tên miền: <strong className="text-stone-200 font-mono">HoSoSoLangNghe.ai.studio</strong></span>
            <button
              onClick={onOpenProjectModal}
              className="text-amber-400 hover:text-amber-300 underline font-medium cursor-pointer transition-colors"
            >
              Chi tiết đề tài & Phiếu giao
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text wordmark */}
          <button 
            onClick={() => onSelectTab('overview')} 
            className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-amber-900 transition-colors text-left"
          >
            HoSoSoLangNghe
          </button>

          {/* Zone 2: 4–5 single-line clean nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-amber-900 relative ${
                  activeTab === item.id ? 'text-amber-900 font-semibold' : 'text-stone-600'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-800 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleSound}
              title={isPlayingAudio ? 'Tắt âm thanh xưởng nghề' : 'Bật âm thanh mô phỏng xưởng nghề'}
              className={`p-2 rounded border transition-colors ${
                isPlayingAudio 
                  ? 'bg-amber-100/80 border-amber-300 text-amber-900' 
                  : 'bg-stone-100 border-stone-200 text-stone-600 hover:text-stone-900'
              }`}
              aria-label="Âm thanh mô phỏng làng nghề"
            >
              {isPlayingAudio ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenPassportModal}
              className="px-4 py-2 text-xs font-medium text-white bg-amber-900 rounded hover:bg-amber-950 transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              Cấp thẻ di sản
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-600 hover:text-stone-900"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FBF9F5] px-4 py-3 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 text-sm rounded ${
                activeTab === item.id ? 'bg-amber-100/60 font-semibold text-amber-900' : 'text-stone-700'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-stone-200">
            <button
              onClick={onOpenProjectModal}
              className="w-full text-left px-3 py-2 text-xs text-amber-800 font-medium"
            >
              Đồ án F01: Phạm Việt Anh - PH59336
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
