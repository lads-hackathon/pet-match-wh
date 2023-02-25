import { Link } from '@solidjs/router';
import { createEffect, createResource, createSignal, For, Show } from 'solid-js';
import { createStore } from 'solid-js/store';
import { ROOT_URL } from '..';
import Item from '../components/item'
import Toggle from '../components/toggle';
import { PetProps } from '../models';

function includesCount(array1, array2): number {
  let count = 0;

  for (let element of array1) {
    if (array2.includes(element)) count++;
  }

  return count;
}

function searchBest(selectedTemperaments: string[], breeds: PetProps[], allowedPets: string[], amount: number): PetProps[] {
  let counts = [];

  for (let breed of breeds) {
    counts.push({
      'breed': breed,
      'count': includesCount(selectedTemperaments, breed.temperaments)
    });
  }

  return counts.filter(e => allowedPets.includes(e['breed']['type'])).sort((a, b) => b['count'] - a['count']).map(val => val['breed']).slice(0, amount);
}

function searchPerfect(selectedTemperaments: string[], breeds: PetProps[], allowedPets: string[], amount: number): PetProps[] {
  return breeds.filter(e => allowedPets.includes(e['type'])).filter(breed => {
    for (let t of selectedTemperaments) {
      if (!breed.temperaments.includes(t)) return false;
    }

    return true;
  }).slice(0, amount);
}

function getMatchingAlgo(algo: MatchingAlgos) {
  switch (algo) {
    case MatchingAlgos.BEST:
      return searchBest;
    
    case MatchingAlgos.PERFECT:
      return searchPerfect;
  }
}

enum MatchingAlgos {
  BEST,
  PERFECT
}

export default function Home() {
  const [ temperaments ] = createResource(async () => (await fetch(ROOT_URL + 'temperaments.json')).json());
  const [ breeds ] = createResource(async () => (await fetch(ROOT_URL + 'pets.json')).json());
  const [ searchTerm, setSearchTerm ] = createSignal("");
  const [ selectedTemperaments, setSelectedTemperaments ] = createStore([]);
  const [ allowedPets, setAllowedPets ] = createStore(['dog', 'cat']);
  const [ matchingAlgo, setMatchingAlgo ] = createSignal(MatchingAlgos.BEST);

  return (
    <div class="grid grid-cols-2 dark:bg-dark-600 dark:text-gray-100">
      <div class="m-6 flex flex-col gap-2">
        <div>
          <small>MATCHING</small>
          
          <div class="grid grid-cols-2 gap-2">
            <button class={`${matchingAlgo() === MatchingAlgos.BEST ? 'bg-sky-300 dark:bg-sky-800' : 'bg-gray-100 dark:bg-dark-200'} p-4 rounded-xl transition-colors duration-150`} onClick={() => setMatchingAlgo(MatchingAlgos.BEST)}>Best</button>
            <button class={`${matchingAlgo() === MatchingAlgos.PERFECT ? 'bg-sky-300 dark:bg-sky-800' : 'bg-gray-100 dark:bg-dark-200'} p-4 rounded-xl transition-colors duration-150`} onClick={() => setMatchingAlgo(MatchingAlgos.PERFECT)}>Perfect</button>
          </div>
        </div>

        <div>
          <small>WHISKERED FRIENDS</small>
          
          <div class="grid grid-cols-2 gap-2">
            <Toggle default={true} text="Cats" onOn={ e => {
              setAllowedPets([...allowedPets, 'cat']);
            }} onOff={e => {
              let i = allowedPets.findIndex(t => t === 'cat');

              setAllowedPets(allowedPets.filter((_, index) => index !== i));
            }} />

            <Toggle default={true} text="Dogs" onOn={ e => {
              setAllowedPets([...allowedPets, 'dog']);
            }} onOff={e => {
              let i = allowedPets.findIndex(t => t === 'dog');

              setAllowedPets(allowedPets.filter((_, index) => index !== i))
            }} />
          </div>
        </div>

        <div>
          <small>TRAITS</small>
          <input class="w-full p-4 border-1 border-gray-400 dark:border-gray-700 placeholder-gray-400 focus:border-gray-800 dark:focus:border-gray-400 rounded-xl bg-gray-100 dark:bg-dark-200" type="text" placeholder="Search for traits" onKeyUp={ e => setSearchTerm(e.currentTarget.value.toLocaleLowerCase()) } />
        
          <div class="grid grid-cols-4 my-2">
            <For each={temperaments()}>
              {(temperament: string, i) => (
                <Show when={ searchTerm().length == 0 || temperament.toLowerCase().includes(searchTerm()) }>
                  <div class="m-1">
                    <Toggle default={false} text={temperament} onOn={e => {
                      setSelectedTemperaments([...selectedTemperaments, temperament]);
                    }} onOff={e => {
                      let i = selectedTemperaments.findIndex(t => t === temperament);

                        setSelectedTemperaments(selectedTemperaments.filter((_, index) => index !== i));
                    }} />
                  </div>
                </Show>
              )}
            </For>
          </div>
        </div>
      </div>

      <div class="m-6">
        <small>TOP RESULTS</small>
        
        <Show when={ !breeds.loading && selectedTemperaments.length != 0 && allowedPets.length != 0 && getMatchingAlgo(matchingAlgo())(selectedTemperaments, breeds(), allowedPets, 10).length != 0 } fallback={ <p class="text-gray-500 text-center mt-1/4">Nothing to show; select traits</p> }>
          <For each={ getMatchingAlgo(matchingAlgo())(selectedTemperaments, breeds(), allowedPets, 10) }>
            {(breed, index) => (
              <Link href={`/pet/${breed.id}`} class="no-underline text-black dark:text-gray-300">
                <Item pet={breed} i={index()} />
              </Link>
            )}
          </For>
        </Show>
      </div>
    </div>
  );
}
