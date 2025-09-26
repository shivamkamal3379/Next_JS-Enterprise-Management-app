export default function DepartmentPage() {
  const departments = [
    { id: 1, name: "Sales", head: "Ravi Kumar", employees: 25 },
    { id: 2, name: "Service", head: "Anita Sharma", employees: 15 },
    { id: 3, name: "Finance", head: "Mohit Agarwal", employees: 8 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Departments</h2>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Department</th>
            <th className="p-2 border">Head</th>
            <th className="p-2 border">Employees</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((d) => (
            <tr key={d.id} className="hover:bg-gray-100">
              <td className="p-2 border">{d.id}</td>
              <td className="p-2 border">{d.name}</td>
              <td className="p-2 border">{d.head}</td>
              <td className="p-2 border">{d.employees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
