import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { GetEasterEggByIdQuery } from './API'
import { getEasterEggById } from './graphql/queries'
import { useParams } from 'react-router-dom'
import { fromUrlToId } from './util'

export default function Post(props: any) {

    let [data, setData] = useState<GetEasterEggByIdQuery | undefined>(undefined);
    let { user, easterEgg } = useParams();

    useEffect(() => {
        async function fetchEasterEggs(){
            const response = (await API.graphql(graphqlOperation(getEasterEggById, { easterEggId: fromUrlToId(easterEgg),
                                                                                     authorId: user }))) as { data: GetEasterEggByIdQuery; };
            console.log("YYYYYY");
            console.log(response.data);

            setData(response.data);
        }
        fetchEasterEggs();
    }, [])

    if (data !== undefined) {
        return  <div>
                    <h1>{data?.getEasterEggById?.name}</h1>
                    <p>{data?.getEasterEggById?.description}</p>
                </div>
    } else {
        return <h1>Loading...</h1>
    }

}