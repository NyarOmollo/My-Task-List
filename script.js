let fetchRepositories = username => {
    fetch (https://api.github.com/users/${username.login}/repos')
    .then(resp => resp.json())
    .then(repos => {renderRepositoryDetails(repos) })
    .catch(error => {alert(another bug!) });
}

//renders repos details for each retreived toy from the response
let renderRepositoryDetails = repos => {
    repos.forEach(repo =>createreposCardElement(repo) )
}


let createReposCardElement = repo => {
    const repositoryCard = document.createElement("div")
    repositoryCard.ClassName = "repo-card"
    document.querySelector("repos-list").appendChild(repositoryCard);
    repositoryCard.innerHTML = `<h2 class="margin-none">$(repo.name)></h2>`
                                + `<p class ="fs12 margin-none">$(repo.description)</p>`
}                             


document.addEventListener("DOMContentLoaded".init)https:/api.github.com/search/users?q=${username}