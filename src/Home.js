import metacolored from './img/brand-image.11ab2229.png'
import menu from './img/menu-icon.png'

const Home = () => {
    return ( 
        <div>
            <main>
                <nav>
                    <div>
                        <div className=''>
                            <a href="/"><img src={metacolored} alt="" /></a>
                        </div>
                        <div>
                            <a href="/">
                                Home
                            </a>
                            <a href="">
                                Place to stay
                            </a>
                            <a href="">
                                NFTs
                            </a>
                            <a href="">
                                Community
                            </a>
                        </div>
                        <div className='block lg:hidden'>
                            <button className='block lg:hidden'>
                                <img src={menu} alt="" className='' />
                            </button>
                        </div>
                    </div>
                </nav>
            </main>
        </div>
     );
}
 
export default Home;