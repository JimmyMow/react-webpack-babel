import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './app.scss'
import React from 'react'
import { getSummonerByName, getMatchlist, getMatch } from './api'

export default class App extends React.Component {
  componentWillMount() {
    // getSummonerByName('faker').then(res => {
    //   console.log(res)
    // })
    // getMatchlist(35388056).then(res => {
    //   console.log(res)
    // })
    // getMatch(2296770190).then(res => {
    //   console.log(res)
    // })
  }

  render() {
    return (
      <div>
        <h1>PwnyUp</h1>
        <p>super duper simple react + babel + webpack to test api and stuff</p>
      </div>
    )
  }
}