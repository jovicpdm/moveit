import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return(
        <div className = {styles.profileContainer}>
            <img src="https://github.com/jovicpdm.png" alt=""/>
            <div>
                <strong>João Victor Morais</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}