export default function Works() {
    return (
        <section className="min-h-screen">
            <div className="text-center min-h-screen border-3 border-orange-300">
                <p className="text-6xl md:text-8xl font-bold">WORKS</p>
            </div>
            <ul className="text-6xl md:text-8xl flex flex-col justify-start items-stretch gap-y-3.5 p-5 md:p-6 lg:p-8">
                <li className="font-semibold">
                    <span>Projekt</span>
                    <div className="line h-1 w-full bg-current"></div>
                </li>
                 <li className="font-semibold">
                    <span>Projekt</span>
                    <div className="line h-1 w-full bg-current"></div>
                </li>
                 <li className="font-semibold">
                    <span>Projekt</span>
                    <div className="line h-1 w-full bg-current"></div>
                </li>
            </ul>
        </section>
    )
}