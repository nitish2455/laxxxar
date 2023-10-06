import React from 'react'
import Image from 'next/image'

const Table = () => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    
                </th>
                <th scope="col" class="px-6 py-3">
                    customer name
                </th>
               
                <th scope="col" class="px-6 py-3">
                   Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Job Number
                </th>
                <th scope="col" class="px-6 py-3">
                    Mobile Number
                </th>
               
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-[#F87060] bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Rida Talbi
                </th>
               
                <td class="px-6 py-4">
                    04/10/2021; 2:10pm
                </td>
                <td class="px-6 py-4">
                    ABC000006
                </td>
                <td class="px-6 py-4">
                062864592
                </td>
                <td class="px-6 py-4 text-green-400">
                completed
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                <Image
              src="/action.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={200}
              height={70}
              priority
            />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-orange-400 bg-orange-100 border-orange-300 rounded-full"/>
                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Rida Talbi
                </th>
               
                <td class="px-6 py-4">
                04/10/2021; 2:10pm
                </td>
                <td class="px-6 py-4">
                ABC000006
                </td>
                <td class="px-6 py-4">
                062864592
                </td>
                <td class="px-6 py-4 text-green-400">
                completed
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                <Image
              src="/action.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={200}
              height={70}
              priority
            />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-[#F87060] bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Rida Talbi
                </th>
                
                <td class="px-6 py-4">
                04/10/2021; 2:10pm
                </td>
                <td class="px-6 py-4">
                ABC000006
                </td>
                <td class="px-6 py-4">
                062864592
                </td>
                <td class="px-6 py-4 text-orange-400">
                Processing
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                <Image
              src="/action.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={200}
              height={70}
              priority
            />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-[#F87060] bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Rida Talbi
                </th>
                
                <td class="px-6 py-4">
                04/10/2021; 2:10pm
                </td>
                <td class="px-6 py-4">
                ABC000006
                </td>
                <td class="px-6 py-4">
                062864592
                </td>
                <td class="px-6 py-4 text-green-400">
                completed
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                <Image
              src="/action.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={200}
              height={70}
              priority
            />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-[#F87060] bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Rida Talbi
                </th>
                
                <td class="px-6 py-4">
                04/10/2021; 2:10pm
                </td>
                <td class="px-6 py-4">
                ABC000006
                </td>
                <td class="px-6 py-4">
                062864592
                </td>
                <td class="px-6 py-4 text-red-400">
                cancel
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                <Image
              src="/action.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={200}
              height={70}
              priority
            />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-[#F87060] bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Rida Talbi
                </th>
                
                <td class="px-6 py-4">
                04/10/2021; 2:10pm
                </td>
                <td class="px-6 py-4">
                ABC000006
                </td>
                <td class="px-6 py-4">
                062864592
                </td>
                <td class="px-6 py-4 text-green-400">
                completed
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                <Image
              src="/action.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={200}
              height={70}
              priority
            />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-[#F87060] bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Rida Talbi
                </th>
               
                <td class="px-6 py-4">
                04/10/2021; 2:10pm
                </td>
                <td class="px-6 py-4">
                ABC000006
                </td>
                <td class="px-6 py-4">
                   062864592
                </td>
                <td class="px-6 py-4 text-red-400">
                cancel
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                <Image
              src="/action.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={200}
              height={70}
              priority
            />
                </td>
            </tr>
           
        </tbody>
    </table>
</div>
  )
}

export default Table