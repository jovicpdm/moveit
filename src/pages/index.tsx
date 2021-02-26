import Head from 'next/head'
import {GetServerSideProps} from 'next';

import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Coutdown } from  '../components/Countdown'
import { ChallengeBox } from '../components/ChallengeBox'

import styles from '../styles/pages/Home.module.css'
import { CountdownProvider } from '../context/CountdownContext'
import { ChallengesProvider } from '../context/ChallengeContext'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {
  console.log(props)


  return (
    <ChallengesProvider
      level = {props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
    <div className={styles.container}> 
      <Head>
        <title>inicio: moveit</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Coutdown/>
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
      </CountdownProvider>
    </div>   
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const {level, currentExperience, challengesCompleted} = ctx.req.cookies
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted)
    }
  }
}