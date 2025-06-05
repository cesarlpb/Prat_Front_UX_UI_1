# Módulo 2 · Servicios principales de Azure  
**Respuestas comentadas**

## Preguntas de opción múltiple

| Nº | Respuesta correcta | ¿Por qué? | Por qué las demás no lo son |
|----|--------------------|-----------|-----------------------------|
| **1** | **b – Una región** | Una **región** agrupa uno o más centros de datos conectados con baja latencia y que actúan como unidad de selección de recursos. | <ul><li>a – *Geografía* son varios pares de regiones dentro de un mismo país/mercado.</li><li>c – Un **conjunto de disponibilidad** es un grupo lógico para VM dentro de *una* región.</li><li>d – Un **par** (region pair) son dos regiones emparejadas para recuperación ante desastres.</li></ul> |
| **2** | **a, c – Dominios de actualización y dom. de error** | Un **conjunto de disponibilidad** distribuye las VM en **dominios de actualización** (para evitar reinicios simultáneos por mantenimiento) y **dominios de error** (racks/UPS distintos para fallos hardware). | Pares de regiones y geografías no forman parte del objeto “Availability Set”. |
| **3** | **c, d** | <ul><li>**Todos los contenedores** en un host comparten el mismo núcleo de sistema operativo; usan aislamiento a nivel de proceso.</li><li>VM y contenedores **ambos** están aislados del hardware gracias a la capa de virtualización/hypervisor.</li></ul> | <ul><li>a – Cada VM **tiene su propia instancia de SO**.</li><li>b – Contenedores también están aislados del hardware aunque comparten kernel.</li></ul> |
| **4** | **a, d** | <ul><li>Los **datos semiestructurados** (JSON, CSV) suelen almacenarse en bases **NoSQL**.</li><li>Los **datos estructurados** (tablas relacionales) encajan en filas y columnas.</li></ul> | b – Datos estructurados son **relacionales**, no lo contrario; c – tablas relacionales no son el formato habitual para semiestructurados. |
| **5** | **a, b – Alta disponibilidad y replicación de baja latencia** | Las **zonas de disponibilidad** ofrecen redundancia en centros de datos separados; proporcionan SLA del 99,99 % (alta disponibilidad) y replicación síncrona (baja latencia) entre zonas. | c – La copia de seguridad “off-site” es otra característica, no inherente a AZ; d – *Live migration* se refiere a mover VM sin parar, no es la principal ventaja ofrecida. |

---

## Preguntas de respuesta libre (pautas de corrección)

1. **Redundancia de datos en Azure Blob Storage**  
   - Explicar las opciones de replicación: **LRS** (Local Redundant Storage) vs. **ZRS/GRS/GZRS**.  
   - Mencionar que LRS replica en un único datacenter; ZRS usa tres zonas en la misma región; GRS/GZRS replican además a otra región emparejada.  
   - Ventajas/desventajas en coste y durabilidad.

2. **Qué es un grupo de recursos y buena práctica**  
   - Contenedor lógico en el que los recursos comparten ciclo de vida, permisos y etiquetas.  
   - *Mejor práctica*: colocar en un mismo RG los recursos que se implementan, actualizan y retiran juntos (ej. Web App + BD + Plan de App Service).

3. **Zona de disponibilidad y para qué sirve**  
   - Conjunto de centros de datos independientes dentro de una región; tolera fallos de energía, red y refrigeración.  
   - Se usa para garantizar **SLA 99,99 %** y resiliencia de aplicaciones críticas distribuyendo instancias en varias zonas.

4. **Balancear tráfico entre VM SQL no públicas**  
   - Utilizar un **Internal Load Balancer (ILB)** de Azure.  
   - Motivo: solo expone IP privada, distribuye tráfico dentro de la VNet sin abrir puertos públicos.

5. **Ventaja principal de Azure Functions para desarrolladores**  
   - Modelo **serverless**: subir pequeñas porciones de código que se ejecutan bajo demanda.  
   - Se escala automáticamente, se paga por tiempo de ejecución y no requiere administrar servidores ni sistema operativo.

> Estas justificaciones sirven como rúbrica o material de estudio para el examen AZ-900.
