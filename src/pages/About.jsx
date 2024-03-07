import AboutCard from '../components/AboutCard'

const About = () => {
  return (
    <section className="pb-16">
      <div className='relative px-4 sm:px-8 lg:px-12'>
        <header class="py-16 text-center">
          <h1 class="mb-4 text-2xl sm:text-3xl tracking-tight text-indigo-500 font-bold">
            About me!
          </h1>
          <p class="text-base text-slate-700">
            Education, professional experience
          </p>
        </header>
        <div className="flex justify-center items-center">
          <div className='md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'>
            <div className='flex flex-col max-w-3xl space-y-8'>

              <AboutCard
                data={{
                  title: "Indian Institute of Technology Kharagpur, India",
                  name: "B.Tech. (Hons.) 4-Year, Civil Engineering",
                  year: "07/2013 - 08/2017",
                  bullets: "Simultaneous wastewater treatment, desalination and bio-electricity generation using Microbial Desalination Cells (MDCs) with algal biocathode",
                  special: "Prof. Makarand Madhao Ghangrekar, Department of Civil Engineering",
                  experience1: "hidden",
                  experience2: "hidden"
                }}
              />

              <AboutCard
                data={{
                  title: "Coal India Limited, Ministry of Coal, Government of India",
                  name: "Project Engineer, Magadh Opencast project, Jharkhand",
                  year: "10/2017 - Present",
                  bullets: "hidden",
                  special: "hidden",
                  experience1: "Looking after the construction of 15 KLD sewerage treatment plant and its sewerage network for new office complex",
                  experience2: "Responsible of developing infrastructures in mine premises for production as well evacuation of 20 MT of coal"
                }}
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About