"use client";

import { Hourglass, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface OfferBannerProps {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  defaultVisible?: boolean;
}

const OfferBanner = ({
  title = "Version 2.0 is now available!",
  description = "Check out all the",
  linkText = "new features",
  linkUrl = "#",
  defaultVisible = true,
}: OfferBannerProps) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section className="w-full border-b bg-[#13C0FA] px-2 py-1 md:px-4 md:py-3 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 text-center">
          <span className="text-md font-baloo">
            <span className="font-medium font-baloo text-md md:text-xl">⌛ {title}</span>{" "}
            <span className="text-[white] font-baloo text-md md:text-xl">
              {description}{" "}
              <Link
                href={linkUrl}
                className="underline underline-offset-4 hover:text-[#f0f0f0] pl-1"
              >
                {linkText}
              </Link>
              . ⌛
            </span>
          </span>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="-mr-2 h-8 w-8 flex-none"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export { OfferBanner };
