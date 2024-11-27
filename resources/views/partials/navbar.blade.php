<div class="sticky shadow-md top-0 z-20 navbar bg-base-100">
  <div class="flex justify-jusbetween w-full gap-7">
    <input id="my-drawer-4" type="checkbox" class=" drawer-toggle" />
      <div class="drawer-content">
      <!-- Page content here -->
        <label for="my-drawer-4" class=" drawer-button btn rounded-full text-primary btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg"
          width="20" 
          height="20"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 50 50">
          <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
        </svg>
        </label>
      </div>
      <div class="drawer-side ">
        <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class=" menu shadow-md bg-white rounded-lg text-base-content min-h-full w-80 transition-all  duration-1000 ease-in-out">
        <!-- Sidebar content here -->
        <li><a>ISINYA APA ? </a></li>
        <li><a>ISINYA APA ? </a></li>
        </ul>
      </div>
      <input type="text" placeholder="Search" class="input input-bordered rounded-full w-full " />

    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      
      <!-- dropdown profile -->
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
      <!-- dropdown profile -->
    </div>
  </div>

</div>

