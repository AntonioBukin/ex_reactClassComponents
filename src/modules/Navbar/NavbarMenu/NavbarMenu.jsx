import { Component } from "react"; //(крок 1) Імпортувати з react класс Components 

import styles from "./navbar-menu.module.scss";

//(крок 2) Створити дочірній клас від класу Components, прописавши в ньому метод render, 
//який повертає HTML-розмітку компонента

class NavbarMenu extends Component {
    render() {
        const {items} = this.props;
        const elements = items.map(({id, link, text}) => (
        <li key={id}>
            <a href={link} className={styles.link}>{text}</a>
        </li>
        ));

        return (
            <ul className={styles.menu}>
                {elements}
            </ul>
        )
    }
}

export default NavbarMenu;