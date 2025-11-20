import style from './Footer.module.scss'
export default function Hiro() {

    let ary = [
        {
            link: 'Resources', links: ["Download", "Help Center", "Guide Book", "App Directory"]
        },
        {
            link: 'Travellers', links: ["Why Travellers", "Enterprice", "Customer Stories", "Instagram post"]
        },
        {
            link: 'Company', links: ["Travelling", "About Locato", "Success", "Information"]
        },
        {
            link: 'Company', paragraph: "Feel free to get in touch with us vai email", email: "email@gmail.com"
        }



    ]



    return (
        <>

            <footer className={style.Footer}>

                <div className={style.FooterWrapper}>

                    {ary.map((t, i) => (
                        <div className={style.FooterColumn} key={i}>

                           
                            <span className={style.FooterTitle}>{t.link}</span>

                          
                            {t.links && (
                                <ul className={style.FooterLinks}>
                                    {t.links.map((item, idx) => (
                                        <li className={style.FooterLinkItem} key={idx}>
                                            <a href="#" className={style.FooterLink}>{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {t.paragraph && (
                                <p className={style.FooterParagraph}>{t.paragraph}</p>
                            )}

                            {t.email && (
                                <a href={`mailto:${t.email}`} className={style.FooterEmail}>{t.email}</a>
                            )}

                        </div>
                    ))}

                </div>

            </footer>

        </>
    );
}
