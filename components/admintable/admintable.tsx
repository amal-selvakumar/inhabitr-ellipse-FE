import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import headerIcon from "../../assets/vectors/InhabitrIcon.svg";

const AdminDashboard: React.FC = () => {
  // Sample data
  const initialData = [
    { name: "Chair", description: "A comfortable chair", width: 45.5, height: 90.0, depth: 60.0, quantity: 10, status: 1 },
    { name: "Table", description: "A wooden dining table", width: 120.0, height: 75.0, depth: 80.0, quantity: 5, status: 1 },
    { name: "Sofa", description: "A spacious sofa", width: 200.0, height: 85.0, depth: 100.0, quantity: 3, status: 0 },
    // Add more data as needed
  ];

  const [data, setData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const tableRef = useRef<HTMLTableElement>(null);

  // Paginated data
  const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Handle click outside table
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tableRef.current && !tableRef.current.contains(event.target as Node)) {
        setIsEditing(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle edit
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Handle save
  const handleSave = () => {
    setIsEditing(false);
  };

  // Handle input change
  const handleChange = (index: number, field: string, value: any) => {
    const updatedData = [...data];
    if (field === 'quantity') {
      // Update status based on quantity
      const status = parseInt(value) === 0 ? 0 : 1;
      updatedData[index] = { ...updatedData[index], [field]: parseInt(value), status };
    } else {
      updatedData[index] = { ...updatedData[index], [field]: value };
    }
    setData(updatedData);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="w-full px-2 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
          <Image src={headerIcon} alt="logo" />
          <button className="grid justify-center items-center border p-3 text-base cursor-pointer text-amber-300 uppercase rounded-full border-amber-300 ">
            Logout
          </button>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-2 mb-4">
          <button
            onClick={handleEdit}
            className="w-[100px] h-[30px] flex justify-center items-center bg-amber-300 text-white border-amber-300 border p-0 text-base cursor-pointer uppercase rounded-full transition-transform duration-150 ease-in-out hover:bg-white hover:text-amber-300 active:scale-90"
          >
            Edit
          </button>
          <button
            onClick={handleSave}
            className="w-[100px] h-[30px] flex justify-center items-center bg-amber-300 text-white border-amber-300 border p-0 text-base cursor-pointer uppercase rounded-full transition-transform duration-150 ease-in-out hover:bg-white hover:text-amber-300 active:scale-90"
          >
            Save
          </button>
        </div>

        <div className="bg-white shadow overflow-hidden" ref={tableRef}>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-amber-300">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Width</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Height</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Depth</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {isEditing ? (
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => handleChange(index, 'name', e.target.value)}
                        className="border rounded p-1"
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {isEditing ? (
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => handleChange(index, 'description', e.target.value)}
                        className="border rounded p-1"
                      />
                    ) : (
                      item.description
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {isEditing ? (
                      <input
                        type="number"
                        value={item.width}
                        onChange={(e) => handleChange(index, 'width', parseFloat(e.target.value))}
                        className="border rounded p-1"
                      />
                    ) : (
                      item.width
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {isEditing ? (
                      <input
                        type="number"
                        value={item.height}
                        onChange={(e) => handleChange(index, 'height', parseFloat(e.target.value))}
                        className="border rounded p-1"
                      />
                    ) : (
                      item.height
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {isEditing ? (
                      <input
                        type="number"
                        value={item.depth}
                        onChange={(e) => handleChange(index, 'depth', parseFloat(e.target.value))}
                        className="border rounded p-1"
                      />
                    ) : (
                      item.depth
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {isEditing ? (
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleChange(index, 'quantity', parseInt(e.target.value))}
                        className="border rounded p-1"
                      />
                    ) : (
                      item.quantity
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {isEditing ? (
                      <input
                        type="number"
                        value={item.depth}
                        onChange={(e) => handleChange(index, 'depth', parseFloat(e.target.value))}
                        className="border rounded p-1"
                      />
                    ) : (
                      item.depth
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.status === 1
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.status === 1 ? "Available" : "Out of Stock"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination controls */}
        <div className="mt-4 flex justify-center">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`mx-1 px-4 py-2 border rounded ${
                currentPage === i + 1
                  ? "bg-amber-300 text-white"
                  : "bg-white text-amber-300 border-amber-300"
              } hover:bg-amber-200 hover:text-white transition-colors`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </main>
      <footer className="bg-amber-300 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">© 2024 Inhabitr, Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboard;
