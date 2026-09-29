import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageHead({
      title: "Privacy Policy | Certcia",
      description: "Read the Certcia Privacy Policy to learn how we collect, use, and protect your personal information on our AI-powered learning platform.",
      path: "/privacy-policy",
    }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="bg-[#FAFAFF] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-[#5A607A]">
        <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-[#0F1533] sm:text-5xl">Privacy Policy</h1>
        <p className="mt-6 text-xl leading-8">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            At Certcia, accessible from certcia.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Certcia and how we use it.
          </p>
          <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-[#0F1533]">1. Information we collect</h2>
          <p className="mt-4">
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p className="mt-4">
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>
          <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-[#0F1533]">2. How we use your information</h2>
          <p className="mt-4">
            We use the information we collect in various ways, including to:
          </p>
          <ul className="mt-4 list-disc pl-8 space-y-2">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>
          <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-[#0F1533]">3. Log Files</h2>
          <p className="mt-4">
            Certcia follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>
          <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-[#0F1533]">4. Contact Us</h2>
          <p className="mt-4">
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at hello@certcia.com.
          </p>
        </div>
      </div>
    </div>
  );
}
