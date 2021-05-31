import React, { FormEvent, ChangeEvent, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { CreateEasterEggMutation, CreateEasterEggMutationVariables, EasterEggInput } from './API'
import { createEasterEgg } from './graphql/mutations'
import { useParams, useNavigate } from 'react-router-dom'
import { withAuthenticator } from '@aws-amplify/ui-react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

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


        let item: EasterEggInput = {name: easterEggName.name,
                                    description: easterEggName.description,
                                    latitude: easterEggName.latitude,
                                    longitude: easterEggName.longitude,
                                    imageUrl: "image.jpg"}

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

    return (<Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>)

}

export default withAuthenticator(Create);