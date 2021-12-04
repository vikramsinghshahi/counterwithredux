// // (function ()
// // {
// let h1 = document.querySelector("h1")
// let increment = document.querySelector(".increment");
// let decrement = document.querySelector(".decrement");
// let reset = document.querySelector(".reset");
// let counter = 0
// // let store = Redux.createStore(reducer)
// let store = Redux.createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// // createStore(
// //     reducer, /* preloadedState, */
// //  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// //   );

// console.log(store);

// h1.innerText = store.getState();


// increment.addEventListener("click", () =>
// {
//     store.dispatch({
//         type: 'increment'
//     })
//     // counter = store.getState();
//     // h1.innerText = counter
// })


// decrement.addEventListener("click", () =>
// {
//     store.dispatch({
//         type: 'decrement'
//     })
//     // counter = store.getState();
//     // h1.innerText = counter
// })

// reset.addEventListener("click", () =>
// {
//     store.dispatch({
//         type: 'reset'
//     })
//     // counter = store.getState();
//     // h1.innerText = counter
// })

// store.subscribe(() =>
// {
//     counter = store.getState();
//     h1.innerText = counter
// })


// function reducer(state = 0, action = { type: "", step: 1 })
// {
//     // // console.log(state, action)
//     // // action.type = "";
//     // console.log(action.type, state)
//     switch (action.type)
//     {
//         case 'increment':
//             return state + (action.step || 1);
//         case 'decrement':
//             return state - (action.step || 1);
//         case 'reset':
//             return 0;

//         default:
//             return state
//     }

// }

// reducer()


// // }())

let store = Redux.createStore(reducer);

let counter = store.getState();

const h1 = document.querySelector('h1');
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const reset = document.querySelector('.reset');
const step = document.querySelectorAll('.step');
const limit = document.querySelectorAll('.limit');
h1.innerText = counter;
var stepValue;
for (var i = 0; i < step.length; i++)
{
    step[i].addEventListener('click', (event) =>
    {
        stepValue = Number(event.target.value);
    });
}
var limitValue;
for (var i = 0; i < limit.length; i++)
{
    limit[i].addEventListener('click', (event) =>
    {
        console.log(Number(event.target.value));
        limitValue = Number(event.target.value);
    });
}

increment.addEventListener('click', () =>
{
    store.dispatch({
        type: 'increment',
        step: stepValue,
        limit: limitValue || Infinity,
    });
});
decrement.addEventListener('click', () =>
{
    store.dispatch({
        type: 'decrement',
        step: stepValue,
        limit: limitValue || Infinity,
    });
});
reset.addEventListener('click', () =>
{
    store.dispatch({ type: 'reset' });
});

store.subscribe(() =>
{
    counter = store.getState();
    h1.innerText = counter;
});
function reducer(state = 0, action)
{
    //   if (counter < action.limit) {

    switch (action.type)
    {
        case 'increment':
            return state + (action.limit > counter ? action.step || 1 : 0);
        case 'decrement':
            return state - (action.limit < counter ? action.step || 1 : 0);
        case 'reset':
            return 0;
        default:
            return state;
    }
}
