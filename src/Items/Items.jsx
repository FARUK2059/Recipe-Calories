import { useEffect, useState } from "react";
// import Main from "../Main/Main";

const Items = () => {

    const [recipiItems, setrecipiItems] = useState([]);
   

    useEffect(()=> {
        fetch('Recipi.json')
        .then(res => res.json())
        .then(data => setrecipiItems(data));
        
        
        
    }, [])

    return (
        <div>
            <h1>amae : {recipiItems.length}</h1>
            {/* {
                recipiItems.map(item => <Main key={item.recipe_id} item={item}></Main>)
            } */}
        </div>
    );
};

export default Items;