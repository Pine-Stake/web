import Image from "next/image";

export function Informatives() {
  const informativesList = [
    {
      lightIcon: "/light-green-sol.svg",
      darkIcon: "/green-sol.svg",
      value: "146K",
      description1: "Sol",
    },
    {
      lightIcon: "/light-green-graph.svg",
      darkIcon: "/green-graph.svg",
      value: "7.08%",
      description1: "APY",
    },
    {
      lightIcon: "/light-green-commission.svg",
      darkIcon: "/green-commission.svg",
      value: "0%",
      description1: "FEE",
    },
    {
      lightIcon: "/light-green-commission.svg",
      darkIcon: "/green-commission.svg",
      value: "35",
      description1: "Holders",
    },
  ];

  return (
    <div
      id="informatives-div"
      className="flex md:gap-10 gap-8 w-full mt-[80px] items-center justify-between overflow-x-auto font-onest"
    >
      {informativesList.map((item, index) => (
        <div
          key={index}
          className="border justify-center dark:bg-dark-background-200 bg-background-200 dark:border-secondary-300 border-secondary-500 rounded-3xl px-14 py-8 flex items-center gap-4 w-full"
        >
          <div className="relative size-10">
            <Image
              src={item.lightIcon}
              alt={item.description1}
              width={40}
              height={40}
              className="block dark:hidden"
            />
            <Image
              src={item.darkIcon}
              alt={item.description1}
              width={40}
              height={40}
              className="hidden dark:block"
            />
          </div>

          <p className="text-[28px] dark:text-grayscale-100 text-grayscale-600">
            {item.value}
          </p>
          <div className="flex flex-col">
            <p className="text-[28px] dark:text-grayscale-200 text-grayscale-500 uppercase">
              {item.description1}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
