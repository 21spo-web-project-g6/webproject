Matias Kauranen, Juhani Koski, Antti Kurkinen, Arttu Kääriäinen
Tietotekniikan tutkinto-ohjelma (Oamk)
(IN00CT06-3003 | TVT21SPO)

# React WebProject

### `Esittely`

React WebProject on web-ohjelmoinnin sovellusprojekti. WebProject on Oamkin toisen lukuvuoden ensimmäinen projekti, jossa syvennytään web-ohjelmoinnin maailmaan. Projektimme aiheena toimivat maailmanlaajuiset lämpötilat ja hiilidioksidiarvot, joiden dataa visualisoidaan ohjelmassa. Tavoitteena oli ryhmätyönä luoda web-sovellus, joka sisältäisi vuosituhansien ajalta lämpötilamuutoksia sekä hiilioksidipäästöjen muuttumista. Sivulle haluttiin luoda olennaiset web-ominaisuudet, jossa asiakas voi luoda käyttäjätunnuksen, kirjautua sisään ja muokata visualisointeja. Jokainen projektiryhmän jäsen toimi projektissa Full Stack-kehittäjänä, työstäen sekä selain- että palvelinpuolta.

### `Ominaisuudet`

Ensimmäinen näkymä käyttäjälle on kotisivu. Kotisivulta näkyy sivupalkissa eri visualisoinnit, joissa graafien avulla havainnollistetaan lämpötilojen sekä hiilioksidiarvojen muutosta. Valikosta painamalla käyttäjä voi saada yksityiskohtaisia graafeja haluamastaan datasta. 
Jokaisessa visualisoinnissa on graafi, joka vaihtelee vaatimuksien mukaan viivakaaviosta rengaskaavioon. Kaavion nimipainiketta painamalla käyttäjä voi valita, mitä osaa graafista hän haluaa nähdä tai piilottaa.  Käyttäjä voi luoda uuden käyttäjätunnuksen rekisteröitymällä Rekisteröidy-sivulla. Rekisteröitymisen jälkeen kirjautumalla sisään käyttäjä voi tarkastella omia visualisointeja. Käyttäjä voi halutessaan myös poistaa oman käyttäjätunnuksensa.

### `Teknologiat`

Projektimme tekstieditorina käytettiin Visual Studio Codea, jossa pääohjelmointikielenä toimi JavaScript. Nettisivu luotiin JavaScriptin React-kirjastolla, joka soveltuu erinomaisesti käyttöliittymien kehitykseen. Tietokanta datalle luotiin MySQL:llä, joka saatiin käyttöön Node.js-palvelimella. GitHub oli tärkeä työkalu versionhallintaan ja projektinhallintatyökalujen käyttöön, ja se mahdollisti Kanban-prosessin käytön projektissa.

### `Visualisoinnit`

V1 Globaalit historialliset pintalämpötilapoikkeamat tammikuusta 1850 alkaen
Kuvaus & data: https://www.metoffice.gov.uk/hadobs/hadcrut5/

V2 Pohjoisen pallonpuoliskon 2 000 vuoden lämpötilan rekonstruktio
Kuvaus: https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005
Data: https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt
Koko tutkimus: https://www.nature.com/articles/nature03265

V3 Ilmakehän CO2-pitoisuudet Mauna Loan-mittauksista alkaen vuodesta 1958
Data: https://gml.noaa.gov/ccgg/trends/
Kuvaus: https://gml.noaa.gov/ccgg/about/co2_measurements.html

V4 Etelämanner jääydin-arkistot ilmakehän hiilidioksidisuhteista yhdistettynä Mauna Loan-mittauksiin
Kuvaukset: https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html
Data: https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat

V5 Vostok jääytimen-hiilidioksidimittaukset vuosilta: 417160–2342
Kuvaus: https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html
Data: https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2

V6 Jääytimen 800 000 vuoden yhdistelmätutkimus CO2-mittauksista
Kuvaus: https://www.ncei.noaa.gov/access/paleo-search/study/17975
Data: https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt

V7 Maapallon lämpötilan kehitys viimeisen kahden miljoonan vuoden aikana
Kuvaus: https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf
Data: http://carolynsnyder.com/publications.php http://carolynsnyder.com/papers/Snyder_Data_Figures.zip

V8 Hiilioksidipäästöt maiden mukaan
Kuvaus:  https://www.icos-cp.eu/science-and-impact/global-carbon-budget/2021
Data: https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D
Lähde: https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D
Lähteen kuvaus: https://essd.copernicus.org/articles/14/1917/2022/

V9 Hiilidioksidipäästöt sektoreittain
Kuvaus: https://ourworldindata.org/emissions-by-sector#co2-emissions-by-sector
Data: https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx

V10 Ihmisten evoluutio ja aktiviteetit
Data: https://www.southampton.ac.uk/~cpd/history.html
https://www.chartjs.org/docs/latest/charts/line.html#line-styling

