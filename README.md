# jsybuben
`jsybuben` is a tiny tool for editing text in Armenian alphabet(*Aybuben*).
This is a work on progress.

## Components
- [`jsybuben-core`](./jsybuben-core/README.md)
- `jsybuben-client`
- `jsybuben-rest`

## Settings for Docker environment
Create `.env` on the project root:
```bash
$ touch .env
```

To check your CPU architecture, run: 
```bash
$ uname -m
# "x86_64" or "arm64" or etc...
```

If `x86_64` displayed, run:
```bash
echo "ARCH=x64" >> .env
```

If `arm64` displayed, run:
```bash
echo "ARCH=arm64" >> .env
```

Then you should be able to build Docker images.
