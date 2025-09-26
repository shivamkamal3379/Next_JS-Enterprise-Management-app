export default function CompanyPage() {
  const companies = [
    { id: 1, name: "SalesPro Pvt Ltd", group: "North India", branchCount: 5 },
    { id: 2, name: "AutoWorld Ltd", group: "South India", branchCount: 3 },
    { id: 3, name: "CarHub India", group: "West India", branchCount: 7 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Company List</h2>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Company Name</th>
            <th className="p-2 border">Group</th>
            <th className="p-2 border">Branches</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((c) => (
            <tr key={c.id} className="hover:bg-gray-100">
              <td className="p-2 border">{c.id}</td>
              <td className="p-2 border">{c.name}</td>
              <td className="p-2 border">{c.group}</td>
              <td className="p-2 border">{c.branchCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
