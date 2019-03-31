import { put, takeEvery, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* toggleAsync(action) {
  console.log('FROM SAGAS');
  console.log(action);
  yield delay(1000)
  yield put({ type: 'TOGGLE_TODO', id: action.id })
}

export function* watchToggleTodoAsync() {
  yield takeEvery('TOGGLE_TODO_ASYNC', toggleAsync)
}

export default function* rootSaga() {
  yield all([
    watchToggleTodoAsync()
  ])
}
