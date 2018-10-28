import {call,put, take, race, all} from 'redux-saga/effects';
import * as TYPES from '../types';

const api=(url)=>fetch(url).then(response=> response.json())

export const fetchStarWarsRequest = () => ({
    type: TYPES.FETCH_STAR_WARS_REQUEST
})

export const confirmFetchRequest =()=>({
    type:TYPES.CONFIRMATION
}) 
export function* fetchPerson(action){
    try {
        yield take (TYPES.CONFIRMATION) 
        //blocked effect
        // const {normal, custom}= yield race ({
        //     normal:call(api, "https://swapi.co/api/people/?page=2"),
        //     custom: call(api, "https://swapi.co/api/people/justForTyler")
        // })
const person=yield call(api, "https://swapi.co/api/people/?page=2");
yield put ({type:TYPES.FETCH_STAR_WARS_SUCCESS, data:person.results});
    }catch(e){
console.log(e);
    }
}