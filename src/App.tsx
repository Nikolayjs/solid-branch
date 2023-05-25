import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import api from './api/api';
import Table from './components/Table/Table';
import FullList from './pages/FullList';
import List from './pages/List';
import Summary from './pages/Summary';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(api.fetchData());
  });
  return (
    <Routes>
      <Route path="/" element={<Summary data={data} />} />
      <Route path="/navigator" element={<FullList data={data} />} />
      <Route path="/navigator/:tab" element={<List />} />
    </Routes>
  );
}

export default App;
