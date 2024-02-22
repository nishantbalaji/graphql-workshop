import { users, orders, drivers } from './mockData.js';
import * as uuid from 'uuid';


export const resolvers = {
    // Queries are for fetching data
    Query: {
        // Standard queries: get all, get by identifier
        // TODO: Add in queries for ALL orders and a specific order by id!
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
    // Mutations are for adding, deleting, and modifying data
    Mutation: {
        placeOrder(_, args) {
            const orderingUser = args.order.owner;
            console.log(orderingUser);

            // Search for user by id
            const orderingUserBalance = users[users.findIndex(user => user.id === orderingUser)].balance;
            console.log(orderingUserBalance);

            // Validation - does the user have enough balance to place the order?
            if (orderingUserBalance < args.order.cost) {
                throw new Error("Insufficient balance");
            }

            // Create a new order object
            let newOrder = {
                id: uuid.v4(),
                ...args.order
            }
  
            // Decrement user balance, and add order to orders array
            users[users.findIndex(user => user.id === orderingUser)].balance -= args.order.cost;
            orders.push(newOrder);
            return newOrder;
        },
        // TODO: Accept an order as a driver
    },

    // For querying related data, we introduce custom objects

    // Query orders associated with each user
    User: {
        orders(parent, args, context, info) {
            console.log(parent.username);
            return orders.filter((order) => order.owner === parent.username);
        }
    },
    // Query all orders associated with each driver
    Driver: {
        orders(parent, args, context, info) {
            return orders.filter((order) => order.driver === parent.id);
        }
    },
    // Orders to drivers/owners
    Order: {
        owner(parent, args, context, info) {
            return users.find((user) => user.username === parent.owner);
        },
        driver(parent, args, context, info) {
            if (parent.driver === null) {
                return null;
            }
            return drivers.find((driver) => driver.id === parent.driver);
        }
    }

}