
import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Terms of Service - Prime Place</title>
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-lg text-gray-700">
          {" "}
          
          <h2>1. Introduction</h2>
          <p>
            Welcome to Prime Place! These Terms of Service Terms, Terms of
            Service govern your use of our website, The Service operated by Prime Places
          </p>
          <p>
            Our Privacy Policy also governs your use of our Service and explains
            how we collect, disclose, and use your information. Your agreement
            to our Terms includes your agreement to our Privacy Policy.
          </p>
          <h2>2. Acceptance of Terms</h2>
          <p>
            By accessing or using the Service you agree to be bound by these
            Terms. If you disagree with any part of the terms then you may not
            access the Service.
          </p>
          <h2>3. Changes to Terms</h2>
          <p>
            We may update our Terms at any time with or without prior notice.
            You are responsible for checking these Terms for any periodic
            changes. Your continued use of the Service following the posting of
            revised Terms means you accept and agree to the changes.
          </p>
          <h2>4. Use of Service</h2>
          <p>
            Our Service is intended for users who are at least 18 years old. By
            using our Service, you represent and warrant that you are at least
            18 years old and of legal capacity to enter into this agreement.
          </p>
          <p>
            You may not use our Service for any illegal or unauthorized purposes
            that violate any laws in your jurisdiction.
          </p>
          <h2>5. Intellectual Property</h2>
          <p>
            The Service and its original content, features and functionality are
            and will remain the exclusive property of Prime Places and its
            licensors.
          </p>
          <div className="terms-section">
            <h2>Termination</h2>
            <p>
              Prime Places reserves the right to terminate access to our
              services or discontinue any feature or aspect of our website at
              any time without notice. We may also terminate or suspend your
              access to our services immediately, without prior notice or
              liability, for any reason whatsoever, including without limitation
              if you breach the Terms.
            </p>
          </div>
          <div className="terms-section">
            <h2>Disclaimer</h2>
            <p>
              Prime Places makes no representations or warranties of any kind,
              express or implied, regarding the accuracy, adequacy, validity,
              reliability, availability, or completeness of any information on
              our website. Under no circumstance shall we have any liability to
              you for any loss or damage of any kind incurred as a result of the
              use of our website or reliance on any information provided on our
              website.
            </p>
          </div>
          <div className="terms-section">
            <h2>Limitations of Liability</h2>
            <p>
              In no event shall Prime Places, nor any of its officers,
              directors, employees, partners, agents, suppliers, or affiliates,
              be liable for any indirect, incidental, special, consequential, or
              punitive damages, including without limitation, loss of profits,
              data, use, goodwill, or other intangible losses, resulting from
              (i) your access to or use of or inability to access or use our
              website; (ii) any conduct or content of any third party on our
              website; (iii) any content obtained from our website; and (iv)
              unauthorized access, use, or alteration of your transmissions or
              content, whether based on warranty, contract, tort (including
              negligence), or any other legal theory, whether or not we have
              been informed of the possibility of such damage, and even if a
              remedy set forth herein is found to have failed of its essential
              purpose.
            </p>
          </div>
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at
            info@primeplaces.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
