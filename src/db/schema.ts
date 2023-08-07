import {
    integer,
    numeric,
    pgEnum,
    pgTable,
    real,
    serial,
    text,
    timestamp,
    varchar,
} from 'drizzle-orm/pg-core';
import { InferModel, relations } from 'drizzle-orm';

// users,products,orders,cart,reviews
export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: varchar('email', { length: 256 }).unique().notNull(),
    password: varchar('password', { length: 256 }).notNull(),
    phone: varchar('phone', { length: 256 }).unique(),
    address: text('address'),
    createAt: timestamp('create_at').defaultNow(),
});

// Products
export const products = pgTable('products', {
    id: serial('id').primaryKey(),
    productTitle: varchar('product_title', { length: 256 }).notNull(),
    productDescription: text('product_description').notNull(),
    category: varchar('category', { length: 256 }).notNull(),
    gender: varchar('gender', { length: 256 }).notNull(),
    price: real('price').default(10).notNull(),
    imageUrl: varchar('image_url', { length: 256 }).notNull(),
    stock: integer('stock').default(10),
    createAt: timestamp('create_at').defaultNow(),
});

// Cart
export const cart = pgTable('cart', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id),
    productId: integer('product_id')
        .references(() => products.id)
        .unique(),
    quantity: integer('quantity'),
    createAt: timestamp('create_at').defaultNow(),
});

// Orders
export const orders = pgTable('orders', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id),
    productId: integer('product_id').references(() => products.id),
    quantity: integer('quantity'),
    totalPrice: numeric('total_price'),
    createAt: timestamp('create_at').defaultNow(),
});

// User -> Cart relation
export const usersCartRelations = relations(users, ({ many }) => ({
    cart: many(cart),
}));
export const cartRelations = relations(cart, ({ one }) => ({
    user: one(users, {
        fields: [cart.id],
        references: [users.id],
    }),
}));

// User -> Order relation
export const usersOrderRelations = relations(users, ({ many }) => ({
    order: many(orders),
}));
export const orderRelations = relations(orders, ({ one }) => ({
    user: one(users, {
        fields: [orders.id],
        references: [users.id],
    }),
}));

export type Users = InferModel<typeof users, 'select'>;
export type NewUsers = InferModel<typeof users, 'insert'>;

export type Products = InferModel<typeof products, 'select'>;
export type NewProducts = InferModel<typeof products, 'insert'>;

export type Cart = InferModel<typeof cart, 'select'>;
export type NewCart = InferModel<typeof cart, 'insert'>;

export type Orders = InferModel<typeof orders, 'select'>;
export type NewOrders = InferModel<typeof orders, 'insert'>;
