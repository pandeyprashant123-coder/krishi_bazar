import React from 'react'

export const Dashboard = () => {
  return (
    <div className="admin_table">
        <table className='Table_dashborad'>
            <tr className='table_heading'>
                <th>Product Name</th>
                <th>Farmer</th>
                <th>Buyer</th>
                <th>Price</th>
                <th>Status</th>
            </tr>
            <tr className='Table_items'>
                <td>Cauliflower</td>
                <td>Yukesh Katwal</td>
                <td>Raju Kadel</td>
                <td>Rs:20/kg</td>
                <td>Pending...</td>
            </tr>
            <tr className='Table_items'>
                <td>Cauliflower</td>
                <td>Yukesh Katwal</td>
                <td>Raju Kadel</td>
                <td>Rs:20/kg</td>
                <td>Pending...</td>
            </tr>
            <tr className='Table_items'>
                <td>Cauliflower</td>
                <td>Yukesh Katwal</td>
                <td>Raju Kadel</td>
                <td>Rs:20/kg</td>
                <td>Pending...</td>
            </tr>
            <tr className='Table_items'>
                <td>Cauliflower</td>
                <td>Yukesh Katwal</td>
                <td>Raju Kadel</td>
                <td>Rs:20/kg</td>
                <td>Pending...</td>
            </tr>
        </table>
    </div>
  )
}
