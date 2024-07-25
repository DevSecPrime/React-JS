import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './Context/AppContext';

function App() {

  // consume data from context -->
  //calling fetchBlogPostsData function for fetxh data
  const { fetchBlogPostsData } = useContext(AppContext);

  // for render the UI 

  useEffect(() => {
    fetchBlogPostsData();
  }, [])

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
