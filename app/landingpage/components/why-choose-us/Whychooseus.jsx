
import style from "./Whychooseus.module.scss"
import Image from "next/image";
import img from './image 874.png'
import icon1 from './icon/Icon1.png'
import icon2 from './icon/Iocn2.png'
import icon3 from './icon/Iocn3.png'
export default function Whychooseus() {

    let ary = [
        {
            img: icon1,
            title: 'We make all the process easy',
            paragraph: 'A galley of type and scrambled it to make a type when an unknown printer took'
        },
        {
            img: icon2,
            title: 'We make all the process easy',
            paragraph: 'A galley of type and scrambled it to make a type when an unknown printer took'
        },
        {
            img: icon3,
            title: 'Immigration & Passport Help',
            paragraph: 'A galley of type and scrambled it to make a type when an unknown printer took'
        }


    ]

    return (
        <>
            <section className={style.WhyChooseUs}>
           
                <Image src={img} alt="Main Image" className={style.MainImage} />

           
                <div className={style.ContentWrapper}>

              
                    <div className={style.Header}>
                        <h1 className={style.Title}>Why Choose Us?</h1>
                        <p className={style.Description}>
                            We make all the process easy. Dummy text ever since the is, when an unknown printer took.
                        </p>
                    </div>

             
                    <div className={style.ItemsWrapper}>
                        {ary.map((t, i) => (
                            <div className={style.Item} key={i}>

                          
                                <div className={style.ItemIconWrapper}>
                                    <Image src={t.img} alt={`Icon ${i}`} className={style.ItemIcon} />
                                </div>

                        
                                <div className={style.ItemContent}>
                                    <h2 className={style.ItemTitle}>{t.title}</h2>
                                    <p className={style.ItemDescription}>{t.paragraph}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </>
    )
}


