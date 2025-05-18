import { SHOWCART, REMOVEFROMCART, REDUCEFROMCART, ADDTOCART } from "../actionTypes";

const InitialInvitedCakesList = {
    invitedCakeList: []
};

// Reducer function to manage the shopping cart state
export const ShopingCartReducer = (state = InitialInvitedCakesList, action) => {

    switch (action.type) {
        case SHOWCART:
            return {
                ...state,
            };

        case REMOVEFROMCART:
            const removeId = action.payload;
            return {
                ...state,
                invitedCakeList: state.invitedCakeList.filter(cake => {
                    const isRemoved = cake.id !== removeId;
                    return isRemoved;
                }),
            };

        case REDUCEFROMCART:
            const reduceId = action.payload;
            const existingCakeToReduce = state.invitedCakeList.find(cake => cake.id === parseInt(reduceId));

            if (existingCakeToReduce) {
                if (existingCakeToReduce.amount > 1) {
                    return {
                        ...state,
                        invitedCakeList: state.invitedCakeList.map(cake =>
                            cake.id === parseInt(reduceId)
                                ? { ...cake, amount: cake.amount - 1 }
                                : cake
                        ),
                    };
                } else {
                    return {
                        ...state,
                        invitedCakeList: state.invitedCakeList.filter(cake => cake.id !== parseInt(reduceId)),
                    };
                }
            }
            return state;

        case ADDTOCART: {
            const { myCake } = action.payload; // Destructure myCake from action.payload

            const existingItem = state.invitedCakeList.find(item => item.id === myCake.id);

            if (existingItem) {
                return {
                    ...state,
                    invitedCakeList: state.invitedCakeList.map(item =>
                        item.id === myCake.id ? { ...item, amount: item.amount + 1 } : item
                    ),
                };
            } else {
                return {
                    ...state,
                    invitedCakeList: [...state.invitedCakeList, { ...myCake, amount: 1 }]
                };
            }
        }

        default:
            return state;
    }
};