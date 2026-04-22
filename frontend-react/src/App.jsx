import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    user_id: 1,
    status: "hadir",
    note: "",
  });

  const getAttendance = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/attendance");
    setData(res.data);
  };

 useEffect(() => {
  const fetchData = async () => {
    await getAttendance();
  };
  fetchData();
}, []);

  // CREATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://127.0.0.1:8000/api/attendance", {
      user_id: form.user_id,
      date: new Date().toISOString().slice(0, 10),
      status: form.status,
      note: form.note,
    });

    setShowModal(false);
    setForm({ user_id: 1, status: "hadir", note: "" });
    getAttendance();
  };

  // DELETE
  const handleDelete = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/attendance/${id}`);
    getAttendance();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Data Attendance</h1>
      <h1 className="text-red-500 text-5xl font-bold">TEST TAILWIND</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
        >
          + Tambah
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-gray-300">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Tanggal</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Note</th>
              <th className="p-3 text-left">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-t border-gray-700 hover:bg-gray-800"
              >
                <td className="p-3">{item.id}</td>
                <td className="p-3">{item.user_id}</td>
                <td className="p-3">{item.date}</td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      item.status === "hadir"
                        ? "bg-green-500/20 text-green-400"
                        : item.status === "sakit"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-3 text-gray-400">
                  {item.note || "-"}
                </td>

                <td className="p-3">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL FORM */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg w-96">
            <h2 className="text-xl mb-4 font-semibold">
              Tambah Attendance
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <select
                className="w-full p-2 bg-gray-700 rounded"
                value={form.status}
                onChange={(e) =>
                  setForm({ ...form, status: e.target.value })
                }
              >
                <option value="hadir">Hadir</option>
                <option value="sakit">Sakit</option>
                <option value="izin">Izin</option>
                <option value="alpa">Alpa</option>
              </select>

              <input
                type="text"
                placeholder="Note"
                className="w-full p-2 bg-gray-700 rounded"
                value={form.note}
                onChange={(e) =>
                  setForm({ ...form, note: e.target.value })
                }
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-600 px-3 py-1 rounded"
                >
                  Batal
                </button>

                <button
                  type="submit"
                  className="bg-blue-600 px-3 py-1 rounded"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;