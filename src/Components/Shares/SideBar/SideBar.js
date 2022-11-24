import React from 'react';
import UseContext, { AuthContext } from '../../../Context/UseContext';

const SideBar = () => {
    const {user}=UseContext(AuthContext)
    return (
        <div class="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700">
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white">Brand</h2>

    <div class="relative mt-6">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </span>

        <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
    </div>

    <div class="flex flex-col justify-between flex-1 mt-6">
       

        <div class="flex items-center px-4 -mx-2">
            <img class="object-cover mx-2 rounded-full h-9 w-9" src={user?.PhotoURL} alt="avatar" />
            <h4 class="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">{user?.displayName}</h4>
        </div>
    </div>
</div>
    );
};

export default SideBar;