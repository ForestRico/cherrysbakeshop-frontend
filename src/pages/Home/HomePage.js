import React, { useEffect, useReducer } from 'react';
import { getAll, getAllByTags, getAllTags, search } from "../../services/foodService";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
import { useParams } from 'react-router-dom';
import Search from '../../components/Search/Search';
import Tags from '../../components/Tags/Tags';
import NotFound from '../../components/NotFound/NotFound';
import classes from "./homePage.module.css"


// The `initialState` variable is an object with a `foods` property set to an empty array. This represents the initial state of our component.
const initialState = { foods: [], tags: [] };

// The `reducer` function takes the current `state` and an `action` as input and returns a new state based on the action. It updates the state based on the action type. In this case, it listens for the 'FOODS_LOADED' action type and updates the `foods` property of the state with the payload from the action.
const reducer = (state, action) => {
  switch (action.type) {
    case 'FOODS_LOADED':
      return { ...state, foods: action.payload};
    case 'TAGS_LOADED':
      return { ...state, tags: action.payload};
      default: 
      return state;
  }
};

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods, tags } = state;
  const { searchTerm, tag } = useParams();

// The `useEffect` hook is used to perform side effects in the component. In this case, it fetches data asynchronously using the `getAll` function (not defined in the provided code) when the component mounts (`[]` dependency array indicates it should only run once). Once the data is fetched, it dispatches a 'FOODS_LOADED' action with the fetched foods as the payload.
// The component returns a simple JSX element `<div>HomePage</div>`. 

  // useEffect(() => {
  //   getAll().then(foods => dispatch({ type: 'FOODS_LOADED', payload: foods}));
  // }, []);

  // Here we created a constant that checks if the searchTerm is available, ifso it then uses the search() function found in foodService, otherwise it uses 'getAll' to load the food
  useEffect(() => {
    getAllTags().then(tags => dispatch ({ type: 'TAGS_LOADED', payload: tags}))

    const loadFoods = tag
    ? getAllByTags(tag)
    : searchTerm 
    ? search(searchTerm) 
    : getAll();

    loadFoods.then(foods => dispatch({ type: 'FOODS_LOADED', payload: foods }));
  }, [searchTerm, tag]);
  

  // An Empty array means the function will be called once to the HomePage

  return (
  <>
    <div className={classes.imgMain}>
      <img src="/cafe/cafe1.jpg" />
      <img src="/cafe/cafe2.jpg" />
    </div>
    <Search />
    <Tags tags={tags} />
{/* This line conditionally renders a component called <NotFound /> if the length of the foods array is equal to 0 (i.e., there are no search results) */}
    {foods.length === 0 && <NotFound linkText="Reset Search" />} 
    <Thumbnails foods={foods} />
  </>
  );
}