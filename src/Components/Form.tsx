import { useState } from 'react';
import { Weather, Visibility, newDiary } from '../types';

const Form = ({
  createDiary,
}: {
  createDiary: (newDiary: newDiary) => Promise<void>;
}) => {
  const [comment, setComment] = useState('');
  const [weather, setWeather] = useState<Weather>('rainy');
  const [visibility, setVisibility] = useState<Visibility>('great');
  const [date, setDate] = useState('');

  const changeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const changeWeather = (newWeather: Weather) => {
    setWeather(newWeather);
  };

  const changeVisibility = (newVisibility: Visibility) => {
    setVisibility(newVisibility);
  };

  const changeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const addDiary = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const newDiary: newDiary = {
      date,
      weather,
      visibility,
      comment,
    };

    createDiary(newDiary);
    setComment('');
    setWeather('rainy');
    setVisibility('great');
    setDate('');
  };

  return (
    <div>
      <form onSubmit={addDiary}>
        Date
        <input type="date" onChange={changeDate} />
        <br />
        <br />
        Weather
        <div>
          sunny{' '}
          <input
            type="radio"
            name="weather"
            value="sunny "
            checked={weather === 'sunny'}
            onChange={() => {
              changeWeather('sunny');
            }}
          />
          rainy{' '}
          <input
            type="radio"
            name="weather"
            value="rainy"
            checked={weather === 'rainy'}
            onChange={() => {
              changeWeather('rainy');
            }}
          />
          cloudy
          <input
            type="radio"
            name="weather"
            value="cloudy"
            checked={weather === 'cloudy'}
            onChange={() => {
              changeWeather('cloudy');
            }}
          />
          stormy
          <input
            type="radio"
            name="weather"
            value="stormy"
            checked={weather === 'stormy'}
            onChange={() => {
              changeWeather('stormy');
            }}
          />
          windy{' '}
          <input
            type="radio"
            name="weather"
            value="windy"
            checked={weather === 'windy'}
            onChange={() => {
              changeWeather('windy');
            }}
          />
        </div>
        <br />
        <br />
        Visibility
        <div>
          great{' '}
          <input
            type="radio"
            name="visiblity"
            value="great"
            checked={visibility === 'great'}
            onChange={() => {
              changeVisibility('great');
            }}
          />
          good{' '}
          <input
            type="radio"
            name="visiblity"
            value="good"
            checked={visibility === 'good'}
            onChange={() => {
              changeVisibility('good');
            }}
          />
          ok
          <input
            type="radio"
            name="visiblity"
            value="ok"
            checked={visibility === 'ok'}
            onChange={() => {
              changeVisibility('ok');
            }}
          />
          poor{' '}
          <input
            type="radio"
            name="visiblity"
            value="poor"
            checked={visibility === 'poor'}
            onChange={() => {
              changeVisibility('poor');
            }}
          />
        </div>
        <br />
        <br />
        Comment
        <input type="text" value={comment} onChange={changeComment} />
        <br />
        <button type="submit"> Add diary</button>
      </form>
    </div>
  );
};

export default Form;
