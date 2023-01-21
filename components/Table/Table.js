import React from 'react'

const Table = ({ item }) => {
    console.log({ item })
    return (
        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            <tr class="hover:bg-gray-50">
                <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div class="relative h-10 w-10">
                        <img
                            class="h-full w-full rounded-full object-cover object-center"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                    </div>
                    <div class="text-sm">
                        <div class="font-medium text-gray-700">{item?.farmerOrSeller?.farmerName}</div>
                        <div class="text-gray-400">{item?.farmerOrSeller?.farmerAddress}</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    <span
                        class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                    >
                        {item?.farmerOrSeller?.productQuantity}
                    </span>
                </td>
                <td class="px-6 py-4"> {item?.farmerOrSeller?.productName}</td>
                <td class="px-6 py-4">
                    <div class="flex gap-2">
                        <span
                            class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                        >
                            {item?.buyer?.fullName}
                        </span>

                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex justify-start gap-4">
                        <span
                            class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                        >
                            Rs. {item?.farmerOrSeller?.productPrice}
                        </span>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex justify-start gap-4">
                        <span
                            class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-yellow-600"
                        >
                            {item?.orderStatus}
                        </span>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex justify-start gap-4">
                        <span
                            class="inline-flex hover:cursor-pointer hover:scale-105 items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-green-600"
                        >
                            Accept
                        </span>
                        <span
                            class="inline-flex hover:cursor-pointer hover:scale-105 items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-red-600"
                        >
                            Reject
                        </span>
                    </div>
                </td>
            </tr>
        </tbody>
    )
}

export default Table