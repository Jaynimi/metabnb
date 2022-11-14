import img41 from './img/imageA.66ddcf04.png';
import img42 from './img/imageD.d6660991.png';
import img43 from './img/imageC.00c2f039.png';
import img44 from './img/imageB.a0d59941.png';
import img31 from './img/mbtoken.png'
import img32 from './img/logo.eeb2f3c5.svg';
import img33 from './img/Frame.c87d7ec3.svg';

const Home = () => {
    return ( 
        <div>

            <div class=" mx-5 mt-8 mb-6 flex flex-col justify-between pt-10 md:my-[4rem] md:mx-10 md:flex-row md:items-center md:pt-0 lg:mx-[4rem] ">
                <div class="flex flex-col gap-5 md:w-4/5 lg:w-1/2 lg:gap-[48px]">
                    <h1 class="text-[1.75rem] font-normal text-[#434343] lg:text-[46px] lg:leading-[3rem]">
                        Rent a 
                        <span class="font-bold text-[#A02279]">Place</span> 
                        away from 
                        <span class="font-bold text-[#A02279]">Home</span>
                         in the 
                        <span class="font-bold text-[#A02279]">Metaverse</span>
                    </h1>
                    <p class=" text-sm text-[#434343] md:text-lg lg:text-2xl">
                        we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                    </p>
                    <div>
                        <input type="text" placeholder="Search for location" class="w-2/3 rounded-tl-lg rounded-bl-lg border-2 px-2 py-2 md:py-4 tall:w-1/2"/>
                            <button class="w-1/3 rounded-tr-lg rounded-br-lg border-2 border-[#A02279] bg-[#A02279] py-2 px-2 text-white md:py-4 lg:w-[10rem]">
                                Search
                            </button>
                    </div>
                </div>
                <div class="mt-5  pl-5 lg:mt-0 ">
                    <div class=" grid grid-cols-2 grid-rows-5 justify-items-center gap-4">
                        <div class="row-span-2 row-start-2">
                            <img src={img41} alt="nfts"/>
                        </div>
                        <div class="row-span-2 row-start-4">
                            <img src={img42} alt="nfts"/>
                        </div>
                        <div class="row-span-2">
                            <img src={img43} alt="nfts"/>
                        </div>
                        <div class="row-span-2">
                            <img src={img44} alt="nfts"/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='flex justify-evenly bg-[#A02279] p-2'>
                <img src={img31} class="w-[6rem] md:w-[150px] lg:w-[214.14px]" alt="nfts"/>
                <img src={img32} class="w-[6rem] md:w-[150px] lg:w-[214.14px]" alt="nfts"/>
                <img src={img33} class="w-[6rem] md:w-[150px] lg:w-[214.14px]" alt="nfts"></img>
            </div>

        </div>
     );
}
 
 
export default Home;