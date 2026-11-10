import React, { useState } from 'react';
import { IconicProduct } from '../types';
import { Sparkles, Clock, Compass, Layers, X, Info } from 'lucide-react';

interface IconicProductsGalleryProps {
  products: IconicProduct[];
  villageName: string;
}

export const IconicProductsGallery: React.FC<IconicProductsGalleryProps> = ({ products, villageName }) => {
  const [selectedProduct, setSelectedProduct] = useState<IconicProduct | null>(null);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-stone-200 pb-4">
        <div className="text-xs uppercase tracking-widest text-amber-900 font-semibold mb-1">
          Hiện vật tinh hoa & Kiệt tác
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
          Sản phẩm tiêu biểu: {villageName}
        </h2>
        <p className="text-sm text-stone-600 mt-1 max-w-2xl">
          Tuyển tập các tác phẩm thủ công đỉnh cao lưu giữ hồn cốt di sản, tiêu biểu cho bàn tay tài hoa của các thế hệ nghệ nhân.
        </p>
      </div>

      {/* Grid of Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-stone-300 rounded-lg overflow-hidden flex flex-col justify-between shadow-xs hover:border-amber-900 transition-all group"
          >
            <div>
              {/* Product Visual Container */}
              <div className="h-56 bg-stone-100 relative overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] uppercase tracking-wider text-amber-300 font-medium">
                    {product.category}
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white leading-tight">
                    {product.name}
                  </h3>
                </div>
              </div>

              {/* Product Details Body */}
              <div className="p-5 space-y-3 text-xs text-stone-700">
                <div className="flex items-center gap-2 text-stone-500 pb-2 border-b border-stone-200">
                  <span>Niên đại: <strong className="text-stone-800">{product.craftEra}</strong></span>
                  <span aria-hidden="true">·</span>
                  <span>{product.craftingTime}</span>
                </div>

                <div>
                  <span className="text-stone-400 block uppercase tracking-wider mb-0.5">Chất liệu chế tác</span>
                  <p className="font-medium text-stone-900">{product.material}</p>
                </div>

                <div>
                  <span className="text-stone-400 block uppercase tracking-wider mb-0.5">Ý nghĩa văn hóa</span>
                  <p className="line-clamp-2 text-stone-600 italic font-serif">
                    "{product.culturalMeaning}"
                  </p>
                </div>

                <div>
                  <span className="text-stone-400 block uppercase tracking-wider mb-1">Kỹ thuật ứng dụng</span>
                  <div className="flex flex-wrap gap-1 text-[11px] text-stone-700">
                    {product.craftingTechniques.map((tech, i) => (
                      <span key={i} className="bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with Curator Inspect Action */}
            <div className="px-5 py-3 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs">
              <span className="text-stone-500">
                Nghệ nhân: <strong className="text-stone-800">{product.artisanCredit}</strong>
              </span>

              <button
                onClick={() => setSelectedProduct(product)}
                className="font-semibold text-amber-900 hover:text-amber-950 underline cursor-pointer"
              >
                Hồ sơ chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Curator Modal for Deep Inspection */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FDFBF7] border border-stone-300 rounded-lg shadow-2xl p-6 sm:p-8 text-stone-800">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-1 text-stone-500 hover:text-stone-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs uppercase tracking-widest text-amber-900 font-semibold mb-1">
              Hồ sơ bảo tồn hiện vật số · {villageName}
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-2">
              {selectedProduct.name}
            </h3>

            {/* Image Preview */}
            <div className="w-full h-72 bg-stone-100 rounded overflow-hidden my-4 border border-stone-200">
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Spec Sheet Definition List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-white border border-stone-200 rounded p-4 mb-4">
              <div>
                <span className="text-stone-400 block uppercase tracking-wider mb-0.5">Kích thước quy chuẩn</span>
                <span className="font-medium text-stone-900">{selectedProduct.dimensions}</span>
              </div>
              <div>
                <span className="text-stone-400 block uppercase tracking-wider mb-0.5">Thời gian hoàn thiện</span>
                <span className="font-medium text-stone-900">{selectedProduct.craftingTime}</span>
              </div>
              <div>
                <span className="text-stone-400 block uppercase tracking-wider mb-0.5">Chất liệu thổ nhưỡng</span>
                <span className="font-medium text-stone-900">{selectedProduct.material}</span>
              </div>
              <div>
                <span className="text-stone-400 block uppercase tracking-wider mb-0.5">Tác giả nghệ nhân</span>
                <span className="font-medium text-stone-900">{selectedProduct.artisanCredit}</span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-stone-700">
              <div>
                <strong className="block text-stone-900 mb-1">Mô tả tác phẩm:</strong>
                <p className="leading-relaxed">{selectedProduct.description}</p>
              </div>

              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded">
                <strong className="block text-amber-950 mb-1 font-serif">Ý nghĩa văn hóa & Triết lý nghệ thuật:</strong>
                <p className="italic text-amber-950">{selectedProduct.culturalMeaning}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 bg-stone-900 text-white rounded text-xs font-semibold hover:bg-stone-800"
              >
                Đóng hiện vật
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
