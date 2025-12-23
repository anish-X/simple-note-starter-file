import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setNotes([...notes, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Simple Notes</h1>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter a note..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Notes List */}
        <div className="space-y-2">
          {notes.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No notes yet. Add one above
            </p>
          ) : (
            notes.map((note, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <p className="text-gray-800">{note}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
