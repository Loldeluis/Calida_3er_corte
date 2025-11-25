Parte 3 – Uso de nektos/act:
Investigar qué es act y documentar en README.md:
- Qué hace.
- Requisitos (Docker).
- Comando para ejecutar el workflow localmente.

RL: act es una herramienta que me permite ejecturar todos los github actions sin tener que subir nada a guthub asi que todo se maneja localmente y gratuito para poder hacer los test necesario para poder tener asegurada una buena subida hacia produccion
y pues para que pueda funcionar correctamente necesita de docker obviamente porque es donde corren los contenedores, necesita el repositorio locar que es el .github que tengo ahi con workflows para que pueda leer los pasos que deje tales como npm run lint
y pues tener act instalado que es el programa en si que fue lo que instalamo choco install act

y pues son muchos los comandos pero resumamos a act que es lo que hace que se ejecute todo, npm run lint, npm run test, npm run test:ci, etc. Y si llega a fallar alguno el job falla 
