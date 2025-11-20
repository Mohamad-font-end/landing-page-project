import style from './BestTourOperator.module.scss'
import img from './image 873.png'
import Image from "next/image";
export default function BestTourOperator() {



    return (
        <>
            <div className={style.BestTourOperator}>
                <div className={style.Content}>
                    <span className={style.Subtitle}>Who we are</span>
                    <h1 className={style.Title}>We are best tourist operator</h1>
                    <p className={style.Description}>
                        We are a small family owned, award-winning operation
                        that specializes in providing highly personalized
                        service to our discerning clientele.
                        Our goal is to exceed your expectations
                        and make your trip an unforgettable experience.
                    </p>
                </div>
                <div className={style.ImageWrapper}>
                    <Image src={img} alt="Tour Operator" className={style.Image} />
                </div>
            </div>

        </>
    );
}
