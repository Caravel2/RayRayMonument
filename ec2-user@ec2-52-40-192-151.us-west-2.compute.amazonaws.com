{
  "name": "ray_ray_monument",
  "version": "1.0.0",
  "description": "monument for ray",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Caravel2/RayRayMonument.git"
  },
  "author": "Caravel",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Caravel2/RayRayMonument/issues"
  },
  "homepage": "https://github.com/Caravel2/RayRayMonument#readme",
  "dependencies": {
    "body-parser": "^1.15.1",
    "cookie-parser": "^1.4.3",
    "cookie-session": "^1.2.0",
    "ejs": "^2.4.2",
    "express": "^4.13.4",
    "mustache": "^2.2.1"
  },
  "devDependencies": {
    "bower": "^1.7.9",
    "grunt": "^1.0.1"
  },
  "keywords": [
    "monument"
  ]
}
