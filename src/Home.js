import React  from 'react';
import {Query} from "react-apollo"
import {HOME_PAGE} from "./query"


const Home = () =>(
    
    <Query query={HOME_PAGE}>
        {
            ({loding, data, error})=> {
            if(loding) return "loading"
            if(error) return "error";
            return <dev>{console.log(data.price[0])} </dev>
        }}
    </Query>
)


export default Home;
