import React, { FC } from 'react'
import config from '../config/portfolio.config'

export const Projects: FC = () => {
  const groupedProjects = config.projects.reduce(
    (acc, project) => {
      const category = project.category ?? 'Projects'
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(project)
      return acc
    },
    {} as Record<string, typeof config.projects>
  )

  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-400 font-mono text-sm mb-3 uppercase tracking-widest">
            My work
          </p>
          <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
        </div>

        <div className="space-y-12">
          {Object.entries(groupedProjects).map(([category, projects]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-white mb-6">{category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="group bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 flex flex-col hover:border-violet-700/60 hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="p-2 rounded-lg bg-violet-950/60 border border-violet-800/40">
                          <svg
                            className="w-5 h-5 text-violet-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                        </div>
                        <div className="flex gap-2">
                          {project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Repository"
                              className="text-gray-500 hover:text-white transition-colors"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                              </svg>
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Live demo"
                              className="text-gray-500 hover:text-white transition-colors"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-gray-700/60 text-gray-400 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
