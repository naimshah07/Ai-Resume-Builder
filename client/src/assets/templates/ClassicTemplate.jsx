import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Github,
  ExternalLink,
} from "lucide-react";

const ClassicTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    if (!month || !year) return dateStr;
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-7 bg-white text-gray-800 leading-relaxed">
      {/* Header */}
      <header
        className="text-center mb-1 pb-2 border-b-2"
        style={{ borderColor: accentColor }}
      >
        <h1 className="text-3xl font-bold" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="uppercase text-zinc-600 font-medium text-xs tracking-widest mb-1">
          {data?.personal_info?.profession || ""}
        </p>

        <div className="flex flex-wrap justify-center gap-1 text-sm text-gray-600">
          {data.personal_info?.email && (
            <div className="flex items-center gap-1">
              <a
                target="_blank"
                href={`mailto:${data.personal_info?.email}`}
                className="flex items-center gap-1"
                rel="noopener noreferrer"
              >
                <Mail className="size-4" />
                <span>{data.personal_info.email}</span>
              </a>
            </div>
          )}
          {data.personal_info?.phone && (
            <div className="flex items-center gap-1">
              <Phone className="size-4" />
              <span>{data.personal_info.phone}</span>
            </div>
          )}
          {data.personal_info?.location && (
            <div className="flex items-center gap-1">
              <MapPin className="size-4" />
              <span>{data.personal_info.location}</span>
            </div>
          )}
          {data.personal_info?.linkedin && (
            <div className="flex items-center gap-1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  data.personal_info?.linkedin.startsWith("https://")
                    ? data.personal_info?.linkedin
                    : `https://${data.personal_info?.linkedin}`
                }
                className="flex items-center gap-1"
              >
                <Linkedin className="size-4" />
                <span className="break-all">
                  {data.personal_info.linkedin.split("https://")[1]
                    ? data.personal_info.linkedin.split("https://")[1]
                    : data.personal_info.linkedin}
                </span>
              </a>
            </div>
          )}
          {data.personal_info?.github && (
            <div className="flex items-center gap-1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  data.personal_info?.github.startsWith("https://")
                    ? data.personal_info?.github
                    : `https://${data.personal_info?.github}`
                }
                className="flex items-center gap-1"
              >
                <Github className="size-4" />
                <span className="break-all">
                  {data.personal_info.github.split("https://")[1]
                    ? data.personal_info.github.split("https://")[1]
                    : data.personal_info.github}
                </span>
              </a>
            </div>
          )}
          {data.personal_info?.website && (
            <div className="flex items-center gap-1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  data.personal_info?.website.startsWith("https://")
                    ? data.personal_info?.website
                    : `https://${data.personal_info?.website}`
                }
                className="flex items-center gap-1"
              >
                <Globe className="size-4" />
                <span className="break-all">
                  {data.personal_info.website.split("https://")[1]
                    ? data.personal_info.website.split("https://")[1]
                    : data.personal_info.website}
                </span>
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {data.professional_summary && (
        <section className="mb-1">
          <h2 className="text-lg font-semibold" style={{ color: accentColor }}>
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-1">
          <h2 className="text-lg font-semibold" style={{ color: accentColor }}>
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="space-y-2">
            {data.experience.map((exp, index) => (
              <div
                key={index}
                className="border-l-3 pl-4"
                style={{ borderColor: accentColor }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-gray-700 font-medium text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right text-xs text-gray-600">
                    <p>
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </p>
                  </div>
                </div>
                {exp.description && (
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
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
          <h2 className="text-lg font-semibold" style={{ color: accentColor }}>
            PROJECTS
          </h2>

          <ul className="space-y-1">
            {data.project.map((proj, index) => (
              <div
                key={index}
                className="flex justify-between items-start border-l-3 border-gray-300 pl-4"
              >
                <div>
                  <li className="font-semibold text-gray-800">
                    {proj.name}
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        className="font-light cursor-pointer"
                        style={{ color: accentColor }}
                      >
                        {" "}
                        Link
                      </a>
                    )}
                  </li>
                  <p className="text-gray-600 text-sm">{proj.description}</p>
                </div>
              </div>
            ))}
          </ul>
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-1">
          <h2 className="text-lg font-semibold" style={{ color: accentColor }}>
            EDUCATION
          </h2>

          <div>
            {data.education.map((edu, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-gray-700 text-sm">{edu.institution}</p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
                  )}
                </div>
                <div className="text-sm text-gray-600">
                  <p>{formatDate(edu.graduation_date)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <section className="mb-1">
          <h2 className="text-lg font-semibold" style={{ color: accentColor }}>
            CORE SKILLS
          </h2>

          <div className="flex gap-1 flex-wrap">
            {data.skills.map((skill, index) => (
              <div key={index} className="text-gray-700 text-sm">
                • {skill}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CERTIFICATIONS (NEW SECTION) */}
      {data.certification && data.certification.length > 0 && (
        <section className="mb-1">
          <h2 className="text-lg font-semibold" style={{ color: accentColor }}>
            CERTIFICATIONS
          </h2>

          <div className="space-y-1">
            {data.certification.map((cert, index) => {
              return (
                <div key={index} className="flex items-start">
                  <div className="grow">
                    <div className="flex justify-between items-start text-sm">
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
                      <p className="text-sm text-gray-500 shrink-0">
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
  );
};

export default ClassicTemplate;
