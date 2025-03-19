import Link from "next/link";

export function Community() {
  const logoSocials = [
    { logo: "/github.svg", href: "/" },
    { logo: "/telegram.svg", href: "/" },
    { logo: "/x.svg", href: "http://x.com/pinestake" },
    { logo: "/discord.svg", href: "http://discord.gg/pinestake" },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 bg-primary-300 rounded-[40px] py-10 px-14 items-center md:mb-[80px] font-onest  mb-[40px]">
      <h3 className="w-full text-base md:text-2xl text-center lg:text-start">
        Join the <b>Pine Stake</b> Community
      </h3>
      <div className="w-full flex  sm:flex-row items-center xl:justify-end justify-center gap-5">
        {logoSocials.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex"
          >
            <img src={item.logo} alt="social logo" width={46} height={46} />
          </Link>
        ))}
      </div>
    </div>
  );
}
