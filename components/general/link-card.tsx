import { Link2, LinkIcon } from "lucide-react";
import Link from "next/link";

interface LinkCardProps {
    href: string,
    text: string
}
export function LinkCard({href, text}: LinkCardProps ) {
    return(
        <Link href={href} target="_blank" className="hover:text-blue-800">
            <div className="w-full border h-12 rounded-xl shadow-md flex justify-start px-4 items-center bg-zinc-50/50 gap-5 hover:scale-102 transition-all duration-300 my-2">
                <LinkIcon className="hover:animate-bounce transition-all duration-100" width={16} />
                <h1 className="text-blue-500 text-sm hover:text-blue-800 transition-all duration-200">{text}</h1>
            </div>
        </Link>
    )
}