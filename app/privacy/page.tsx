import LegalLayout from "../_components/LegalLayout";

export default function PrivacyPage() {
  return (
    <>
      <LegalLayout title="Privacy Policy" lastUpdated="February 2026">
        <section>
          <h3 className="text-xl font-bold text-brand-dark mb-4 uppercase tracking-tight">
            01. Data Collection
          </h3>
          <p>
            We collect information only necessary to provide our construction
            and roofing services. This includes your name, site location, and
            contact details provided via our inquiry forms or WhatsApp
            integration.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-brand-dark mb-4 uppercase tracking-tight">
            02. How We Use Your Data
          </h3>
          <p>Your information is used strictly for:</p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>Generating project quotations and structural audits.</li>
            <li>Scheduling material deliveries and machine hire logistics.</li>
            <li>Communicating project updates via WhatsApp or Phone.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-brand-dark mb-4 uppercase tracking-tight">
            03. Structural Security
          </h3>
          <p>
            We do not sell your data. We treat your architectural plans and site
            details with the same structural integrity we apply to our
            roofs—secure, private, and protected.
          </p>
        </section>
      </LegalLayout>
    </>
  );
}
