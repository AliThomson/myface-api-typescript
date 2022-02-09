import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PostListPage } from './routes/posts/postListPage/PostListPage';
import { UserListPage } from './routes/users/userListPage/UserListPage';
import { UserDetailPage } from './routes/users/userDetailPage/UserDetailPage';
import { Navbar } from './routes/navbar/Navbar';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        
          <Routes>
            <Route path="/posts/" element={<PostListPage />} />
            <Route path="/users/" element={<UserListPage />} />
            <Route path="/users?page=:pageNumber" element={<UserListPage />} />
            <Route path="/users/:userId" element={<UserDetailPage/>} />
          </Routes>
        
    </BrowserRouter>
  </div>
  );
}

export default App;


