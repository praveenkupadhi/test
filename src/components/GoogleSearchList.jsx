import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchDataAdd, searchDataFetch } from '../redux/actions';

export const GoogleSearchList = () => {
  const data = useSelector((store) => store.data);
  const matchData = useSelector((store) => store.matchData);
  const dispatch = useDispatch();

  const fetchData = () => {
    axios
      .get(`https://fast-reef-22226.herokuapp.com/data?q=${data}`)
      .then((res) => {
        dispatch(searchDataFetch(res.data));
        dispatch(searchDataAdd(''));
      });
  };

  useEffect(() => {
    if (data !== '') {
      fetchData();
    }
  }, []);

  return (
    <>
      {console.log(matchData)}
      <div id="navbar">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="image"
        />
        <input type="text" />
        <button className="search">Search</button>
      </div>
      {matchData.map((e) => {
        return <p key={e.id}>{e.title}</p>;
      })}
    </>
  );
};
