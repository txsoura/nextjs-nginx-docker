# Nest.js Nginx Docker

## Getting Started

### Development

If you want to run, in dev mode, first, install the dependencies:

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

or

```bash
make dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production

If you want to run, in production mode (with nginx in docker):

```bash
make up
```

Stop the server:

```bash
make down
```

Open [http://localhost:9009](http://localhost:9009) with your browser to see the result.
