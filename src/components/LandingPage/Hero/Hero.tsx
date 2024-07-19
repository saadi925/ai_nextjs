import Image from 'next/image';
import banner from '@/assets/images/SL-072622-51930-14.jpg'
import slidermain from '@/assets/images/slider-main-image.webp'
import serviceIcon1 from '@/assets/images/service-icon-01.webp'
import serviceIcon2 from '@/assets/images/service-icon-02.webp'
import serviceIcon3 from '@/assets/images/service-icon-03.webp'
function HeroSection() {
 const asurements = [
  {
    title  :"100% No Risk, Money Back Gurantee",
    description : "Refunds will be issued within period of 14 days from the purchase date",
    img : serviceIcon1
  },{
    title  :"Upgrade or Cancel Anytime",
    description : "Passages there are many variations variations of of Lorem Ipsum available",
    img : serviceIcon2
  },{
    title  :"Not sure yet, try the free version",
    description : "Refunds will be issued within period of 14 days from the purchase date",
    img : serviceIcon3
  },

 ]
  return (
    <div className={"w-full min-h-screen flex flex-col gap-5 items-center "}>
      <Image
        src={banner}
        alt="Hero Image"
        className="w-full h-full absolute  -z-20 grayscale brightness-[5%] animate-pulse "
       fill
        quality={80}
        loading="lazy"
      />
      <div className="my-4 px-3">
 <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-20 max-w-2xl tracking-tight my-6'>
Explore and Generate your virtual world
 </h1>
 <p className='text-body my-2 text-lg'>
 Join our community today and generate useful content 
 </p>
<div className="border my-6 border-borderDark bg-blackest p-2 flex gap-2 rounded-lg  items-center">
< input  className='px-4 py-2 placeholder:text-wrap placeholder:text-sm   w-full bg-transparent outline-none' placeholder='Generate a pop art style photograph of a Viking holding an axe  ' />
<button className="px-3 py-2 bg-gradient-to-r from-primary to-gradientEnd hover:from-gradientEnd hover:to-primary transition-all duration-300 rounded-2xl ">
  Generate
</button>
</div>

      </div>
   <p className='text-body tex-lg'>
    Trusted By <span className='font-semibold text-primary'>
      100 Million   </span>
     Users WorldWide
   </p>
   <div className="w-full  flex flex-wrap bg-background lg:bg-transparent items-center justify-center py-12 gap-3 px-8  ">
    {
      asurements.map((element , index)=>(
        <div key={index} className="flex text-center max-w-xs w-full flex-col gap-2 items-center">
          <div className="w-20 h-20 z-0 relative rounded-full">
            <Image src={element.img} alt='image' className='z-0 w-full h-full rounded-full' fill />
          </div>
          <h4 className='text-2xl font-bold '>
            {element.title}
          </h4>
          <p className='text-body'>
            {element.description}
          </p>
        </div>
      ))
    }
   </div>
   <div className="px-4 sm:px-12 lg:px-20 mt-8 flex flex-col items-center h-full w-full">
 <div className="bg-dark shadow-2xl shadow-primary border-t border-r  rounded-lg border-primary aspect-square  max-h-[80vh] w-9/12  relative ">
 <Image src={slidermain} alt='main image demo' className='w-full h-full' fill /> 

 </div>
   </div>
   <div className="w-full h-96 bg-dark "></div>

    </div>
  );
}


export default HeroSection