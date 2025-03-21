export function About() {
  return (
    <div
      id="about"
      className="scroll-mt-36 w-full border-2 dark:border-secondary-300 border-secondary-500 flex flex-col items-center justify-center py-[96px] rounded-[40px] gap-14 px-4 font-onest"
    >
      <h1 className="dark:text-grayscale-100 text-grayscale-600 md:text-[64px] text-[32px] text-center">
        What is
        <span className="text-primary-300"> Pine Stake?</span>
      </h1>
      <div className="flex flex-col gap-4 items-center justify-center w-auto md:text-[23px] text-base dark:text-grayscale-100 text-grayscale-600 max-w-[1000px] leading-8 font-medium">
        <p className="text-center">
          Pine Stake is a Brazilian-based validator dedicated to strengthening
          Solana’s decentralization while empowering local communities. Our
          mission is to educate users, support artists, and expand blockchain
          adoption in the region.
        </p>
        <p className="text-center">
          With a secure, high-performance infrastructure and 24/7 monitoring, we
          ensure network reliability while providing opportunities for stakers,
          creators, and developers. Join us in shaping a more decentralized and
          inclusive Solana ecosystem.
        </p>
      </div>
    </div>
  );
}
