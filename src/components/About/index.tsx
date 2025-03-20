export function About() {
  return (
    <div className="w-full border-2 dark:border-secondary-300 border-secondary-500 flex flex-col items-center justify-center py-[96px] rounded-[40px] gap-14 px-4 font-onest">
      <h1 className="dark:text-grayscale-100 text-grayscale-600 md:text-[64px] text-[32px] text-center">
        What is
        <span className="text-primary-300"> Pine Stake?</span>
      </h1>
      <div className="flex flex-col gap-4 items-center justify-center w-auto md:text-[23px] text-base dark:text-grayscale-100 text-grayscale-600">
        <p className="text-center">
          The Pine Validator aims to be more <br /> than just a node securing
          the Solana network.
        </p>
        <p className="text-center">
          Its mission is to reinvest into <br /> the Brazilian ecosystem
        </p>
      </div>
    </div>
  );
}
