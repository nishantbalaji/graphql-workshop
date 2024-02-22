export const typeDefs = `#graphql

    type User {
        id: ID!
        username: String!
        name: String!
        cards: String!
        balance: Float!
        orders: [Order!]
    }
    type Order {
        id: ID!
        name: String!
        restaurant: String!
        quantity: Int!
        instructions: String
        cost: Float
        owner: User!
        status: String
    }
    type Driver {
        id: ID!
        username: String!
        name: String!
        car: String!
        orders: [Order!]!
        status: String!
    }
    type Query {
        users: [User]
        user(id: ID!): User
        orders: [Order]
        order(id: ID!): Order
        drivers: [Driver]
        driver(id: ID!): Driver
        ordersByRestaurant(restaurant: String!): [Order]
    }
    type Mutation {
        placeOrder(order: OrderInput!): Order!
    }
    input OrderInput {
        name: String!
        restaurant: String!
        quantity: Int!
        instructions: String
    }
`