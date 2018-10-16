import React from 'react';

const DisplaySearchResults = props => {
    const searchResults = props.searchResults;
    const listResults = searchResults.map((result, index) =>
        <li key={index} onClick={() => props.addSelectedItem(result)}>
            {result}
        </li>
    );

    return (
        <div>
            <ul>{listResults}</ul>
        </div>
    );
}

export default DisplaySearchResults;