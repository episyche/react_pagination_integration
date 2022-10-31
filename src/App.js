import { useState, useEffect } from 'react';
import './App.css';
import { Data } from './components/Data';
import ReactPaginate from 'react-paginate';

function App() {
  const [pagination_number, setpagination_number] = useState('')

  const [page, setpage] = useState(0)
  const [map_data, setmap_data] = useState([])


  // get the page count 
  useEffect(() => {
    if (Data) {
      var originaldata_lenght = Data.length
      var divide_data = originaldata_lenght / 7
      setpagination_number(divide_data)
    }
  }, [])

  // dynamic page 
  useEffect(() => {
    var starting_page = page * 7
    var ending_page = starting_page + 7
    setmap_data(Data.slice(starting_page, ending_page))
  }, [page])

  return (
    <div className="App">
      <div className='heading'> React pagination </div>
      <div>
        <div className='whole-map'>
          {map_data.map((e) => (
            <div key={e.id} className="map-data">
              <div className='map-id'>
                <p className=' '>{e.id}</p>
              </div>
              <div className='map-name' >
                <p className=''>{e.Name}</p>
              </div>
            </div>
          )
          )}
        </div>

        {/* paginations start */}
        <div className='whole-page'>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={({ selected }) => setpage(selected)}
            pageRangeDisplayed={5}
            pageCount={pagination_number}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            className="whole-paginations"
            pageLinkClassName="prev-link"
            previousClassName="prev-class"
            nextClassName="next-class"
            activeClassName="active-class"
            containerClassName="containter-class"

          />
        </div>
      </div>
    </div>
  );
}

export default App;
