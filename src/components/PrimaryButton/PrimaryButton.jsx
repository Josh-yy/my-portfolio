import styles from './PrimaryButton.module.css'

function PrimaryButton(props){
    return (
        <button className={styles.primaryButton}>
            {props.text}
        </button>
    );
}

export default PrimaryButton