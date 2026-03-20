---
 
## 4. Aplica criteris de seguretat en l'accés dels usuaris
 
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
 
   Perque la branca `main` representa una versio estable del projecte. Si es fan canvis sense control pot provocar errors en produccio.
 
---
