import LegalLayout from "../_components/LegalLayout";

export default function TermsPage() {
  return (
    <>
      <LegalLayout title="Terms of Service" lastUpdated="February 2026">
        <section>
          <h3 className="text-xl font-bold text-brand-dark mb-4 uppercase tracking-tight">
            01. Service Estimates
          </h3>
          <p>
            All quotes provided via the website are preliminary. Final pricing
            is subject to a physical site visit and structural verification by
            an Amos & Co. engineer.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-brand-dark mb-4 uppercase tracking-tight">
            02. Material Supply
          </h3>
          <p>
            Ownership of materials (timber, roofing sheets, etc.) transfers to
            the client only upon full payment. Amos & Co. reserves the right to
            pause installation if payment milestones are not met.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-brand-dark mb-4 uppercase tracking-tight">
            03. Machine Hire
          </h3>
          <p>
            Clients hiring machinery are responsible for providing a secure
            site. Any damage caused by operator negligence on the client's side
            will be billed accordingly.
          </p>
        </section>

        <section className="p-8 bg-gray-50 border-l-4 border-brand-red">
          <p className="text-sm italic">
            "By engaging our services, you agree to build with the highest
            standards of safety and compliance as outlined by the NCA Kenya."
          </p>
        </section>
      </LegalLayout>
    </>
  );
}
