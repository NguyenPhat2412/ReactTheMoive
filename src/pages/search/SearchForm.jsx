import { useState } from "react";
import axios from "axios";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const API_KEY = "2c1d75cfa8b936fc1419e9a24929d087"; // 🔥 Thay bằng API Key của bạn
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: API_KEY,
            language: "en",
            query: query,
          },
        }
      );

      onSearch(response.data.results); // Gửi kết quả về component cha
    } catch (error) {
      console.error("Lỗi khi tìm kiếm phim:", error);
    }
  };

  return (
    <form
      className="flex flex-col items-end  bg-white p-4 rounded-lg shadow-md max-w-fit transform translate-x-170 top-0 left-0 h-50"
      onSubmit={handleSubmit}
    >
      <div
        className="flex w-full max-w-400  rounded-lg overflow-hidden items-center "
        style={{ borderBottom: "5px solid blue" }}
      >
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 flex-1  outline-none"
          style={{ width: "500px" }}
        />
        <svg
          className="w-6 h-6 cursor-pointer"
          fill="#ccc"
          aria-hidden="true"
          data-prefix="fas"
          data-icon="search"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </div>
      <div className="mt-4 space-x-4 ">
        <button className="px-6 py-3 text-2xl bg-blue-500 text-white rounded-[20px] hover:bg-blue-700 transition">
          Reset
        </button>
        <button
          type="submit"
          className="px-6 py-3 text-2xl bg-blue-500 text-white rounded-[20px] hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
