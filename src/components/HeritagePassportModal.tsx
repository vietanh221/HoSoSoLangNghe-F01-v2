import React, { useState, useRef } from 'react';
import { X, Award, Download, Printer, ShieldCheck, CheckCircle, Sparkles } from 'lucide-react';

interface HeritagePassportModalProps {
  isOpen: boolean;
  onClose: () => void;
  villageName: string;
}

export const HeritagePassportModal: React.FC<HeritagePassportModalProps> = ({
  isOpen,
  onClose,
  villageName
}) => {
  const [userName, setUserName] = useState<string>('Phạm Việt Anh');
  const [issuedCode, setIssuedCode] = useState<string>(
    () => `HSSLN-F01-${Math.floor(100000 + Math.random() * 900000)}`
  );
  const certRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-stone-300 rounded-lg shadow-2xl p-6 sm:p-8 text-stone-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-stone-500 hover:text-stone-900 transition-colors"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-amber-900 font-semibold mb-1">
            <Award className="w-4 h-4 text-amber-800" />
            <span>Hệ thống Số hóa Di sản Văn hóa Việt Nam</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            Cấp Thẻ Di Sản Số / Hộ Chiếu Nghề
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Chứng nhận đã hoàn thành tra cứu và tiếp cận trọn vẹn quy trình di sản làng nghề truyền thống
          </p>
        </div>

        {/* Name input */}
        <div className="mb-6 bg-stone-50 border border-stone-200 rounded p-4 flex flex-col sm:flex-row items-center gap-3">
          <label className="text-xs font-semibold text-stone-700 whitespace-nowrap">
            Họ và tên người nhận thẻ:
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Nhập họ và tên..."
            className="flex-1 px-3 py-1.5 text-xs border border-stone-300 rounded bg-white focus:outline-none focus:ring-1 focus:ring-amber-900 font-medium"
          />
        </div>

        {/* Official Certificate Visual Canvas */}
        <div
          ref={certRef}
          className="relative border-4 border-double border-amber-900/50 bg-[#FDFBF7] p-8 rounded-lg shadow-sm text-center overflow-hidden my-4"
        >
          {/* Subtle background ornament */}
          <div className="absolute inset-0 border border-stone-300/40 pointer-events-none m-2" />
          
          <div className="text-[11px] uppercase tracking-widest text-stone-500 font-medium mb-1">
            CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
          </div>
          <div className="text-[10px] uppercase tracking-wider text-stone-400 mb-4">
            Độc lập - Tự do - Hạnh phúc
          </div>

          <div className="w-12 h-0.5 bg-amber-900/60 mx-auto mb-4" />

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-950 uppercase tracking-wide mb-1">
            THẺ DI SẢN LÀNG NGHỀ TRUYỀN THỐNG
          </h3>
          <div className="text-xs font-serif italic text-stone-600 mb-6">
            Digital Craft Heritage Passport
          </div>

          <div className="text-xs text-stone-600 mb-1">Chứng nhận đồng hành cùng di sản:</div>
          <div className="text-2xl font-serif font-bold text-stone-900 underline decoration-amber-800/40 decoration-2 underline-offset-4 mb-3">
            {userName || 'Phạm Việt Anh'}
          </div>

          <p className="text-xs text-stone-700 max-w-md mx-auto leading-relaxed mb-6 font-serif">
            Đã hoàn thành xuất sắc lộ trình nghiên cứu, khảo cứu toàn diện hồ sơ lịch sử, quy trình chế tác thủ công {villageName} và tiếp cận hệ thống danh bạ nghệ nhân được bảo tồn hợp pháp.
          </p>

          <div className="border-t border-stone-200 pt-4 flex flex-wrap items-center justify-between text-left text-[11px] text-stone-600">
            <div>
              <div>Mã số xác thực: <strong className="font-mono text-stone-900">{issuedCode}</strong></div>
              <div>Thời gian cấp: <strong className="font-mono text-stone-900">{new Date().toLocaleDateString('vi-VN')}</strong></div>
              <div>Cơ sở dữ liệu: <strong className="text-stone-900">HoSoSoLangNghe.ai.studio</strong></div>
            </div>

            <div className="text-right mt-3 sm:mt-0">
              <div className="text-[10px] uppercase tracking-wider text-amber-950 font-semibold flex items-center justify-end gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>XÁC THỰC BẢN QUYỀN SỐ</span>
              </div>
              <div className="text-[10px] text-stone-500 mt-0.5">
                Đề tài F01 · SV: Phạm Việt Anh (PH59336)
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-stone-200">
          <div className="text-xs text-stone-500">
            * Bạn có thể in ấn hoặc lưu thẻ làm minh chứng học tập di sản.
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 border border-stone-300 rounded text-xs font-semibold text-stone-700 hover:bg-stone-100 flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In thẻ / Lưu PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-stone-900 text-white rounded text-xs font-semibold hover:bg-stone-800 transition-colors"
            >
              Xong
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
