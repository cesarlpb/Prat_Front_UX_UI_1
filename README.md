# Prat_Front_UX_UI_1
Repositorio de la formación de UX UI impartida en el centro de formación de Esplai

---

# Git

Para clonar repositorio, vamos al repositorio > Code > SSH y copiamos la URL (`git@... .git`)
```
  git clone <URL>
```

La primera vez que clonais os saldrá el aviso de que no hay un user configurado, entonces:

```
  git config --global user.name "<Nombre>"
```

Es recomendable que coloqueis el email de Github:
```
  git config --global user.email "<email>"
```
Para subir un cambio:
1. Abrir la carpeta en Code 👉(**la carpeta que habéis clonado antes**)
2. Hacéis un cambio en cualquier archivo 👉(**Guardad**)
3. Abrid el icono de control de cambios:

![alt text](image.png)

5. Usamos el icono del + para añadir todo:

![alt text](image-1.png)

6. Escribimos un mensaje que explique qué hemos hecho
7. Commit & push

![alt text](image-2.png)

9. gg ez

---

## Ejercicios por temas

- [Ejercicios de HTML](html/ejercicios.md)
- [Ejercicios de CSS](css/ejercicios.md)
- [Ejercicios de JavaScript](js/ejercicios.md)
- [Ejercicios de React](react/ejercicios.md)
- [Ejercicios de Node.js](server/node/ejercicios.md)
- [Ejercicios de bases de datos](server/db/ejercicios.md)
- [Ejercicios de APIs REST](server/api/ejercicios.md)

---

## Mini-Labs

- [Lab Refactor en Context](react/apuntes/estado_global.md)
- [Lab ](react/apuntes/estado_global.md)

---

## Referencias

- Para crear llave abrid CMD y ejecutad `ssh-keygen` > Enter hasta el final y la llave estará en una ruta que sale en uno de estos pasos, algo como `C:\Users\<tu_usuario>/.ssh/id_rsa.pub` en Windows y algo como `/home/<usuario>/.ssh` en Linux. En Mac (wip)
- https://docs.github.com/es/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

## Si hay que dejar de usar un ordenador...

Opciones:
1. Borrad las llaves de ese ordenador `id_rsa.pub` y `id_rsa`
2. Ir a Github y borrar la llave pública
