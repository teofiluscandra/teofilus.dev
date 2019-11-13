import Title from '../Title'
import Subtitle from '../Subtitle'

const ProfileCard = () => {
    return (
        <section className="pb-10">
            <div className="flex items-center">
                <div className="w-full md:w-2/3 md:pr-6">
                    <Title title={process.env.NAME} />
                    <Subtitle subtitle={process.env.DESC} />
                    <div className="social-buttons flex">
                        
                    </div>
                </div>
                <div className="hidden md:block w-1/3 flex justify-end">
                    <img src={process.env.URL_PHOTO} className="shadow-lg rounded-full w-40 h-40"></img>
                </div>
            </div>
        </section>
    )
}

export default ProfileCard;