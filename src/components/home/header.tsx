import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-4">Preserve Today, Unlock Tomorrow</h1>
            <p className="text-lg mb-8">Store your memories in digital time capsules, ready for future discovery.</p>
            <div>
                <Link href="/signin" title="Sign in"><button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-md mr-4">Get Started</button></Link>
                <Link href="#how-it-works" title="Learn more"><button className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg">Learn More</button></Link>
            </div>
        </header>
    );
}