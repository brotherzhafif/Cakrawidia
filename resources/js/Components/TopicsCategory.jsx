import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TopicsCategory() {
  const [topics, setTopics] = useState([]);  // Untuk menyimpan data topik
  const [loading, setLoading] = useState(true);  // Untuk menandakan apakah data sedang di-load
  const [error, setError] = useState(null);  // Untuk menampilkan error jika ada

  useEffect(() => {
    // Fungsi untuk mengambil data dari API
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/topics');
        setTopics(response.data);  // Menyimpan data ke state topics
      } catch (err) {
        setError(err.message);  // Menangani error
      } finally {
        setLoading(false);  // Set loading menjadi false setelah data selesai diambil
      }
    };

    fetchData();
  }, []);

  // // Menampilkan loading, error, atau data
  // if (loading) return <p className=' bg-orange-400 min-h-screen'>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <div className='col-span-3 p-2 bg-red-600 '>
      <h1 className='font-bold bg-orange-400 border-b-2 border-secondary'>Topik</h1>
      <ul className='bg-green-300 flex flex-col gap-4  '>
        {topics.map(topic => (
          <li className='' key={topic.id}>
            {/* <img src="" alt="" /> */}
            <a className='font-bold' href="">{topic.name} </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopicsCategory;
