import React from 'react';
import PageHead from '../components/PageHead';
import Hero from '../components/Hero';
import Summary from '../components/Summary';
import Education from '../components/Education';
import Repos from '../components/Repos'
import Footer from '../components/Footer';

const Home = ({ user, repos }) => {
  return (
    <div className="container mx-auto bg-network" >
      <PageHead />
      <Hero />
      <Summary />
      <Education />
      <Repos user={user} repos={repos} />
      <Footer />
    </div>
  )
}

export const getServerSideProps = async(context) => {
  const respUser = await fetch('https://api.github.com/users/viniciusmoreira');
  const user = await respUser.json();

  const response = await fetch('https://api.github.com/users/viniciusmoreira/repos?sort=updated');
  const originalRepos = await response.json();

  const isNotFork = repo => !repo.fork

  const repos = originalRepos
                  .filter(isNotFork)
                  .map(repo => ({
                    id: repo.id,
                    language: repo.language,
                    stargazers_count: repo.stargazers_count,
                    full_name: repo.full_name
                  }))

  return {
    props: {
      repos,
      user
    }
  }
}


export default Home;