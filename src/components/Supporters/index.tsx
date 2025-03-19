import Image from "next/image";
export function Supporters() {
  const logoSupporters = [
    { logo: "/solana.svg" },
    { logo: "/polygon.svg" },
    { logo: "/balancer.svg" },
  ];
  return (
    <div className="w-full dark:bg-dark-background-200 bg-background-200 flex xl:flex-row flex-col items-center xl:justify-between p-[56px] rounded-[40px] gap-[40px] xl:gap-0 font-onest">
      <h1 className="dark:text-secondary-300 text-secondary-500 text-[32px] font-medium">
        Supporters
      </h1>
      <div className="w-full flex flex-col sm:flex-row items-center xl:justify-end justify-center gap-14">
        {logoSupporters.map((item, index) => (
          <div key={index}>
            <Image src={item.logo} alt={item.logo} width={154} height={154} />
          </div>
        ))}
      </div>
    </div>
  );
}
