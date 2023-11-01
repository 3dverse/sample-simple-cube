# Simple Cube

![Simple cube](https://github.com/3dverse/sample-simple-cube/blob/main/screenshot.png?raw=true)

## Description

A simple cube mesh with a chrome material.

## Assets inside

/Public

- `Main scene`: scene containing the Cube mesh.

/Assets

- `SM_Cube`: Cube mesh.
- `MAT_Chrome`: A chrome material.

## Run it locally

`'%YOUR_PUBLIC_TOKEN%'` by the public token of your application found in the "API Access" section.
`'%YOUR_MAIN_SCENE_UUID%'` by the UUID of the main scene generated in the Public folder of the "Asset browser" section.

The application is a static frontend that can be served by any web server of your convenience.

### Node

You can use the [serve](https://www.npmjs.com/package/serve) package:

```
npx serve
```

### Python

You can use the [http.serve](https://docs.python.org/3/library/http.server.html) command:

```
python -m http.server
```

Now open your web browser at the url indicated by your server (http://localhost:XXXX) to run your application.
