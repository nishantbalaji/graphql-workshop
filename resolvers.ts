import { users, orders, drivers } from './mockData.js';
import * as uuid from 'uuid';


export const resolvers = {
    // Queries are for fetching data
    Query: {
        // Standard queries: get all, get by identifier
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
        // Accept an order as a driver
        acceptOrder(_, args) {
            // Validation - is the driver available?
            const requestingDriver = args.order.driver;
            console.log(requestingDriver);
            const driverStatus = drivers.find(driver => driver.id === requestingDriver).status;
            console.log(driverStatus);
            if (driverStatus !== "Available") {
                throw new Error("Driver is not available");
            }

            // Validation - is the order still pending or is there a driver already assigned?
            console.log("ORDER", args.order.order);
            const order = orders.find(order => order.id === args.order.order);
            console.log(order);
            if (order.status !== "Pending") {
                throw new Error("Order is not pending");
            }

            console.log(order.driver);
            if (order.driver !== null) {
                throw new Error("Order already has a driver");
            }

            console.log("hi mom");
            // Update the order status and driver status
            orders[orders.findIndex(order => order.id === args.order.order)].driver = requestingDriver;
            orders[orders.findIndex(order => order.id === args.order.order)].status = "In Progress";

            console.log("FINAL ORDER", orders[orders.findIndex(order => order.id === args.order.order)]);

            const finalOrder = orders[orders.findIndex(order => order.id === args.order.order)];

            return finalOrder;
        }
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