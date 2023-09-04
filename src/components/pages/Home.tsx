import { searchGif } from '@/api/gifs';
import { useEffect, useState } from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '250ox',
  color: '#fff',
  lineHeight: '250px',
  textAlign: 'center',
  background: '#364d79',
};

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const [visibleData, setVisibleData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [pageOffset, setPageOffSet] = useState(0);

  //TODO: create debounce;
  //TODO: use ref to avoid unnecessary rerender;
  //TODO: get lowercase to avoid not match lower and uppercase letters
  const handleSeach = (e) => {
    const { value } = e.target;
    if (value) {
      setSearchQuery(value);
    }
  };

  useEffect(() => {
    const doApiCall = async (queryParam) => {
      const result = await searchGif(queryParam, itemsPerPage, pageOffset);
      if (result.meta.status === 200) {
        setVisibleData(result.data);
      }
    };
    if (searchQuery) {
      doApiCall(searchQuery);
    }
  }, [searchQuery, itemsPerPage, pageOffset]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const changeItemsPerPage = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage);
  };

  const setPage = (pageNumber: number) => {
    setPageOffSet(pageNumber * itemsPerPage);
  };

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="relative container w-full h-full mt-16 mx-auto flex flex-col items-center p-10">
      <div>
        <input className="p-2 border-2" onChange={(e) => handleSeach(e)} />
        <button className="border-2 p-2 font-bold ml-4">SEARCH</button>
      </div>

      <div className="flex flex-col justify-center border border-gray p-4 text-center mt-4">
        <p>Items Per Page</p>
        <div>
          <button className="border p-4" onClick={() => changeItemsPerPage(10)}>
            10
          </button>
          <button
            className="border p-4 ml-2"
            onClick={() => changeItemsPerPage(20)}
          >
            20
          </button>
          <button
            className="border p-4 ml-2"
            onClick={() => changeItemsPerPage(30)}
          >
            30
          </button>
        </div>

        <p>Page</p>
        <div>
          <button className="border p-4" onClick={() => setPage(1)}>
            1
          </button>
          <button className="border p-4 ml-2" onClick={() => setPage(2)}>
            2
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6">
        {visibleData.map((resultItem) => (
          <div
            className="border border-gray-300 flex flex-col justify-between p-2 cursor-pointer"
            onClick={openModal}
          >
            <p className="text-center mt-2 font-semibold">{resultItem.title}</p>
            <img
              src={resultItem.images?.original?.url}
              alt={resultItem.title}
            />
          </div>
        ))}
      </div>
      {showModal && (
        <div className="absolute w-[90%] bg-white rounded-xl border-2">
          <Carousel
            afterChange={onChange}
            className="flex items-center justify-center"
          >
            {visibleData.map((resultItem) => (
              <div
                key={`gif-${resultItem.id}`}
                className="border border-gray-300 flex flex-col justify-between p-2 h-[400px] w-[500px]"
              >
                <img
                  src={resultItem.images?.original?.url}
                  alt={resultItem.title}
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};
