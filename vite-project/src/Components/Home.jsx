import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Home = ({ input }) => {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);

  function FetchData() {
    axios(`/api/products?_page=${page}&_limit=12`)
      .then((res) => setState(res.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    FetchData();
  }, [page]);

  // 🔍 Filter data using input prop (case-insensitive)
  const filteredData = state.filter((item) =>
    item.title.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div>
      <h1 className='text-capitalize text-center mt-5 mb-5 pt-5 pb-5 bg-dark text-white'>home page</h1>

      <div className='d-flex flex-wrap justify-content-center'>
        {
          filteredData.length === 0 ? (
            <h1>No products found</h1>
          ) : (
            filteredData.map((ele, idx) => (
              <div key={idx} className='w-25 p-5 text-center'>
                <img src={ele.image} height={200} alt={ele.title} />
                <h6>{ele.title}</h6>
                <button className='btn d-block bg-primary w-100'>{ele.price}</button>
              </div>
            ))
          )
        }
      </div>

      <div className='d-flex gap-5 justify-content-center text-capitalize'>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className='btn btn-lg'
        >
          prev
        </button>
        <button className='btn btn-lg'>{page}</button>
        <button onClick={() => setPage(page + 1)} className='btn btn-lg'>next</button>
      </div>
    </div>
  );
};

export default Home;
