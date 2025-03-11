import Image from "next/image";

export function Informatives() {
  const informativesList = [
    {
      icon: "/green-sol.svg",
      value: "23.241",
      description1: "Sol",
      description2: "Staked",
    },
    {
      icon: "/green-graph.svg",
      value: "7.08%",
      description1: "Avg.",
      description2: "APY",
    },
    {
      icon: "/green-commission.svg",
      value: "5%",
      description1: "Commission",
      description2: "Percent",
    },
    {
      icon: "/green-commission.svg",
      value: "5%",
      description1: "Commission",
      description2: "Percent",
    },
  ];

  return (
    <div
      id="informatives-div"
      className="flex md:gap-10 gap-8 w-full mt-[80px] items-center justify-between overflow-x-auto"
    >
      {informativesList.map((item, index) => (
        <div
          key={index}
          className="border justify-center bg-dark-200 border-grayscale-100 rounded-3xl px-14 py-8 flex items-center gap-4 w-full"
        >
          <Image
            src={item.icon}
            alt={item.description1}
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <p className="text-[32px] text-grayscale-100">{item.value}</p>
          <div className="flex flex-col">
            <p className="text-base text-grayscale-200">{item.description1}</p>
            <p className="text-base text-grayscale-200 mt-[-5px]">
              {item.description2}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
