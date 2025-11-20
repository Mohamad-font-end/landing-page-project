
import Header from "../../components/Header/Header.js"
import Hiro from "./components/Hiro/Hiro.jsx"
import BestTourOperator from "./components/best-tour-operator/BestTourOperator.jsx"
import Whychooseus from "./components/why-choose-us/Whychooseus.jsx"
import TourGuides from "./components/tour-Guides/TourGuides.jsx"
import Newsletter from "./components/newsletter/Newsletter.jsx"
import Footer from '../../components/Footer/Footer.jsx'
import style from './Project.module.scss'

export default function pagelanding() {
    return (
        <>
            <div className={style.page}>
                <section className={style.context}  >

                    <Header />
                    <Hiro />
                </section>
                <BestTourOperator />
                <Whychooseus />
                <TourGuides />
                <Newsletter />
                <Footer />
            </div>
        </>
    )

}
