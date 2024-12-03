import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Leaderboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(15); // Jumlah pengguna yang terlihat awalnya 15

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('api/users');
        const sortedUsers = response.data.sort((a, b) => b.points - a.points);
        setUsers(sortedUsers);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); // Tambah 5 pengguna saat tombol diklik
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <div className='bg-red-400 col-span-3 p-2'>
      <h1 className='font-bold bg-orange-400 border-b-2 border-secondary'>Cakra Tercerdas</h1>
      <table className='flex flex-col'>
        <tbody>
          {users.slice(0, visibleCount).map((user, index) => (
            <tr className='flex justify-between' key={user.id}>
              <td className='font-bold'>{index + 1}</td>
              <td className='font-bold'>{user.username}</td>
              <td className='font-bold'>{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {visibleCount < users.length && ( // Tampilkan tombol hanya jika ada lebih banyak pengguna
        <div className="flex justify-center items-center p-5">
          <button
            onClick={loadMore} // Panggil fungsi loadMore saat tombol diklik
            className="btn btn-xs bg-transparent border-secondary hover:btn-outline rounded-2xl"
          >
            Lihat lebih
          </button>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
