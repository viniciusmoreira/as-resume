import React from 'react';
import { GoStar } from 'react-icons/go';

const Repo = ({ repo }) => {
  return (
    <a href={'https://github.com/' + repo.full_name}>
      <div className="m-3 md:m-0 rounded bg-white p-4 hover:bg-gray-200 shadow-md transition duration-500">
        <h3 className="font-bold truncate">{repo.full_name}</h3>
        <p>Language: {repo.language} / <GoStar className="inline-block"/> Stars: {repo.stargazers_count}</p>
      </div>
    </a>
  )
}

export default Repo;