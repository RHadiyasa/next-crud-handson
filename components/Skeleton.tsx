export const TableSkeleton = () => {
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Contact Name</th>
          <th className="py-3 px-6">Phone Number</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6">Actions</th>
        </tr>
      </thead>
      <tbody className="animate-pulse">
        <tr className="bg-white border-b border-gray-50">
          <td className="py-3 px-6">
            <div className="h-4 w-4 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-20 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6 flex gap-1">
            <div className="h-7 w-7 rounded-lg bg-gray-100"></div>
            <div className="h-7 w-7 rounded-lg bg-gray-100"></div>
          </td>
        </tr>
      </tbody>
      <tbody className="animate-pulse">
        <tr className="bg-white border-b border-gray-50">
          <td className="py-3 px-6">
            <div className="h-4 w-4 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-20 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6 flex gap-1">
            <div className="h-7 w-7 rounded-lg bg-gray-100"></div>
            <div className="h-7 w-7 rounded-lg bg-gray-100"></div>
          </td>
        </tr>
      </tbody>
      <tbody className="animate-pulse">
        <tr className="bg-white border-b border-gray-50">
          <td className="py-3 px-6">
            <div className="h-4 w-4 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-20 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6 flex gap-1">
            <div className="h-7 w-7 rounded-lg bg-gray-100"></div>
            <div className="h-7 w-7 rounded-lg bg-gray-100"></div>
          </td>
        </tr>
      </tbody>
      <tbody className="animate-pulse">
        <tr className="bg-white border-b border-gray-50">
          <td className="py-3 px-6">
            <div className="h-4 w-4 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-20 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6 flex gap-1">
            <div className="h-7 w-7 rounded-lg bg-gray-100"></div>
            <div className="h-7 w-7 rounded-lg bg-gray-100"></div>
          </td>
        </tr>
      </tbody>
      <tbody className="animate-pulse">
        <tr className="bg-white border-b border-gray-50">
          <td className="py-3 px-6">
            <div className="h-4 w-4 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-20 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td className="py-3 px-6 flex gap-1">
            <div className="h-7 w-7 rounded-lg bg-gray-100"></div>
            <div className="h-7 w-7 rounded-lg bg-gray-100"></div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
