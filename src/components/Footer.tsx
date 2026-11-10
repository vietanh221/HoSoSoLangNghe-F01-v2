import React from 'react';
import { ShieldCheck, FileText, Heart } from 'lucide-react';

interface FooterProps {
  onOpenProjectModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProjectModal }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-stone-800">
          {/* Col 1: Wordmark & Purpose */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-xl font-serif font-bold text-white tracking-wide">
              HoSoSoLangNghe
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Hệ thống cơ sở dữ liệu số bảo tồn làng nghề truyền thống Việt Nam: Lịch sử di sản, quy trình sản xuất từng bước, danh bạ nghệ nhân đã xác nhận công bố và bộ sưu tập tác phẩm tinh hoa.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400/90 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Dữ liệu tuân thủ quy chuẩn bảo mật & sự đồng thuận nghệ nhân</span>
            </div>
          </div>

          {/* Col 2: Project Specifications */}
          <div className="md:col-span-4 space-y-2 text-xs text-stone-400">
            <span className="text-stone-200 block uppercase tracking-wider font-semibold mb-2">
              Thông tin đề tài nghiên cứu
            </span>
            <div>Tên đề tài: <strong className="text-stone-200 font-medium">Hồ sơ số làng nghề truyền thống</strong></div>
            <div>Mã số đề tài: <strong className="text-amber-400 font-mono font-medium">F01</strong></div>
            <div>Sinh viên thực hiện: <strong className="text-stone-100 font-medium">Phạm Việt Anh</strong></div>
            <div>Mã số sinh viên: <strong className="text-amber-400 font-mono font-medium">PH59336</strong></div>
            <div>Tên miền hệ thống: <strong className="text-stone-200 font-mono">HoSoSoLangNghe.ai.studio</strong></div>
          </div>

          {/* Col 3: Actions & Verification */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-stone-200 block uppercase tracking-wider font-semibold text-xs mb-2">
              Minh chứng & Tiêu chí
            </span>
            <button
              onClick={onOpenProjectModal}
              className="w-full text-left p-3 rounded bg-stone-800/80 hover:bg-stone-800 border border-stone-700/60 text-xs text-stone-200 transition-colors flex items-center justify-between"
            >
              <span>Xem phiếu giao đề tài F01</span>
              <FileText className="w-4 h-4 text-amber-400" />
            </button>
            <p className="text-[11px] text-stone-500 leading-normal">
              Được bảo lưu theo hồ sơ phân công bài tập lớn hệ thống thông tin di sản.
            </p>
          </div>
        </div>

        {/* Quiet Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} HoSoSoLangNghe · Tác giả: Phạm Việt Anh (PH59336) · Đề tài F01
          </div>
          <div className="flex items-center gap-1">
            <span>Bảo tồn tinh hoa làng nghề truyền thống Việt Nam</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
