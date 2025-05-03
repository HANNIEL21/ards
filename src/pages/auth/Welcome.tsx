import Header from "@/components/Header";
import { Globe, PersonStanding, ShieldCheck, Truck } from "lucide-react";

const Welcome = () => {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-gray-50 to-white">
        <section className=" h-screen flex flex-col justify-center text-center px-4 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Secure Academic Records. <br className="hidden md:block" />
            Anytime, Anywhere.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A secure, efficient, and sustainable way to manage academic
            credentials. No more paper trails, long queues, or manual
            verifications.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
              Request Records
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full shadow hover:bg-gray-200 transition">
              Verify Certificate
            </button>
          </div>
        </section>
        <section className="h-screen flex flex-col justify-center px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                <ShieldCheck size={56} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Tamper-Proof Security
                </h3>
                <p className="text-gray-600">
                  All digital certificates are cryptographically signed and
                  protected against forgery or unauthorized changes using
                  advanced verification technology.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                <Globe size={56} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Global Verification
                </h3>
                <p className="text-gray-600">
                  Share your certificate with employers, institutions, or
                  embassies worldwide. Each credential includes a unique link or
                  QR code for one-click authenticity checks.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                <PersonStanding size={56} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Instant Access
                </h3>
                <p className="text-gray-600">
                  Students and alumni can securely access their academic
                  certificates anytime through a personal online portal — no
                  more waiting for printouts or physical copies.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                <Truck size={56} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Mailing & Shipping Options
                </h3>
                <p className="text-gray-600">
                  Need a physical copy? Request official printed certificates
                  with optional mailing and shipping — locally or
                  internationally — right from your portal.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Welcome;
