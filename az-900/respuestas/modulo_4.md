# Módulo 4 · Características de seguridad general y de redes  
**Respuestas comentadas**

## Preguntas de opción múltiple

| Nº | Respuesta correcta | ¿Por qué? | Por qué las demás no lo son |
|----|--------------------|-----------|-----------------------------|
| **1** | **b – Datos en tránsito** | Son los datos que **viajan** de un punto a otro (Internet o red privada) y, por tanto, necesitan cifrado TLS/VPN durante el transporte. | a – *Inmutables* se refiere a WORM storage; c – *En reposo* son datos almacenados; d – “En la nube” no es una clasificación estándar. |
| **2** | **c – Hosts dedicados de Azure** | Proporcionan un **servidor físico exclusivo** para las VM de un único cliente, garantizando aislamiento frente a otras cargas. | a – Zona de disponibilidad: resiliencia; b – Conjunto de disponibilidad: alta disponibilidad, pero VM siguen siendo multi-tenant; d – Reserved Instances solo afectan al precio. |
| **3** | **d – Defensa en profundidad** | Estrategia de **capas sucesivas** (identidad, red, aplicación, datos…) que ralentizan o detienen un ataque antes de que comprometa la información. | a – *Ciphertext* es texto cifrado; b – “Seguridad de blob” no existe como término; c – “Capas de seguridad de la red” describe solo una parte de la defensa. |
| **4** | **a – Denegación de servicio distribuido (DDoS)** | Bombardea la aplicación con tráfico malicioso para **saturar recursos** y hacerla inoperante para usuarios legítimos. | RRA no es un término oficial; c – *Man-in-the-middle* intercepta tráfico; d – *Bypass de firewall* es evadir reglas, no agotar recursos. |
| **5** | **c – Capa de perímetro** | El **perímetro de red** (firewalls, DDoS Protection, WAF) es la primera línea frente a ataques de red externos. | a – Capa de datos protege bases y almacenamiento; b – Identidad se ocupa de acceso y autenticación; d – Proceso (compute) se centra en VM/contenedores. |

---

## Preguntas de respuesta libre (elementos clave que debe contener la respuesta)

1. **Dos acciones para asegurar la capa de red**  
   - Limitar la comunicación entre recursos mediante **Network Security Groups (NSG)** o **Application Security Groups (ASG)**.  
   - *Denegar por defecto* y permitir solo puertos/IP necesarias; restringir tráfico entrante de Internet; usar **VPN/ExpressRoute** para conectividad segura on-prem.  

2. **Qué almacenar en Azure Key Vault y por qué**  
   - **Contraseñas, claves API, certificados TLS, secretos de conexión**.  
   - Ventajas: cifrado FIPS 140-2, control de acceso basado en RBAC/MIs, registros de auditoría y rotación automática de secretos.  

3. **Limitar todo el tráfico saliente de una VNet**  
   - Implementar un **Network Security Group** (o Azure Firewall) con reglas *deny* para tráfico outbound y permitir solo destinos aprobados.  

4. **Uso típico de Blob Storage inmutable (WORM)**  
   - Sectores regulados (sanidad, finanzas, jurídico) donde los datos deben conservarse **sin posibilidad de alteración**, p. ej. historiales médicos o registros bancarios.  

5. **Herramienta automática para supervisión y respuesta ante amenazas**  
   - **Azure Sentinel**: SIEM/SOAR nativo que recopila logs de todos los servicios, aplica análisis con IA y ejecuta *playbooks* de respuesta automática.  

> Utiliza estas explicaciones como guía de corrección o material de repaso para el examen **AZ-900**.
