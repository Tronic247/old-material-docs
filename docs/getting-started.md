## Installing localy

If you want to install locally, click the button below.

<br>
<a class="btn unelevated" href="https://github.com/Tronic247/material/archive/refs/heads/main.zip">Download</a>
<br><br>

The zip file you downloaded contains these files:
```xml
dist/ <Compiled files>
src/ <Source files>
```

<div class="alert alert-primary">
 Note that jQuery and Material icons must be imported before importing the library files. See below how to import them using a CDN.
<br>The Roboto font is automatically imported by Google fonts CDN service.
</div>

## Installing from a CDN

if you want to use a CDN, see below.

### Material icons

```xml
<link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">
```

### jQuery (Slim version)

```xml
<script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
```

### Tronic247 Material

```xml
<link href="https://cdn.jsdelivr.net/gh/tronic247/material/dist/css/material.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/gh/tronic247/material/dist/js/material.min.js"></script>
```

## Starter template

```xml
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>A Basic HTML5 Template</title>
  <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/gh/tronic247/material/dist/css/material.min.css" rel="stylesheet" />
</head>
<body class="container">
	<h1>Tronic247 Material Starter Template</h1>
	<p>All set visit docs now</p>
<script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/gh/tronic247/material/dist/js/material.min.js"></script>
</body>
</html>
```
