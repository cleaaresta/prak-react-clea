export default function PricingSection({ plans = [] }) {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
          <p className="mt-2 text-gray-500">{plan.description}</p>
          <div className="mt-4 text-3xl font-bold text-gray-900">
            {plan.price}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            {plan.features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
