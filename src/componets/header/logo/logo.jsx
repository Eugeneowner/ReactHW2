import s from '../header.module.scss'
import logoImg from './logo.png'

const Logo = () =>{
return (
    <div className={s.header_logo}>
        <img className={s.header_logo_img} src={logoImg} alt="logo" title="logo"/>
    </div>
)
}

export default Logo