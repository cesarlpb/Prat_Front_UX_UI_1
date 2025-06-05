# Módulo 5 · Identidad, gobernanza, privacidad y cumplimiento  
**Respuestas comentadas**

## Preguntas de opción múltiple

| Nº | Respuesta correcta | Por qué es correcta | Por qué las demás no lo son |
|----|--------------------|--------------------|-----------------------------|
| **1** | **c – Directiva de Azure (Azure Policy)** | Azure Policy define **controles y reglas** que se aplican de forma automática a los recursos dentro de una suscripción o grupo de recursos. | a – “Directiva de simetría” no existe; b – Secure Score solo puntúa la postura de seguridad; d – “Directiva de asimetría” no existe. |
| **2** | **c – Bloqueos de recursos de Azure** | Un **Resource Lock** impide la eliminación o modificación accidental de un recurso (“Delete” o “ReadOnly”). | MFA, etiquetas y políticas no detienen la eliminación, solo controlan acceso o asignan metadatos. |
| **3** | **d – Etiquetas de Azure** | Las **tags** permiten **clasificar lógicamente** recursos con pares clave–valor para organizar costes, entornos, equipos, etc. | a – Resource Locks protegen recursos; b – Advisor es recomendación; c – Policy impone reglas, no agrupa. |
| **4** | **b – Azure Blueprints** | Blueprint empaqueta **plantillas ARM, RBAC, directivas y artefactos** en un conjunto repetible que cumple normas internas/externas. | a – Policy controla reglas pero no agrupa artefactos; c – ARM solo despliega recursos; d – Tags solo etiquetan. |
| **5** | **d – Definir a qué datos puede acceder una persona o servicio y qué puede hacer** | **Autorización** trata de **permisos**; se aplica tras autenticar. | a, b – describen **autenticación**; c – es sobre principios de identidad, no autorización. |

---

## Preguntas de respuesta libre (puntos clave que debe contener la respuesta)

1. **Limitar ubicaciones de implementación por cumplimiento**  
   - Crear una **Azure Policy** que permita solo regiones específicas (`"notIn": ["location1","location2"]`).  
   - Asignarla a la suscripción o grupo de recursos para **evitar despliegues fuera de las regiones aprobadas**.

2. **Asignación de roles RBAC por departamento**  
   - Utilizar **roles mínimos requeridos** (`Reader`, `Contributor`, roles personalizados).  
   - Asignar roles a **grupos de Azure AD** por departamento, garantizando el principio de **menor privilegio**.

3. **Aumentar seguridad de inicio de sesión de clientes**  
   - Habilitar **Azure Multi-Factor Authentication (MFA)**.  
   - Ejemplos de segundo factor:  
     - *Algo que sabe*: PIN/pregunta secreta.  
     - *Algo que posee*: código push / token en móvil.  
     - *Algo que es*: datos biométricos (huella, Face ID).

4. **Inicio de sesión único para varios servicios**  
   - Activar **Single Sign-On (SSO)** en **Azure Active Directory**.  
   - Permite a los clientes usar **un único conjunto de credenciales** para todas las aplicaciones.

5. **Documentación para cumplir normativas sanitarias en nuevos mercados**  
   - Consultar la **documentación de Cumplimiento de Azure** (Azure Compliance Documentation).  
   - Incluye certificaciones como **HIPAA, GDPR, ISO 27001** y guías por región/sector para asegurar que los servicios cumplen requisitos locales.

> Usa estas explicaciones como rúbrica de evaluación o para repasar los conceptos de cara al examen **AZ-900**.
