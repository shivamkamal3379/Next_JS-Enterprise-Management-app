export default function DashboardPage() {
  const stats = [
    { metric: "Total Sales", value: "₹ 12,45,000" },
    { metric: "Active Users", value: "1,230" },
    { metric: "Pending Payments", value: "₹ 75,000" },
    { metric: "Branches Online", value: "8 / 10" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Metric</th>
            <th className="p-2 border">Value</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((row, i) => (
            <tr key={i} className="hover:bg-gray-100">
              <td className="p-2 border">{row.metric}</td>
              <td className="p-2 border">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
