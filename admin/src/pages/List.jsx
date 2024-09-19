import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { TbTrash } from 'react-icons/tb';

const List = () => {
  const url = 'http://localhost:4000';
  const [list, setList] = useState([]);

  // Fetch product list
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/product/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error('Error fetching products');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while fetching the product list.');
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    try {
      const response = await axios.post(`${url}/api/product/remove`, { id });
      if (response.data.success) {
        toast.success('Product removed successfully');
        setList((prevList) => prevList.filter((product) => product._id !== id));
      } else {
        toast.error('Failed to remove product');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while deleting the product.');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <section className='p-4 sm:p-10 box-border w-full'>
      <h4 className="bold-22 uppercase">Product List</h4>
      <div className='overflow-auto mt-5'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-slate-900/20 text-gray-30  regular-14 xs:regular-16 text-start py-12'>
              <th className="p-1 text-left">Product</th>
              <th className="p-1 text-left">Title</th>
              <th className="p-1 text-left">Price</th>
              <th className="p-1 text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {list.map((product) => (
              <tr key={product._id} className='border-b border-slate-900/20 text-gray-50 p-6 medium-14 text-left'>
                <td className='p-1'>
                  <img
				  className='rounded'
                    src={`${url}/uploads/${product.image}`}
                    alt={product.name}
                    height={38}
                    width={38}
                  />
                </td>
                <td className='p-1'>
                  <div className='line-clamp-3'>{product.name}</div>
                </td>
                <td  className='p-1'>${product.price}</td>
                <td>
                  <div onClick={() => deleteProduct(product._id)} className="bold-22 cursor-pointer" >
                    <TbTrash />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default List;
