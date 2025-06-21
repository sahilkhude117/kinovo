import Image from "next/image";
import Link from "next/link";

export default function Logo(){
    return (
        <div className="flex-shrink-0">
            <Link href="/ll" className="flex items-center">
              <Image 
                src="/logos/logo.svg" 
                alt="Beast Philanthropy Logo"
                width={225}
                height={75}
                className="h-10 md:h-12 w-auto"
              /> 
              <div className="text-3xl md:text-4xl font-bold font-baloo inline-block mb-4 pt-4 pl-2">
                <span className="font-baloo text-[#00c2cb]">KIN</span>
                <span className="font-baloo text-[#FBB406]">OVO</span>
              </div>
            </Link>
    </div>
    )
}