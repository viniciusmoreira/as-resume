import React from 'react';
import UserStats from './UserStats';
import Repo from './Repo'

const Repos = ({ user, repos }) => {
  return (
    <div>
      <h3 className="text-3xl md:text-4xl font-bold text-center text-orange uppercase mt-10">Tech contributions</h3>
      <UserStats user={user} />
      <div className="md:grid md:gap-2 md:grid-cols-3 md:my-6">
        {
          repos.map(repo => {
            return (
              <Repo key={repo.id} repo={repo} />
            )
          })
        }
      </div>
    </div>      
  )
}

export default Repos;