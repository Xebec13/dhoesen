import HeroTitle from "./HeroTitle";

const keywords = ["Creative", "Design", "Motion", "Web", "Development", "Motion", "UI/UX", "Strategia", "Produkcja"];

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col">
            <div className="size-full">
                <HeroTitle className="" />
                <p className="italic">Zorientowany na </p>
            </div>
            <div className="flex-1">zdjecie</div>
            <div className="size-full flex">
                <h1>
                    {keywords.map((word, i) => (
                        <span key={i}>{word}</span>
                    ))}
                </h1>
                <div className="size-full">
                    <HeroTitle className="" />
                </div>
            </div>
        </section>
    )
}