import React from 'react';
import { CraftVillage } from '../types';
import { MapPin, Compass, Landmark, Users, Sparkles, BookOpen, Clock, ArrowRight, ShieldCheck, Volume2 } from 'lucide-react';

interface VillageOverviewProps {
  village: CraftVillage;
  onNavigateToTab: (tab: string) => void;
}

export const VillageOverview: React.FC<VillageOverviewProps> = ({ village, onNavigateToTab }) => {
  return (
    <div className="space-y-12">
      {/* Editorial Marquee Hero with Curatorial Atmosphere */}
      <section className="relative overflow-hidden border border-stone-300 bg-white rounded-lg shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[460px]">
          {/* Left Text Narrative (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Unboxed Metadata Header */}
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-amber-900 font-semibold mb-3">
                <span>Di sản văn hóa phi vật thể</span>
                <span aria-hidden="true">·</span>
                <span>{village.province}</span>
                <span aria-hidden="true">·</span>
                <span>Khởi lập: {village.foundedYear.split('(')[0]}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight mb-4 text-balance">
                {village.name}
              </h1>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-serif italic mb-6">
                "{village.shortDescription}"
              </p>

              {/* Curatorial Key Attributes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200 text-xs text-stone-600">
                <div>
                  <span className="text-stone-400 block uppercase tracking-wider mb-1">Vị trí địa lý</span>
                  <div className="flex items-center gap-1.5 font-medium text-stone-900">
                    <MapPin className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                    <span>{village.location}, {village.province}</span>
                  </div>
                </div>

                <div>
                  <span className="text-stone-400 block uppercase tracking-wider mb-1">Tổ nghề tôn vinh</span>
                  <div className="flex items-center gap-1.5 font-medium text-stone-900">
                    <Landmark className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                    <span className="truncate">{village.patriarch}</span>
                  </div>
                </div>

                <div>
                  <span className="text-stone-400 block uppercase tracking-wider mb-1">Công nhận di sản</span>
                  <div className="flex items-center gap-1.5 font-medium text-stone-900">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>{village.heritageRecognition}</span>
                  </div>
                </div>

                <div>
                  <span className="text-stone-400 block uppercase tracking-wider mb-1">Tọa độ không gian</span>
                  <div className="flex items-center gap-1.5 font-mono text-stone-800">
                    <Compass className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                    <span>{village.coordinates.lat}° B · {village.coordinates.lng}° Đ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Jump Action CTAs */}
            <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigateToTab('steps')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-900 hover:bg-amber-950 text-white text-xs font-semibold rounded transition-colors whitespace-nowrap shadow-xs"
              >
                <span>Xem quy trình {village.steps.length} bước</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigateToTab('artisans')}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium rounded border border-stone-300 transition-colors whitespace-nowrap"
              >
                <span>Danh bạ {village.activeArtisansCount} nghệ nhân</span>
              </button>
            </div>
          </div>

          {/* Right Visual Image (5 Cols) */}
          <div className="lg:col-span-5 relative bg-stone-100 min-h-[320px] lg:min-h-full">
            <img
              src={village.heroImage}
              alt={village.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover lg:absolute lg:inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
              <div className="font-serif italic text-stone-200">Không gian xưởng nghề truyền thống {village.name}</div>
              <div className="text-[11px] text-stone-300 mt-0.5">Lưu trữ ảnh di sản quốc gia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Numerical Index Ribbon (4 Tabular KPI Cards) */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 bg-white border border-stone-200 rounded-lg">
          <div className="text-xs uppercase tracking-wider text-stone-500 mb-1">Niên đại hình thành</div>
          <div className="text-2xl font-serif font-bold text-stone-900 tabular-nums">
            {village.id === 'bat-trang' ? '700+' : village.id === 'van-phuc' ? '1.000+' : village.id === 'dong-ho' ? '400+' : '300+'} năm
          </div>
          <div className="text-xs text-stone-500 mt-1">Từ thời triều đại tiền nhân</div>
        </div>

        <div className="p-5 bg-white border border-stone-200 rounded-lg">
          <div className="text-xs uppercase tracking-wider text-stone-500 mb-1">Quy mô hộ làm nghề</div>
          <div className="text-2xl font-serif font-bold text-stone-900 tabular-nums">
            {village.activeHouseholds.toLocaleString('vi-VN')} hộ
          </div>
          <div className="text-xs text-stone-500 mt-1">Gia đình duy trì xưởng thủ công</div>
        </div>

        <div className="p-5 bg-white border border-stone-200 rounded-lg">
          <div className="text-xs uppercase tracking-wider text-stone-500 mb-1">Nghệ nhân tiêu biểu</div>
          <div className="text-2xl font-serif font-bold text-stone-900 tabular-nums">
            {village.activeArtisansCount} nghệ nhân
          </div>
          <div className="text-xs text-stone-500 mt-1">Đã cấp chứng nhận nhà nước</div>
        </div>

        <div className="p-5 bg-white border border-stone-200 rounded-lg">
          <div className="text-xs uppercase tracking-wider text-stone-500 mb-1">Công đoạn quy chuẩn</div>
          <div className="text-2xl font-serif font-bold text-stone-900 tabular-nums">
            {village.steps.length} công đoạn
          </div>
          <div className="text-xs text-stone-500 mt-1">Nghiêm ngặt từ nguyên liệu đến lò</div>
        </div>
      </section>

      {/* Main Archival Narrative Section: Two-Column Asymmetric Reading Canvas */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Body Column (8 Cols) */}
        <div className="lg:col-span-8 bg-white border border-stone-200 rounded-lg p-6 sm:p-10 space-y-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">
              Lược sử phát triển
            </div>
            <h2 className="text-2xl font-serif text-stone-900 mb-4">
              Hành trình bồi đắp và gìn giữ tinh hoa qua các thời kỳ lịch sử
            </h2>
            <div className="prose prose-stone text-stone-700 leading-relaxed space-y-4 text-base font-normal">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-amber-900">
                {village.fullHistory}
              </p>
            </div>
          </div>

          {/* Uniqueness Pull Quote Box */}
          <div className="p-6 bg-stone-50 border-y border-stone-300 my-6">
            <div className="text-xs uppercase tracking-wider text-stone-500 font-medium mb-1">
              Đặc trưng cốt lõi độc bản
            </div>
            <p className="text-base sm:text-lg font-serif italic text-stone-900 leading-snug">
              "{village.uniqueness}"
            </p>
          </div>

          {/* Soundscape Narrative */}
          <div className="border border-stone-200 rounded p-4 bg-[#FAF7F2] flex items-start gap-4">
            <div className="p-2.5 bg-amber-900 text-white rounded shrink-0">
              <Volume2 className="w-5 h-5" />
            </div>
            <div className="text-xs text-stone-700">
              <div className="font-semibold text-stone-900 text-sm mb-1">Âm sắc xưởng nghề truyền thống</div>
              <p className="leading-relaxed text-stone-600 mb-2">{village.soundscapeDescription}</p>
              <div className="text-[11px] text-amber-800 italic">
                * Bấm nút loa trên thanh điều hướng để kích hoạt âm thanh mô phỏng xưởng nghề bằng công nghệ Web Audio.
              </div>
            </div>
          </div>
        </div>

        {/* Marginal Archival Info Column (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Patriarch & Sacred Heritage Card */}
          <div className="bg-white border border-stone-200 rounded-lg p-6">
            <div className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-3">
              Tổ phụ & Tín ngưỡng nghề
            </div>
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
              Lễ giỗ Tổ truyền đời
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              Hàng năm vào dịp đầu xuân, cộng đồng dân cư làng nghề tổ chức nghi lễ rước Tổ nghề trang nghiêm, dâng hương các bậc tiền nhân có công truyền dạy kỹ nghệ cho con cháu.
            </p>
            <div className="p-3 bg-stone-50 border border-stone-200 rounded text-xs text-stone-700 space-y-1.5">
              <div><strong>Bậc tiền hiền:</strong> {village.patriarch}</div>
              <div><strong>Thời điểm lễ hội:</strong> Rằm tháng Hai âm lịch hàng năm</div>
              <div><strong>Di tích tâm linh:</strong> Đình làng & Nhà thờ tổ nghề</div>
            </div>
          </div>

          {/* Raw Materials Origin */}
          <div className="bg-white border border-stone-200 rounded-lg p-6">
            <div className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-3">
              Địa lý & Nguồn thổ nhưỡng
            </div>
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
              Nguyên liệu thiên tạo
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-3">
              Thổ nhưỡng tự nhiên dọc lưu vực châu thổ sông Hồng mang lại nguồn tài nguyên vô giá cho kỹ nghệ thủ công Việt Nam.
            </p>
            <div className="text-xs text-stone-700 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-800" />
                <span>Nguồn đất sét trắng tinh túy, cao lanh chịu nhiệt cao</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-800" />
                <span>Nguồn nước phù sa sông ngọt lành giúp tôi luyện cốt gốm</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-800" />
                <span>Tro trấu nếp cái hoa vàng tạo nên lớp men ngọc độc bản</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
