import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { Artisan } from '../types';

interface ContributeArtisanModalProps {
  isOpen: boolean;
  onClose: () => void;
  villageId: string;
  villageName: string;
  onAddArtisan: (artisan: Artisan) => void;
}

export const ContributeArtisanModal: React.FC<ContributeArtisanModalProps> = ({
  isOpen,
  onClose,
  villageId,
  villageName,
  onAddArtisan
}) => {
  const [fullName, setFullName] = useState('');
  const [title, setTitle] = useState<'Nghệ nhân Nhân dân' | 'Nghệ nhân Ưu tú' | 'Nghệ nhân Bàn tay vàng' | 'Nghệ nhân Làng nghề'>('Nghệ nhân Ưu tú');
  const [birthYear, setBirthYear] = useState('1965');
  const [craftField, setCraftField] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('40');
  const [workshopAddress, setWorkshopAddress] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [masterpiece, setMasterpiece] = useState('');
  const [quote, setQuote] = useState('');
  const [bio, setBio] = useState('');
  
  // Mandatory Consent checkbox
  const [consentAgreed, setConsentAgreed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentAgreed) {
      setErrorMessage('Bắt buộc phải xác nhận nghệ nhân đã đồng ý công bố thông tin trước khi lưu hồ sơ.');
      return;
    }
    if (!fullName.trim() || !craftField.trim()) {
      setErrorMessage('Vui lòng điền họ tên nghệ nhân và lĩnh vực kỹ nghệ.');
      return;
    }

    const consentNum = Math.floor(10 + Math.random() * 90);
    const newArtisan: Artisan = {
      id: `art-custom-${Date.now()}`,
      villageId,
      fullName: fullName.trim(),
      title,
      birthYear: parseInt(birthYear) || 1965,
      craftField: craftField.trim(),
      yearsOfExperience: parseInt(yearsOfExperience) || 30,
      consentVerified: true,
      consentCode: `VB-CBTT/2026-NN-${consentNum}`,
      consentDate: new Date().toLocaleDateString('vi-VN'),
      bio: bio.trim() || `Nghệ nhân tâm huyết gìn giữ nghề truyền thống tại ${villageName}.`,
      workshopAddress: workshopAddress.trim() || `Xưởng thủ công truyền thống, ${villageName}`,
      contactPhone: contactPhone.trim() || '0912 000 999',
      masterpieces: masterpiece.trim() ? [masterpiece.trim()] : ['Tác phẩm thủ công tiêu biểu'],
      awards: ['Chứng nhận Nghệ nhân Làng nghề truyền thống'],
      quote: quote.trim() || 'Giữ lửa nghề là giữ hồn cốt của quê hương dân tộc.',
      avatarUrl: '/src/assets/images/craft_bat_trang_pottery_1794324392056.jpg'
    };

    onAddArtisan(newArtisan);
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white border border-stone-300 rounded-lg shadow-2xl p-6 sm:p-8 text-stone-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-stone-500 hover:text-stone-900"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-xs uppercase tracking-widest text-emerald-800 font-semibold mb-1 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Biểu mẫu đăng ký hồ sơ chính thức</span>
        </div>

        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">
          Đăng ký thông tin Nghệ nhân ({villageName})
        </h3>
        <p className="text-xs text-stone-600 mb-6">
          Hồ sơ sau khi khai báo sẽ được cấp mã số xác thực văn bản chấp thuận công bố theo đúng quy chuẩn đề tài F01.
        </p>

        {errorMessage && (
          <div className="p-3 bg-rose-50 border border-rose-200 rounded text-xs text-rose-800 flex items-center gap-2 mb-4">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-800 flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Đã thêm thành công hồ sơ nghệ nhân với xác nhận công bố hợp lệ!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Họ và tên nghệ nhân <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ví dụ: Nguyễn Văn An"
                className="w-full px-3 py-2 border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-900"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Danh hiệu vinh danh
              </label>
              <select
                value={title}
                onChange={(e) => setTitle(e.target.value as any)}
                className="w-full px-3 py-2 border border-stone-300 rounded bg-white focus:outline-none focus:ring-1 focus:ring-amber-900"
              >
                <option value="Nghệ nhân Nhân dân">Nghệ nhân Nhân dân</option>
                <option value="Nghệ nhân Ưu tú">Nghệ nhân Ưu tú</option>
                <option value="Nghệ nhân Bàn tay vàng">Nghệ nhân Bàn tay vàng</option>
                <option value="Nghệ nhân Làng nghề">Nghệ nhân Làng nghề</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Lĩnh vực chuyên môn kỹ nghệ <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                required
                value={craftField}
                onChange={(e) => setCraftField(e.target.value)}
                placeholder="Ví dụ: Men rạn cổ / Dệt Lụa Vân / Khắc mộc bản"
                className="w-full px-3 py-2 border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-900"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Số năm tuổi nghề
              </label>
              <input
                type="number"
                value={yearsOfExperience}
                onChange={(e) => setYearsOfExperience(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Địa chỉ xưởng nghề
              </label>
              <input
                type="text"
                value={workshopAddress}
                onChange={(e) => setWorkshopAddress(e.target.value)}
                placeholder="Ví dụ: Xóm 3, Thôn Bát Tràng"
                className="w-full px-3 py-2 border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-900"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Số điện thoại liên hệ xưởng
              </label>
              <input
                type="text"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="Ví dụ: 0912 345 678"
                className="w-full px-3 py-2 border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-stone-700 font-medium mb-1">
              Tác phẩm để đời tiêu biểu
            </label>
            <input
              type="text"
              value={masterpiece}
              onChange={(e) => setMasterpiece(e.target.value)}
              placeholder="Tên tác phẩm xuất sắc nhất..."
              className="w-full px-3 py-2 border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-900"
            />
          </div>

          <div>
            <label className="block text-stone-700 font-medium mb-1">
              Tiểu sử tóm tắt
            </label>
            <textarea
              rows={2}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Quá trình gìn giữ và đóng góp cho di sản làng nghề..."
              className="w-full px-3 py-2 border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-900"
            />
          </div>

          {/* CRITICAL LEGAL CONSENT CHECKBOX */}
          <div className="p-4 bg-emerald-50/80 border border-emerald-300/80 rounded-lg">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consentAgreed}
                onChange={(e) => {
                  setConsentAgreed(e.target.checked);
                  if (e.target.checked) setErrorMessage('');
                }}
                className="mt-1 w-4 h-4 text-emerald-700 rounded border-stone-300 focus:ring-emerald-600"
              />
              <span className="text-xs text-stone-800 leading-relaxed">
                <strong>Cam kết xác thực công bố thông tin (Bắt buộc):</strong> Tôi xác nhận rằng Nghệ nhân (hoặc người đại diện hợp pháp) đã đồng ý công bố các thông tin cá nhân, hình ảnh và tác phẩm lên hệ thống Hồ Sơ Số Làng Nghề Truyền Thống phục vụ mục đích văn hóa, bảo tồn và giáo dục.
              </span>
            </label>
          </div>

          <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-stone-300 rounded text-xs text-stone-600 hover:bg-stone-50"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-amber-900 text-white rounded text-xs font-semibold hover:bg-amber-950 transition-colors shadow-xs"
            >
              Xác nhận & Thêm hồ sơ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
