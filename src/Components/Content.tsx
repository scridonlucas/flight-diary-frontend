import { Diary } from '../types';

const Content = ({ diaries }: { diaries: Diary[] }) => {
  return (
    <div>
      <ul>
        {diaries.map((diary) => {
          return (
            <li key={diary.id}>
              date: {diary.date}
              <br />
              visibility: {diary.visibility}
              <br />
              weather: {diary.weather}
              <br />
              comment: {diary.comment}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Content;
