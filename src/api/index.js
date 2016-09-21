import config from './config'
import fetch from 'isomorphic-fetch'

function callApi(url, method = 'get') {
  return fetch(`${url}`, {
    headers: config.headers,
    method
  })
  .then((response) => {
      if(!response.ok) {
        return Promise.reject(response)
      }

      return response.json()
  })
  .catch((response) => console.log(`API call failed because: ${response.status} ${response.statusText}`))
}

// Returns a user by their username
export function getSummonerByName(name) {
  const URL = `https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/${name}?api_key=${config.key}`
  return callApi(URL).then((response) => response[name])
}

// Returns the match list for a given user id. Not doing it now but we'd also filter based on start + end
export function getMatchList(summoner) {
  // obviously can enter query params (start + end in 'epoch milliseconds')
  const URL = `https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/${summoner['id']}?api_key=${config.key}`
  return callApi(URL)
}

// Returns a match. The statistics on a player are nested in res -> participants -> stats
export function getMatch() {
  const URL = `https://na.api.pvp.net/api/lol/na/v2.2/match/2296770190?api_key=${config.key}`
  return callApi(URL)
}

export function getSummonerLeague(summoner) {
  const URL = `https://na.api.pvp.net/api/lol/na/v2.5/league/by-summoner/${summoner['id']}/entry?api_key=${config.key}`
  return callApi(URL)
}

