import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () =>
    pageHead({
      title: "Terms & Conditions | Certcia",
      description: "Read the terms and conditions for using Certcia's AI-powered learning campus, governing the use of our services, courses, and certifications.",
      path: "/terms-and-conditions",
    }),
  component: TermsAndConditions,
});

function TermsAndConditions() {
  return (
    <div className="bg-[#FAFAFF] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-[#5A607A]">
        <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-[#0F1533] sm:text-5xl">Terms and Conditions</h1>
        <p className="mt-6 text-xl leading-8">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Welcome to Certcia!
          </p>
          <p className="mt-4">
            These terms and conditions outline the rules and regulations for the use of Certcia's Website, located at certcia.com.
          </p>
          <p className="mt-4">
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Certcia if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-[#0F1533]">1. License</h2>
          <p className="mt-4">
            Unless otherwise stated, Certcia and/or its licensors own the intellectual property rights for all material on Certcia. All intellectual property rights are reserved. You may access this from Certcia for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <p className="mt-4">You must not:</p>
          <ul className="mt-4 list-disc pl-8 space-y-2">
            <li>Republish material from Certcia</li>
            <li>Sell, rent or sub-license material from Certcia</li>
            <li>Reproduce, duplicate or copy material from Certcia</li>
            <li>Redistribute content from Certcia</li>
          </ul>
          <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-[#0F1533]">2. User Accounts</h2>
          <p className="mt-4">
            When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
          </p>
          <p className="mt-4">
            You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
          </p>
          <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-[#0F1533]">3. Termination</h2>
          <p className="mt-4">
            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-[#0F1533]">4. Contact Us</h2>
          <p className="mt-4">
            If you have any questions about these Terms, please contact us at hello@certcia.com.
          </p>
        </div>
      </div>
    </div>
  );
}
