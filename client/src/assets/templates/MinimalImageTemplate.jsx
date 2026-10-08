import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Github,
  Award,
  ExternalLink,
} from "lucide-react";

const MinimalImageTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white text-zinc-800">
      <div className="grid grid-cols-3">
        <div className="col-span-1 py-7">
          {/* Image */}
          {data.personal_info?.image &&
          typeof data.personal_info.image === "string" ? (
            <div>
              <img
                src={data.personal_info.image}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full mx-auto"
                style={{ background: accentColor + "70" }}
              />
            </div>
          ) : data.personal_info?.image &&
            typeof data.personal_info.image === "object" ? (
            <div>
              <img
                src={URL.createObjectURL(data.personal_info.image)}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full mx-auto"
              />
            </div>
          ) : null}
        </div>

        {/* Name + Title */}
        <div className="col-span-2 flex flex-col justify-center py-7 px-4">
          <h1 className="text-4xl font-bold text-zinc-700 tracking-widest">
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          <p className="uppercase text-zinc-600 font-medium text-sm tracking-widest">
            {data?.personal_info?.profession || ""}
          </p>
        </div>

        {/* Left Sidebar */}
        <aside className="col-span-1 border-r border-zinc-400 p-6 pt-0">
          {/* Contact */}
          <section className="mb-4">
            <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
              CONTACT
            </h2>
            <div className="space-y-2 text-sm flex flex-col items-start justify-center">
              {data.personal_info?.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={14} style={{ color: accentColor }} />
                  <span>{data.personal_info.phone}</span>
                </div>
              )}
              {data.personal_info?.email && (
                <div className="flex items-center gap-2">
                  <a
                    target="_blank"
                    href={`mailto:${data.personal_info?.email}`}
                    className="flex items-center gap-2 break-all"
                  >
                    <Mail size={15} style={{ color: accentColor }} />
                    <span>{data.personal_info.email}</span>
                  </a>
                </div>
              )}
              {data.personal_info?.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={14} style={{ color: accentColor }} />
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
                  <Linkedin size={16} style={{ color: accentColor }} />
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
                  <Github size={14} style={{ color: accentColor }} />
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
                  <Globe size={14} style={{ color: accentColor }} />
                  <span className="break-all">
                    {data.personal_info.website.split("https://")[1]
                      ? data.personal_info.website.split("https://")[1]
                      : data.personal_info.website}
                  </span>
                </a>
              )}
            </div>
          </section>

          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section className="mb-2">
              <h2 className="text-sm font-semibold tracking-widest text-zinc-600">
                EDUCATION
              </h2>
              <div className="space-y-2 text-sm">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <p className="font-semibold">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </p>
                    <p className="text-zinc-600">{edu.institution}</p>
                    <div className="flex justify-between items-center text-xs text-gray-600">
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
              <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-2">
                SKILLS
              </h2>
              <ul className="text-sm flex flex-wrap gap-1">
                {data.skills.map((skill, index) => (
                  <li className="marker:ml-0.5" key={index}>
                    • {skill}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>

        {/* Right Content */}
        <main className="col-span-2 p-6 pt-0">
          {/* Summary */}
          {data.professional_summary && (
            <section className="mb-2">
              <h2
                className="text-sm font-semibold tracking-widest"
                style={{ color: accentColor }}
              >
                SUMMARY
              </h2>
              <p className="text-zinc-700 leading-relaxed text-sm">
                {data.professional_summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {data.experience && data.experience.length > 0 && (
            <section>
              <h2
                className="text-sm font-semibold tracking-widest"
                style={{ color: accentColor }}
              >
                EXPERIENCE
              </h2>
              <div className="space-y-2 mb-1">
                {data.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-zinc-900 text-sm">
                        {exp.position}
                      </h3>
                      <span className="text-xs text-zinc-500">
                        {formatDate(exp.start_date)} -{" "}
                        {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: accentColor }}>
                      {exp.company}
                    </p>
                    {exp.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700 leading-relaxed space-y-1">
                        {exp.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
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
                className="text-sm uppercase tracking-widest font-semibold"
                style={{ color: accentColor }}
              >
                PROJECTS
              </h2>
              <div className="space-y-1">
                {data.project.map((project, index) => (
                  <div key={index}>
                    <h3 className="text-md text-zinc-800 text-sm font-semibold">
                      {project.name}
                      {project.link && (
                        <span className="text-gray-600 font-normal cursor-pointer">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center"
                          >
                            <ExternalLink
                              size={12}
                              className="ml-1 opacity-75"
                            />
                          </a>
                        </span>
                      )}
                    </h3>
                    <p className="text-sm" style={{ color: accentColor }}>
                      {project.type}
                    </p>
                    {project.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1">
                        {project.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
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
                      <Award
                        size={16}
                        className="mt-1 shrink-0"
                        style={{ color: accentColor }}
                      />
                      <div className="grow">
                        <div className="flex justify-between items-start text-sm">
                          <h3 className="text-gray-900 leading-tight">
                            {cert.credential_url ? (
                              <div className="flex items-center">
                                {cert.certificate_name}

                                <p className="text-sm italic ml-1">
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
                          <p className="text-gray-600 shrink-0 ml-4">
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
        </main>
      </div>
    </div>
  );
};

export default MinimalImageTemplate;
