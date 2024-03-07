import { GlobeAsiaAustraliaIcon, CubeIcon } from "@heroicons/react/24/solid"

const MultiText = () => {
  return (
    <div>
      <a href="/">
        <div className="flex items-center typewriter">

          <CubeIcon className="h-7 w-7 mr-2 text-indigo-500" aria-hidden="true" />
          <div className="text font-semibold">
            <div className="wrapper">
              <p className="text-nowrap">Hello!</p>
              <p className="text-nowrap">नमस्ते</p>
              <p className="text-nowrap">নমস্কার</p>
            </div>
          </div>

        </div>
      </a>
    </div>
  )
}

export default MultiText