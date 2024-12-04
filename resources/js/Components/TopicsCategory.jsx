import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TopicsCategory() {
  const [topics, setTopics] = useState([]);  // Untuk menyimpan data topik
  const [loadingTopics, setLoading] = useState(true);  // Untuk menandakan apakah data sedang di-load
  const [error, setError] = useState(null);  // Untuk menampilkan error jika ada

  useEffect(() => {
    // Fungsi untuk mengambil data dari API
    const fetchData = async () => {
      try {
        const responseTopics = await axios.get('/api/topics');
        setTopics(responseTopics.data);  // Menyimpan data ke state topics
      } catch (err) {
        setError(err.message);  // Menangani error
      } finally {
        setLoading(false);  // Set loading menjadi false setelah data selesai diambil
      }
    };

    fetchData();
  }, []);

  // Menampilkan loading, error, atau data
  if (loadingTopics) return <p className='animate-pulse bg-slate-600  col-span-3 min-h-screen'>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='col-span-12 hidden md:col-span-3 md:flex flex-col gap-2 '>
      <h1 className='font-bold border-b-2 p-2 border-secondary/30'>Topik</h1>
      <ul className=' flex flex-col gap-2 '>
        <h1 className='bg-secondary text-primary p-2 font-bold rounded-md '>Semua topik</h1>
        {topics.map(topic => (
          <li className='p-2 rounded-md hover:bg-secondary/10' key={topic.id}>
            {/* <img src="" alt="" /> */}
            <a className='font-bold' href="">{topic.name} </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default  TopicsCategory;


