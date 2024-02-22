export const typeDefs = `#graphql
    # Custom object types
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
        cost: Float!
        owner: User!
        status: String!
        driver: Driver
    }
    type Driver {
        id: ID!
        username: String!
        name: String!
        car: String!
        orders: [Order!]
        status: String!
    }
    # Queries for requesting data
    type Query {
        users: [User]
        user(id: ID!): User
        orders: [Order]
        order(id: ID!): Order
        drivers: [Driver]
        driver(id: ID!): Driver
        ordersByRestaurant(restaurant: String!): [Order]
    }
    # Mutations for modification of data
    type Mutation {
        placeOrder(order: OrderInput!): Order!
        acceptOrder(order: AcceptOrderInput): Order!
    }
    # Special Input Types
    input OrderInput {
        name: String!
        restaurant: String!
        quantity: Int!
        instructions: String
        cost: Float!
        owner: String!
    }
    input AcceptOrderInput {
        driver: ID!
        order: ID!
    }
`