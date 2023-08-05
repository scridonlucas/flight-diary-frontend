import { useState, useEffect } from 'react';
import { getDiaries, postDiary } from './services/diariesService';
import { Diary, newDiary } from './types';
import Content from './Components/Content';
import Form from './Components/Form';
import axios from 'axios';
const App = () => {
  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getDiaries();
        setDiaries(response);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.status);
          console.error(error.response);
        } else {
          console.log(error);
        }
      }
    })();
  }, []);

  const createDiary = async (newDiary: newDiary) => {
    (async () => {
      try {
        const response = await postDiary(newDiary);
        setDiaries(diaries.concat(response));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.status);
          console.error(error.response);
        } else {
          console.log(error);
        }
      }
    })();
  };

  return (
    <div>
      <Content diaries={diaries} />
      <Form createDiary={createDiary} />
    </div>
  );
};

export default App;
