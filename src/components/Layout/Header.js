import React from 'react';
import styles from '../Layout/Header.module.css';
import Card from '../UI/Card';
import CartIcon from "../Cart/CartIcon";

const Header = (props) =>
{
    const headeClasses = `${styles.logo} ${styles['flex-container']}`;
    return (
        <Card>
            <header className={ headeClasses } >
                <div className={styles.flexgrow}>
                    <h2>Food Online </h2>
                </div>
                <div className={`${styles.flexgrow} ${styles['align-right']}`}>
                <CartIcon onClick={props.onShowCart} />
                </div>
            </header>
        </Card>

    );

}
export default Header;