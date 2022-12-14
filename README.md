Matias Kauranen, Juhani Koski, Antti Kurkinen, Arttu Kääriäinen  
Tietotekniikan tutkinto-ohjelma (Oamk)  
(IN00CT06-3003 | TVT21SPO)

# React WebProject - Ilmastodatan visualisointi ohjelma

## ESITTELY

React WebProject on web-ohjelmoinnin sovellusprojekti. WebProject on Oamkin toisen vuoden ensimmäinen projekti, jossa syvennytään web-ohjelmoinnin maailmaan. Projektimme aiheena toimivat maailmanlaajuiset lämpötilat ja hiilidioksidiarvot, joiden dataa visualisoidaan ohjelmassa Chart.js-kirjaston avulla. Tavoitteena oli ryhmätyönä luoda web-sovellus, joka sisältäisi vuosituhansien ajalta lämpötilamuutoksia sekä hiilioksidipäästöjen muuttumista. Muita oppimistavoitteita oli mm. sovellus testausta ( Mocha & Chai) ja Kanban-prosessi.

Sivulle haluttiin luoda olennaiset web-ominaisuudet: responsiivinen UI, asiakas voi luoda käyttäjätunnuksen (kuva 2), kirjautua sisään ja muokata visualisointeja. Jokainen projektiryhmän jäsen toimi projektissa Full Stack-kehittäjänä, työstäen sekä selain- että palvelinpuolta.
<br></br>
![käyttöliittymän rekisteröinti sivu. Yläpalkissa navigointi palkki jolla voi suunnistaa sovelluksessa kätevästi.](/public/icons/Mainpage.jpg "Mainpage")
> **KUVA 1**. Käyttöliittymän etusivu. Vasemmalla avattava navigointipalkki jolla voi vaihtaa visualisointeja.
<br></br>
## OMINAISUUDET

Ensimmäinen näkymä käyttäjälle on kotisivu. Kotisivulta näkyy sivupalkissa eri visualisoinnit (kuva 1), joissa graafien avulla havainnollistetaan lämpötilojen sekä hiilioksidiarvojen muutosta. Valikosta painamalla käyttäjä voi saada yksityiskohtaisia graafeja haluamastaan datasta. 
Jokaisessa visualisoinnissa on graafi, joka vaihtelee vaatimuksien mukaan viivakaaviosta rengaskaavioon. Kaavion nimipainiketta painamalla voi valita, mitä osaa graafista haluaa nähdä tai piilottaa. 

Käyttäjä voi luoda uuden käyttäjätunnuksen rekisteröitymällä Rekisteröidy-sivulla. Rekisteröitymisen jälkeen sisään kirjautumalla voi tarkastella omia visualisointeja. Käyttäjä voi halutessaan myös poistaa oman käyttäjätunnuksensa.
<br></br>
![käyttöliittymän rekisteröinti sivu. Yläpalkissa navigointi palkki jolla voi suunnistaa sovelluksessa kätevästi.](/public/icons/Register.jpg "Register")
> **KUVA 2**. Käyttöliittymän rekisteröinti sivu. Ylhäällä navigointipalkki jolla voi suunnistaa sovelluksessa vaivattomasti.
## TEKNOLOGIAT

Projektimme tekstieditorina käytettiin Visual Studio Codea, jossa pääohjelmointikielenä toimi JavaScript. Nettisivu luotiin JavaScriptin React-kirjastolla, joka soveltuu erinomaisesti käyttöliittymien kehitykseen. Tietokanta datalle luotiin MySQL:llä, joka saatiin käyttöön Express Node.js-palvelimella. GitHub oli tärkeä työkalu versionhallintaan ja projektinhallintatyökalujen käyttöön ja se mahdollisti Kanban-prosessin käytön projektissa. Rajapinnan ja sovelluksen testauksessa käytettiin Mochaa, Chaita, ja React-Testing-Librarya.
<br></br>
![käyttöliittymän etusivu, jossa näkyy visualisoinnit V1 & V2. Vasemmalla "Menu" painikkeesta näkee muita visualisointeja.](/public/icons/V1&V2.jpg "V1&V2")
> **KUVA 3**. Käyttöliittymän visualisointisivu, jossa näkyy visualisoinnit V1 ja V2. Vasemmasta "Menu" painikkeesta avataan sivupalkki (kuva 1).

