export default function ContactPage() {
  return (
    <div className="flex flex-col items-center w-full max-w-[1420px] justify-between">
      <div className="px-6 py-16 flex flex-col gap-4">
        <div className="max-w-4xl mx-auto flex flex-col gap-8 text-grayscale-600 dark:text-grayscale-100">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold font-onest dark:text-primary-300 text-secondary-500">
              Security Information
            </h1>
            <p>
              At <span className="font-semibold">Pine Stake</span>, security and
              reliability are our top priorities. We follow industry best
              practices and Solana Foundation guidelines to ensure a safe and
              transparent staking environment.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold font-onest dark:text-primary-300 text-secondary-500">
              Security Measures
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">Secure Infrastructure</span>:
                Hosted on enterprise-grade hardware via{" "}
                <span className="font-semibold">Edgevana</span> and{" "}
                <span className="font-semibold">Latitude.sh</span>, with
                redundancy and backup systems.
              </li>
              <li>
                <span className="font-semibold">Access Control</span>: SSH
                key-only access, offline withdrawer keypair, and no hosting
                provider access to validator accounts.
              </li>
              <li>
                <span className="font-semibold">Firewall & Monitoring</span>:
                Strict firewall policies and 24/7 monitoring with real-time
                alerts.
              </li>
              <li>
                <span className="font-semibold">Software</span>: Only
                open-source software from Solana Labs and Jito Labs is used,
                with frequent updates and no unrelated applications installed.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold font-onest dark:text-primary-300 text-secondary-500">
              Funds & Rewards
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                All user-staked funds are fully protected by the Solana
                protocol.
              </li>
              <li>
                Validators have no access to user funds or rewards — everything
                is handled automatically by the network.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold font-onest dark:text-primary-300 text-secondary-500">
              Validator Commission
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                We currently charge{" "}
                <span className="font-semibold">0% commission</span>, allowing
                delegators to receive full staking rewards.
              </li>
              <li>
                Any future changes to this rate will be communicated in advance
                to all stakers to ensure transparency and trust.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold font-onest dark:text-primary-300 text-secondary-500">
              Contact Us
            </h2>
            <p>
              For any security-related concerns or questions, feel free to
              contact us at:
            </p>
            <p className="mt-2 font-semibold">
              📧{" "}
              <a
                href="mailto:security@pinestake.com"
                className="dark:text-primary-300 text-secondary-500 hover:underline"
              >
                contato@pinestake.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
