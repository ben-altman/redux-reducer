export function manageFriends(state, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return { friends: [...state.friends, action.friend] };
        case "REMOVE_FRIEND":
            const exFriendId = state.friends.findIndex(friend => friend.id === action.id)
            // return { friends: [...state.friends.slice(0, exFriendId), ...state.friends.slice(exFriendId + 1)] };
            return { friends: state.friends.filter(friend => {return friend.id !== action.id })}
        default:
            return state;
    }
}

// action = {
//     type: "ADD_FRIEND",
//     friend: {
//       name: "Chrome Boi",
//       hometown: "NYC",
//       id: 1,
//     },
//   };

//   action = {
//     type: "REMOVE_FRIEND",
//     id: 1,
//   };