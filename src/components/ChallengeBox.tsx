import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengeContext'
import { CountdownContext } from '../context/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    
    return (
        <div className = {styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className = {styles.challengeActive}>
                    <header>ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className = {styles.challengeFailedButton}
                            onClick = {handleChallengeFailed}
                            >
                                falhei
                        </button>
                        <button 
                            type="button"
                            className = {styles.challengeSucceededButton}
                            onClick = {handleChallengeSucceeded}
                        >
                            completei
                        </button>
                    </footer>
                </div>            ) : (
                <div className = {styles.challengeNotActive}>
                <strong>finalize um ciclo para recbeer um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    avance de level completando desafios.
                </p>
            </div>
            ) }
        </div>
    )
}