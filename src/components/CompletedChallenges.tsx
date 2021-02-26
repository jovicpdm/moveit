import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengeContext';
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {

    const {challengesCompleted} = useContext(ChallengesContext);
    return (
        <div className = {styles.completedChallengesContaines}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}