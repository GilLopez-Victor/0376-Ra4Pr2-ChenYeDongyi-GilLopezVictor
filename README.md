# Bateria de preguntes obertes sobre Git i GitHub
 
> Repositori del projecte col·laboratiu de Git i GitHub
 
---
 
## Índex
 
1. [Reconeix la utilitat de les aplicacions d'ofimàtica web](#1-reconeix-la-utilitat-de-les-aplicacions-dofimàtica-web)
2. [Classifica segons la funcionalitat i prestacions específiques](#2-classifica-segons-la-funcionalitat-i-prestacions-específiques)
3. [Gestiona els comptes d'usuari](#3-gestiona-els-comptes-dusuari)
4. [Aplica criteris de seguretat en l'accés dels usuaris](#4-aplica-criteris-de-seguretat-en-laccés-dels-usuaris)
5. [Utilitza les aplicacions de forma cooperativa](#5-utilitza-les-aplicacions-de-forma-cooperativa)
6. [Elabora documentació relativa a l'ús i la gestió de les aplicacions](#6-elabora-documentació-relativa-a-lús-i-la-gestió-de-les-aplicacions)
 
---
 
## 1. Reconeix la utilitat de les aplicacions d'ofimàtica web
 
> Reconeix la utilitat de les aplicacions d'ofimàtica web
 
1. **Explica per què GitHub es pot considerar una aplicació web de treball col·laboratiu.**
 
   `GitHub` és una plataforma que funciona al núvol ja que tot es fa desde el navegador i no cal instalar res. Això vol dir que pots accedir al repositori desde qualsevol dispositiu amb internet. A més diferents usuaris poden treballar al mateix projecte encara que estiguin en llocs diferents, fent `commits`, `issues` o `pull requests` al mateix temps. També integra eines de control de versions amb `Git`, és a dir no només comparteixes fitxers sino que controles exactament els canvis que fa cada usuari.
 
2. **Quins avantatges té utilitzar GitHub en lloc de guardar els fitxers d'un projecte només en un ordinador local?**
 
   Si guardes el projecte en local tens risc de perdre-ho tot si falla el disc o esborres algo sense voler. Amb `GitHub` el repositori està al núvol i actua com a backup automatic. També facilita el treball en equip ja que no cal anar passant arxius manualment, sino que es treballa sobre un repositori remot amb operacions com `push` i `pull`. A més `GitHub` guarda tot l'historial de `commits`, per tant pots tornar a versions anteriors o fer `rollback` si hi ha errors.
 
3. **Com pot ajudar GitHub a gestionar versions d'un projecte web o d'una aplicació?**
 
   `GitHub` utilitza `Git` per gestionar versions, cada `commit` registra un estat del projecte amb un hash únic. Això el que fa és tenir un historial complet dels canvis amb metadades com autor, data i missatge. També pots comparar `commits` amb `diff` per veure linia a linia els canvis. Si alguna versio falla pots fer `revert` o `checkout` a una anterior, és a dir tens control total sobre l'evolució del projecte.
 
4. **En quins tipus de projectes és especialment útil utilitzar Git i GitHub?**
 
   És especialment útil en projectes de desenvolupament de software com aplicacions web, apps mòbils o videojocs, ja que hi ha molts fitxers i canvis constants. També en projectes col·laboratius amb diversos desenvolupadors, encara que també serveix per projectes individuals per tenir control de versions. En projectes grans o de llarga durada és clau ja que el que fa és organitzar el codi i evitar errors acumulats.
 
5. **Quines diferències hi ha entre un sistema de control de versions com Git i un sistema tradicional d'emmagatzematge de fitxers?**
 
   Un sistema tradicional només guarda fitxers en un estat concret, mentre que `Git` registra tots els canvis en forma de `commits`. `Git` funciona de manera distribuida, és a dir cada usuari te una copia completa del repositori amb tot l'historial. També el que fa és treballar en branques en paralel i després fer `merge`, cosa que amb carpetes normals no es pot fer de forma eficient.
 
---
 
## 2. Classifica segons la funcionalitat i prestacions específiques
 
> Classifica segons la funcionalitat i prestacions específiques
 
6. **Explica quina és la diferència entre Git i GitHub.**
 
   `Git` és un sistema de control de versions distribuït que s'executa en local i gestiona `commits`, branques i historial. `GitHub` és una plataforma web que allotja repositoris `Git` i afegeix funcionalitats extra com col·laboració, gestió de projectes i control d'accessos. És a dir `Git` és la eina base i `GitHub` el servei online.
 
7. **Quines funcionalitats ofereix GitHub a més del control de versions del codi?**
 
   `GitHub` ofereix eines com `issues` per gestionar bugs o tasques, `pull requests` per revisar i validar canvis abans de fer `merge`, `GitHub Actions` per CI/CD encara que sigui bàsic, `GitHub Pages` per desplegar webs estàtiques i també un wiki per documentació. També inclou control de permisos i logs d'activitat.
 
8. **Esbrina i defineix les següents funcionalitats de GitHub segons el seu ús:**
 
   - **Repositoris:** És l'estructura principal on es guarda el projecte, inclou fitxers, `commits`, branques i configuració.
 
   - **Issues:** Sistema de tracking de tasques o errors, el que fa és assignar usuaris, afegir etiquetes i comentar.
 
   - **Pull requests:** Mecanisme per proposar canvis entre branques, inclou revisió de codi i integració abans del `merge`.
 
   - **GitHub Pages:** Servei per desplegar contingut web estàtic directament desde el repositori.
 
9. **Quina funció tenen les **branques (branches)** en Git?**
 
   Les branques el que fan és crear línies de desenvolupament independents. Això vol dir que pots treballar en noves funcionalitats o fixes sense afectar la branca principal. Després es poden fusionar amb `merge` o `rebase`.
 
10. **Per a què serveixen les **pull requests** en un projecte col·laboratiu?**
 
    Serveixen per integrar canvis de manera controlada, el que fa és permetre fer code review, comentar linies de codi i validar abans de fer `merge`. Això millora la qualitat del software.
 
---
 
## 3. Gestiona els comptes d'usuari
 
> Gestiona els comptes d'usuari
 
11. **Què és un compte d'usuari a GitHub i per què és necessari per treballar amb repositoris remots?**
 
    És la identitat de l'usuari dins la plataforma. El que fa és autenticar-se i associar `commits` amb un autor. Sense compte no pots interactuar amb repositoris remots ni fer `push` o `pull`.
 
12. **Quina diferència hi ha entre un repositori **públic** i un **privat** a GitHub?**
 
    Un repositori `public` és accessible per qualsevol usuari i es pot clonar lliurement. Un `private` restringeix l'accés només a usuaris autoritzats, és a dir controla la visibilitat del codi.
 
13. **Com es pot afegir un col·laborador a un repositori de GitHub?**
 
    Desde la configuració del repositori pots afegir usuaris mitjançant el seu `username`. Quan accepten la invitacio poden accedir segons els permisos assignats.
 
14. **Quins rols o permisos pot tenir un usuari dins d'un repositori?**
 
    Els permisos defineixen accions com lectura, escriptura o administració. Per exemple `read` només lectura, `write` el que fa és pujar canvis i `admin` control total. Això ajuda a gestionar qui pot fer que.
 
15. **Per què és important gestionar correctament els permisos dels usuaris en un projecte col·laboratiu?**
 
    Per evitar accessos no autoritzats o modificacions incorrectes. També el que fa és mantenir la seguretat i organització del projecte.

---

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
