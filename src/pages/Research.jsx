import ProjectCard from '../components/ProjectCard'
import ProjectList from '../assets/database/ProjectList.json'

const Blog = () => {
  return (
    <section className="bg-slate-50 pb-16">
      <div className='relative px-4 sm:px-8 lg:px-12'>
        <header class="py-16 text-center">
          <h1 class="mb-4 text-2xl sm:text-3xl tracking-tight text-indigo-500 font-bold">
            Research projects
          </h1>
          <p class="text-base text-slate-700">
            Featuring research projects and industrial projects
          </p>
        </header>
        <div className="flex justify-center items-center">
          <div className='md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'>
            <div className='flex flex-col max-w-4xl space-y-8'>
              {
                ProjectList.map(item => {
                  return (
                    <ProjectCard
                      data={{
                        key: item.id,
                        title: item.title,
                        advisor: item.advisor,
                        year: item.year,
                        bullets: item.bullets,
                        special: item.special,
                        link: item.link
                      }}
                    />
                  )
                })
              }

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog