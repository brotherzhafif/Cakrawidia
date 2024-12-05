import React from 'react';
import LabelButton from '@/Components/Buttons/LabelBtn';
import TopicList from '@/Components/TopicsList';


function Sidebar() {
  return (
    <div className='flex flex-col gap-2 bg-primary rounded-lg p-2 '>
      <div className="flex justify-end p-2 w-full items-center font-bold">
        <LabelButton
          htmlFor="my-drawer-4"
          className='btn btn-sm btn-circle absolute top-9 '
          src="https://img.icons8.com/?size=100&id=2i5n7zNvArOt&format=png&color=FFFFFF"
        />
      </div>
      <TopicList /> {/* Menggunakan TopicList */}
    </div>
  );
}

export default Sidebar;
