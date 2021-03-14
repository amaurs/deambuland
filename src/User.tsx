import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { useParams } from 'react-router-dom'
import { GraphQLResult } from "@aws-amplify/api";
import { ListEasterEggsQuery, ListEasterEggsQueryVariables } from './API'
import { listEasterEggs } from './graphql/queries'
import { Link } from 'react-router-dom'
import { withAuthenticator } from '@aws-amplify/ui-react'

function User(props: any) {

    let [data, setData] = useState<ListEasterEggsQuery | undefined>(undefined);
    let { user } = useParams();

    useEffect(() => {
        async function fetchEasterEggs(){
            console.log(user)
            const variables: ListEasterEggsQueryVariables = { authorId: user };

            console.log(variables);
            const response = (await API.graphql(graphqlOperation(listEasterEggs, variables))) as { data: ListEasterEggsQuery; };
            setData(response.data);
        }
        fetchEasterEggs();
    }, [])

    if (data !== undefined) {
        return <ul>{data?.listEasterEggs?.map((element, index) => {
            return <li key={index}>
                      <Link to={`/${user}/${element?.id}`}>
                        {element?.id}
                      </Link>
                   </li>
        })}</ul>
    } else {
        return <h1>Loading...</h1>
    }


}

export default withAuthenticator(User);