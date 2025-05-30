import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { RainbowButton } from "../magicui/rainbow-button";
import { Button } from "../ui/button";

export function HowItWorks() {

    const data = [
        {
        title: "It will arrive via Email",
        content: (
            <div>
            <p className="mb-8 text-sm font-normal text-neutral-800 md:text-md dark:text-neutral-200">
                The the content is entirely in PDF format and after the purchase, access to the material will be sent to your email.
            </p>
            <div className="grid grid-cols-2 gap-4">
                <Image
                    src="/images/Steps/S01E01.gif"
                    alt="startup template"
                    width={200}
                    height={200}
                    className="w-full rounded-lg object-cover]"
                />
                <Image
                    src="/images/Steps/S01E02.gif"
                    alt="startup template"
                    width={200}
                    height={200}
                    className="w-full rounded-lg object-cover]"
                />
            </div>
            </div>
        ),
        },
        {
        title: "You Print",
        content: (
            <div>
            <p className="mb-8 text-sm font-normal text-neutral-800 md:text-md dark:text-neutral-200">
                Unlimited access to the purchased material, being able to acceess, download, and print as many time as desired, in your own time.
            </p>
            <div className="grid grid-cols-2 gap-4">
                <Image
                    src="/images/Steps/S02E01.gif"
                    alt="hero template"
                    width={200}
                    height={200}
                    className="w-full rounded-lg object-cover]"
                />
                <Image
                    src="/images/Steps/S02E02.gif"
                    alt="feature template"
                    width={200}
                    height={200}
                    className="w-full rounded-lg object-cover]"
                />
            </div>
            </div>
        ),
        },
        {
        title: "Carry out the activities",
        content: (
            <div>
            <p className="mb-4 text-sm font-normal text-neutral-800 md:text-md dark:text-neutral-200">
                The printed material is ready. Its time to get down to work.
            </p>
            <div className="grid grid-cols-2 gap-4">
                <Image
                    src="/images/Steps/S03E01.gif"
                    alt="hero template"
                    width={200}
                    height={200}
                    className="w-full rounded-lg object-cover]"
                />
                <Image
                    src="/images/Steps/S03E02.gif"
                    alt="feature template"
                    width={500}
                    height={500}
                    className="w-full rounded-lg object-cover]"
                />
            </div>
            </div>
        ),
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full overflow-clip">
            <RainbowButton variant={"outline"} className="rounded-full text-[#13C0FA] font-baloo text-md md:text-2xl">How It Works</RainbowButton>
            <Timeline data={data}/>
        </div>
    );
}
