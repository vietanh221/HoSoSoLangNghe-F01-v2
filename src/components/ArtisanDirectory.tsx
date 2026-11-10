import React, { useState } from 'react';
import { Artisan } from '../types';
import { 
  ShieldCheck, 
  Award, 
  MapPin, 
  Phone, 
  Search, 
  UserCheck, 
  Sparkles, 
  Calendar,
  ExternalLink,
  Filter,
  CheckCircle2
} from 'lucide-react';

interface ArtisanDirectoryProps {
  artisans: Artisan[];
  currentVillageId: string;
  onOpenContributeModal: () => void;
}

export const ArtisanDirectory: React.FC<ArtisanDirectoryProps> = ({
  artisans,
  currentVillageId,
  onOpenContributeModal
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTitle, setSelectedTitle] = useState<string>('all');
  const [selectedArtisanForModal, setSelectedArtisanForModal] = useState<Artisan | null>(null);

  // Filter artisans
  const filteredArtisans = artisans.filter((artisan) => {
    // Village filter (show current village or all)
    const matchesVillage = artisan.villageId === currentVillageId;
    
    // Search query
    const matchesSearch = 
      artisan.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artisan.craftField.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artisan.masterpieces.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));

    // Title filter
    const matchesTitle = selectedTitle === 'all' || artisan.title === selectedTitle;

    return matchesVillage && matchesSearch && matchesTitle;
  });

  return (
    <div className="space-y-8">
      {/* Header with Legal Consent Declaration */}
      <div className="border-b border-stone-200 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-800 font-semibold mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Danh mục tuân thủ Nghị định bảo vệ dữ liệu cá nhân & Di sản</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Danh sách nghệ nhân đã đồng ý công bố thông tin
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Toàn bộ thông tin cá nhân, tiểu sử, số điện thoại xưởng và hình ảnh tác phẩm dưới đây đã được các nghệ nhân và đại diện gia đình ký văn bản đồng thuận công bố chính thức phục vụ mục đích nghiên cứu, học thuật và bảo tồn văn hóa.
          </p>
        </div>

        <button
          onClick={onOpenContributeModal}
          className="px-4 py-2.5 bg-stone-900 text-white text-xs font-semibold rounded hover:bg-stone-800 transition-colors whitespace-nowrap shadow-xs"
        >
          Đăng ký xác thực hồ sơ mới
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-stone-200 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm theo tên nghệ nhân, tác phẩm, kỹ nghệ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-900 focus:border-amber-900"
          />
        </div>

        {/* Title Filter Tabs (Functional segmented buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {[
            { id: 'all', label: 'Tất cả nghệ nhân' },
            { id: 'Nghệ nhân Nhân dân', label: 'Nghệ nhân Nhân dân' },
            { id: 'Nghệ nhân Ưu tú', label: 'Nghệ nhân Ưu tú' },
            { id: 'Nghệ nhân Bàn tay vàng', label: 'Bàn tay vàng' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTitle(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap border ${
                selectedTitle === tab.id
                  ? 'bg-amber-900 text-white border-amber-900'
                  : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Artisans Grid */}
      {filteredArtisans.length === 0 ? (
        <div className="text-center py-12 bg-white border border-stone-200 rounded-lg">
          <p className="text-sm text-stone-500 font-serif">
            Không tìm thấy nghệ nhân phù hợp với tiêu chí tìm kiếm trong làng nghề này.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtisans.map((artisan) => (
            <div
              key={artisan.id}
              className="bg-white border border-stone-300 rounded-lg overflow-hidden flex flex-col justify-between shadow-xs hover:border-amber-900/60 transition-all"
            >
              <div>
                {/* Visual Avatar Card Header */}
                <div className="h-44 relative bg-stone-100 overflow-hidden">
                  <img
                    src={artisan.avatarUrl || '/src/assets/images/craft_bat_trang_pottery_1794324392056.jpg'}
                    alt={artisan.fullName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent" />
                  
                  {/* Verified Consent Badge at Top */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded border border-emerald-500/40 text-[11px] font-semibold text-emerald-800 flex items-center gap-1 shadow-xs">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Đã đồng ý công bố thông tin</span>
                  </div>

                  {/* Name and Title at Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-xs text-amber-300 font-medium tracking-wide">
                      {artisan.title}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white leading-snug">
                      {artisan.fullName}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-4 text-xs text-stone-700">
                  {/* Unboxed Metadata Strip */}
                  <div className="flex items-center gap-2 text-[11px] text-stone-500 pb-3 border-b border-stone-200">
                    <span>Sinh năm: <strong className="text-stone-800 font-mono">{artisan.birthYear}</strong></span>
                    <span aria-hidden="true">·</span>
                    <span>Kinh nghiệm: <strong className="text-stone-800 font-mono">{artisan.yearsOfExperience} năm</strong></span>
                    <span aria-hidden="true">·</span>
                    <span className="text-stone-400 font-mono">{artisan.consentCode}</span>
                  </div>

                  <div>
                    <span className="text-stone-400 block uppercase tracking-wider mb-1">Chuyên môn kỹ nghệ</span>
                    <p className="font-semibold text-stone-900 text-xs">{artisan.craftField}</p>
                  </div>

                  <p className="line-clamp-3 text-stone-600 leading-relaxed font-serif italic">
                    "{artisan.quote}"
                  </p>

                  <div>
                    <span className="text-stone-400 block uppercase tracking-wider mb-1.5">Tác phẩm tiêu biểu</span>
                    <ul className="space-y-1 text-stone-800">
                      {artisan.masterpieces.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 truncate">
                          <span className="text-amber-800">•</span>
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3.5 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-stone-600">
                  <Phone className="w-3.5 h-3.5 text-stone-400" />
                  <span className="font-mono">{artisan.contactPhone}</span>
                </div>

                <button
                  onClick={() => setSelectedArtisanForModal(artisan)}
                  className="font-semibold text-amber-900 hover:text-amber-950 underline cursor-pointer"
                >
                  Xem hồ sơ đầy đủ
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detailed Artisan Modal */}
      {selectedArtisanForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-stone-300 rounded-lg shadow-2xl p-6 sm:p-8 text-stone-800">
            <button
              onClick={() => setSelectedArtisanForModal(null)}
              className="absolute top-4 right-4 p-1 text-stone-500 hover:text-stone-900"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-800 font-semibold mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Hồ sơ công bố hợp pháp · Số hiệu {selectedArtisanForModal.consentCode}</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
              {selectedArtisanForModal.title} {selectedArtisanForModal.fullName}
            </h3>

            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 my-2">
              <span>Năm sinh: {selectedArtisanForModal.birthYear}</span>
              <span>·</span>
              <span>Kinh nghiệm: {selectedArtisanForModal.yearsOfExperience} năm làm nghề</span>
              <span>·</span>
              <span>Ngày xác nhận đồng thuận: {selectedArtisanForModal.consentDate}</span>
            </div>

            <div className="mt-4 space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-200 pt-4">
              <div>
                <strong className="block text-stone-900 mb-1">Tiểu sử & Cống hiến di sản:</strong>
                <p>{selectedArtisanForModal.bio}</p>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded">
                <span className="font-semibold text-stone-900 block mb-1">Tâm niệm giữ nghề:</span>
                <p className="font-serif italic text-stone-800">"{selectedArtisanForModal.quote}"</p>
              </div>

              <div>
                <strong className="block text-stone-900 mb-1">Các tác phẩm để đời:</strong>
                <ul className="list-disc list-inside space-y-1">
                  {selectedArtisanForModal.masterpieces.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>

              <div>
                <strong className="block text-stone-900 mb-1">Danh hiệu & Khen thưởng:</strong>
                <ul className="list-disc list-inside space-y-1">
                  {selectedArtisanForModal.awards.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-amber-50/50 border border-amber-200 rounded text-xs space-y-1">
                <div><strong>Địa chỉ xưởng:</strong> {selectedArtisanForModal.workshopAddress}</div>
                <div><strong>Số điện thoại:</strong> {selectedArtisanForModal.contactPhone}</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setSelectedArtisanForModal(null)}
                className="px-4 py-2 bg-stone-900 text-white rounded text-xs font-semibold hover:bg-stone-800"
              >
                Đóng hồ sơ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
