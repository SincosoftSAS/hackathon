# Hackathon

## Estamos usando

1. [React](<https://es.reactjs.org/>)
2. [Vite](<https://vitejs.dev/>)
3. [MUI](<https://mui.com/>)

## Como instalarlo

1. Clonar el proyecto `git clone https://github.com/SincosoftSAS/hackathon`
2. Abrir el proyecto en tu IDE favorito (VS Code)
3. Corre el siguiente comando en el terminal: `npm install`
4. Corre el siguiente comando en el terminal: `npm run dev`

## Flujo de trabajo

Para el ejercicio nos organizaremos por grupo de máximo 5 personas, cada grupo tendra su respectivo número de grupo, es importante tener en mente el número del grupo porque este será el identificador durante todo el ejercicio.

Cada BRANCH que el equipo cree para el ejercicio debe respeta  este template `{NUMERO_GRUPO}-{FEATURE}` por ejemplo `1-HOME`, `1-ACTIVIDADES`.

## Curiosidades

- Para los que se preguntan con que comando fue creado el proyecto y como se realizó el andamiaje del mismo, estos fueron los comandos que se ejecutaron:

  1. `npm create vite@latest hackaton -- --template react-ts`
  2. `npm install @mui/material @emotion/react @emotion/styled`
  3. `npm install @mui/icons-material`
  4. `npm install @fontsource/roboto`

    Siéntanse libres de utilizar `yarn` o `pnpm` en lugar de `npm` si así lo desean.

- [Recuerden composicion por encima de herencia](<https://es.reactjs.org/docs/composition-vs-inheritance.html#gatsby-focus-wrapper>), react es muy poderoso en composición, groso modo, componentes que reciben childrens. Mantengamoslo en mente y desarrollemos.

- Recordemos el keep-simply de XP, aveces lo más sencillo es lo suficiente, y las otras veces lo más sencillo es lo necesario, lo más sencillo siempre es la solución. Si un desarrollo está complicado, lo complicado está en como lo estamos pensando.

- El mejor código es el que no se escribe, el siguiente mejor código es el que se borra.

- Es preferible tener varios componentes pequeños que un componente super poderoso. [Las complicaciones accidentales dominan el software](<https://www.youtube.com/watch?v=WSes_PexXcA&t=336s&ab_channel=jbrains762>)
