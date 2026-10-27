import { Link } from "react-router-dom";
import atomicHabits from "../../../assets/images/Atomic Habits.png";
import psychologyOfMoney from "../../../assets/images/the psychology of money.png";
import theEndOfSelf from "../../../assets/images/The end of self.png";
const Hero = () => {
  return (
    <section className="p-8">
      <div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-3 items-center">
          <div className="">
            <p className="text-[10px] p-2 bg-[#EEF2FF] text-[#4338CA] w-fit rounded-full ">
              {" "}
              ✦ YOUR PERSONAL READING SPACE{" "}
            </p>

            <h1 className="text-[#111827] font-heading text-5xl mt-5 mb-2">
              Every book deserves a place to belong.{" "}
            </h1>
            <p>
              Keep the stories you love, the ones you are reading, and the ones
              you cannot wait to begin all in one beautiful space where you can
              access them from anywhere and any device.
            </p>

            <div className="mt-3 flex flex-col md:flex-row gap-2 text-sm">
              <Link
                href="/"
                className="bg-accent text-white px-6 py-2 rounded-full pointer text-center hover:bg-[#4F46E5] ease-in transition-[300ms]"
              >
                Start your library
              </Link>
              <Link
                href="/"
                className="bg-white text-[#111827] px-6 py-2 rounded-full border border-[#CBD5E1] text-center hover:bg-[#f2f8ff]/10 ease-in transition-[300ms]"
              >
                {" "}
                Explore Demo{" "}
              </Link>
            </div>
            <p className="p-3 mt-2 ">
              No pressure. Just more time for stories{" "}
            </p>
            <p className="mt-10 text-[10px] bg-white p-2 text-accent w-fit rounded-full">✦  Made for book lovers</p>
          </div>

          <div className=" flex justify-center relative">
            <div className="bg-[#E8EAFD] rounded-2xl flex justify-center items-center p-4">
              <div className="bg-white rounded-2xl flex flex-col w-full">
                <div className="bg-[#Fafaff] p-3 flex rounded-2xl items-center justify-between w-full">
                  <p className="text-accent font-semibold">Bookshelves</p>
                  <p className="text-accent"> ⌕ Search books...</p>
                </div>
                <div className="p-4 mt-4">
                  <h2 className="text-[#111827] font-heading text-2xl">
                    {" "}
                    Currently Reading
                  </h2>
                  <p className="text-sm">Your stories in progress</p>

                  <div className="flex mt-3 gap-4 mr-9 ">
                    <div className="">
                      <img 
                        src={atomicHabits}
                        alt='"Atomic Habits" book cover'
                      />
                      <div className="mt-2">
                        <p className="font-semibold text-sm text-[#111827]">
                          49%
                        </p>
                        <div className="h-2 w-full bg-[#EEF2FF] rounded-full">
                          <div className="h-2 bg-accent rounded-full w-[49%]"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img
                        src={psychologyOfMoney}
                        alt='"The Psychology of Money" book cover'
                      />
                      <div className="mt-2">
                        <p className="font-semibold text-sm text-[#111827]">
                          72%
                        </p>
                        <div className="h-2 w-full bg-[#EEF2FF] rounded-full">
                          <div className="h-2 bg-accent rounded-full w-[72%]"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img
                        src={theEndOfSelf}
                        alt='"The End Of Self" book cover'
                      />
                      <div className="mt-2">
                        <p className="font-semibold text-sm text-[#111827]">
                          35%
                        </p>
                        <div className="h-2 w-full bg-[#EEF2FF] rounded-full">
                          <div className="h-2 bg-accent rounded-full w-[35%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-5 mb-5 text-[#E2E8F0] " />
                  <div className="flex justify-between text-[13px]">
                    <p>12 books finished this year</p>
                    <p className="text-accent font-semibold">
                      50% of your annual goal
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-9.5 h-9.5 bg-[#A5B4FC]/40 rounded-full -right-6 -top-5 absolute animate-pulse"></div>
            <div className="w-15.5 h-15.5 bg-[#C7D2FE]/42 rounded-full -left-8 absolute animate-pulse"></div>
            <div className="hidden md:block">
              <div className="bg-white flex text-sm h-fit p-4 gap-3 absolute rounded-xl bottom-7 shadow-app -left-6">
                <div className="w-1 bg-accent rounded"></div>
                <div>
                  <p className="font-semibold text-[#1E293B]">+12 books</p>
                  <p>Finished this year</p>
                </div>
              </div>
              <div className="bg-white flex text-sm h-fit p-4 gap-3 absolute rounded-xl -bottom-7 shadow-app -right-4">
                <div className="w-1 bg-[#10B981] rounded"></div>
                <div>
                  <p className="font-semibold text-[#1E293B]">↗ 50%</p>
                  <p>Annual goal reached </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
