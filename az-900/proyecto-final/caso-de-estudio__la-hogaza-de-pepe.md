# Caso de estudio — Panadería de barrio “La Hogaza de Pepe 🐸”

## 📄 Plantilla del cliente (rellenada)

| Campo | Detalles |
|-------|----------|
| **Nombre / Alias** | Panadería “La Hogaza de Pepe 🐸” |
| **Tipo de empresa** | Comercio minorista de pan y repostería artesanal |
| **Productos / Servicios** | Panes tradicionales, bollería, tartas por encargo |
| **Expectativas de sus clientes** | Ver el menú actualizado, localizar la tienda, encargar tartas, contactar por WhatsApp/correo |
| **Recursos tecnológicos actuales** | Solo redes sociales (Instagram, Facebook) |
| **Situación y procesos actuales** | No tiene web propia; pedidos se gestionan por teléfono |
| **Volumen y frecuencia de datos** | < 100 visitas/día al principio; 3-4 MB de imágenes estáticas |
| **Requisitos de cumplimiento / sector** | RGPD (formulario de contacto con consentimiento) |
| **Necesidades y objetivos futuros** | Página informativa, formulario de contacto/pedidos, escalado sencillo en campañas |

---

## Parte 1 · Lista de servicios en la nube propuestos

| Requisito | Servicio Azure | Modelo | Motivo |
|-----------|----------------|--------|--------|
| Hospedar web estática con HTTPS y CI/CD | **Azure Static Web Apps** (plan *Free* o *Standard*) | **PaaS** | Genera y publica el sitio desde GitHub, CDN global, SSL automático y 2 dominios gratis (plan Free) |
| Lógica de backend (formulario “Encarga tu tarta”) | **Azure Functions** (plan de Consumo) | Serverless | Ejecuta código a demanda; primeros 1 M ejecuciones/mes sin coste |
| Envío de correos de confirmación | **SendGrid** (Marketplace) | SaaS | 100 emails/día gratis; sencillo de integrar con Functions |
| Almacenar imágenes del menú | **Azure Blob Storage (Hot)** | PaaS | Bajo coste por GB; urls firmadas públicas/privadas |
| Dominio panaderialahogaza.com y DNS | **Azure DNS** | Infra | 0,50 US$/zona/mes (primeras 25 zonas) |
| Observabilidad | **Azure Application Insights** | PaaS | 5 GB/mes gratis; métricas, alertas y trazas de Functions |

### Estimación de costes mensuales (USD)

| Servicio | Plan | Uso previsto | Coste aprox. |
|----------|------|--------------|--------------|
| Static Web Apps | Free (hasta 100 GB de ancho de banda) | 1 sitio | **0 USD** |
| 〃 | Standard (5 dominios + SLA prod.) | *Si se amplía en Navidad* | **≈ 9 USD/mes** |
| Functions | Consumo | < 20 000 ejec./mes | ~0 USD (en el tramo gratis)|
| DNS | 1 zona | — | 0,50 USD/mes |
| Blob Storage | 1 GB Hot | Imágenes | 0,02 USD/mes |
| SendGrid | Free tier | 100 emails/día | 0 USD |
| **Total base** | | | **≈ 0,52 USD/mes**<br>(~10 USD/mes si se pasa a Standard) |

### Beneficios para la panadería

- **Coste casi nulo** y pago solo si crece el tráfico.  
- **Sin servidores** que administrar; todo gestionado como servicio.  
- **Implementación continua**: cada push a GitHub publica el sitio.  
- **Escalabilidad automática** de Functions; picos de pedidos cubiertos.  
- **Seguridad y RGPD**: SSL, autentificación integrada, datos del formulario enviados por HTTPS y almacenados de forma efímera.  
- **Tiempo de carga rápido** gracias a CDN incluido en Static Web Apps.  

---

## (Opcional) Parte 2 · Bosquejo de diagrama

```



```

- **Azure DNS** resuelve *panaderialahogazadepepe.com* al endpoint global.  
- En caso de pasar al plan **Standard**, se añaden dominios “.es” y zona **España Central** para menor latencia.

---

## Parte 3 · Puntos clave para la presentación

1. **Elección de servicios**: Static Web Apps frente a App Service para reducir costes y complejidad.  
2. **Ventajas**: coste < 1 USD, cero mantenimiento, SLA de 99,95 % (plan Standard).  
3. **Reto**: configuración de GitHub Actions y variables de entorno para SendGrid.  
4. **Mejoras futuras**: menú dinámico con Cosmos DB, pasarela de pago, versión bilingüe.  

¡Con esto la panadería podrá estrenar página en cuestión de horas y crecer sin sorpresas en la factura!  