## DEMOT
[Linkki projektin demovideoon](https://www.youtube.com/watch?v=Rsjlmr130EU)

[Linkki projektin sivulle](https://climate-app-1111.ew.r.appspot.com/#/v1) - Sivustolla voi tutustua käyttöliittymään, valikkorakenteeseen ja tyyliin. Valitettavasti GCP (Google Cloud Platform) ongelmien vuoksi visualisoinnit eivät piirry web-versiossa, mutta paikallisesti ne toimivat erinomaisesti (Katso Demovideo).

## KÄYTTÖÖNOTTO PAIKALLISESTI

Tarvitset: Uniserver, Visual Studio Code, [Tietokanta](https://www.mediafire.com/file/kv9oo9sh03to5k1/climate.sql/file)

![Kuvassa näkyy miten tietokanta ladataan Uniserverille](/public/icons/uniserver.jpg "uniserver")
> **KUVA 4**. Kuvassa näkyy mihin kansioon tietokanta tiedosto pitää laittaa ja miten se ladataan Uniserverille.

Kun Tietokanta on asennettu laita se päälle, tee uusi käyttäjä tietokannalle (Oletus käyttäjä on user: climate, password: climate, nämä löytyy config.js)

Sitten avaa repository Visual Studio Codessa. Tarvitset kaksi terminaalia: toisen palvelimelle, toisen sovellukselle.

Palvelin terminal: cd server, npm install, npm run devStart.  
Sovellus terminal; npm install, npm start.

Sovellus on nyt käytettävissä osoitteessa http://localhost:3000/   TAI  https://climate.stelti.com/ (Ei tarvitse sovellus terminaalia)  
Valitettavasti käyttäjän luonti ei toimi paikallisesti.

## VISUALISOINNIT

V1 Globaalit historialliset pintalämpötilapoikkeamat tammikuusta 1850 alkaen
[Kuvaus & data](https://www.metoffice.gov.uk/hadobs/hadcrut5/)

V2 Pohjoisen pallonpuoliskon 2 000 vuoden lämpötilan rekonstruktio
[Kuvaus](https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005)
, [Data](https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt)
, [Koko tutkimus](https://www.nature.com/articles/nature03265)

V3 Ilmakehän CO2-pitoisuudet Mauna Loan-mittauksista alkaen vuodesta 1958
[Kuvaus](https://gml.noaa.gov/ccgg/about/co2_measurements.html)
, [Data](https://gml.noaa.gov/ccgg/trends/)

V4 Etelämanner jääydin-arkistot ilmakehän hiilidioksidisuhteista yhdistettynä Mauna Loan-mittauksiin
[Kuvaus](https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html)
, [Data](https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat)

V5 Vostok jääytimen-hiilidioksidimittaukset vuosilta: 417160–2342
[Kuvaus](https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html)
, [Data](https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2)

V6 Jääytimen 800 000 vuoden yhdistelmätutkimus CO2-mittauksista
[Kuvaus](https://www.ncei.noaa.gov/access/paleo-search/study/17975)
, [Data](https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt)

V7 Maapallon lämpötilan kehitys viimeisen kahden miljoonan vuoden aikana
[Kuvaus](https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf)
, [Data](http://carolynsnyder.com/publications.php), [Data2](http://carolynsnyder.com/papers/Snyder_Data_Figures.zip)

V8 Hiilioksidipäästöt maiden mukaan
[Kuvaus](https://www.icos-cp.eu/science-and-impact/global-carbon-budget/2021)
, [Data](https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D)
, [Lähde](https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D)
, [Lähteen kuvaus](https://essd.copernicus.org/articles/14/1917/2022/)

V9 Hiilidioksidipäästöt sektoreittain
[Kuvaus](https://ourworldindata.org/emissions-by-sector#co2-emissions-by-sector)
, [Data](https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx)

V10 Ihmisten evoluutio ja aktiviteetit
[Data](https://www.southampton.ac.uk/~cpd/history.html)


