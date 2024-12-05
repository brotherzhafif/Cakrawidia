import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LabelButton from '@/Components/Buttons/LabelBtn';

function Sidebar() {
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
    
    <div className='flex flex-col gap-2 '>
      <div className="flex justify-between p-2 w-full items-center font-bold border-b-2 border-secondary/30">
          <h1 className='font-bold text-xl'>Topik</h1>
          <LabelButton
            htmlFor={"my-drawer-4"}
            className='btn btn-sm btn-circle'
            src={"https://img.icons8.com/?size=100&id=2i5n7zNvArOt&format=png&color=FFFFFF"}
          >
          </LabelButton>
      </div>
      <ul className=' flex flex-col gap-2 '>
        <h1 className='bg-secondary text-primary p-2 font-bold rounded-md '>Semua topik</h1>
        {topics.map(topic => (
          <li key={topic.id}>
            <img src="" alt="" />
            <a className='font-bold' href="">{topic.name} </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default  Sidebar;


