import React, { useEffect, useState } from "react";
import classes from './search.module.css';
import { useNavigate, useParams } from "react-router-dom";
// This function check if 'term' is not toBeEmpty, it navigates to the search route ('/search/term'). Otherwise, it navigates to the home route ('/').
// The 'search' function is intended to be called when the user initiates a search action, typically triggered by a button click or form submissionn
export default function Search() {
    const [term, setTerm] = useState('');
    const navigate = useNavigate();
    const { searchTerm } = useParams();

    useEffect(() => {
        setTerm(searchTerm ?? '');
    }, [searchTerm]);

    const search = async () => {
        term ? navigate('/search/' + term) : navigate('/');
    };
  return (
    <div className={classes.container}>
        <input
            type='text'
            placeholder="Explore Cherry's Bakeshop!"
            onChange={e => setTerm(e.target.value)}
            onKeyUp={e => e.key === 'Enter' && search()}
            value={term}
        />
        <button onClick={search}>Find</button>
    </div>
  );
  }