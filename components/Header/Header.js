
import style from './Header.module.scss'
import Image from "next/image";
export default function Header() {

    const links = ['Home', 'About', 'Destinations', 'Blog', 'Pages'];

    return (
        <>
            <header className={style.Header}>
                <Image src='/images/logo/Logo.png' alt='Logo' width={164} height={36} />
                <ul className={style.ul} >
                    {
                        links.map((t, i) => {
                            return (
                                <li key={i} className={style.li}> <a className={style.links} href='#'> {t}  </a> </li>

                            )
                        })
                    }
                </ul>
                <button  className={style.btn}>  Contact us</button>
            </header>
        </>
    );
}
