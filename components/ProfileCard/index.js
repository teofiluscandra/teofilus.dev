import Title from '../Title'
import Subtitle from '../Subtitle'

const ProfileCard = () => {
    return (
        <section className="pb-10">
            <div className="flex items-center">
                <div className="w-full md:w-2/3 md:pr-6">
                    <Title title="Teofilus Candra" />
                    <Subtitle subtitle="Gusdurian | Orang Indonesia, Tinggal di Bali, Pemerhati Isu Sosial dan Perekayasa Perangkat Lunak" />
                    <div className="social-buttons flex">
                        
                    </div>
                </div>
                <div className="hidden md:block w-1/3 flex justify-end">
                    <img src="/static/profile_400x400.jpg" className="shadow-lg rounded-full w-40 h-40"></img>
                </div>
            </div>
        </section>
    )
}

export default ProfileCard;