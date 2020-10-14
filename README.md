
## Unete Technical Test Mobile - React Native
Aplico para el cargo de Desarrollador Senior **APLICACIONES MOVILES - HIBRIDAS**

**Disclaimer:** Soy Frontend Developer por excelencia, aunque no tenga la practica con el desarrollo movil, en este caso **React Native** logro comprender cada linea de codigo dado que su core es javascript.

### Uso en ambiente de desarrrollo
Antes que todo es necesario que configures todo el ambiente de desarrollo para ellos [revisa este enlace](https://reactnative.dev/docs/environment-setup).

Debes clonar el proyecto
```
git clone https://github.com/diegoaguilarf/unt-technical-test-mobile.git

cd unt-technical-test-mobile
```

El primer paso es instalar las dependencias
```javascript
npm install
```
El segundo es correr el proyecto
```javascript
npx react-native run-android
```
### Dependencias & Estandarización
Aparte de las dependencias por defecto de React Native y otras comunes se usaron las siguientes:
[Typescript](https://www.typescriptlang.org/), [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/), [Redux Saga](https://redux-saga.js.org/), [Axios](https://github.com/axios/axios)

### Requerimientos
##### Para cada página, deberá buscar el feed JSON consultando el siguiente [servicio](https://run.mocky.io/v3/b3dc9e1b-165f-4648-ab73-1a75e82fd899).
- [x] Muestre las primeras 21 entradas.
- [x] Donde la entrada tiene un valor de atributo releaseYear> = 2010.
- [x] Ordenado por el valor del atributo del título en orden alfanumérico ascendente.
##### Para la función de búsqueda:
- [x] Debe filtrar el valor del atributo del título de películas y series.
- [x] Podria comenzar a filtrarse después de escribir 3 caracteres.
##### Para las página de Películas y Series, habrá una lista desplegable que tiene opciones de:
- [x] Ordenar por título en orden descendente.
- [x] Ordenar por título en orden ascendente.
##### Para el filtro de página "Serie" en:
- [x] Donde la entrada tiene un valor de atributo programType de serie
##### Para el filtro de página "Películas" en:
- [x] Donde la entrada tiene un valor de atributo programType de película