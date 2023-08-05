import { useState, useEffect } from 'react';
import { getDiaries } from './services/diariesService';
import { Diary } from './types';
import Content from './Components/Content';

const App = () => {
  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(() => {
    async () => {
      const response = await getDiaries();
      setDiaries(response);
    };
  }, []);
  return (
    <div>
      <Content diaries={diaries} />
    </div>
  );
};

export default App;
