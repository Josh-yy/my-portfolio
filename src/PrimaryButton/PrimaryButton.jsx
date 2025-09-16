import styles from './PrimaryButton.module.css'

function PrimaryButton(props){
    return (
        <a href={props.href} className={styles.primaryButton}>
            {props.text}
        </a>
    );
}

export default PrimaryButton