const getUser = async (username) => {

  const respUser = await fetch(`https://api.github.com/users/${username}`);
  const user = await respUser.json();

  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
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
    user,
    repos
  }

}

export default getUser;