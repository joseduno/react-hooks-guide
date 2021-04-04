# React Hooks Guide

Repositorio guia para recordar como funcionan e implementan algunos hooks.

También contiene ejemplos de como implementar tests a funciones, custom hooks, componentes, incluso simular acciones (ej. clicks)

También muestra usos básicos del Local Storage, Event Listeners, entre otras 


## Más detalles de los componentes creados

- **CounterApp Sin Custom Hook**: Contador utilizando solamente useState, tambien se muestra ejecutar accion luego de dar click a un boton.
- **CustomCounterHook**: Contador implementando un custom hook, que retorna tanto estados como funciones para manipular dicho estado.
- **SimpleForm**: Formulario simple implementado con useState. Tambien se utiliza el useEffect con y sin dependencias, para mostrar como funciona. Tambien se muestra como mostrar un componente de forma condicional (escribiendo 'coors' en el campo 'nombre'). En el componente Message, tambien se muestra como escuchar eventos del explorador, y la utilidad del return de un useEffect, el cual se ejecuta al desmontarse un componente en react.
- **FormWithCustomHook**: Utilizar custom hook para trabajar con formularios, mucho mas facil hacerlo de esta forma, facil de reutilizar.
- **MultipleCustomHooks (Breaking Bad Quotes)**: Utilizando e interactuando 2 custom hooks, useCounter y **useFetch**. Éste ultimo hook muestra el uso del useEffect, peticiones a una API de de forma asincrona y otro ejemplo de uso del return en un useEffect.
- **FocusScreen**: Muestra el uso del useRef (ejemplo no real pero didactico), para mantener referencia a componentes del html, incluídos componentes react. Ver tambien <RealExampleRef.js />
- **Breaking Bad Quotes (useLayoutEffect)**: Ejemplo de uso del useLayoutEffect, a diferencia del useEffect, se ejecuta antes de renderizar el componente. También se muestra un ejemplo de uso del useRef, en conjunto con el useLayoutEffect.
- **Memorize**: Se muestra el uso de la funcion 'memo' de react, util para evitar que un componente hijo sea renderizado, a pesar de que su componente padre necesite renderizarse por algún cambio en su contenido que no tenga relación con su hijo. _El componente 'Small' no se renderiza cuando se presiona el boton 'show/hide' porque no altera el valor del contador, solo lo hace cuando se renderiza el componente padre por primera vez o cuando el valor del contador efectivamente se incrementa_
- **MemoHook (useMemo)**: Muestra uso del hook useMemo, util para condicionar la ejecución de funciones similar a como funciona el useEffect o useLayoutEffect, pero no condiciona el renderizado de componentes sino la ejecución de una funcion, que por ejemplo implique ser un proceso lento/pesado.
- **useCallback Hook**: Muestra el uso del useCallBack, utilizado para indicarle a react que memorice funciones que son pasadas como argumentos a otros componentes, si no se implementa, la función se crearía en cada renderizado ocupando sitios diferentes en memoria (a pesar que la funcion haga lo mismo, realmente no sería la misma el useCallback, se utliza para que react reconozca la igualdad de la función aunque sea creada multiple veces).
- **Padre**: Otro ejemplo de uso del 'useCallback' y 'React.memo'. El 'useCallback' se utiliza para memorizar la funcion y el 'React.memo' se utiliza para memorizar el componente que recibe la funcion memorizada como argumento.
- **TodoApp**: Pequeña app, muestra claramente que son y como funcionan las funciones 'reducers' (estados y acciones para manipularlos) y el uso del hook 'useReducer' que constituyen las bases para entender Redux). Básicamente el useReducer se asemeja al useState, pero es más robusto, ya que permite modificar el estado de muchas formas, más fácil de lo se lograría utilizando netamente useState. Recomendación: utilizar useState para cosas más simples, y useReducer para cosas más complejas. También se muestra como utilizar el local storage del navegador en conjunto con el useEffect.

### Notas adicionales:
<MainApp /> es un componente empleado para mostrar todos los ejemplos mencionador anteriormente.