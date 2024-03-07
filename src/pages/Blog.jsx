import Article from '../components/Article'

const Blog = () => {
  return (
    <section className="bg-slate-50">
      <div className='relative px-4 sm:px-8 lg:px-12'>
        <header class="py-16 text-center">
          <h1 class="mb-4 text-2xl sm:text-3xl tracking-tight text-indigo-500 font-bold">
            Latest Updates
          </h1>
          <p class="text-base text-slate-700">
            Featuring data science tutorials
          </p>
        </header>
        <div className="flex justify-center items-center">
          <div className='md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'>
            <div className='flex flex-col max-w-3xl space-y-16'>
              <Article />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog