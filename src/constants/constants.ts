import exp from "constants";

export const menuLinks = [
    { name: "Solutions", href: "/" },
    { name: "Documentation", href: "/" },
    { name: "About", href: "/" },
    { name: "FAQ", href: "/" },
  ];
  
  export const iconLinksLight = [
    { src: "/light-x.svg", alt: "X", href: "/" },
    { src: "/light-discord.svg", alt: "Discord", href: "/" },
  ];
  
  export const iconLinksDark = [
    { src: "/dark-x.svg", alt: "X", href: "/" },
    { src: "/dark-discord.svg", alt: "Discord", href: "/" },
  ];
  
  export const actionLinks = [
    {
      name: "Institutional",
      href: "/",
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
      { logo: "/github.svg", href: "/" },
      { logo: "/telegram.svg", href: "/" },
      { logo: "/x.svg", href: "http://x.com/pinestake" },
      { logo: "/discord.svg", href: "http://discord.gg/pinestake" },
    ];

    export const faqs = [
      {
        question: "What is a validator?",
        answer:
          "A validator is a node that participates in the consensus process of a blockchain. In the Solana network, validators secure the network by confirming transactions and adding new blocks. By staking your tokens with a validator, you help maintain the integrity of the blockchain.",
      },
      { question: "How to stake tokens?", answer: "Explanation about staking." },
      { question: "What are the rewards?", answer: "Rewards explanation." },
      { question: "Is my stake safe?", answer: "Security details." },
      { question: "What is Pine Venture?", answer: "Info about Pine Venture." },
    ];

    export const footerLinks = [
        {
          title: "Home",
          links: ["Solutions", "Documentation", "About", "FAQ"],
        },
        {
          title: "Security",
          links: ["Audit reports", "Term of Use"],
        },
        {
          title: "Community",
          links: ["Twitter", "Discord", "Telegram", "LinkedIn"],
        },
      ];
    
      export const logoSupporters = [
        { logo: "/solana.svg" },
        { logo: "/polygon.svg" },
        { logo: "/balancer.svg" },
      ];
  
      export const cardList = [
        {
          title: "Education",
          description:
            "Teaching users about staking SOL, blockchain fundamentals, and decentralization.",
          icon: "/education2.svg",
          background: "/education.png",
        },
        {
          title: "Empowerment",
          description:
            "Supporting creators in onboarding, minting, and thriving on Solana Ecosystem.",
          icon: "/artist-empowerment.svg",
          background: "/empowerment.png",
        },
        {
          title: "Decentralization",
          description:
            "Operating a reliable validator node in Brazil, helping Solana become more resilient.",
          icon: "/decentralization.svg",
          background: "/decentralization.png",
        },
      ];
    