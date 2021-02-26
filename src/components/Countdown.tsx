import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../context/ChallengeContext';
import { CountdownContext } from '../context/CountdownContext';
import styles from '../styles/components/Coutdown.module.css'


export function Coutdown() {
    const {
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return(
        <div>
            <div className = {styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>


        {/* ? é usado quando há duas condicionais
            && é usado quando há uma */}

        {hasFinished ? (
             <button 
             disabled
             type="button" 
             className = {styles.countdownButton}
             
             >
             ciclo encerrado    
         </button>
        ) : (
            <>
            {isActive ? (
                <button 
                    type="button" 
                    className = {`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick = {resetCountdown}>
                    abandonar ciclo    
                </button>
            ) : (
                <button 
                    type="button" 
                    className = {styles.countdownButton}
                    onClick = {startCountdown}>
                    iniciar ciclo    
                </button>
        )}
            </>
        )}
        </div>
    )
}