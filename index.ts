import Server from "./src/classes/server";
import express from 'express';
import cors from 'cors';
import ROUTES from "./src/routes/routes.index";

const server = new Server();

// Middlewares
server.app.use(express.json());
server.app.use(cors());
server.app.use(express.urlencoded({ extended: false }));  // Body Parse

// Routes
server.app.use(ROUTES);

server.listen(() => {
  console.log('Node/Express: \x1b[36m%s\x1b[0m', 'ONLINE');
});