

## 4. Aplica criteris de seguretat en l'accés dels usuaris
 
> Aplica criteris de seguretat en l'accés dels usuaris

16. **Quins riscos pot tenir compartir un repositori amb massa permisos per a tots els usuaris?**
 
    Si tots tenen permisos alts poden modificar configuracions critiques o esborrar contingut. Això augmenta el risc d'errors o problemes de seguretat.
 
17. **Per què és recomanable utilitzar autenticació segura (com tokens o SSH) per accedir a GitHub?**
 
    Perque ofereix una capa extra de seguretat, ja que no depens només de contrasenyes. Els `tokens` es poden limitar i revocar facilment.
 
18. **Què passaria si es publiquen contrasenyes o claus privades dins d'un repositori?**
 
    Podria comprometre serveis externs com bases de dades o `APIs`. A més hi ha sistemes automatics que detecten aquestes claus i les utilitzen.
 
19. **Quines bones pràctiques de seguretat s'han de seguir quan es treballa amb GitHub?**
 
    - No incloure dades sensibles al repositori.
    - Utilitzar `.gitignore`.
    - Activar autenticació en dos factors `2FA`.
    - Controlar permisos.
    - Revisar accessos regularment.
 
20. **Per què és important controlar qui pot fer **push** directament a la branca principal (`main`)?**
 
    Perque la branca `main` representa una versio estable del projecte. Si es fan canvis sense control pot provocar errors en producció.
 
---

## 5. Utilitza les aplicacions de forma cooperativa

> Utilitza les aplicacions de forma cooperativa
 
21. **Explica com poden treballar diverses persones al mateix projecte utilitzant GitHub.**
 
    Cada usuari clona el repositori i treballa en una branca local. Despres puja els canvis al repositori remot i crea una `pull request` per integrar-los. Això el que fa és treballar en paralel sense conflictes constants.
 
22. **Per què és útil treballar amb branques en lloc de modificar directament la branca principal?**
 
    Perque aïlla els canvis i evita afectar la versio estable. També el que fa és provar funcionalitats abans de integrar-les a `main`.
 
---

## 6. Elabora documentació relativa a l'ús i la gestió de les aplicacions

> Elabora documentació relativa a l'ús i la gestió de les aplicacions

23. **Per què és important incloure un fitxer **README.md** en un repositori de GitHub?**
 
    Perque descriu el projecte, instalacio i us. És clau per que altres desenvolupadors entenguin el funcionament.
 
24. **Quins avantatges té utilitzar **Markdown** per escriure documentació a GitHub?**
 
    `Markdown` és lleuger i facil d'escriure, el que fa és formatar text sense complicacions. A més es compatible amb `Git` per veure canvis.
 
25. **Com pot ajudar la documentació a altres desenvolupadors que volen utilitzar o modificar el projecte?**
 
    Facilita entendre el codi, instalacio i estructura. Això el que fa és contribuir sense perdre temps investigant.
 
---
 
*Documentació elaborada per Dong Yi i Víctor*
