import {Link} from "react-router-dom";
import atomicHabits from "../../../assets/images/Atomic Habits.png"
const Hero = () => {
  return (
    <section className="p-8">
        <div>
            <div className="grid md:grid-cols-2 gap-3 ">
                <div className="">
                    <p className="text-[12px] p-2 bg-[#EEF2FF] text-[#4338CA] w-fit rounded-full "> ✦ YOUR PERSONAL READING SPACE </p>
                     
                    <h1 className="text-[#111827] font-heading text-5xl">Every book deserves a place to belong. </h1>
                    <p>Keep the stories you love, the ones you are reading, and the ones you cannot wait to begin all in one beautiful space where you can access them from anywhere and any device.</p>

                    <div className="mt-3 flex flex-col md:flex-row gap-2 text-sm">
                        <Link href= "/" className="bg-accent text-white px-6 py-2 rounded-full pointer">Start your library</Link>
                        <Link href="/" className="bg-white text-[#111827] px-6 py-2 rounded-full border border-[#CBD5E1]"> Explore Demo </Link>
                    </div>
                    <p className="p-[12px] mt-2 ">No pressure. Just more time for stories </p>
                </div>

                <div className="mt-8 ">
                    <div className="bg-[#E8EAFD] rounded-2xl flex justify-center items-center p-4">
                        <div className="bg-white rounded-2xl flex flex-col w-full">
                            <div className="bg-[#F8FAFC] p-3 flex rounded-2xl items-center justify-between w-full">
                                <p className="text-accent font-semibold">Bookshelves</p>
                                <p className="text-accent"> ⌕ Search books...</p>
                            </div>
                            <div className="p-4 mt-4">
                                <h2 className="text-[#111827] font-heading text-2xl"> Currently Reading</h2>
                                <p className="text-sm">Your stories in progress</p>

                                <div className="flex ">
                                    <div>
                                        <img src={atomicHabits} alt='"Atomic Habits" book cover'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero