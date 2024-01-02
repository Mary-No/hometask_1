import s from './Loader.module.css'
import preloader from './images/spinning-dots.svg'
export const Loader = () => <img className={s.loader} src={preloader} alt="preloader"/>
