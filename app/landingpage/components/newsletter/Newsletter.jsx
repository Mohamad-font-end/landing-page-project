import style from './newsletter.module.scss'
import imgBtn from './img-btn/Vector.png'
import decor1 from './bgDecor/Polygon 15.png';
import decor2 from './bgDecor/Ellipse 2702.png';
import Image from "next/image";

export default function newsletter() {

    return (
        <>
            <section className={style.newsletter}>

                <div className={style.NewsletterWrapper}>

                    <div className={style.DecorLeft}>
                        <Image src={decor1} alt="decor 1" className={style.DecorImage} />
                    </div>


                    <div className={style.Content}>

                        <h1 className={style.Title}>
                            Subscribe our newsletter
                        </h1>

                        <p className={style.Description}>
                            Reciev latest news, update, and many other things every week.
                        </p>

                        <div className={style.Form}>
                            <input
                                type="text"
                                placeholder="Enter Your email address"
                                className={style.Input}
                            />

                            <button className={style.Button}>
                               <Image src={imgBtn} alt="imgBtn" className={style.btnImage} />
                            </button>
                        </div>

                    </div>

                    <div className={style.DecorRight}>
                        <Image src={decor2} alt="decor 2" className={style.DecorImage} />
                    </div>
                </div>
            </section>

        </>
    );
}
