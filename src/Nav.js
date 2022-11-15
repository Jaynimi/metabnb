import metacolored from './img/brand-image.11ab2229.png'
import menu from './img/menu-icon.png'

const Home = () => {
    return ( 
        <div >
            <div className=''>
                <main >
                    <nav className='w-11/12'>
                        <div className='fixed top-0 z-50 w-full bg-white pt-6 pb-3 pr-14 pl-14 flex flex-row justify-between border border-gray-100 border-b-1 border-t-0 border-r-0 border-l-0 '>
                            <div>
                                <a href="/"><img src={metacolored} alt="" className='md:w-[180px] lg:w-[200px]'/></a>
                            </div>
                            <div className='flex text-[#434343] md:gap-5 md:text-sm lg:gap-8 lg:text-xl '>
                                <a aria-current="page" className="text-[#A02279]" href="/">
                                    Home
                                </a>
                                <a className="hover:text-[#A02279]" href="/PlaceToStay">
                                    Place to stay
                                </a>
                                <a aria-current="page" className="active hover:text-[#A02279]" href="/">
                                    NFTs
                                </a>
                                <a aria-current="page" className="active hover:text-[#A02279]" href="/">
                                    Community
                                </a>
                            </div>
                            <div className='block lg:hidden'>
                                <button className='block sm:hidden'>
                                    <img src={menu} alt="" className='' />
                                </button>
                            </div>
                            <div>
                                <button className="rounded-[10px] bg-[#A02279] py-2 px-4 text-base text-white">Connect Wallet</button>
                            </div>
                        </div>
                    </nav>
                    <div className='bg-inherit h-32'></div>
                </main>
            </div>
        </div>
     );
}
 
export default Home;