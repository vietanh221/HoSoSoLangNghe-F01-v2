import React, { useState } from 'react';
import { ProductionStep } from '../types';
import { 
  CheckCircle2, 
  Clock, 
  Wrench, 
  Sparkles, 
  AlertTriangle, 
  ChevronRight, 
  ChevronLeft, 
  Play, 
  RotateCcw,
  Layers,
  Check
} from 'lucide-react';

interface ProductionStepViewerProps {
  steps: ProductionStep[];
  villageName: string;
}

export const ProductionStepViewer: React.FC<ProductionStepViewerProps> = ({ steps, villageName }) => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationSeconds, setSimulationSeconds] = useState<number>(0);

  const activeStep = steps[selectedStepIndex] || steps[0];

  const handleNext = () => {
    if (selectedStepIndex < steps.length - 1) {
      setSelectedStepIndex(selectedStepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedStepIndex > 0) {
      setSelectedStepIndex(selectedStepIndex - 1);
    }
  };

  const toggleStepCompleted = (index: number) => {
    if (completedSteps.includes(index)) {
      setCompletedSteps(completedSteps.filter((i) => i !== index));
    } else {
      setCompletedSteps([...completedSteps, index]);
    }
  };

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-stone-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-amber-900 font-semibold mb-1">
            Quy trình chế tác chuẩn mực
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Quy trình sản xuất từng bước: {villageName}
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Tất cả các công đoạn thủ công được chuẩn hóa thành hồ sơ số chi tiết, ghi nhận chuẩn kỹ thuật, công cụ bí truyền và kinh nghiệm của các nghệ nhân cao niên.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs text-stone-600">
          <span>Tiến độ tìm hiểu:</span>
          <span className="font-semibold text-stone-900 tabular-nums">
            {completedSteps.length} / {steps.length} bước
          </span>
          <div className="w-24 bg-stone-200 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-amber-900 h-full transition-all duration-300"
              style={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Interactive Step Navigator Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {steps.map((step, idx) => {
          const isActive = idx === selectedStepIndex;
          const isDone = completedSteps.includes(idx);
          return (
            <button
              key={step.id}
              onClick={() => setSelectedStepIndex(idx)}
              className={`p-3 text-left border rounded transition-all relative ${
                isActive 
                  ? 'border-amber-900 bg-amber-50/70 shadow-xs ring-1 ring-amber-900/20' 
                  : isDone
                  ? 'border-emerald-300 bg-emerald-50/40 text-stone-700 hover:bg-stone-50'
                  : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono font-semibold text-stone-500">
                  0{step.stepNumber}
                </span>
                {isDone && <Check className="w-3.5 h-3.5 text-emerald-700" />}
              </div>
              <div className="text-xs font-semibold text-stone-900 line-clamp-1">
                {step.stageName}
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5 flex items-center gap-1">
                <Clock className="w-3 h-3 text-stone-400" />
                <span className="truncate">{step.duration.split('/')[0]}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Step Detail Workspace */}
      <div className="bg-white border border-stone-300 rounded-lg shadow-xs overflow-hidden">
        {/* Step Banner */}
        <div className="bg-stone-900 text-stone-200 px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-2">
              <span>Công đoạn 0{activeStep.stepNumber}</span>
              <span className="text-stone-500">/</span>
              <span>Giai đoạn: {activeStep.stageName}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
              {activeStep.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 italic font-serif mt-1">
              {activeStep.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleStepCompleted(selectedStepIndex)}
              className={`px-3 py-1.5 rounded text-xs font-medium border flex items-center gap-1.5 transition-colors ${
                completedSteps.includes(selectedStepIndex)
                  ? 'bg-emerald-700 border-emerald-600 text-white'
                  : 'bg-stone-800 border-stone-700 text-stone-300 hover:text-white hover:bg-stone-700'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>
                {completedSteps.includes(selectedStepIndex) ? 'Đã nắm vững' : 'Đánh dấu đã hiểu'}
              </span>
            </button>
          </div>
        </div>

        {/* Detailed Grid */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Top Specifications Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-stone-200 text-xs">
            <div className="p-3 bg-stone-50 border border-stone-200 rounded">
              <span className="text-stone-400 block uppercase tracking-wider mb-1">Thời gian tiêu chuẩn</span>
              <div className="font-semibold text-stone-900 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-800" />
                <span>{activeStep.duration}</span>
              </div>
            </div>

            <div className="p-3 bg-stone-50 border border-stone-200 rounded">
              <span className="text-stone-400 block uppercase tracking-wider mb-1">Nguyên vật liệu chính</span>
              <div className="font-medium text-stone-900 flex flex-wrap gap-1">
                {activeStep.rawMaterials.join(' · ')}
              </div>
            </div>

            <div className="p-3 bg-stone-50 border border-stone-200 rounded">
              <span className="text-stone-400 block uppercase tracking-wider mb-1">Dụng cụ chuyên dụng</span>
              <div className="font-medium text-stone-900 flex flex-wrap gap-1">
                {activeStep.keyTools.join(' · ')}
              </div>
            </div>
          </div>

          {/* Sequential Step Execution Instructions */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-800" />
              Các thao tác thực hành kỹ thuật theo thứ tự
            </h4>
            <ol className="space-y-3">
              {activeStep.instructions.map((inst, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone-800 leading-relaxed">
                  <span className="w-6 h-6 rounded-full bg-stone-100 border border-stone-300 text-stone-700 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    {i + 1}
                  </span>
                  <span>{inst}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Master Artisan Secret (Mẹo nghề gia truyền) */}
          <div className="p-5 bg-amber-50/70 border border-amber-200/80 rounded-lg">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-950 font-bold mb-1.5">
              <Sparkles className="w-4 h-4 text-amber-800" />
              <span>Bí quyết gia truyền của nghệ nhân</span>
            </div>
            <p className="text-sm font-serif italic text-amber-950 leading-relaxed">
              "{activeStep.technicalSecret}"
            </p>
          </div>

          {/* Caution Note */}
          <div className="p-4 bg-rose-50/50 border border-rose-200 rounded text-xs text-rose-900 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold block mb-0.5">Điểm rủi ro & lỗi kỹ thuật thường gặp:</strong>
              <span>{activeStep.caution}</span>
            </div>
          </div>
        </div>

        {/* Footer Navigation Bar for Steps */}
        <div className="bg-stone-50 border-t border-stone-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={selectedStepIndex === 0}
            className={`px-4 py-2 rounded text-xs font-medium border flex items-center gap-1.5 transition-colors ${
              selectedStepIndex === 0
                ? 'opacity-40 cursor-not-allowed text-stone-400 border-stone-200'
                : 'text-stone-700 border-stone-300 hover:bg-stone-100'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Công đoạn trước</span>
          </button>

          <span className="text-xs font-mono text-stone-500">
            Bước {selectedStepIndex + 1} trên {steps.length}
          </span>

          <button
            onClick={handleNext}
            disabled={selectedStepIndex === steps.length - 1}
            className={`px-4 py-2 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              selectedStepIndex === steps.length - 1
                ? 'opacity-40 cursor-not-allowed bg-stone-300 text-stone-500'
                : 'bg-amber-900 hover:bg-amber-950 text-white shadow-xs'
            }`}
          >
            <span>Công đoạn kế tiếp</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
