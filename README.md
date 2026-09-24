# Kit de Emergencia Personal - Página QR

Sitio estático listo para publicar. La página usa exactamente la imagen aprobada `assets/pagina-qr.png` y añade zonas interactivas transparentes sobre:

- los 6 videos aprobados;
- 123 Emergencias;
- 119 Bomberos;
- 125 Ambulancia;
- 132 Cruz Roja;
- 144 Defensa Civil.

## Estructura

- `index.html`
- `styles.css`
- `script.js`
- `assets/pagina-qr.png`
- `videos/01-durante-sismo.mp4`
- `videos/02-despues-sismo.mp4`
- `videos/03-fuga-gas.mp4`
- `videos/04-hemorragia-externa.mp4`
- `videos/05-uso-extintor.mp4`
- `videos/06-preparacion-previa.mp4`
- `netlify.toml`

## Publicar con GitHub + Netlify

1. Sube TODO el contenido de esta carpeta conservando las subcarpetas `assets` y `videos`.
2. En Netlify entra a **Add new project / Import an existing project**.
3. Conecta GitHub y selecciona este repositorio.
4. No necesitas comando de build. `netlify.toml` ya indica que la carpeta publicada es la raíz del proyecto.
5. Pulsa **Deploy**.
6. Netlify te dará una URL pública.
7. Prueba en un celular los 6 videos y los 5 botones de llamada.
8. Usa ESA URL definitiva para generar el QR que se imprimirá en los kits.

## Antes de imprimir el QR

No generes ni imprimas el QR final hasta que hayas probado la URL publicada en al menos un iPhone y un Android. Si luego cambian los videos o el diseño, el QR puede seguir siendo el mismo mientras no cambie la URL pública.
