# ioRedis - Node.js Redis Client Library

ioRedis is a high-performance, non-blocking, and feature-rich Redis client library for Node.js. It allows you to interact with Redis, the in-memory data store, seamlessly from your Node.js applications. Whether you're building a real-time application, caching layer, or distributed system, ioRedis simplifies Redis integration, making it efficient and easy.

## Features

- **Asynchronous Operations:** ioRedis is designed to work asynchronously, ensuring your Node.js applications remain responsive.
- **High Performance:** Benefit from optimized communication with Redis, taking advantage of Node.js features like async/await.
- **Cluster and Sentinel Support:** Handle Redis clusters and Sentinels for high-availability configurations.
- **Pub/Sub Support:** Implement publish/subscribe messaging patterns easily.
- **Pipeline and Transaction Support:** Group multiple Redis commands for efficient execution.
- **Lua Scripting:** Execute Lua scripts on the Redis server for complex operations.
- **Connection Pooling:** Optimize connection management, reducing overhead.
- **Automatic Reconnection:** Seamlessly reconnect to Redis in case of network issues or server failures.
- **Event Emitters:** Subscribe to connection events like 'connect,' 'error,' and 'close.'

## Installation

You can install ioRedis using npm or yarn:

```bash
npm install ioredis
# or
yarn add ioredis
