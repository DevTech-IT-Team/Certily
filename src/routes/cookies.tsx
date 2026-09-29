import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/cookies")({
  head: () =>
    pageHead({
      title: "Cookie Policy | Certcia",
      description: "Learn how Certcia uses cookies and similar technologies to improve your experience on our AI-powered learning platform.",
      path: "/cookies",
    }),
  component: CookiePolicy,
});

function CookiePolicy() {
  return (
    <div className="bg-[#FAFAFF] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-[#5A607A]">
        <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-[#0F1533] sm:text-5xl">Cookie Policy</h1>
        <p className="mt-6 text-xl leading-8">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            At Certcia, accessible from certcia.com, we use cookies and similar tracking technologies to track activity on our platform and hold certain information. This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies.
          </p>
          
          <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-[#0F1533]">1. What are cookies?</h2>
          <p className="mt-4">
            Cookies are small files placed on your computer, mobile device, or any other device by a website, containing the details of your browsing history on that website among its many uses. They are widely used to make websites work or operate more efficiently, as well as to provide reporting information.
          </p>
          
          <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-[#0F1533]">2. How we use cookies</h2>
          <p className="mt-4">
            We use cookies for various purposes, including:
          </p>
          <ul className="mt-4 list-disc pl-8 space-y-2">
            <li><strong>Essential Cookies:</strong> These are required to provide you with services available through our platform and to enable you to use some of its features.</li>
            <li><strong>Performance and Analytics Cookies:</strong> These track information about traffic to the website and how users use the platform. We may also use these to test new pages, features, or functionality.</li>
            <li><strong>Functionality Cookies:</strong> These allow us to remember choices you make when you use the platform, such as remembering your login details or language preference.</li>
            <li><strong>Targeting/Advertising Cookies:</strong> These track your browsing habits to enable us to show advertising which is more likely to be of interest to you.</li>
          </ul>

          <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-[#0F1533]">3. Your choices regarding cookies</h2>
          <p className="mt-4">
            If you prefer to avoid the use of cookies on the website, first you must disable the use of cookies in your browser and then delete the cookies saved in your browser associated with this website. You may use this option for preventing the use of cookies at any time.
          </p>
          <p className="mt-4">
            Please note that if you do not accept our cookies, you may experience some inconvenience in your use of the website and some features may not function properly.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-[#0F1533]">4. Contact Us</h2>
          <p className="mt-4">
            If you have any questions about our Cookie Policy, please contact us at:
          </p>
          <ul className="mt-4 list-disc pl-8 space-y-2">
            <li>By email: hello@certcia.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
