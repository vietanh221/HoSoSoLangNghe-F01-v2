import React from 'react';
import { X, CheckCircle2, ShieldCheck, Award, FileText, UserCheck, ExternalLink } from 'lucide-react';

interface ProjectDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDossierModal: React.FC<ProjectDossierModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FDFBF7] border border-stone-300 rounded-lg shadow-2xl p-6 sm:p-8 text-stone-800"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 text-stone-500 hover:text-stone-800 transition-colors"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-stone-200 pb-4 mb-6">
          <div className="text-xs uppercase tracking-widest text-amber-900 font-medium mb-1">
            Đề tài F01 · Đồ án Hệ thống thông tin Di sản
          </div>
          <h2 className="text-2xl font-serif text-stone-900">
            Hồ sơ Đồ án: Hồ Sơ Số Làng Nghề Truyền Thống
          </h2>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-600 mt-2">
            <span>Sinh viên thực hiện: <strong className="text-stone-900 font-semibold">Phạm Việt Anh</strong></span>
            <span>·</span>
            <span>MSSV: <strong className="text-stone-900 font-mono">PH59336</strong></span>
            <span>·</span>
            <span>Mã đề tài: <strong className="text-stone-900 font-mono">F01</strong></span>
            <span>·</span>
            <span>Tên miền: <strong className="text-stone-900 font-mono">HoSoSoLangNghe.ai.studio</strong></span>
          </div>
        </div>

        {/* Content body */}
        <div className="space-y-6 text-sm text-stone-700">
          {/* Proof of Assignment Images */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-800" />
              Hình ảnh giao nhiệm vụ & Đăng ký đề tài F01
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-stone-200 bg-white rounded p-3">
                <div className="text-xs text-stone-500 mb-2 font-medium">Phiếu phân công nhiệm vụ đề tài F01</div>
                <img 
                  src="/public/assets/aistudio/image_8cf91f56.png" 
                  alt="Nhiệm vụ đề tài F01" 
                  className="w-full h-auto rounded border border-stone-100 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="border border-stone-200 bg-white rounded p-3">
                <div className="text-xs text-stone-500 mb-2 font-medium">Bản danh sách sinh viên đăng ký: Phạm Việt Anh (PH59336)</div>
                <img 
                  src="/public/assets/aistudio/image_2cd6565d.png" 
                  alt="Đăng ký Phạm Việt Anh PH59336" 
                  className="w-full h-auto rounded border border-stone-100 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Checklist of met requirements */}
          <div className="bg-stone-100/70 border border-stone-200 rounded p-4">
            <h3 className="text-sm font-semibold text-stone-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              Báo cáo nghiệm thu các tiêu chí đề tài F01
            </h3>
            <div className="space-y-2 text-xs leading-relaxed text-stone-700">
              <div className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold mt-0.5">✓</span>
                <div>
                  <strong>Trang hồ sơ làng nghề đầy đủ:</strong> Khởi nguồn lịch sử, ông tổ nghề, vị trí địa lý, tọa độ bản đồ, quy mô hộ sản xuất, đặc trưng cốt lõi và di sản quốc gia.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold mt-0.5">✓</span>
                <div>
                  <strong>Quy trình sản xuất từng bước (Step-by-step):</strong> Chi tiết từng công đoạn kỹ thuật từ chọn đất, tạo hình, phơi sấy, vẽ men, nung luyện cùng thời gian thực hiện, dụng cụ và mẹo nghề gia truyền.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold mt-0.5">✓</span>
                <div>
                  <strong>Danh sách nghệ nhân đã đồng ý công bố thông tin:</strong> Tuyên bố minh bạch pháp lý, cấp số hiệu văn bản chấp thuận (`VB-CBTT/2024-NN-xx`), tiểu sử, danh hiệu Nhà nước, số năm kinh nghiệm và tác phẩm để đời.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold mt-0.5">✓</span>
                <div>
                  <strong>Sản phẩm tiêu biểu:</strong> Danh mục hiện vật tinh hoa kèm thông số kích thước, kỹ thuật chế tác, niên đại và ý nghĩa biểu trưng văn hóa.
                </div>
              </div>
            </div>
          </div>

          {/* Information summary */}
          <div className="border-t border-stone-200 pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-800" />
              <span>Hệ thống tuân thủ quy chuẩn bảo tồn di sản số quốc gia</span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-stone-900 text-white rounded text-xs font-medium hover:bg-stone-800 transition-colors"
            >
              Tiếp tục khám phá hồ sơ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
