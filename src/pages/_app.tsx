
import React, { useState } from 'react'
import styles from '../styles/app.module.scss'
import '../styles/globals.scss'
import {Header} from "../components/Header"
import {Player} from "../components/Player"
import { PlayerContext } from '../context/PlayerContext'

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const[isPlaying,setIsPlaying] = useState(false)

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }
  function togglePlay(){
    setIsPlaying(!isPlaying);
  }
  return (
    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play,isPlaying,togglePlay}}>
    <div className={styles.wrapper}>
      <main>
      <Header />
      <Component {...pageProps} />
      </main>
      <Player />
    </div>
    </PlayerContext.Provider>
  )
}

export default MyApp
