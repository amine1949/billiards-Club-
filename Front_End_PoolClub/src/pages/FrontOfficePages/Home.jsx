import { BodyHome } from "../../components/FrontOfficeComponents/Home/BodyHome"
import { Comment } from "../../components/FrontOfficeComponents/Home/Comment"
import { ContactComponents } from "../../components/FrontOfficeComponents/ContactComponents"
import { FaqComponent } from "../../components/FrontOfficeComponents/FaqComponent"
import { HeroSectionHome } from "../../components/FrontOfficeComponents/Home/HeroSectionHome"
import { Galerry } from "../../components/FrontOfficeComponents/Home/Galerry"

const Home = () => {
    return (
        <>
            <HeroSectionHome />
            <BodyHome />
            <Galerry />
            <Comment />
            <FaqComponent />
            <ContactComponents />
        </>
    )
}

export default Home
