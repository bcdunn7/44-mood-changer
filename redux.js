const INITIAL_STATE = { face: "╮(╯_╰)╭" };

function rootReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "HAPPY":
            return { ...state, face: action.payload };

        case "ANGRY":
            return { ...state, face: action.payload };

        case "SHOCKED":
            return { ...state, face: action.payload };

        case "TIRED":
            return { ...state, face: action.payload };

        default:
            return state;
    }
}

const store = Redux.createStore(rootReducer);

const face = document.querySelector('h2');

const render = () => {
    face.innerText = store.getState().face;
}

store.subscribe(render);
render();
