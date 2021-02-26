import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return(
        <div className = {styles.profileContainer}>
            <img src="https://github.com/jovicpdm.png" alt=""/>
            <div>
                <strong>João Victor Morais</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    {level}
                </p>
            </div>
        </div>
    )
}