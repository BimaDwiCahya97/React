import styles from './CssnyaBanner.module.css'

import { Button } from 'react-bootstrap';
const Banner = () => {
    return(

    <div className={styles.backgroundContainer}>
    <Button> ini tombol bootstrap</Button>
    <div className={styles.bgColor}>banner1</div>
    <div>banner2</div>

    </div>

    );
}
export  default Banner