import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengeContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal(){
    const { level, closeLevelUpModal} = useContext(ChallengesContext)
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>parabéns</strong>
                <p>você alcançou um novo level.</p>

                <button type="button" onClick = {closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="fechar"/>
                </button>
            </div>
        </div>
    )
}