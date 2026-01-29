"use client";

import { useProjects, useBlogPosts, useAvailability } from "@/hooks/useContent";

export default function Home() {
  const projects = useProjects();
  const posts = useBlogPosts();
  const availability = useAvailability();

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">My Blink App</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Edit content in Notion, see it here instantly.
        </p>
        {availability && (
          <div className="mt-4 flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                availability.status === "Available"
                  ? "bg-green-500"
                  : availability.status === "Limited"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            />
            <span className="text-sm">{availability.status}</span>
          </div>
        )}
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        {!projects ? (
          <p className="text-gray-500">Loading projects...</p>
        ) : projects.length === 0 ? (
          <p className="text-gray-500">
            No projects yet. Add some in Notion and run <code>npm run blink:sync</code>
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project._id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border rounded-lg hover:border-blue-500 transition-colors"
                style={{
                  backgroundColor: project.colors?.bg,
                  color: project.colors?.text,
                }}
              >
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm opacity-80">{project.subtitle}</p>
              </a>
            ))}
          </div>
        )}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
        {!posts ? (
          <p className="text-gray-500">Loading posts...</p>
        ) : posts.length === 0 ? (
          <p className="text-gray-500">
            No posts yet. Add some in Notion and run <code>npm run blink:sync</code>
          </p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <article key={post._id} className="p-4 border rounded-lg">
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.date}</p>
                <p className="mt-2">{post.excerpt}</p>
                <div className="mt-2 flex gap-2">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="text-center text-sm text-gray-500 mt-20">
        <p>
          Powered by{" "}
          <a href="https://blink.dev" className="text-blue-500 hover:underline">
            Blink
          </a>{" "}
          — Edit. Blink. Live.
        </p>
      </footer>
    </main>
  );
}
