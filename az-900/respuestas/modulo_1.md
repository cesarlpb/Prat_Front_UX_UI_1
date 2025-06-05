# Módulo 1 · Conceptos de la nube  
**Respuestas comentadas**

## Preguntas de opción múltiple

| Nº | Respuesta correcta | ¿Por qué? | Por qué las demás no lo son |
|----|--------------------|-----------|-----------------------------|
| **1** | **a, c, d**  | <ul><li>**Flexibilidad** → la nube permite ajustar recursos y tecnologías a medida que cambian las necesidades.</li><li>**Agilidad** → aprovisionar en minutos acelera el “time-to-market”.</li><li>**Adaptación económica (OpEx)** → se paga según consumo sin CAPEX inicial.</li></ul> | **Costes impredecibles** (b) sería una **desventaja** si la organización no controla el gasto. |
| **2** | **c – Gran disponibilidad** | Es la capacidad de mantener el servicio operativo con tiempo de inactividad mínimo, normalmente expresada en porcentajes de SLA (99,9 %, 99,99 %, etc.). | <ul><li>**Rendimiento** → velocidad o capacidad de proceso, no continuidad.</li><li>**Tolerancia a errores** → capacidad de resistir fallos concretos, pero no garantiza continuidad prolongada.</li><li>**Agilidad** → rapidez de cambio, no disponibilidad.</li></ul> |
| **3** | **a** | PaaS abstrae la infraestructura de servidores; el desarrollador solo se ocupa del código y la configuración mínima. | <ul><li>b – describe **IaaS**.</li><li>c – la **forma de pago** no define PaaS.</li><li>d – en PaaS el proveedor actualiza el SO.</li></ul> |
| **4** | **a – IaaS** | Con IaaS el cliente administra SO, middleware, runtime y aplicaciones; solo el hardware y la virtualización los gestiona el proveedor. | PaaS y SaaS abstraen más capas, por eso requieren menos administración. |
| **5** | **c – Híbrida** | Combina nubes públicas y privadas, permitiendo mover cargas donde resulte más conveniente en cada momento. | <ul><li>a – Pública → flexible, pero no puede albergar cargas que exijan control total o soberanía de datos.</li><li>b – Privada → máximo control, menor elasticidad de costes.</li></ul> |

---

## Preguntas de respuesta libre (guía de contenidos que debe incluir la respuesta)

1. **Desplegar web y datos con configuración mínima**  
   - **Plataforma como servicio (PaaS)**: el proveedor gestiona SO, parches y escalado automático; el cliente sube código y base de datos sin ocuparse de la infraestructura.

2. **Aumentar infraestructura de VM según la carga**  
   - Concepto de **escalabilidad/elasticidad**.  
   - Se logra con **Virtual Machine Scale Sets** (VMSS): añaden o quitan instancias automáticamente usando métricas (CPU, cola de mensajes, etc.).

3. **Diferencias clave entre nube pública y privada**  
   - **Pública**: propiedad y operación del proveedor, modelo multi-tenant, pago por consumo.  
   - **Privada**: infraestructura dedicada para una sola organización (on-premises o alojada); mayor control y cumplimiento, mayor CAPEX y mantenimiento.

4. **Necesidad de instalar software propio en el SO**  
   - **Infraestructura como servicio (IaaS)** proporciona acceso administrativo (RDP/SSH) a la VM, permitiendo instalaciones y configuraciones personalizadas.

5. **OpEx vs CapEx**  
   | Concepto | OpEx | CapEx |
   |----------|------|-------|
   | **Definición** | Gasto operativo recurrente | Gasto de capital adelantado |
   | **Flujo de caja** | Pay-as-you-go; se refleja en el mismo ejercicio | Inversión inicial amortizada |
   | **Ejemplo** | Hospedar una web en **Azure App Service** con pago mensual | Comprar y montar un servidor físico y su SAN on-premises |

> Estas explicaciones pueden usarse como rúbrica de corrección o como material de repaso para el examen AZ-900.
