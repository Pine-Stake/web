export function About() {
  return (
    <div className="w-full border-2 border-secondary-300 flex flex-col items-center justify-center py-[96px] rounded-[40px] gap-14 px-4">
      <h1 className="text-grayscale-100 md:text-[64px] text-[32px] text-center">
        What is
        <span className="text-lime-green"> Pine Stake?</span>
      </h1>
      <div className="flex flex-col gap-4 items-center justify-center w-auto md:text-[23px] text-base text-grayscale-100">
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
