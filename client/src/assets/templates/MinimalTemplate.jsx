const MinimalTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-7 bg-white text-gray-900 font-light">
      {/* Header */}
      <header className="mb-1">
        <h1 className="text-4xl font-thin mb-1 tracking-wide">
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="uppercase text-gray-700 font-medium text-sm tracking-widest">
          {data?.personal_info?.profession || ""}
        </p>

        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
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

      {/* Professional Summary */}
      {data.professional_summary && (
        <section className="mb-1">
          <h2
            className="text-sm uppercase tracking-widest font-medium"
            style={{ color: accentColor }}
          >
            Summary
          </h2>
          <p className=" text-gray-700">{data.professional_summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-1">
          <h2
            className="text-sm uppercase tracking-widest font-medium"
            style={{ color: accentColor }}
          >
            Experience
          </h2>

          <div className="space-y-2">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium">{exp.position}</h3>
                  <span className="text-gray-500">
                    {formatDate(exp.start_date)} -{" "}
                    {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>
                <p className="text-gray-600 text-xs">{exp.company}</p>
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
          <h2
            className="text-sm uppercase tracking-widest font-medium"
            style={{ color: accentColor }}
          >
            Projects
          </h2>

          <div className="space-y-1">
            {data.project.map((proj, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-baseline"
              >
                <h3 className="font-medium flex items-center gap-1">
                  {proj.name}
                  {proj.link && (
                    <span className="text-gray-600 font-normal cursor-pointer">
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center cursor-pointer"
                      >
                        Link
                      </a>
                    </span>
                  )}
                </h3>
                <p className="text-gray-600 text-sm">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-1">
          <h2
            className="text-sm uppercase tracking-widest font-medium"
            style={{ color: accentColor }}
          >
            Education
          </h2>

          <div className="space-y-1">
            {data.education.map((edu, index) => (
              <div key={index} className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-medium">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-gray-600 text-sm">{edu.institution}</p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>
                  )}
                </div>
                <span className="text-sm text-gray-500">
                  {formatDate(edu.graduation_date)}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <section className="mb-1">
          <h2
            className="text-sm uppercase tracking-widest font-medium"
            style={{ color: accentColor }}
          >
            Skills
          </h2>

          <div className="text-gray-700 text-sm">{data.skills.join(" • ")}</div>
        </section>
      )}
      {/* Certification */}
      {data.certification && data.certification.length > 0 && (
        <section>
          <h2
            className="text-sm uppercase tracking-widest font-semibold"
            style={{ color: accentColor }}
          >
            CERTIFICATIONS
          </h2>

          <div className="space-y-1">
            {data.certification.map((cert, index) => {
              return (
                <div key={index} className="flex space-x-2">
                  <div className="grow">
                    <div className="flex justify-between items-start">
                      <h3 className="leading-tight">
                        {cert.credential_url ? (
                          <div className="flex items-center font-normal">
                            {cert.certificate_name}

                            <p className="text-sm text-gray-900 italic mx-1">
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
                      <p className="text-gray-500 shrink-0 text-sm">
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

export default MinimalTemplate;
