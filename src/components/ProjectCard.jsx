function ProjectCard({ project }) {
    const { title, description, image_link, github_url, live_url } = project;
  
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <img
          loading="lazy" className="rounded-t-lg" src={image_link} alt={title} />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <a
            href={github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#FF4500] rounded-lg hover:bg-orange-800 focus:ring-2 focus:outline-none dark:border-2 dark:border-[#FF4500] focus:ring-blue-300 dark:bg-[#FF4500] dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            View Code
          </a>
          <a
            href={live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:border-2 dark:border-[#FF4500] dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-900 ml-2"
          >
            View Live
          </a>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;
  