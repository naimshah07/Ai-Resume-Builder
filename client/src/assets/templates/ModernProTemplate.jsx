import {
  Award,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const ModernProTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };
  return (
    <div className="max-w-5xl mx-auto bg-white text-zinc-800 py-3 m-0">
      <header className="flex border-b border-gray-300">
        <div className="w-1/4 shrink-0 px-6 py-2">
          <div className="w-28 h-28 overflow-hidden rounded-md shadow-md">
            {data.personal_info?.image ? (
              <img
                src={data.personal_info.image}
                style={{ backgroundColor: accentColor }}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                [Image]
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center w-3/4 py-4 pr-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-0.5">
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          <p className="text-xl font-medium text-gray-600 mb-1">
            {data.personal_info?.profession || ""}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 text-sm text-gray-600 border-t border-gray-200 pt-2">
            {data.personal_info?.location && (
              <div className="flex items-center gap-1">
                <MapPin size={14} style={{ color: accentColor }} />
                <span>{data.personal_info.location}</span>
              </div>
            )}
            {data.personal_info?.phone && (
              <div className="flex items-center gap-1">
                <Phone size={14} style={{ color: accentColor }} />
                <span>{data.personal_info.phone}</span>
              </div>
            )}
            {data.personal_info?.email && (
              <a
                href={`mailto:${data.personal_info.email}`}
                className="flex items-center gap-1"
              >
                <Mail size={14} style={{ color: accentColor }} />
                <span>{data.personal_info.email}</span>
              </a>
            )}
            {data.personal_info?.linkedin && (
              <a
                target="_blank"
                href={
                  data.personal_info?.linkedin.startsWith("https://")
                    ? data.personal_info?.linkedin
                    : `https://${data.personal_info?.linkedin}`
                }
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Linkedin size={14} style={{ color: accentColor }} />
                <span className="truncate">
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
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Github size={14} style={{ color: accentColor }} />
                <span className="truncate">
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
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Globe size={14} style={{ color: accentColor }} />
                <span className="truncate">
                  {data.personal_info.website.split("https://")[1]
                    ? data.personal_info.website.split("https://")[1]
                    : data.personal_info.website}
                </span>
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-3 divide-x divide-gray-300">
        <main className="col-span-2 px-6 py-4 space-y-2">
          {data.professional_summary && (
            <section>
              <h2
                className="text-lg font-bold tracking-wider mb-1 text-gray-900 border-b-2"
                style={{ borderColor: accentColor }}
              >
                PROFILE
              </h2>
              <p className="text-sm leading-relaxed text-zinc-700">
                {data.professional_summary}
              </p>
            </section>
          )}

          {data.experience && data.experience.length > 0 && (
            <section>
              <h2
                className="text-lg font-bold tracking-wider mb-1 text-gray-900 border-b-2"
                style={{ borderColor: accentColor }}
              >
                EXPERIENCE
              </h2>
              <div className="space-y-1">
                {data.experience.map((exp, index) => (
                  <div key={index} className="pt-1">
                    <div className="flex justify-between items-start text-sm">
                      <h3 className="font-bold text-gray-900">
                        {exp.company}{" "}
                        <span className="font-normal text-gray-600">
                          — {exp.position}
                        </span>
                      </h3>
                      <span className="text-xs font-medium text-gray-500 whitespace-nowrap">
                        {formatDate(exp.start_date)} -{" "}
                        {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>
                    {exp.description && (
                      <ul className="list-disc list-inside text-xs text-zinc-700 leading-relaxed space-y-1 mt-1 ml-4">
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

          {data.project && data.project.length > 0 && (
            <section>
              <h2
                className="text-lg font-bold tracking-wider mb-1 text-gray-900 border-b-2"
                style={{ borderColor: accentColor }}
              >
                PROJECTS
              </h2>
              <div className="space-y-1">
                {data.project.map((proj, index) => (
                  <div key={index} className="pt-1">
                    <h3 className="font-bold text-sm text-gray-900 flex items-center gap-0.5">
                      {proj.name}
                      <span className="text-gray-600 font-normal">
                        ({proj.type})
                      </span>
                      {proj.link && (
                        <span className="text-gray-600 font-normal cursor-pointer">
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center hover:text-indigo-600 transition duration-150"
                          >
                            <ExternalLink
                              size={12}
                              className="ml-1 opacity-75"
                            />
                          </a>
                        </span>
                      )}
                    </h3>
                    {proj.description && (
                      <ul className="list-disc list-inside text-xs text-zinc-700 leading-relaxed space-y-1 mt-1 ml-4">
                        {proj.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>

        <aside className="col-span-1 px-6 py-4 space-y-2">
          {data.education && data.education.length > 0 && (
            <section>
              <h2
                className="text-lg font-bold tracking-wider mb-2 text-gray-900 border-b-2"
                style={{ borderColor: accentColor }}
              >
                EDUCATION
              </h2>
              <div className="space-y-1 text-sm">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <p className="font-semibold text-gray-900">
                      {edu.degree || "Bachelor of Technology"}
                    </p>
                    <p className="text-gray-600 text-xs italic">
                      {edu.field && `${edu.field} • `}
                      {edu.institution || "University Name"}
                    </p>
                    <div className="text-xs text-gray-500">
                      {formatDate(edu.graduation_date)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.skills && data.skills.length > 0 && (
            <section>
              <h2
                className="text-lg font-bold tracking-wider mb-2 text-gray-900 border-b-2"
                style={{ borderColor: accentColor }}
              >
                SKILLS
              </h2>

              {(() => {
                const frontendKeywords = [
                  "react",
                  "javascript",
                  "html",
                  "css",
                  "typescript",
                  "angular",
                  "vue",
                ];
                const frontendSkills = data.skills.filter((s) =>
                  frontendKeywords.some((keyword) =>
                    s.toLowerCase().includes(keyword)
                  )
                );
                return (
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-gray-900">
                      Front-End
                    </p>
                    <p className="text-xs text-zinc-700">
                      {frontendSkills.join(", ")}
                    </p>
                  </div>
                );
              })()}

              {(() => {
                const backendKeywords = [
                  "node",
                  "express",
                  "nest",
                  "sql",
                  "mongo",
                  "postgre",
                  "dynamo",
                  "graphql",
                  "restful",
                  "mysql",
                  "postgresql",
                  "mongodb",
                ];
                const backendSkills = data.skills.filter((s) =>
                  backendKeywords.some((keyword) =>
                    s.toLowerCase().includes(keyword)
                  )
                );
                return (
                  <div className="space-y-1 pt-1">
                    <p className="text-sm font-semibold text-gray-900">
                      Back-End / Databases
                    </p>
                    <p className="text-xs text-zinc-700">
                      {backendSkills.join(", ")}
                    </p>
                  </div>
                );
              })()}

              {(() => {
                const devopsKeywords = [
                  "aws",
                  "azure",
                  "docker",
                  "kubernetes",
                  "git",
                  "github",
                  "bitbucket",
                  "lambda",
                  "s3",
                  "ec2",
                  "cognito",
                  "ci/cd",
                  "deployment",
                  "cicd",
                ];
                const devopsSkills = data.skills.filter((s) =>
                  devopsKeywords.some((keyword) =>
                    s.toLowerCase().includes(keyword)
                  )
                );
                return (
                  <div className="space-y-1 pt-1">
                    <p className="text-sm font-semibold text-gray-900">
                      DevOps / Cloud
                    </p>
                    <p className="text-xs text-zinc-700">
                      {devopsSkills.join(", ")}
                    </p>
                  </div>
                );
              })()}

              {(() => {
                const allCategorizedKeywords = [
                  // Front-End
                  "react",
                  "javascript",
                  "html",
                  "css",
                  "typescript",
                  "angular",
                  "vue",
                  // Back-End / Databases
                  "node",
                  "express",
                  "nest",
                  "sql",
                  "mongo",
                  "postgre",
                  "dynamo",
                  "graphql",
                  "restful",
                  "mysql",
                  "postgresql",
                  "mongodb",
                  // DevOps / Cloud
                  "aws",
                  "azure",
                  "docker",
                  "kubernetes",
                  "git",
                  "github",
                  "bitbucket",
                  "lambda",
                  "s3",
                  "ec2",
                  "cognito",
                  "ci/cd",
                  "deployment",
                  "cicd",
                  // Generic development/methodology terms that should be filtered out
                  "development",
                  "architecture",
                  "methodologies",
                  "agile",
                  "scrum",
                  "lifecyle",
                  "api",
                ];

                const otherSkills = data.skills.filter(
                  (s) =>
                    !allCategorizedKeywords.some((keyword) =>
                      s.toLowerCase().includes(keyword.toLowerCase())
                    )
                );

                if (otherSkills.length > 0) {
                  return (
                    <div className="space-y-1 pt-1">
                      <p className="text-sm font-semibold text-gray-900">
                        Other Skills / Methodologies
                      </p>
                      <p className="text-xs text-zinc-700">
                        {otherSkills.join(", ")}
                      </p>
                    </div>
                  );
                }
                return null;
              })()}
            </section>
          )}
          {data.certification && data.certification.length > 0 && (
            <section className="pt-4">
              <h2
                className="text-lg font-bold tracking-wider mb-3 text-gray-900 border-b-2"
                style={{ borderColor: accentColor }}
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
                        <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                          {cert.credential_url ? (
                            <a
                              href={cert.credential_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center hover:text-indigo-600 transition duration-150"
                              title={`View certificate from ${cert.issuer}`}
                            >
                              {cert.certificate_name}
                              <ExternalLink
                                size={12}
                                className="ml-1 opacity-75"
                              />
                            </a>
                          ) : (
                            cert.certificate_name
                          )}
                        </h3>

                        <p className="text-xs text-zinc-600 mt-0.5">
                          <span className="font-medium">{cert.issuer}</span> |
                          Issued: {formatDate(cert.issue_date)}
                        </p>

                        {cert.description && (
                          <p className="text-xs text-zinc-700 italic">
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
        </aside>
      </div>
    </div>
  );
};

export default ModernProTemplate;
