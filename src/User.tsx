import React, { useEffect, useState, Fragment } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { useParams } from 'react-router-dom'
import { GraphQLResult } from "@aws-amplify/api";
import { ListEasterEggsQuery } from './API'
import { listEasterEggs } from './graphql/queries'
import { Link } from 'react-router-dom'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { fromIdToUrl } from './util'

function User(props: any) {

    let [data, setData] = useState<ListEasterEggsQuery | undefined>(undefined);
    let { user } = useParams();

    useEffect(() => {
        async function fetchEasterEggs(){
            console.log(user);
            const response = (await API.graphql(graphqlOperation(listEasterEggs))) as { data: ListEasterEggsQuery; };
            setData(response.data);
        }
        fetchEasterEggs();
    }, [])

    if (data !== undefined) {
        return <Fragment>
                <AmplifySignOut button-text="Custom Text"></AmplifySignOut>


                <ul>{data?.listEasterEggs?.map((element, index) => {
            return <li key={index}>
                      <Link to={`/1f373/${fromIdToUrl(element?.id)}`}>
                        {fromIdToUrl(element?.id)}
                      </Link>
                   </li>
        })}</ul>
        </Fragment>
    } else {
        return <h1>Loading...</h1>
    }


}

export default withAuthenticator(User);