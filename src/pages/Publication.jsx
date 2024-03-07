import Conferences from "../assets/database/ConferenceList.json"
import Journals from "../assets/database/JournalList.json"

const Publication = () => {
  return (
    <section className="bg-slate-50 pb-16">
      <div className='relative px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto'>
        <header className="py-16 text-center">
          <h1 className="mb-4 text-2xl sm:text-3xl tracking-tight text-indigo-500 font-bold">
            Publication
          </h1>
          <p className="text-base text-slate-700">
            Featuring journal papers and conference papers
          </p>
        </header>
        <div>
          <header>
            <h1 className="mb-4 text-xl sm:text-xl tracking-tight text-indigo-500 font-bold">
              Journal Papers
            </h1>
          </header>
          <div className="flex">
            <div className='md:border-l md:border-zinc-100 md:pl-6'>
              <div className='flex flex-col px-4 sm:px-0'>
                <ul className='list-decimal list-outside space-y-4'>
                  {
                    Journals.map(data => {
                      return (
                        <li>
                          {data.author_start}, <b>{data.aurthor_bold}</b>, {data.author_end}. {data.paper}, <i>{data.journal}</i>, {data.page} ({data.year}). <a className="text-indigo-500 underline" href={data.link} target='_blank'>{data.link}</a>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <header className="pt-8">
            <h1 className="mb-4 text-xl sm:text-xl tracking-tight text-indigo-500 font-bold">
              Conference Papers
            </h1>
          </header>
          <div className="flex">
            <div className='md:border-l md:border-zinc-100 md:pl-6'>
              <div className='flex flex-col px-4 sm:px-0'>
                <ol className='list-decimal list-outside space-y-4'>
                  {
                    Conferences.map(data => {
                      return (
                        <li>
                          {data.author_start}, <b>{data.aurthor_bold}</b>, {data.author_end}, ({data.year}). {data.paper}, {data.conference}, <b>{data.venue}</b>"
                        </li>
                      )
                    })
                  }
                </ol>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section >
  )
}

export default Publication