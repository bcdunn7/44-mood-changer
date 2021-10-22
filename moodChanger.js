const happyBtn = document.querySelector('#happy')
happyBtn.addEventListener('click', () => {
    store.dispatch({ type: 'HAPPY', payload: "ʘ‿ʘ" });
})

const angryBtn = document.querySelector('#angry')
angryBtn.addEventListener('click', () => {
    store.dispatch({ type: 'ANGRY', payload: "⋋_⋌"});
})

const shockedBtn = document.querySelector('#shocked')
shockedBtn.addEventListener('click', () => {
    store.dispatch({ type: 'SHOCKED', payload: "°o°" });

})

const tiredBtn = document.querySelector('#tired')
tiredBtn.addEventListener('click', () => {
    store.dispatch({ type: 'TIRED', payload: "∑(￣□￣)" });
})