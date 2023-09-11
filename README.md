# IORedis-Node.js-Redis-Client-Library
IORedis is a high-performance, non-blocking, and feature-rich Redis client library for Node.js. 
[![ioredis](https://cdn.jsdelivr.net/gh/redis/ioredis@b5e8c74/logo.svg)](https://github.com/redis/ioredis)

[![Build Status](https://github.com/redis/ioredis/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/redis/ioredis/actions/workflows/release.yml?query=branch%3Amain)
[![Coverage Status](https://coveralls.io/repos/github/luin/ioredis/badge.svg?branch=main)](https://coveralls.io/github/luin/ioredis?branch=main)
[![Join the chat at https://gitter.im/luin/ioredis](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/luin/ioredis?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A robust, performance-focused and full-featured [Redis](http://redis.io) client for [Node.js](https://nodejs.org).

Supports Redis >= 2.6.12 and the latest version of [Dragonfly](https://dragonflydb.io/). Completely compatible with Redis 7.x.

# Features

ioredis is a robust, full-featured Redis client that is
used in the world's biggest online commerce company [Alibaba](http://www.alibaba.com/) and many other awesome companies.

0. Full-featured. It supports [Cluster](http://redis.io/topics/cluster-tutorial), [Sentinel](https://redis.io/docs/reference/sentinel-clients), [Streams](https://redis.io/topics/streams-intro), [Pipelining](http://redis.io/topics/pipelining), and of course [Lua scripting](http://redis.io/commands/eval), [Redis Functions](https://redis.io/topics/functions-intro), [Pub/Sub](http://redis.io/topics/pubsub) (with the support of binary messages).
1. High performance 🚀.
2. Delightful API 😄. It works with Node callbacks and Native promises.
3. Transformation of command arguments and replies.
4. Transparent key prefixing.
5. Abstraction for Lua scripting, allowing you to [define custom commands](https://github.com/redis/ioredis#lua-scripting).
6. Supports [binary data](https://github.com/redis/ioredis#handle-binary-data).
7. Supports [TLS](https://github.com/redis/ioredis#tls-options) 🔒.
8. Supports offline queue and ready checking.
9. Supports ES6 types, such as `Map` and `Set`.
10. Supports GEO commands 📍.
11. Supports Redis ACL.
12. Sophisticated error handling strategy.
13. Supports NAT mapping.
14. Supports autopipelining.

**100% written in TypeScript and official declarations are provided:**
