import React, { FormEvent, ChangeEvent, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { CreateEasterEggMutation, CreateEasterEggMutationVariables, EasterEggInput } from './API'
import { createEasterEgg } from './graphql/mutations'
import { useParams, useNavigate } from 'react-router-dom'
import { withAuthenticator } from '@aws-amplify/ui-react'

interface State {
    name: string;
    description: string;
    latitude: number;
    longitude: number;
}

function Create(props: any) {
    let navigate = useNavigate();
    let [state, setState] = useState<State>({ description: "Write a description.",
                                              name: "",
                                              longitude: 0.0,
                                              latitude: 0.0 });

    let { user } = useParams();

    async function create(easterEggName: State){


        let item: EasterEggInput = {id: `${Date.now()}`,
                                    name: easterEggName.name,
                                    authorId: user,
                                    description: easterEggName.description,
                                    latitude: easterEggName.latitude,
                                    longitude: easterEggName.longitude}

       const response =
       (await API.graphql(graphqlOperation(createEasterEgg, { easterEgg: item }))) ;
        console.log(response)

    }



    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let key = event.target.name;
        let value = event.target.value;
        let update = {...state, [key]: value};
        setState(update);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        console.log(`Creating`);
        create(state);
        event.preventDefault();
        navigate(`/${user}`);
    }

    return (<form onSubmit={handleSubmit}>
            <label>
            Easter Egg Id:
            </label>
            <input type="text" name="name" onChange={handleChange}  />
            <label>
            Latitude:
            </label>
            <input type="text" name="latitude" onChange={handleChange}  />
            <label>
            Longitude:
            </label>
            <input type="text" name="longitude" onChange={handleChange}  />

            <label>
            Description:
            </label>
            <textarea name="description" onChange={handleChange} />
            <input type="submit" value="Submit" />
            </form>)

}

export default withAuthenticator(Create);