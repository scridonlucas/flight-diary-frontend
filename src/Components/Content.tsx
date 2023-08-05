import { Diary } from '../types';

const Content = ({ diaries }: { diaries: Diary[] }) => {
  return (
    <div>
      {diaries.map((diary) => {
        return (
          <li key={diary.id}>
            {diary.date}
            {diary.visibility}
            {diary.weather}
          </li>
        );
      })}
    </div>
  );
};

export default Content;
