import './App.css';
import { useEffect, useState } from 'react';
import DogImg from './DogImg';
import Navbar from './Navbar';


function App() {

  const [theme, setTheme] = useState("")


  const handleTheme = () => {
    if (theme === "") {
      setTheme("_dark")
      document.body.style.backgroundColor = "rgb(16, 16, 16)"
    }
    else {
      setTheme("")
      document.body.style.backgroundColor = "white"
    }
  }


  const [dogs, setDogs] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchDogs()
    window.addEventListener('scroll', handleScroll);
  }, [])


  const fetchDogs = async () => {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random/10`);
    const data = await response.json();
    setDogs(prevDogs => [...prevDogs, ...data.message]);
  }

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      setPage(prevPage => prevPage + 1);
    }
  };
  
  useEffect(() => {
    fetchDogs();
  }, [page]);


  return (
    <div>
      <Navbar handleTheme={handleTheme} theme={theme} />

      <div className='dogList'
      >
        {
          dogs.map((el, index) => {
            return (
              <DogImg key={index} theme={theme} img={el} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
