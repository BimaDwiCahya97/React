import styles from './CssnyaBanner.module.css'

import { Button } from 'react-bootstrap';
const Banner = () => {
    return(

    <div className={styles.backgroundContainer}>
    <Button> ini tombol bootstrap</Button>
    <br />
    <div className={styles.bgColor} style={{marginBottom : "20px", marginTop: "20px", display: "inline-block"}}>banner1</div>
    <div>banner2</div>

    </div>
    );
}
export  default Banner