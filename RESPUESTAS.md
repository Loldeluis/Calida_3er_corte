Parte 4 – Validación y logs:
En RESPUESTAS.md explicar:
- Cómo identificar fallos de linter, pruebas y cobertura en logs.
- Generar un run fallido y uno exitoso y explicar la diferencia.

RL: Pues para identificar un fallo en el linter lo mas comun pues despues de runearlo aparezca un fallo o no haya pasado el test, me paso mucho, dejeme miro si lo encuentro por mis logs, por ejemplo estos logs: C:\xampp\htdocs\ParcialCalidad>npm run lint
C:\xampp\htdocs\ParcialCalidad>npm run lint
npm error Missing script: "lint"
npm error
npm error Did you mean this?
npm error   npm link # Symlink a package folder
npm error
npm error To see a list of scripts, run:
npm error   npm run
npm error A complete log of this run can be found in: C:\Users\luism\AppData\Local\npm-cache\_logs\2025-11-24T19_17_28_446Z-debug-0.log

C:\xampp\htdocs\ParcialCalidad>
C:\xampp\htdocs\ParcialCalidad>
C:\xampp\htdocs\ParcialCalidad>npm run lint

> parcialcalidad@1.0.0 lint
> eslint . --ext .js

Invalid option '--ext' - perhaps you meant '-c'?
You're using eslint.config.js, some command line flags are no longer available. Please see https://eslint.org/docs/latest/use/command-line-interface for details.

C:\xampp\htdocs\ParcialCalidad>
C:\xampp\htdocs\ParcialCalidad>npm run lint

> parcialcalidad@1.0.0 lint
> eslint .


Oops! Something went wrong! :(

ESLint: 8.57.1

Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './config' is not defined by "exports" in C:\xampp\htdocs\ParcialCalidad\node_modules\eslint\package.json imported from C:\xampp\htdocs\ParcialCalidad\eslint.config.mjs
    at exportsNotFound (node:internal/modules/esm/resolve:313:10)
    at packageExportsResolve (node:internal/modules/esm/resolve:660:9)
    at packageResolve (node:internal/modules/esm/resolve:773:12)
    at moduleResolve (node:internal/modules/esm/resolve:853:18)
    at defaultResolve (node:internal/modules/esm/resolve:983:11)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:717:20)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:694:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:308:38)
    at ModuleJob._link (node:internal/modules/esm/module_job:183:49)

C:\xampp\htdocs\ParcialCalidad>
npm error
npm error Did you mean this?
npm error   npm link # Symlink a package folder
npm error
npm error To see a list of scripts, run:
npm error   npm run
npm error A complete log of this run can be found in: C:\Users\luism\AppData\Local\npm-cache\_logs\2025-11-24T19_17_28_446Z-debug-0.log

C:\xampp\htdocs\ParcialCalidad>npm run lint

> parcialcalidad@1.0.0 lint
> eslint . --ext .js

Invalid option '--ext' - perhaps you meant '-c'?
You're using eslint.config.js, some command line flags are no longer available. Please see https://eslint.org/docs/latest/use/command-line-interface for details.

C:\xampp\htdocs\ParcialCalidad>
C:\xampp\htdocs\ParcialCalidad>npm run lint

> parcialcalidad@1.0.0 lint
> eslint .


Oops! Something went wrong! :(

ESLint: 8.57.1

Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './config' is not defined by "exports" in C:\xampp\htdocs\ParcialCalidad\node_modules\eslint\package.json imported from C:\xampp\htdocs\ParcialCalidad\eslint.config.mjs
    at exportsNotFound (node:internal/modules/esm/resolve:313:10)
    at packageExportsResolve (node:internal/modules/esm/resolve:660:9)
    at packageResolve (node:internal/modules/esm/resolve:773:12)
    at moduleResolve (node:internal/modules/esm/resolve:853:18)
    at defaultResolve (node:internal/modules/esm/resolve:983:11)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:717:20)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:694:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:308:38)
    at ModuleJob._link (node:internal/modules/esm/module_job:183:49)

C:\xampp\htdocs\ParcialCalidad>el primero es un error el cual pues identificamos que es de busqueda pues nos dice esto npm error Missing script: "lint", y pues ese es la manera de encontrar un fallo de los tantos que se pueden presentar usando este linter.

Lo segundo son las "pruebas" o los test como lo tenemos aqui, tambien un poco de lo mismo, runearlo y analizar que nos arroja el cmd, pues si, aqui un logs de los que fallo

C:\xampp\htdocs\ParcialCalidad>npm run test

> parcialcalidad@1.0.0 test
> jest

 FAIL  tests/calculadora.test.js
  √ sumar dos numeros (7 ms)
  √ restar dos numero (2 ms)                                                                                               
  √ multiplicar dos numeros (1 ms)                                                                                         
  √ dividir dos numeros (2 ms)                                                                                             
  × lanzar error cuando se intente divir por 0 (66 ms)                                                                     
  √ Si es verdadero que retorne true (2 ms)                                                                                
  √ si es verdad que mande false (1 ms)                                                                                    
                                                                                                                           
  ● lanzar error cuando se intente divir por 0                                                                             
                                                                                                                           
    expect(received).toThrow(expected)

    Expected substring: "No se puede dividir por 0"
    Received message:   "Cannot divide by zero"

          13 | function dividir(a, b) {
          14 |   if (b === 0) {
        > 15 |     throw new Error("Cannot divide by zero");
             |           ^
          16 |   }
          17 |   return a / b;
          18 | }

          at dividir (src/calculadora.js:15:11)
          at dividir (tests/calculadora.test.js:28:16)
          at Object.<anonymous> (node_modules/expect/build/index.js:1824:9)
          at Object.throwingMatcher [as toThrow] (node_modules/expect/build/index.js:2235:93)
          at Object.toThrow (tests/calculadora.test.js:28:32)

      26 |
      27 | test("lanzar error cuando se intente divir por 0", () => {
    > 28 |   expect(() => dividir(10, 0)).toThrow("No se puede dividir por 0");
         |                                ^
      29 | });
      30 |
      31 | test("Si es verdadero que retorne true", () => {

      at Object.toThrow (tests/calculadora.test.js:28:32)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 6 passed, 7 total
Snapshots:   0 total
Time:        1.911 s, estimated 2 s
Ran all test suites.

aqui nos arroja un error de los 7 test que hicimos y pues basciamente lo que nos quiere decir este error es que el mensaje esperado no coincide con el recibido, espera un  No se puede dividir por 0 pero recibe es un cannot divide by zero, asi que por eso lanzo el error, pero al cambiarlo por lo que si de verde se espera recibir se arregló

y pues lo ultimo que es la cobertura se crea un archivo dedicado a la cobertura, y pues no tengo logs mas que uno que no me encontrar ese archivo dedicado es mas de lo mismo, lo runeaba y pues me arrojaba que no encontraba el archivo, asi que me toco crearlo mediante a un comando y ahi si hizo la cobertura, tambien otro error seria que no cumpla con la cobertura necesaria y se cancelara, pero como mi cobertura lo hace me da un mensaje positivo al ejecutar act
