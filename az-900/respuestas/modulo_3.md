# Módulo 3 · Principales soluciones y herramientas de administración  
**Respuestas comentadas**

## Preguntas de opción múltiple

| Nº | Respuesta correcta | ¿Por qué? | Por qué las demás no lo son |
|----|--------------------|-----------|-----------------------------|
| **1** | **c – Comunicaciones nube → dispositivo** (“comando y control”) | En **Azure IoT Hub**, *cloud-to-device* permite enviar comandos, actualizar firmware o reiniciar dispositivos: justo la operación de «comando y control». | <ul><li>a – *Device-to-cloud* es telemetría entrante.</li><li>b – Carga de archivos es otra función aparte.</li><li>d – Enrutamiento dirige mensajes a otros servicios, no ejecuta órdenes.</li></ul> |
| **2** | **b – Azure IoT Edge** | Un *gateway* IoT Edge puede ejecutar módulos contenedorizados que **traducen protocolos propietarios** y reenvían a IoT Hub con un protocolo compatible; es la vía recomendada para protocolos no admitidos de forma nativa. | <ul><li>a – IoT Sphere es HW + SO seguro para microcontroladores, no traduce protocolos.</li><li>c – IoT Hub expone protocolos estándar; él no realiza la traducción.</li><li>d – IoT Central es SaaS preconfigurado con protocolos fijos.</li></ul> |
| **3** | **a – Azure Cognitive Services** | Ofrece **modelos pre-entrenados** (visión, voz, lenguaje, decisión); solo envías datos y recibes predicciones vía API. | <ul><li>b – Azure Advisor da recomendaciones de uso/coste.</li><li>c – Azure Machine Learning permite *entrenar* propios modelos; no está listo “out-of-the-box”.</li><li>d – IoT Hub gestiona dispositivos, no IA.</li></ul> |
| **4** | **d – Azure Pipelines** | Dentro de **Azure DevOps** es el servicio orientado a **CI/CD**: compila, prueba y despliega cada vez que hay cambios en el repositorio. | <ul><li>a – Advisor no pertenece a DevOps.</li><li>b – Boards gestiona trabajo (Kanban, Scrum).</li><li>c – Test Plans gestiona casos y suites de pruebas manuales.</li></ul> |
| **5** | **b – Resultados repetibles** | Las plantillas **ARM** describen la infraestructura de forma declarativa; al aplicarlas obtienes **despliegues idénticos y coherentes** cada vez. | <ul><li>a – ARM usa JSON/Bicep, no YAML.</li><li>c – Es **declarativa**, no imperativa.</li><li>d – Pueden componerse en archivos modulares (nested / linked templates).</li></ul> |

---

## Preguntas de respuesta libre  
*Este módulo no incluye preguntas abiertas en el material original; si tu instructor añade alguna, utiliza la estructura de explicación detallada similar a los módulos 1 y 2.*

> Estas explicaciones pueden servir como rúbrica de corrección o material de repaso para el examen **AZ-900**.
