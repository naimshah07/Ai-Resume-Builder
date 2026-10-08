import { Award, ExternalLink } from "lucide-react";

const CreativeVisualTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-7 bg-white text-gray-800 leading-relaxed">
      <header className="mb-1 text-center">
        <h1 className="text-3xl font-bold" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="text-sm text-zinc-600">
          {data.personal_info?.profession || ""}
        </p>
      </header>
      <div className="flex flex-wrap justify-center gap-1.5 text-sm text-gray-600">
        {data.personal_info?.email && (
          <a target="_blank" href={`mailto:${data.personal_info?.email}`}>
            <span>{data.personal_info.email}</span>
          </a>
        )}
        {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
        {data.personal_info?.location && (
          <span>{data.personal_info.location}</span>
        )}
        {data.personal_info?.linkedin && (
          <a
            target="_blank"
            href={
              data.personal_info?.linkedin.startsWith("https://")
                ? data.personal_info?.linkedin
                : `https://${data.personal_info?.linkedin}`
            }
          >
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
          >
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
          >
            <span className="break-all">
              {data.personal_info.website.split("https://")[1]
                ? data.personal_info.website.split("https://")[1]
                : data.personal_info.website}
            </span>
          </a>
        )}
      </div>

      <section className="mb-1">
        {data.professional_summary && (
          <div>
            <h2
              className="text-lg font-semibold"
              style={{
                borderLeft: `4px solid ${accentColor}`,
                paddingLeft: "10px",
              }}
            >
              Summary
            </h2>
            <p className="text-gray-700 text-sm">{data.professional_summary}</p>
          </div>
        )}
      </section>

      {data.experience && data.experience.length > 0 && (
        <section className="mb-1">
          <h2 className="text-lg font-semibold" style={{ color: accentColor }}>
            Experience Timeline
          </h2>
          <div className="space-y-1">
            {data.experience.map((exp, idx) => (
              <div key={idx} className="flex gap-2 items-start">
                <div className="flex flex-col items-center">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: accentColor }}
                  />
                  {idx !== data.experience.length - 1 && (
                    <div
                      className="w-px h-full"
                      style={{ background: "#e5e7eb" }}
                    />
                  )}
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{exp.position}</h3>
                      <p className="text-sm text-gray-600">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-gray-700 text-sm">{exp.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.project && data.project.length > 0 && (
        <section className="mb-2">
          <h2 className="text-lg font-semibold" style={{ color: accentColor }}>
            Featured Projects
          </h2>
          <div>
            {data.project.map((p, i) => (
              <div
                key={i}
                className="p-2 pt-1 rounded-md border-l-4"
                style={{ borderColor: accentColor }}
              >
                <div className="font-semibold">
                  {p.name}
                  {p.link && (
                    <span className="text-gray-600 font-normal cursor-pointer">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <ExternalLink size={12} className="ml-1 opacity-75" />
                      </a>
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-600">{p.description}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.education && data.education.length > 0 && (
        <section className="mb-1">
          <h2 className="text-lg font-semibold" style={{ color: accentColor }}>
            Education
          </h2>
          <div className="space-y-1">
            {data.education.map((edu, i) => (
              <div key={i} className="flex justify-between items-start">
                <div>
                  <div className="font-medium">
                    {edu.degree}
                    {edu.field ? ` in ${edu.field}` : ""}
                  </div>
                  <div className="text-sm text-gray-600">{edu.institution}</div>
                </div>
                <div className="text-sm text-gray-500">
                  {formatDate(edu.graduation_date)}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.skills && data.skills.length > 0 && (
        <section className="mb-1">
          <h2 className="text-lg font-semibold" style={{ color: accentColor }}>
            Skills & Tools
          </h2>
          <div className="flex flex-wrap gap-1">
            {data.skills.map((s, idx) => (
              <span key={idx} className="text-sm px-2 py-0.5 border rounded">
                {s}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Certification */}
      {data.certification && data.certification.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold" style={{ color: accentColor }}>
            Certifications
          </h2>

          <div className="space-y-1">
            {data.certification.map((cert, index) => {
              return (
                <div key={index} className="flex space-x-2">
                  <Award
                    size={16}
                    className="mt-1 shrink-0"
                    style={{ color: accentColor }}
                  />

                  <div className="grow">
                    <h3 className="text-sm text-gray-600 leading-tight flex items-center justify-between">
                      {cert.credential_url ? (
                        <div className="flex items-center font-medium">
                          {cert.certificate_name}

                          <p className="text-sm text-gray-900 italic ml-1">
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
                        <>{cert.certificate_name}</>
                      )}
                      <p className="text-gray-500">
                        {formatDate(cert.issue_date)}
                      </p>
                    </h3>

                    {cert.description && (
                      <p className="text-sm text-gray-500 italic">
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

export default CreativeVisualTemplate;
