import aboutImg from "../assets/dh.webp";

const aboutSection = {
    imgSrc: aboutImg,
    name: "Dawid Hoesen",
    role: "Creative Developer",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export default function About() {
    return (
        <>
        <section className="min-h-screen flex flex-col justify-center items-center p-5 md:p-6 lg:p-8 gap-y-3.5">
            <div className="size-full md:size-2/3 aspect-4/3 min-h-[33vh]">
                <img className="size-full object-contain" src={aboutSection.imgSrc} alt={aboutSection.name} />
            </div>

            <div className="max-w-full md:max-w-2/3 w-full flex flex-col justify-center text-justify text-sm md:text-base lg:text-lg p-1.5 gap-1.5">
                <h1 className="uppercase font-bold tracking-tight">{aboutSection.name}</h1>
                <h2 className="uppercase font-medium">{aboutSection.role}</h2>
                <p className="font-light tracking-wide leading-relaxed">{aboutSection.description}</p>
            </div>
        </section>
        <div className="min-h-[50vh] border bg-gray-300" />
        </>
    );
}
