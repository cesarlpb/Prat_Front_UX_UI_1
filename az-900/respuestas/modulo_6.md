# Módulo 6 · Precios y ciclo de vida de Azure  
**Respuestas comentadas**

## Preguntas de opción múltiple

| Nº | Respuesta correcta | Por qué es correcta | Por qué las demás no lo son |
|----|--------------------|--------------------|-----------------------------|
| **1** | **a – Datos de entrada** | El tráfico que **entra** en un centro de datos se denomina “datos de entrada” (ingress). | b – Salen del DC; c – mezcla ambos flujos; d – no corresponde a nomenclatura oficial. |
| **2** | **c – Estimación de costes** | La **calculadora de precios** permite **configurar recursos** y ver un presupuesto estimado antes de desplegar. | a – No genera facturas; b – Reservas y Savings Plans se muestran aparte; d – No compara on-premises. |
| **3** | **c – Tiempo total que un sistema es útil y funciona** | La **disponibilidad de la aplicación** mide el porcentaje de tiempo en que la app responde correctamente (ej. 99,95 %). | a – Un SLA describe disponibilidad prometida, pero no la define; b – Compatibilidad zonal es resiliencia, no disponibilidad; d – La región es solo la ubicación física. |
| **4** | **d – Métricas de uso** | Los cargos reales se calculan a partir de las **métricas de consumo** (CPU-h, GB-mes, transacciones, etc.) registradas por Azure Billing. | a – Portal muestra los datos pero no los “determina”; b – Nº de VM no refleja tipos ni tiempo; c – Calculadora es solo estimación previa. |
| **5** | **a – Compromiso adelantado de capacidad de cálculo** | Con **Azure Reservations** pagas por adelantado 1 o 3 años de capacidad (VM, SQL, Cosmos DB) y recibes **descuento** significativo (hasta 72 %). | b – Provisionar mucho sin reserva no da descuento automático; c – Cuenta gratuita no incluye reservas; d – Spending caps no aplican a reservas. |

---

## Preguntas de respuesta libre (puntos clave que debe contener la respuesta)

1. **Estrategias para reducir costes de VM**  
   - **Apagar / desasignar** VM cuando no se usan (laboratorio, entornos dev).  
   - **Escalado automático** para ajustar instancias a demanda.  
   - Usar **Azure Spot VM** para cargas tolerantes a interrupciones con hasta 90 % de descuento.  
   - Elegir tamaños de VM adecuados y discos gestionados S-series cuando el rendimiento no sea crítico.

2. **Comparar precio de una VM en varias regiones**  
   - Observar diferencias debidas a **coste energético, impuestos y salarios locales**.  
   - Factores adicionales al precio: **latencia** hacia usuarios finales, **requisitos legales de soberanía** y disponibilidad de servicios en esa región.

3. **Ejemplo de servicio sin SLA**  
   - El nivel **Gratuito (F1)** de **App Service** no ofrece SLA porque está pensado para **pruebas y desarrollo**, con recursos compartidos y sin garantía de uptime.

4. **Cuándo usar instancias reservadas (RI)**  
   - Cargas **predecibles** que funcionan 24/7 durante al menos 1 año.  
   - Pago adelantado (o mensual fraccionado) → **ahorro 40-72 %** frente a pago por uso.  
   - Riesgo: requiere planificación; cambio de tamaño/serie limitado.

5. **Dos diferencias entre planes de soporte Developer y Standard**  
   | Característica | **Developer** | **Standard** |
   |----------------|--------------|--------------|
   | Horario de soporte | Horario laboral (tickets web) | 24 × 7 teléfono + web |
   | Alcance | Entornos **no productivos**, best-effort | Incluye **workloads de producción** con tiempos de respuesta más bajos |

> Utiliza estas explicaciones como rúbrica de corrección o material de repaso para el examen **AZ-900**.
