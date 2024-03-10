import React from "react";
import classes from './tags.module.css'
import { Link } from "react-router-dom";


// Conditional Styling: the style of the '<div>' is set dynamically based on the value of the 'forFoodPage' prop. If 'forFoodPage' is 'true', the 'justifyContent' CSS property is set to 'start', otherwise its set to 'center'.
// Mapping Tags: It maps over the tags array using the map function. For each tag in the array, it generates a <Link> element. The key attribute is set to the name of the tag.
// Each '<Link>' element is configured to link to a specific route (`/tag/${tag.name`}).
export default function Tags({ tags, forFoodPage }) {
  return (
    <div
        className={classes.container}
        style={{
            justifyContent: forFoodPage ? 'start' : 'center',
        }}
    >
        {tags.map(tag => (
            <Link key={tag.name} to={`/tag/${tag.name}`}>
                {tag.name}
                {!forFoodPage}
            </Link>
        ))}
    </div>
  );
}

