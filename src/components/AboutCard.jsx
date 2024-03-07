
const ProjectCard = ({ data }) => {
  return (
    <article key={data.id} className="md:grid md:grid-cols-4 md:items-baseline">
      <time className="mt-1 mb-3 items-center text-sm text-zinc-400">
        {data.year}
      </time>
      <div className="md:col-span-3 group relative flex flex-col items-start">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
          <span className="relative z-10">{data.title}</span>
        </h2>
        <div className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          <p className="text-zinc-500 font-medium mb-1">{data.name}</p>
          <ul className="list-disc space-y-2 px-4">
            <li className={data.bullets}><b>Desertation topic: </b>{data.bullets}</li>
            <li className={data.special}><b>Advisor: </b>{data.special}</li>
            <li className={data.experience1}>{data.experience1}</li>
            <li className={data.experience2}>{data.experience2}</li>
          </ul>
        </div>
      </div>
    </article >
  )
}

export default ProjectCard