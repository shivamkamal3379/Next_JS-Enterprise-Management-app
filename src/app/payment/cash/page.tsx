export default function CashPage() {
  const cashEntries = [
    { id: 1, date: "2025-09-20", description: "Car Sale - Honda City", amount: 750000 },
    { id: 2, date: "2025-09-21", description: "Spare Parts Sale", amount: 12000 },
    { id: 3, date: "2025-09-22", description: "Service Payment", amount: 3500 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Cash Transactions</h2>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {cashEntries.map((e) => (
            <tr key={e.id} className="hover:bg-gray-100">
              <td className="p-2 border">{e.id}</td>
              <td className="p-2 border">{e.date}</td>
              <td className="p-2 border">{e.description}</td>
              <td className="p-2 border">{e.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
