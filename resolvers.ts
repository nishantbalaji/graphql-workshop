import { users, orders, drivers } from './mockData.js';


export const resolvers = {
    Query: {
        orders() {
            return orders;
        },
        order(_, {id}) {
            return orders.find(order => order.id === id);
        },
        users() {
            return users;
        },
        user(_, {id}) {
            return users.find(user => user.id === id);
        },
        drivers() {
            return drivers;
        },
        driver(_, {id}) {
            return drivers.find(driver => driver.id === id);
        },
        ordersByRestaurant(_, args) {
            return orders.filter(order => order.restaurant === args.restaurant);
        }
    },
    User: {
        orders(parent, args, context, info) {
            return orders.find(order => order.owner === parent.id);
        }
    },
    Mutation: {
        placeOrder(_, args) {
            let newOrder = {
                id: 88,
                ...args.order
            }
            orders.push(newOrder);
            return newOrder;
        }
    }
}

// all orders for a user
// all orders that contain an item
// all users that got an item
// item quantities
