import { Check, Layout } from "lucide-react";
import { useState } from "react";

const TemplateSelector = ({ selectedTemplate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview:
        "A clean, readitional resume format with clear sections and professional typography",
    },
    {
      id: "modern",
      name: "Modern",
      preview:
        "Sleek design with strategic use of color and modern font choices",
    },
    {
      id: "minimal-image",
      name: "Minimal Image",
      preview: "Minimal design with a single image and clean typography",
    },
    {
      id: "minimal",
      name: "Minimal",
      preview: "Ultra-clean design that puts your content front and center",
    },
    {
      id: "creativeVisual",
      name: "Creative Visual",
      preview:
        "A visually engaging layout with timelines and accent colors for a modern, dynamic presentation.",
    },
    {
      id: "minimalist",
      name: "Minimalist",
      preview:
        "A clean, bold design with structured sections and modern typography.",
    },
    {
      id: "modernProTemplate",
      name: "Modern Pro Template",
      preview:
        "A clean, executive-style resume template designed for senior professionals with strong ATS compatibility.",
    },
    {
      id: "corporateATSTemplate",
      name: "Corporate ATS Template",
      preview:
        "An Applicant Tracking System optimized layout focusing on clarity and keyword visibility.",
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-emerald-800 bg-emerald-900/5 ring-emerald-900/10 hover:ring transition-all px-3 py-2 rounded-lg border border-emerald-900/10"
      >
        <Layout size={14} /> <span className="max-sm:hidden">Template</span>
      </button>

      {isOpen && (
        <div className="absolute top-full w-xs p-3 mt-2 space-y-3 z-10 bg-white rounded-md border border-ink-200 shadow-luxury h-[60vh] overflow-auto">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => {
                onChange(template.id);
                setIsOpen(false);
              }}
              className={`relative p-3 border rounded-md cursor-pointer transition-all ${
                selectedTemplate === template.id
                  ? "border-emerald-700 bg-emerald-900/5"
                  : "border-ink-300 hover:border-ink-400 hover:bg-ink-100"
              } `}
            >
              {selectedTemplate === template.id && (
                <div className="absolute top-2 right-2">
                  <div className="size-5 bg-emerald-700 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-luxury-50" />
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <h4 className="font-medium text-ink-800">{template.name}</h4>
                <div className="mt-2 p-2 bg-emerald-900/5 rounded text-xs text-ink-500 italic border border-emerald-900/10">
                  {template.preview}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
