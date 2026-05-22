import { useCallback, useEffect, useMemo, useState } from "react";

export default function UseEffectFetch() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchUsers = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: abortController.signal }
        );

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    return () => {
      console.log("Cleanup: Aborting previous fetch request.");
      abortController.abort();
    };
  }, [refreshTrigger]);

  const handleRefresh = useCallback(() => {
    setRefreshTrigger((prev) => prev + 1);
  }, []);

  
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  
  const averageNameLen = useMemo(() => {
    if (filteredUsers.length === 0) return 0;

    console.log("Computing expensive derived value...");

    const totalLen = filteredUsers.reduce(
      (sum, user) => sum + user.name.length,
      0
    );

    return (totalLen / filteredUsers.length).toFixed(1);
  }, [filteredUsers]);

  return (
    <div>
      <h2>User Dashboard</h2>

      <div>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}/>

        <button onClick={handleRefresh}>Refresh</button>
      </div>

      <div>
        <strong>Stats (Memoized):</strong> Avg. Name Length:
        {averageNameLen} characters
      </div>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}

          {filteredUsers.length === 0 && <li>No users found.</li>}
        </ul>
      )}
    </div>
  );
}