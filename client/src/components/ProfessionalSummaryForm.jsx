import { Loader2, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import api from "../configs/api";

const ProfessionalSummaryForm = ({ data, onChange, setResumeDate }) => {
  const { token } = useSelector((state) => state.auth);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateSummary = async () => {
    try {
      setIsGenerating(true);
      const prompt = `enhance my professional summary "${data}"`;

      const response = await api.post(
        "/api/ai/enhance-pro-sum",
        { userContent: prompt },
        { headers: { Authorization: token } }
      );

      setResumeDate((prev) => ({
        ...prev,
        professional_summary: response.data.enhancedContent,
      }));
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setIsGenerating(false);
    }
  };
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-ink-900">
            Professional Summary
          </h3>
          <p className="text-sm text-ink-500">
            Add summary for your resume here
          </p>
        </div>

        <button
          className="flex items-center gap-2 px-3 py-1 text-sm bg-emerald-900/5 text-emerald-800 rounded hover:bg-emerald-900/10 border border-emerald-900/10 transition-colors disabled:opacity-50"
          disabled={isGenerating}
          onClick={generateSummary}
        >
          {isGenerating ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Sparkles className="size-4" />
          )}
          {isGenerating ? "Enhancing..." : "AI Enhance"}
        </button>
      </div>

      <div className="mt-6">
        <textarea
          value={data || ""}
          onChange={(e) => onChange(e.target.value)}
          rows={7}
          className="w-full p-3 px-4 mt-2 border text-sm border-ink-200 rounded-lg focus:ring-emerald-900 focus:border-emerald-900 outline-none transition-colors resize-none"
          placeholder="Write a compelling professional summary that highlights your key strengths and career objectives..."
        />
        <p className="text-xs text-ink-500 max-w-4/5 mx-auto text-center">
          Tip: Keep it concise (3-4 sentences) and focus on your most relevent
          acheivements and skills.
        </p>
      </div>
    </div>
  );
};

export default ProfessionalSummaryForm;
