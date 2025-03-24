import Image from "next/image";
import { informativesList } from "../../constants/constants";

export function Informatives() {
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

          <p className="md:text-[28px] text-xl dark:text-grayscale-100 text-grayscale-600">
            {item.value}
          </p>
          <div className="flex flex-col">
            <p className="md:text-[28px] text-xl dark:text-grayscale-200 text-grayscale-500 uppercase">
              {item.description1}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
