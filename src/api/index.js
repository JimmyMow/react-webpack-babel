import fetch from 'isomorphic-fetch'
import config from './config'

function callApi(url, method = 'get') {
  return fetch(`${url}`, {
    headers: config.headers,
    method
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }

    return json;
  })
  .then(
    response => response,
    error => error
  );
}

// Returns a user by their username
export function getSummonerByName(name) {
	const URL = `https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/${name}?api_key=${config.key}`
	return callApi(URL)
}

// Returns the match list for a given user id. Not doing it now but we'd also filter based on start + end
export function getMatchlist(id) {
	// obviously can enter query params (start + end in 'epoch milliseconds')
	const URL = `https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/${id}?api_key=${config.key}`
	return callApi(URL)
}

// Returns a match. The statistics on a player are nested in res -> participants -> stats
export function getMatch(id) {
	const URL = `https://na.api.pvp.net/api/lol/na/v2.2/match/2296770190?api_key=${config.key}`
	return callApi(URL)
}




