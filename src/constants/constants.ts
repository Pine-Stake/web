import exp from "constants";

export const menuLinks = [
    { name: "Documentation", href: "https://docs.pinestake.com" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];
  
  export const iconLinksLight = [
    { src: "/light-x.svg", alt: "X", href: "/" },
    { src: "/light-discord.svg", alt: "Discord", href: "/" },
  ];
  
  export const iconLinksDark = [
    { src: "/Moon.svg", alt: "X", href: "/" },
  ];
  
  export const actionLinks = [
    {
      name: "Institutional",
      href: "mailto:contato@pinestake.com?subject=Institutional Stake",
      bgColor: "bg-primary-300",
      textColor: "text-dark-background-100",
    },
    {
      name: "Stake now",
      href: "/",
      bgColor: "bg-secondary-300",
      textColor: "text-dark-background-100",
    },
  ];
  
   export const informativesList = [
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

    export  const logoSocials = [
      // { logo: "/github.svg", href: "/" },
      // { logo: "/telegram.svg", href: "/" },
      { logo: "/x.svg", href: "http://x.com/pinestake" },
      { logo: "/discord.svg", href: "http://discord.gg/pinestake" },
    ];

    export const faqs = [
      {
        question: "What is a validator?",
        answer:
          "A validator is a server that helps run and secure the Solana blockchain. It verifies transactions, produces blocks, and keeps the network decentralized. When you stake with a validator, you're helping maintain the network and can earn rewards in return.",
      },
      {
        question: "How to stake my SOL?",
        answer:
          "You can stake your SOL using a wallet like Phantom or Solflare. Just choose Pine Stake as your validator, enter the amount you want to stake, and confirm the transaction. Your SOL stays in your wallet and is never transferred to us.",
      },
      {
        question: "What are the rewards?",
        answer:
          "Stakers receive rewards in SOL, typically around 7-9% APY depending on network conditions. These rewards are paid automatically and can vary slightly over time.",
      },
      {
        question: "Is my stake safe?",
        answer:
          "Yes. Your SOL never leaves your wallet. Staking is a delegation, not a transfer. Only you can move or unstake your tokens. Pine Stake follows strict security standards and has 24/7 monitoring to ensure uptime and safety.",
      },
      {
        question: "What is Pine Ventures?",
        answer:
          "Pine Ventures is our initiative to support Brazilian creators, developers, and builders in the Web3 space through funding, visibility, and technical support.",
      },
    ];

    export const footerLinks = [
      {
        title: "Home",
        links: [
          { label: "Documentation", href: "https://docs.pinestake.com" },
          { label: "About", href: "/#about" },
          { label: "FAQ", href: "/#faq" },
        ],
      },
      {
        title: "Security",
        links: [
          { label: "Security Info", href: "/security-info" },
          { label: "Terms of Use", href: "/terms-of-use" },
        ],
      },
      {
        title: "Community",
        links: [
          { label: "Twitter", href: "https://twitter.com/PineStake" },
          { label: "Discord", href: "https://discord.gg/pinestake" },
        ],
      },
    ];
    
      export const logoSupporters = [
        { logo: "/logos/edgevana.svg" },
        { logo: "/logos/jagpool.svg" },
        { logo: "/logos/aero.svg" },
        { logo: "/logos/thevault.svg" },
        { logo: "/logos/solblaze.svg" },
        { logo: "/logos/solanafoundation.svg" },
        { logo: "/logos/jpool.svg" },
        
      ];
  
      export const cardList = [
        {
          title: "Education",
          description:
            "We teach users the knowledge they need to navigate the Solana ecosystem, from staking SOL to understanding blockchain fundamentals and the importance of decentralization.",
          icon: "/education2.svg",
          background: "/education.png",
        },
        {
          title: "Empowerment",
          description:
            "We support creators and developers by helping them onboard, mint their first assets, and establish themselves in the Solana ecosystem, ensuring they have the tools to grow and succeed.",
          icon: "/artist-empowerment.svg",
          background: "/empowerment.png",
        },
        {
          title: "Decentralization",
          description:
            "By operating a reliable validator node in Brazil, we contribute to Solana’s security, stability, and decentralization, ensuring a more distributed and resilient network.",
          icon: "/decentralization.svg",
          background: "/decentralization.png",
        },
      ];
    
      export const stakingType = [
          {
            iconGreen: "/tabler_clock_green.svg",
            iconGray: "/tabler_clock_gray.svg",
            title: "Native • APY 8.19%",
            description: "Receive",
            amount: "0.0000 SOL",
          },
          {
            iconGreen: "/lightning_bolt_green.svg",
            iconGray: "/lightning_bolt_gray.svg",
            title: "Liquid • APY 8.61%",
            description: "Receive",
            amount: "0.0000 pineSOL",
          },
        ];