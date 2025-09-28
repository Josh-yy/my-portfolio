import styles from './IconButton.module.css'

function IconButton({children, ...props}){
    return (
        <button className={styles.iconButton} {...props}>
            {children}
        </button>
    );
}

export default IconButton