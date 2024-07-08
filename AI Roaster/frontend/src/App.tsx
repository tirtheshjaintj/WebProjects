import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import RoastDisplay from "./components/RoastDisplay";

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<"github" | "leetcode">("leetcode");
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [roast, setRoast] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(event.target.value as "github" | "leetcode");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/${selectedService}`, { username });
      setRoast(response.data);
      setError("");
      setLoading(false);
      toast.success("You are roasted completely I can smell it", {
        duration: 4000,
        position: 'bottom-center',
        style: {},
        className: '',
        icon: '🔥',
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
    } catch (error: any) {
      setLoading(false);
      setRoast("");
      setError(`Failed to fetch this username on ${selectedService === "github" ? "GitHub" : "LeetCode"}`);
      console.error(`Error fetching ${selectedService === "github" ? "GitHub" : "LeetCode"} stats:`, error);
      toast.error(`Failed to fetch this username on ${selectedService === "github" ? "GitHub" : "LeetCode"}`, {
        duration: 4000,
        position: 'bottom-center',
        style: {},
        className: '',
        icon: '🔥',
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
    }
  };

  return (
    <div className="min-h-screen min-w-screen text-white flex flex-col items-center">
      <Toaster/>
      <div className="flex flex-col w-6/7 md:w-1/2 bg-gray-900 p-4 rounded-xl shadow-xl mx-auto pb-8 mt-28">
        <h1 className="text-4xl font-semibold text-center text-white whitespace-pre-wrap my-8">Welcome to CodeRoast 🔥</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="my-5">
            <select
              className="rounded-none text-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedService}
              onChange={handleServiceChange}
            >
              <option value="leetcode">LeetCode</option>
              <option value="github">GitHub</option>
            </select>
          </div>
          <div className="my-5">
            <div className="flex">
              <span className="inline-flex text-lg items-center px-3 text-gray-900 bg-gray-200 border  border-gray-300 border-r-0  dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                {selectedService === "leetcode" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 32 32">
                    <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                )}
              </span>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value.trim())}
                required
                className="rounded-none text-lg outline-none bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={`YOUR ${selectedService.toUpperCase()} USERNAME`}
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex w-full text-lg h-12 items-center  font-extrabold justify-center rounded-md border border-blue-800 bg-blue-800 hover:bg-blue-700 bg-[length:200%_100%] px-6 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-50 shadow-md"
          >
            {!loading ? (
              "Roast🔥!"
            ) : (
              <div className="flex justify-center items-center font-extrabold">
                Roasting🔥<div className="spinner"></div>
              </div>
            )}
          </button>
          <p className="text-gray-400 mt-10">Discalimer: Do not read roast if you get hurt easily as it will be brutally true.</p>
        </form>
        
        {error && (
          <p className="text-red-500 mt-2">{error}</p>
        )}
        {roast && <RoastDisplay roast={roast}  username={username}/>}
      </div>
    </div>
  );
};

export default App;
