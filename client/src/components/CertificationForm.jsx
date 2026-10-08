import { Plus, ShieldCheck, Trash2 } from "lucide-react";

const CertificationForm = ({ data, onChange }) => {
  const addCertification = () => {
    const newCertification = {
      certificate_name: "",
      description: "",
      issuer: "",
      issue_date: "",
      credential_url: "",
    };
    onChange([...data, newCertification]);
  };

  const removeCertification = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateCertification = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            Certification
          </h3>
          <p className="text-sm text-gray-500">
            Add your Certification details
          </p>
        </div>

        <button
          onClick={addCertification}
          className="flex items-center gap-2 px-3 py-2 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
        >
          <Plus className="size-4" />
          Add Certification
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <ShieldCheck className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No Certification added yet.</p>
          <p className="text-sm">Click "Add Certification" to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((certification, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-3"
            >
              <div className="flex justify-between items-start">
                <h4>Certification #{index + 1}</h4>
                <button
                  className="text-red-500 hover:text-red-700 transition-colors"
                  onClick={() => removeCertification(index)}
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <input
                  value={certification.certificate_name || ""}
                  onChange={(e) =>
                    updateCertification(
                      index,
                      "certificate_name",
                      e.target.value
                    )
                  }
                  type="text"
                  placeholder="Certificate Name"
                  className=" px-3 py-2 text-sm"
                />
                <input
                  value={certification.issuer || ""}
                  onChange={(e) =>
                    updateCertification(index, "issuer", e.target.value)
                  }
                  type="text"
                  placeholder="Issuer"
                  className=" px-3 py-2 text-sm"
                />
                <input
                  value={certification.credential_url || ""}
                  onChange={(e) =>
                    updateCertification(index, "credential_url", e.target.value)
                  }
                  type="text"
                  placeholder="Credential Url"
                  className=" px-3 py-2 text-sm"
                />
                <input
                  value={certification.issue_date || ""}
                  onChange={(e) =>
                    updateCertification(index, "issue_date", e.target.value)
                  }
                  type="month"
                  className=" px-3 py-2 text-sm disabled:bg-gray-100"
                />
              </div>

              <input
                value={certification.description || ""}
                onChange={(e) =>
                  updateCertification(index, "description", e.target.value)
                }
                type="text"
                placeholder="Description"
                className=" px-3 py-2 text-sm w-full"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CertificationForm;
