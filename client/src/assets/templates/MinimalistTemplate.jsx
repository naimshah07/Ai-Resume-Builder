const MinimalistTemplate = ({ data, accentColor }) => {
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
      <header className="text-center mb-1">
        <h1 className="text-3xl font-light" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="text-sm text-zinc-600">
          {data.personal_info?.profession || ""}
        </p>
        <div className="flex flex-wrap justify-center gap-1.5 text-gray-600 text-sm">
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
      </header>

      <section className="mb-1">
        {data.professional_summary && (
          <>
            <h2
              className="font-semibold uppercase"
              style={{ color: accentColor }}
            >
              Professional Summary
            </h2>
            <p className="text-gray-700 text-sm">{data.professional_summary}</p>
          </>
        )}
      </section>

      {data.experience && data.experience.length > 0 && (
        <section className="mb-1">
          <h2
            className="font-semibold uppercase"
            style={{ color: accentColor }}
          >
            Professional Experience
          </h2>
          <div className="space-y-1">
            {data.experience.map((exp, idx) => (
              <div>
                <div key={idx} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{exp.position}</h3>
                    <p className="text-gray-600 text-sm">{exp.company}</p>
                  </div>
                  <div className="text-gray-500 text-sm">
                    <p>
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.project && data.project.length > 0 && (
        <section className="mb-1">
          <h2
            className="text-sm font-semibold uppercase"
            style={{ color: accentColor }}
          >
            Projects
          </h2>
          <ul className="space-y-1">
            {data.project.map((p, i) => (
              <li key={i}>
                <div className="font-medium flex items-center gap-1">
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
                </div>
                <div className="text-sm text-gray-600">{p.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.education && data.education.length > 0 && (
        <section className="mb-1">
          <h2
            className="text-sm font-semibold uppercase"
            style={{ color: accentColor }}
          >
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
          <h2
            className="text-sm font-semibold uppercase"
            style={{ color: accentColor }}
          >
            Core Skills
          </h2>
          <div className="flex flex-wrap gap-1 text-sm text-gray-700">
            {data.skills.map((s, idx) => (
              <div key={idx} className="px-2 py-0.5 border rounded">
                {s}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certification */}
      {data.certification && data.certification.length > 0 && (
        <section>
          <h2
            className="text-sm font-semibold uppercase"
            style={{ color: accentColor }}
          >
            Certifications
          </h2>

          <div className="space-y-1">
            {data.certification.map((cert, index) => {
              return (
                <div key={index} className="flex space-x-2">
                  <div className="grow">
                    <div className="flex justify-between items-start">
                      <h3 className="leading-tight">
                        {cert.credential_url ? (
                          <div className="flex items-center text-gray-900 font-medium">
                            {cert.certificate_name}

                            <p className="text-sm italic mx-1">
                              {cert.issuer}
                            </p>
                            <a
                              href={cert.credential_url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Link
                            </a>
                          </div>
                        ) : (
                          cert.certificate_name
                        )}
                      </h3>
                      <p className="text-gray-600 shrink-0 text-sm">
                        {formatDate(cert.issue_date)}
                      </p>
                    </div>

                    {cert.description && (
                      <p className="text-gray-500 leading-relaxed text-sm">
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

export default MinimalistTemplate;
