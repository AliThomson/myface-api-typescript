import logo from './logo.svg';
import './App.css';
import { PostListPage } from './posts/postListPage/PostListPage';
import { UserListPage } from './users/userListPage/UserListPage';
import { UserDetailPage } from './users/userDetailPage/UserDetailPage';

function App() {
  return (
    <div className="App">
      <UserDetailPage/>
    </div>
  );
}

export default App;
