# Base de datos propia y segura

Esta carpeta es una copia de trabajo del portal. No reutilices el proyecto
Firebase `torneo-kyokushin-cba-2026`: pertenece al portal de referencia y sus
datos no deben mezclarse con los tuyos.

## Estructura de los datos

```
profiles/{uid}                 perfil de cada instructor
instructorApplications/{uid}  solicitudes pendientes de aprobación
dojos/{dojoId}                 dojo aprobado; ownerUid identifica al instructor
athletes/{athleteId}           atleta registrado por un instructor
registrations/{registrationId} inscripción del atleta al torneo
paymentReceipts/{receiptId}    comprobante de pago QR (estado pendiente/aprobado)
admins/{uid}: true             único mecanismo para dar permisos de mesa técnica
```

Los menores no crean cuenta ni ingresan a la plataforma. El instructor
autorizado es quien registra al menor y queda guardado en cada dato como
`instructorUid`. Antes de enviar el formulario el portal debe pedir una
confirmación de autorización del padre, madre o tutor.

## Configuración necesaria en Firebase

1. Crea un proyecto Firebase nuevo, exclusivo para Senshi Bolivia.
2. Activa **Authentication > Email/Password**. El instructor ingresa con
   correo y contraseña; el CI queda como dato editable de identificación, no
   como contraseña.
3. Crea **Realtime Database** en modo bloqueado.
4. En la pestaña Rules, pega el contenido de `database.rules.json` y publica.
5. Registra una Web App y copia su configuración en
   `firebase/secure-config.js`, basada en `secure-config.example.js`.
6. Después de crear tu primer usuario administrador, agrega su UID como
   `admins/UID: true` desde la consola Firebase. Solo ese usuario podrá aprobar
   dojos, revisar registros y validar comprobantes.

## QR y comprobantes

El QR es una imagen fija que contiene los datos de la cuenta. No se implementa
una pasarela de pago. El instructor puede adjuntar un comprobante y la mesa
técnica cambia manualmente su estado a `aprobado` o `rechazado`.

## Antes de publicar

- No publiques reglas de base de datos abiertas.
- No guardes fotos o comprobantes como texto Base64 en la base de datos:
  usa Firebase Storage y guarda solo su URL protegida.
- Conserva únicamente los datos necesarios de los menores y elimina los que
  ya no necesites cuando termine el torneo.
