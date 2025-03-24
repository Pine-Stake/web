export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col items-center w-full max-w-[1420px]">
      <div className="px-6 py-16 flex flex-col gap-4">
        <div className="max-w-4xl mx-auto flex flex-col gap-4 text-grayscale-600 dark:text-grayscale-100">
          <h1 className="text-4xl font-bold font-onest dark:text-primary-300 text-secondary-500">
            Terms of Use
          </h1>

          <p className="text-sm dark:text-grayscale-300 text-grayscale-400">
            Last updated: March 24, 2025
          </p>

          <p>
            Welcome to <span className="font-semibold">Pine Stake</span>. By
            accessing or using our website, you agree to comply with and be
            bound by the following terms and conditions. If you do not agree,
            please do not use this site.
          </p>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-semibold font-onest dark:text-primary-300 text-secondary-500">
                1. General Information
              </h2>
              <p>
                Pine Stake is a validator node operating on the Solana
                blockchain. Our website provides information about our
                validator, community initiatives, and educational content
                related to staking and decentralization.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold font-onest dark:text-primary-300 text-secondary-500">
                2. Not Financial Advice
              </h2>
              <p>
                All content provided on this site is for informational purposes
                only and does not constitute financial, investment, or legal
                advice. Users are responsible for their own decisions regarding
                staking and interacting with the Solana network.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold font-onest dark:text-primary-300 text-secondary-500">
                3. Staking Disclaimer
              </h2>
              <p>
                Staking SOL through Pine Stake involves interacting with the
                Solana blockchain and using third-party wallets. Pine Stake
                never has access to your funds. Delegation is a non-custodial
                action. We are not liable for losses resulting from
                blockchain-related risks, including slashing, downtime, or
                network failures.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold font-onest dark:text-primary-300 text-secondary-500">
                4. Security Practices
              </h2>
              <p>
                We follow industry-standard security practices and strive to
                maintain uptime and performance. However, we cannot guarantee
                that our website will always be error-free or uninterrupted.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold font-onest dark:text-primary-300 text-secondary-500">
                5. Use of Content
              </h2>
              <p>
                All materials on this website, including text, graphics, logos,
                and branding, are the property of Pine Stake and may not be used
                or reproduced without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold font-onest dark:text-primary-300 text-secondary-500">
                6. Community Conduct
              </h2>
              <p>
                If you join our community (e.g., via Discord), you agree to
                engage respectfully. We reserve the right to remove users who
                engage in harassment, spam, or harmful behavior.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold font-onest dark:text-primary-300 text-secondary-500">
                7. Changes to These Terms
              </h2>
              <p>
                We may update these Terms of Use at any time. Changes will be
                reflected on this page with an updated date. Continued use of
                the site after changes implies acceptance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold font-onest dark:text-primary-300 text-secondary-500">
                8. Contact
              </h2>
              <p>
                If you have any questions about these terms, please contact us
                at:
              </p>
              <p className="mt-2 font-semibold">
                📧 {" "}
                <a
                  href="mailto:contato@pinestake.com"
                  className="dark:text-primary-300 text-secondary-500 hover:underline"
                >
                  contato@pinestake.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
