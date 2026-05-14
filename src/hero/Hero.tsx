import HeroTitle from "./HeroTitle";

const heroKeywords = ["Creative", "Design", "Web", "Development", "Motion", "UI/UX", "Strategia", "Produkcja"];
const heroSubtitle = "zorientowany na";


export default function Hero() {
    return (
        <>
            <section className="min-h-screen flex flex-col p-5 md:p-6 lg:p-8 gap-y-3.5">

                <div className="flex flex-col flex-none gap-1.5 ">
                    <div className="w-full">
                        <HeroTitle variant="primary" className="size-full " />
                    </div>
                    <p className="font-bodoni italic text-xl text-center font-light md:text-2xl lg:text-3xl">{heroSubtitle}</p>
                </div>

                <div className="pixijs-placeholder border flex-1 min-h-0">
                    <div className="">przyszle zdjecie</div>
                </div>

                <div className="flex flex-col md:flex-row gap-2.5 ">
                    <h1 className="md:max-w-1/3 flex items-center justify-start flex-wrap gap-2 text-xl md:text-2xl lg:text-3xl">
                        {heroKeywords.map((word, i) => (
                            <span className="leading-none uppercase" key={i}>{word}</span>
                        ))}
                    </h1>
                    <div className="ml-auto w-full max-w-1/2">
                        <HeroTitle variant="secondary" className="size-full " />
                    </div>
                </div>
            </section>
            <div className="min-h-[50vh] border bg-gray-300" />
        </>
    )
}
