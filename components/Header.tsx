import Image from "next/image";

export default function Header() {
    return(
        <div>
            <div className="px-3 py-2">
                <Image className="rounded-md" src="/favicon.ico" height={50} width={50} alt="logo" />
            </div>
        </div>
    );
}