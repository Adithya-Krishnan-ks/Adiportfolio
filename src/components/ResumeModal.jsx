import React from 'react';
import { X, Download, ExternalLink, Printer, FileText } from 'lucide-react';
import resumePdf from '../assets/Adithya_Krishnan_Resume.pdf';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const pdfUrl = resumePdf;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Adithya_Krishnan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-xl overflow-hidden">
      <div className="relative w-full max-w-5xl h-[92vh] bg-[#030a05] border border-matrix/40 shadow-2xl overflow-hidden flex flex-col rounded-none">
        
        {/* Modal Header Toolbar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-matrix/30 bg-black/95 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-matrix rounded-none"></span>
            <span className="text-white font-bold text-xs sm:text-base font-mono truncate">
              Adithya_Krishnan_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleOpenNewTab}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/70 hover:bg-black/90 text-gray-200 border border-matrix/30 text-xs font-semibold font-calibri transition-colors rounded-none"
              title="Open PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-matrix" />
              <span className="hidden sm:inline">Open in Tab</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-matrix hover:bg-matrix-light text-slate-950 text-xs font-bold font-calibri transition-all rounded-none shadow-md shadow-matrix/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 bg-black/70 text-gray-400 hover:text-white hover:bg-white/10 transition-colors rounded-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body — PDF Embedder */}
        <div className="flex-1 w-full bg-[#030a05] relative overflow-hidden">
          <object
            data={pdfUrl}
            type="application/pdf"
            className="w-full h-full border-none"
          >
            {/* Fallback container for devices/browsers that don't render inline PDFs */}
            <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-4">
              <FileText className="w-16 h-16 text-matrix animate-pulse" />
              <h3 className="text-xl font-bold text-white">Adithya Krishnan's Resume</h3>
              <p className="text-sm text-gray-300 max-w-md">
                Your browser doesn't support direct inline PDF previewing. You can open or download the original PDF file below.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-matrix hover:bg-matrix-light text-slate-950 font-bold font-calibri text-sm shadow-lg shadow-matrix/20 rounded-none"
                >
                  <Download className="w-4 h-4" />
                  Download Resume PDF
                </button>
                <button
                  onClick={handleOpenNewTab}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black/80 hover:bg-black text-white font-semibold border border-matrix/40 font-calibri text-sm rounded-none"
                >
                  <ExternalLink className="w-4 h-4 text-matrix" />
                  Open in New Tab
                </button>
              </div>
            </div>
          </object>
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-3 border-t border-matrix/30 bg-black/95 flex items-center justify-between text-xs shrink-0">
          <div className="text-gray-400 hidden sm:block">
            Viewing original document: <span className="text-matrix font-mono">Adithya_Krishnan_Resume.pdf</span>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={handleOpenNewTab}
              className="text-gray-300 hover:text-matrix font-calibri flex items-center gap-1"
            >
              <Printer className="w-3.5 h-3.5 text-matrix" /> Print PDF
            </button>
            <span className="text-gray-600">•</span>
            <button
              onClick={handleDownload}
              className="text-matrix font-calibri font-bold flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" /> Download Copy
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
