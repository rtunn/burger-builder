import { put } from 'redux-saga/effects'

import axios from '../../axios-orders'
import * as actions from '../actions'

export function* burgerBuilderInitIngredientsSaga(action) {
    try {
        const response = yield axios.get('https://react-burger-builder-40c62-default-rtdb.firebaseio.com/ingredients.json')
        yield put(actions.setIngredients(response.data))

    } catch (error) {
        yield put(actions.fetchIngredientsFailed())
    }
}