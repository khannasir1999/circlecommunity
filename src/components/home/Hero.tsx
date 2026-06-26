import heroBg from "@/src/assets/images/home/heroImage.png";
import flowers from "@/src/assets/images/home/flowers.png";
export default function Hero() {

    return (
        <section className="relative min-h-screen overflow-hidden">
            <div className="container mx-auto">
                <img src={heroBg.src} alt="hero" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-black/30">
                    <img src={flowers.src} alt="flowers" className="absolute bottom-0 left-0 w-64 lg:w-80 xl:w-100 2xl:w-120 pointer-events-none" />
                    <div className="relative z-10 flex flex-col justify-center min-h-screen left-185 max-w-[750px]">
                    <p className="text-[#FFFFFF] text-[40px] font-bold font-[family-name:var(--font-montserrat)]">
                        Navigating Life's waves
                    </p>
                    <p className="text-[#7AAD9D] text-[48px] font-normal">
                        Through Prayer and Meditation
                    </p>
                    <p className="text-[#FFFFFF] text-[20px] font-medium">
                        Born from a seminary ministry project, this platform explores the inevitable waves of life, change, and growing older. Through every turbulent storm and gentle tide, prayer and meditation serve as anchors for lasting peace and stability. No matter where you are on your path, we are all sharing this journey of transformation together.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
