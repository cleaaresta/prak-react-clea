export default function FAQSection({ faqs = [] }) {
  return (
    <section className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-900">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-2xl border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">{faq.question}</h3>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
