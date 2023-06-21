import styles from "./navbar.module.scss";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className="container">
                <div className={styles.navbarRow}>
                <a href="#top">Logo</a>
                <button>To do list</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;