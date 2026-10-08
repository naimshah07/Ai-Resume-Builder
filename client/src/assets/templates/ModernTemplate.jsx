import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Github,
  ExternalLink,
} from "lucide-react";

const ModernTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800">
      {/* Header */}
      <header
        className="px-7 py-3 text-white"
        style={{ backgroundColor: accentColor }}
      >
        <h1 className="text-4xl font-light mb-1">
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <p className="uppercase text-white font-medium text-sm tracking-widest">
          {data?.personal_info?.profession || ""}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm">
          {data.personal_info?.email && (
            <div className="flex items-center gap-2">
              <a
                target="_blank"
                href={`mailto:${data.personal_info?.email}`}
                className="flex items-center gap-2"
              >
                <Mail className="size-4" />
                <span>{data.personal_info.email}</span>
              </a>
            </div>
          )}
          {data.personal_info?.phone && (
            <div className="flex items-center gap-2">
              <Phone className="size-4" />
              <span>{data.personal_info.phone}</span>
            </div>
          )}
          {data.personal_info?.location && (
            <div className="flex items-center gap-2">
              <MapPin className="size-4" />
              <span>{data.personal_info.location}</span>
            </div>
          )}
          {data.personal_info?.linkedin && (
            <a
              target="_blank"
              href={
                data.personal_info?.linkedin.startsWith("https://")
                  ? data.personal_info?.linkedin
                  : `https://${data.personal_info?.linkedin}`
              }
              className="flex items-center gap-2"
            >
              <Linkedin className="size-4" />
              <span className="break-all">
                {data.personal_info.linkedin.split("https://")[1]
                  ? data.personal_info.linkedin.split("https://")[1]
                  : data.personal_info.linkedin}
              </span>
            </a>
          )}
          {data.personal_info?.github && (
            <a
              target="_blank"
              href={
                data.personal_info?.github.startsWith("https://")
                  ? data.personal_info?.github
                  : `https://${data.personal_info?.github}`
              }
              className="flex items-center gap-2"
            >
              <Github className="size-4" />
              <span className="break-all">
                {data.personal_info.github.split("https://")[1]
                  ? data.personal_info.github.split("https://")[1]
                  : data.personal_info.github}
              </span>
            </a>
          )}
          {data.personal_info?.website && (
            <a
              target="_blank"
              href={
                data.personal_info?.website.startsWith("https://")
                  ? data.personal_info?.website
                  : `https://${data.personal_info?.website}`
              }
              className="flex items-center gap-2"
            >
              <Globe className="size-4" />
              <span className="break-all">
                {data.personal_info.website.split("https://")[1]
                  ? data.personal_info.website.split("https://")[1]
                  : data.personal_info.website}
              </span>
            </a>
          )}
        </div>
      </header>

      <div className="px-7 py-4">
        {/* Professional Summary */}
        {data.professional_summary && (
          <section className="mb-1">
            <h2 className="text-xl font-light border-b border-gray-200">
              Professional Summary
            </h2>
            <p className="text-gray-700 text-sm">{data.professional_summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-1">
            <h2 className="text-xl font-light border-b border-gray-200">
              Experience
            </h2>

            <div className="space-y-1">
              {data.experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-4 border-l border-gray-200"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {exp.position}
                      </h3>
                      <p
                        className="font-medium text-sm"
                        style={{ color: accentColor }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded">
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </div>
                  </div>
                  {exp.description && (
                    <div className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                      {exp.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.project && data.project.length > 0 && (
          <section className="mb-1">
            <h2 className="text-xl font-light border-b border-gray-200">
              Projects
            </h2>

            <div className="space-y-1">
              {data.project.map((p, index) => (
                <div
                  key={index}
                  className="relative pl-4 border-l border-gray-200"
                  style={{ borderLeftColor: accentColor }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900 flex items-center gap-0.5">
                        {p.name}
                        {p.link && (
                          <span className="text-gray-600 font-normal cursor-pointer">
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center"
                            >
                              Link
                            </a>
                          </span>
                        )}
                      </h3>
                    </div>
                  </div>
                  {p.description && (
                    <div className="text-gray-700 leading-relaxed text-sm">
                      {p.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section>
              <h2 className="text-xl font-light border-b border-gray-200">
                Education
              </h2>

              <div className="space-y-1">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-gray-900 ">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </h3>
                    <p style={{ color: accentColor }} className="text-sm">
                      {edu.institution}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>{formatDate(edu.graduation_date)}</span>
                      {edu.gpa && <span>GPA: {edu.gpa}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <h2 className="text-xl font-light border-b border-gray-200">
                Skills
              </h2>

              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm text-white rounded-full"
                    style={{ backgroundColor: accentColor }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Certifications */}
        {data.certification && data.certification.length > 0 && (
          <section className="mb-1">
            <h2 className="text-xl font-light mb-1 border-b border-gray-200">
              Certifications
            </h2>

            <div className="space-y-1">
              {data.certification.map((cert, index) => {
                return (
                  <div key={index} className="flex items-start">
                    <div className="grow">
                      <div className="flex justify-between items-start">
                        <h3 className="text-gray-900 font-medium leading-tight">
                          {cert.credential_url ? (
                            <div className="flex items-center">
                              {cert.certificate_name}

                              <p className="text-sm text-gray-700 italic ml-1">
                                {cert.issuer}
                              </p>
                              <a
                                href={cert.credential_url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink
                                  size={12}
                                  className="ml-1 opacity-75 shrink-0"
                                />
                              </a>
                            </div>
                          ) : (
                            cert.certificate_name
                          )}
                        </h3>
                        <p className="text-sm text-gray-600 shrink-0 ml-4">
                          {formatDate(cert.issue_date)}
                        </p>
                      </div>

                      {cert.description && (
                        <p className="text-gray-700 leading-relaxed text-sm">
                          {cert.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;
