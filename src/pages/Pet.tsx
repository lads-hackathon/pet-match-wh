import { createEffect, createResource, For, Show } from 'solid-js'
import { useParams } from '@solidjs/router'
import { PetProps } from '../models'
import styles from './pet.module.css'
import { ROOT_URL } from '..';

function getBreed(breeds: PetProps[], id: number) {
    for (let breed of breeds) {
        if (breed.id == id) {
            return breed;
        }
    }
}

export default function Pet() {
    const params = useParams();
    const petId = parseInt(params['id']);

    const [ breed ] = createResource(async () => {
        let json = await (await fetch(ROOT_URL + 'pets.json')).json();
        return getBreed(json, petId);
    });

    return (
        <div class="dark:text-white">
            <Show when={ !breed.loading } fallback={ <p>Hang on a sec...</p> }>
                <h1 class={styles.title}> {breed().name} </h1>

                <div class="grid mx-20 xl:grid-cols-2 items-center justify-center">
                    <div class="m-4">
                        <h2 class={styles.subtitle}> Information </h2> 

                        <div class={styles.infoSection}>
                            <p> Weight: {breed().weight_low_lbs} - {breed().weight_high_lbs} lbs </p>
                            <p> Lifespan: {breed().life_span_low} - {breed().life_span_high} years </p>
                            <p> Temperaments: { breed().temperaments.join(', ') } </p>
                        </div>

                        <h2 class={styles.subtitle}> Description </h2>

                        <div class={styles.infoSection}>
                            <p> { breed().description } </p>
                        </div>
                    </div>

                    <img class={`${styles.infoImage} w-full rounded-xl`} src={breed().image}/>

                    {/* add some spacing at the bottom */}
                    <span class="mb-4"></span>
                </div>
            </Show>
        </div>
    )
}