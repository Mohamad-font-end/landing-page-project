import Image from "next/image";

import style from './tourGuides.module.scss'
import img1 from './images/Rectangle 4403.png'
import img2 from './images/Rectangle 4404.png'
import img3 from './images/Rectangle 4405.png'
import img4 from './images/Group 1000002545.png'
export default function tourGuides() {
    let ary = [
        {
            img: img1,
            imgicon: img4,
            name: 'Hasan Ahmed',
            p: 'Adventure master'
        },
        {
            img: img2,
            imgicon: img4,
            name: 'Mosqur Alam',
            p: 'Adventure master'
        },
        {
            img: img3,
            imgicon: img4,
            name: 'Foysal Khan',
            p: 'Adventure master'
        }
      
    ]
    return (

        <>

            <section className={style.tourGuides}>
                <h1 className={style.Title}>Meet our tour guides</h1>

                <div className={style.GuidesWrapper}>
                    {ary.map((t, i) => (
                        <div className={style.GuideCard} key={i}>

                           
                            <div className={style.GuidePhotoWrapper}>
                                <Image src={t.img} alt={`${t.name} photo`} className={style.GuidePhoto} />
                            </div>
                      
                            <div className={style.GuideInfo}>
                                <div className={style.GuideText}>
                                    <h3 className={style.GuideName}>{t.name}</h3>
                                    <p className={style.GuideRole}>{t.p}</p>
                                </div>
                    
                                <div className={style.GuideIconWrapper}>
                                    <Image src={t.imgicon} alt="icon" className={style.GuideIcon} />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
