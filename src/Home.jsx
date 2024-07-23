import React, { useState } from 'react'
import Footer from './components/Footer'
import CookieConsent from 'react-cookie-consent'
import axios from 'axios'
import { useStateContext } from './context/StateContext'
import LanguageBar from './components/LanguageBar'
import English from './English'

const Home = () => {
  const { language } = useStateContext()

  console.log(language)

  const [cookieAccept, setCookieAccept] = useState(false)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const increaseVisitorsCount = async () => {
    const { data } = await axios.put(
      `https://api.pictusweb.com/api/visitors/gender/increase`,
      // `http://localhost:2000/api/visitors/gender/increase`,
      config
    )
  }
  return (
    <>
      <div className='text-white'>
        <LanguageBar />
        {language === 'english' && <English />}
        {language === 'slovak' && (
          <>
            <div className='hero'>
              <h1 className='title-grad text-[40px] text-center pt-[55%]  lg:pt-[20%] xl:pt-[15%] font-bold'>
                Či si homosexuál alebo heterosexuál,
              </h1>
              <h2 className='text-[#ffffff] text-[35px] text-center'>
                Ježiš ťa miluje rovnako!
              </h2>
            </div>
            <div className='duha-grad'>
              <div className='text-justify mx-4 lg:mx-[5%] py-8 intro'>
                <h3 className='text-white -mt-[25%]  text-[27.5px] subtitle'>
                  Ako to viem?
                </h3>
                <p>
                  Pretože zomrel za hriechy celého ľudstva. Ak by miloval len
                  heterosexuálov, potom by predsa nezomieral za hriechy celého
                  sveta.
                </p>
                <p className='mt-2'>
                  <span className='italic'>
                    {' '}
                    On je obeťou zmierenia za naše hriechy, a nielen za naše,
                    ale aj za hriechy celého sveta.{' '}
                  </span>
                  <span id='verse-ref'>Prvý Jánov 2:2 </span> On miluje každého
                  človeka.
                  <span className='italic'>
                    {' '}
                    Ale Boh dokazuje svoju lásku k nám tým, že Kristus umrel za
                    nás, keď sme boli ešte hriešni.{' '}
                  </span>
                  <span id='verse-ref'> Rimanom 5:8 </span>
                  <span className='italic'> Boh neuprednostňuje nikoho. </span>
                  <span id='verse-ref'> Rimanom 2:11 </span>
                </p>
                <p className='mt-4'>
                  Pán Ježiš bol priateľ hriešnikov a colníkov a preto Ho
                  vtedajší kňazi odsudzovali.
                  <span className='italic'>
                    {' '}
                    Prišiel Syn človeka, ktorý je a pije, a hovoríte: Ajhľa,
                    človek žráč a pijan vína, priateľ colníkov a hriešnikov.{' '}
                  </span>
                  <span id='verse-ref'> Lukáš 7:34 </span>
                </p>

                <h3 className='text-white text-[27.5px] subtitle-pink'>
                  Máme povinnosť sa vzájomne milovať
                </h3>
                <p>
                  <span className='italic'>
                    {' '}
                    Lebo jedno prikázanie obsahuje celý zákon v plnosti, ono:
                    Milovať budeš blížneho svojho ako seba samého.{' '}
                  </span>
                  <span id='verse-ref'>Galatským 5:14 </span>
                  <span className='italic'>
                    {' '}
                    Kto nemiluje, nepoznal Boha, pretože Boh je láska.{' '}
                  </span>
                  <span id='verse-ref'> Prvý Jánov 4:8 </span>
                  <span className='italic'>
                    {' '}
                    Lebo to je láska k Bohu, aby sme zachovávali Jeho
                    prikázania; a Jeho prikázania nie sú ťažké.{' '}
                  </span>
                  <span id='verse-ref'> Prvý Jánov 5:3 </span>
                </p>
                <p className='mt-4'>
                  Osobne sa poznám s niekoľkými homosexuálmi a sú to priateľskí
                  ľudia. Sú talentovaní a slušní k druhým. Sú empatickí a
                  spoločenskí.
                </p>

                <h3 className='text-white text-[27.5px] subtitle'>
                  Každý človek zhrešil
                </h3>
                <p>
                  <span className='italic'>
                    {' '}
                    Všetci totiž zhrešili a nemajú slávy Božej.{' '}
                  </span>
                  <span id='verse-ref'>Rimanom 3:23 </span> Problém celého
                  ľudstva
                  <span> (homosexuálov a heterosexuálov) </span>
                  je hriech a to akýkoľvek. Ten totiž oddeľuje človeka od Božej
                  prítomnosti.
                </p>

                <p className='mt-4'>
                  Ak usilovne pracuješ, chrániš prírodu, robíš dobročinnosť, ale
                  neveríš v Ježiša, si odsúdený, ak v tejto nevere zostaneš.
                  Ľudia sa počas potopy utopili nie preto, že by boli všetci
                  neprispôsobivé individuá, ale preto, že neuverili Noachovi a
                  nevstúpili do korábu. Utopili sa aj priateľskí, aj
                  talentovaní, aj slušní, aj empatickí, aj spoločenskí.
                </p>

                <h3 className='text-white text-[25px] subtitle-pink'>
                  Kto verí, je ospravedlnený
                </h3>
                <p>
                  Ježiš ale zomrel za hriechy všetkých a ten kto v Neho verí, je
                  ospravedlnený pred Bohom.
                  <span className='italic'>
                    {' '}
                    Kto verí v Neho, nebude súdený.{' '}
                  </span>
                  <span id='verse-ref'>Ján 3:18 </span>
                </p>
                <p className='mt-2'>
                  Viera však musí byť úprimná, zo srdca. A tá sa prejavuje tým,
                  že človek po tom ako uveril v Ježiša, má túžbu a snahu opustiť
                  hriech a jeho otroctvo.
                  <span className='italic'>
                    {' '}
                    Kto však neposlúcha Syna, neuvidí život, ale hnev Boží
                    zostáva na ňom.{' '}
                  </span>
                  <span id='verse-ref'> Ján 3:36 </span>
                </p>

                <h3 className='text-white text-[27.5px] subtitle'>
                  Je inakosť hriechom?
                </h3>
                <p>
                  Božie Slovo sa často dotýka problematiky nemanželského vzťahu.
                  <span className='italic'>
                    {' '}
                    Varujte sa smilstva! Každý (iný) hriech, ktorého sa človek
                    dopustí, je mimo tela; ale kto smilní, hreší proti vlastnému
                    telu.{' '}
                  </span>
                  <span id='verse-ref'>Prvý Korintským 6:18 </span>
                  <span className='italic'>
                    {' '}
                    Manželstvo všetci majte v úcte a manželské lôžko
                    nepoškvrnené, lebo smilníkov a cudzoložníkov bude súdiť Boh.{' '}
                  </span>
                  <span id='verse-ref'> Židom 13:4 </span>
                </p>
                <p className='mt-4'>
                  Vyriešil by sobáš partnerov rovnakého pohlavia tento problém?
                  Božie Slovo na niektorých miestach spomína aj homosexuálne
                  vzťahy.
                  <span className='italic'>
                    {' '}
                    Preto ich Boh vydal nehanebným náruživostiam, veď ich ženy
                    zamenili prirodzený styk s mužmi za protiprirodzený, a
                    podobne aj mužovia zanechali prirodzený styk so ženou a
                    rozpálili sa vášňou medzi sebou: mužovia s mužmi páchali
                    hanebnosť a za svoje poblúdenie sami na sebe niesli odplatu,
                    akú si zaslúžili. A keďže nepokladali za hodné zachovať si
                    poznanie Boha, vydal ich Boh prevrátenému zmýšľaniu, aby
                    páchali, čo sa nesluší: naplnení všetkou neprávosťou
                    smilstvom.{' '}
                  </span>
                  <span id='verse-ref'> Rimanom 1:26-29</span>
                  <span className='italic'>
                    {' '}
                    Poznali síce právny poriadok Boží, že tí, čo pášu takéto
                    veci, zasluhujú si smrť, a predsa nielen sami ich robia, ale
                    aj schvaľujú, keď ich pášu iní.{' '}
                  </span>
                  <span id='verse-ref'> Rimanom 1:32 </span>
                </p>
                <p className='mt-4'>
                  Či žiješ v nemanželskom heterosexuálnom vzťahu alebo vo vzťahu
                  s rovnakým pohlavím (rozhodujúce pohlavie je to prirodzené pri
                  narodení človeka, nie to po operačnom zákroku zmeny pohlavia),
                  Božie Slovo ich dáva na rovnakú úroveň.
                  <span className='italic'>
                    {' '}
                    Nemýľte sa! Ani smilníci, ani modloslužobníci, ani
                    cudzoložníci, ani muži súložiaci s mužmi, ani zlodeji, ani
                    lakomci, ani opilci, ani rúhači, ani vydierači nebudú
                    dedičmi kráľovstva Božieho!{' '}
                  </span>
                  <span id='verse-ref'> Prvý Korintským 6:9-10</span>
                </p>

                <h3 className='text-white text-[27.5px] subtitle-pink'>
                  Možno sa necítiš byť tým kým si sa narodil
                </h3>

                <p className='mt-4'>
                  Sme tými, kým sa cítime alebo sme tými, kým sme sa narodili?
                  Cítiš sa byť prezidentom? Nie si. Cítiš sa byť opicou? Nie si.
                  Cítiš sa byť rastlinou? Nie si. Cítiš sa byť opačným pohlavím?
                  Nie si.
                </p>

                <p className='mt-4'>
                  City a myšlienky sú častokrát zavádzajúce, pretože sú
                  deformované hriechom. Chvíľu sa ti to páči, inokedy si
                  nešťastný.
                </p>

                <p className='mt-4'>
                  Si tým, ako si stvorený.
                  <span className='italic'>
                    {' '}
                    Od počiatku stvorenia však stvoril ich Boh ako muža a ženu.
                    Preto opustí človek otca i matku a bude sa pridŕžať svojej
                    manželky, a budú dvaja jedno telo; takže už nie sú dve telá,
                    ale jedno. Čo teda Boh spojil, človek nerozlučuj!
                  </span>
                  <span id='verse-ref'> Marek 10:6-9 </span>
                </p>

                <p className='mt-4'>
                  Ak si sa narodil ako chlapec, si muž. Ak si sa narodila ako
                  dievča, si žena. Potom to bola vôľa Stvoriteľa, aby si
                  bol/bola tým, čím si od narodenia. A to preto, lebo s tebou má
                  dobrý úmysel. Tak prečo ísť proti vôli Najvyššieho?
                </p>

                <h3 className='text-white text-[27.5px] subtitle'>
                  Sám to nezvládneš
                </h3>
                <p>
                  Ak prijmeš Ježiša, začne v tebe boj dvoch svetov.
                  <span className='italic'>
                    {' '}
                    Lebo telo žiada proti duchu a duch proti telu; navzájom si
                    odporujú, aby ste nerobili, čo by ste chceli.{' '}
                  </span>
                  <span id='verse-ref'> List Galatským 5:17 </span>
                </p>
                <p className='mt-2'>
                  Čím viac budeš posilňovať svojho ducha, tým bude slabšie telo
                  a to vypôsobí, že doterajšia žiadostivosť k hriechu bude
                  slabnúť. Nejde o telo samotné, ale o toho zlého, ktorý ho má v
                  područí.
                  <span className='italic'>
                    {' '}
                    Veď náš boj nie je proti krvi a telu, ale proti kniežatstvám
                    a mocnostiam, proti pánom sveta tejto temnosti, proti zlým
                    duchom v nebesiach.{' '}
                  </span>
                  <span id='verse-ref'> List Efezským 6:12 </span> Túto moc
                  temna
                  <span id='verse-ref'> (duchovnú držbu v neslobode) </span>v
                  tvojom živote môže zviazať ten, koho Pánom je Ježiš, kto nesie
                  Jeho autoritu. Sám som túto autoritu uplatňoval vo svojom
                  živote - v rôznych oblastiach.
                </p>

                <p className='mt-2'>
                  {' '}
                  Človek môže byť v neslobode v akejkoľvek oblasti života ako je
                  aj prílišná spotreba, otrocké nasledovanie módnych trendov,
                  zastretý zrak v nevere v Boha, trvajúca závisť, pýcha života,
                  nezdravá ustarostenosť, závislosť na počítačových hrách,
                  zahltenosť romantickými telenovelami.{' '}
                </p>

                <h3 className='text-white text-[27.5px] subtitle-pink'>
                  Rozhodni sa správne!
                </h3>
                <p>
                  Tvoja duša je vzácna, neostávaj v satanovom zvode. Nezatváraj
                  pred tým oči. Tým, že sa budeš snažiť v to neveriť, nespôsobíš
                  jeho zánik. Aj Neo v Matrixe stál pred voľbou. Modrá alebo
                  červená? Milosrdná ilúzia alebo tvrdá realita?
                </p>
                <p className='mt-4'>
                  Prajem ti, aby si získal pravú slobodu, ktorá je len v
                  Ježišovi Kristovi, pretože On je Život a len On je Cesta k
                  nemu.
                  <span className='italic'>
                    {' '}
                    Ja som cesta i pravda i život.{' '}
                  </span>
                  <span id='verse-ref'> Ján 14:6 </span>
                  Potom ťa zaplaví skutočný pokoj, ktorý podvedome stále hľadáš.
                </p>
              </div>
              <Footer />
            </div>
          </>
        )}
        {language === 'czech' && (
          <>
            <div className='hero'>
              <h1 className='title-grad text-[40px] text-center pt-[55%]  lg:pt-[20%] xl:pt-[15%] font-bold'>
                Zda jsi homosexuál nebo heterosexuál,
              </h1>
              <h2 className='text-[#ffffff] text-[35px] text-center'>
                Ježíš tě miluje stejně!
              </h2>
            </div>
            <div className='duha-grad'>
              <div className='text-justify mx-4 lg:mx-[5%] text-[22.5px] py-8 intro'>
                <h3 className='text-white -mt-[25%]  text-[27.5px] subtitle'>
                  Jak to vím?
                </h3>

                <p>
                  Protože zemřel za hříchy celého lidstva. Pokud by miloval jen
                  heterosexuály, pak by přece neumíral za hříchy celého světa.
                </p>
                <p className='mt-2'>
                  <span className='italic'>
                    {' '}
                    On je obětí smíření za naše hříchy, a nejen za naše, ale
                    také za hříchy celého světa.{' '}
                  </span>
                  <span id='verse-ref'>První Janův 2:2</span> On miluje každého
                  člověka.
                  <span className='italic'>
                    {' '}
                    Ale Bůh dokazuje svou lásku k nám tím, že Kristus zemřel za
                    nás, když jsme byli ještě hříšní.{' '}
                  </span>
                  <span id='verse-ref'> Římanům 5:8 </span>
                  <span className='italic'> Bůh neupřednostňuje nikoho. </span>
                  <span id='verse-ref'> Římanům 2:11 </span>
                </p>
                <p className='mt-4'>
                  Pán Ježíš byl přítel hříšníků a celníků a proto Ho tehdejší
                  kněží odsuzovali.
                  <span className='italic'>
                    {' '}
                    Přišel Syn člověka, který jí a pije, a říkáte: Ajle, člověk
                    žráč a pijan vína, přítel celníků a hříšníků.{' '}
                  </span>
                  <span id='verse-ref'> Lukáš 7:34 </span>
                </p>
                <h3 className='text-white text-[27.5px] subtitle-pink'>
                  Máme povinnost se vzájemně milovat
                </h3>
                <p>
                  <span className='italic'>
                    {' '}
                    Nebo jedno přikázání obsahuje celý zákon v plnosti, ono:
                    Milovat budeš bližního svého jako sebe sama.{' '}
                  </span>
                  <span id='verse-ref'>Galatským 5:14 </span>
                  <span className='italic'>
                    {' '}
                    Kdo nemiluje, neznal Boha, protože Bůh je láska.{' '}
                  </span>
                  <span id='verse-ref'> První Janův 4:8 </span>
                  <span className='italic'>
                    {' '}
                    Neboť to je láska k Bohu, abychom zachovávali Jeho
                    přikázání; a Jeho přikázání nejsou obtížná.{' '}
                  </span>
                  <span id='verse-ref'> První Janův 5:3 </span>
                </p>
                <p className='mt-4'>
                  Osobně se znám s několika homosexuály a jsou to přátelští
                  lidé. Jsou talentovaní a slušní k druhým. Jsou empatičtí a
                  společenští.
                </p>
                <h3 className='text-white text-[27.5px] subtitle'>
                  Každý člověk zhřešil
                </h3>
                <p>
                  <span className='italic'>
                    {' '}
                    Všichni totiž zhřešili a nemají slávy Boží.{' '}
                  </span>
                  <span id='verse-ref'>Římanům 3:23 </span> Problém celého
                  lidstva
                  <span> (homosexuálů a heterosexuálů) </span>
                  je hřích a to jakýkoli. Ten totiž odděluje člověka od Boží
                  přítomnosti.
                </p>
                <p className='mt-4'>
                  Pokud usilovně pracuješ, chráníš přírodu, děláš dobročinnost,
                  ale nevěříš v Ježíše, jsi odsouzen, pokud zůstaneš v této
                  nevěře. Lidé se během potopy utopili ne proto, že by byli
                  všichni nepřizpůsobivá individua, ale proto, že neuvěřili
                  Noemovi a nevstoupili do korábu. Utopili se i přátelští, i
                  talentovaní, i slušní, i empatičtí, i společenští.
                </p>
                <h3 className='text-white text-[25px] subtitle-pink'>
                  Kdo věří, je ospravedlněn
                </h3>
                <p>
                  Ježíš ale zemřel za hříchy všech a ten kdo v Něho věří, je
                  ospravedlněn před Bohem.
                  <span className='italic'>
                    {' '}
                    Kdo věří v Něho, nebude souzen.{' '}
                  </span>
                  <span id='verse-ref'>Jan 3:18 </span>
                </p>
                <p className='mt-2'>
                  Víra však musí být úpřímná, ze srdce. A ta se projevuje tím,
                  že člověk poté, co uvěřil v Ježíše, má touhu a snahu opustit
                  hřích a jeho otroctví.
                  <span className='italic'>
                    {' '}
                    Kdo však neposlouchá Syna, neuvidí život, ale hněv Boží
                    zůstává na něm.{' '}
                  </span>
                  <span id='verse-ref'> Jan 3:36 </span>
                </p>
                <h3 className='text-white text-[27.5px] subtitle'>
                  Je jinakost hříchem?
                </h3>
                <p>
                  Boží Slovo se často dotýká problematiky nemanželského vztahu.
                  <span className='italic'>
                    {' '}
                    Varujte se smilstva! Každý (jiný) hřích, kterého se člověk
                    dopustí, je mimo tělo; ale kdo smilní, hřeší proti vlastnímu
                    tělu.{' '}
                  </span>
                  <span id='verse-ref'>První Korintským 6:18 </span>
                  <span className='italic'>
                    {' '}
                    Manželství všichni mějte v úctě a manželské lůžko
                    neposkvrněné, neboť smilníky a cizoložníky bude soudit Bůh.{' '}
                  </span>
                  <span id='verse-ref'> Židům 13:4 </span>
                </p>
                <p className='mt-4'>
                  Vyřešil by sňatek partnerů stejného pohlaví tento problém?
                  Boží Slovo na některých místech zmiňuje i homosexuální vztahy.
                  <span className='italic'>
                    {' '}
                    Proto je Bůh vydal bezostyšným náruživostem, vždyť jejich
                    ženy zaměnily přirozený styk s muži za protipřirozený, a
                    podobně i muži zanechali přirozený styk se ženou a rozpálili
                    se vášní mezi sebou: mužové s muži páchali hanebnost a za
                    své pobloudění sami na sobě nesli odplatu, jenž si
                    zasloužili. A protože nepokládali za hodné zachovat si
                    poznání Boha, vydal je Bůh převrácenému smýšlení, aby
                    páchali, co se nesluší: naplněni vší nepravostí smilstvem.{' '}
                  </span>
                  <span id='verse-ref'> Římanům 1:26-29</span>
                  <span className='italic'>
                    {' '}
                    Znali sice právní řád Boží, že ti, kdo páší takové věci,
                    zasluhují si smrt, a přece nejen sami je činí, ale i
                    schvalují, když je páší jiní.{' '}
                  </span>
                  <span id='verse-ref'> Římanům 1:32 </span>
                </p>
                <p className='mt-4'>
                  Jestli žiješ v nemanželském heterosexuálním vztahu nebo ve
                  vztahu se stejným pohlavím (rozhodující pohlaví je to
                  přirozené při narození člověka, ne to po operačním zákroku
                  změny pohlaví), Boží Slovo je dává na stejnou úroveň.
                  <span className='italic'>
                    {' '}
                    Nemylte se! Ani smilníci, ani modloslužebníci, ani
                    cizoložníci, ani muži souložící s muži, ani zloději, ani
                    lakomci, ani opilci, ani rouhači, ani vyděrači nebudou
                    dědici království Božího!{' '}
                  </span>
                  <span id='verse-ref'> První Korintským 6:9-10</span>
                </p>
                <h3 className='text-white text-[27.5px] subtitle-pink'>
                  Možná se necítíš být tím kým ses narodil
                </h3>
                <p className='mt-4'>
                  Jsme těmi, kým se cítíme nebo jsme těmi, kým jsme se narodili?
                  Cítíš se být prezidentem? Nejsi. Cítíš se být opicí? Nejsi.
                  Cítíš se být rostlinou? Nejsi. Cítíš se být opačným pohlavím?
                  Nejsi.
                </p>
                <p className='mt-4'>
                  City a myšlenky jsou často zavádějící, protože jsou
                  deformovány hříchem. Chvíli se ti to líbí, jindy jsi
                  nešťastný.
                </p>
                <p className='mt-4'>
                  Jsi tím, jak jsi stvořený.
                  <span className='italic'>
                    {' '}
                    Od počátku stvoření však stvořil je Bůh jako muže a ženu.
                    Proto opustí člověk otce i matku a bude se držet své
                    manželky, a budou dva jedno tělo; takže už nejsou dvě těla,
                    ale jedno. Co tedy Bůh spojil, člověk nerozlučuj!
                  </span>
                  <span id='verse-ref'> Marek 10:6-9 </span>
                </p>
                <p className='mt-4'>
                  Pokud ses narodil jako kluk, jsi muž. Pokud ses narodila jako
                  holka, jsi žena. Potom to byla vůle Stvořitele, abys byl/byla
                  tím, čím jsi od narození. A to proto, že s tebou má dobrý
                  úmysl. Tak proč jít proti vůli Nejvyššího?
                </p>
                <h3 className='text-white text-[27.5px] subtitle'>
                  Sám to nezvládneš
                </h3>
                <p>
                  Přijmeš-li Ježíše, začne v tobě boj dvou světů.
                  <span className='italic'>
                    {' '}
                    Neboť tělo žádá proti duchu a duch proti tělu; navzájem si
                    odporují, abyste nedělali, co by ste chtěli.{' '}
                  </span>
                  <span id='verse-ref'> List Galatským 5:17 </span>
                </p>

                <p className='mt-2'>
                  Čím více budeš posilovat svého ducha, tím bude slabší tělo a
                  to vypůsobí, že dosavadní žádostivost ke hříchu bude slábnout.
                  Nejde o tělo samotné, ale o toho zlýho, ​​který ho má v
                  područí.
                  <span className='italic'>
                    {' '}
                    Vždyť náš boj není proti krve a tělu, ale proti knížectvím a
                    mocnostem, proti pánům světa této temnosti, proti zlým
                    duchům v nebesích.{' '}
                  </span>
                  <span id='verse-ref'> List Efezským 6:12 </span> Tuto moc
                  temna
                  <span id='verse-ref'> (duchovní držbu v nesvobodě) </span>
                  ve tvém životě může svázat ten, koho Pánem je Ježíš, kdo nese
                  Jeho autoritu. Sám jsem tuto autoritu uplatňoval ve svém
                  životě – v různých oblastech.
                </p>

                <p className='mt-2'>
                  Člověk může být v nesvobodě v jakékoli oblasti života, jak je
                  také přílišná spotřeba, otrocké následování módních trendů,
                  zastřený zrak v nevěře v Boha, trvající závist, pýcha života,
                  nezdravá ustaranost, závislost na počítačových hrách,
                  zahlcenost romantickými telenovelami.{' '}
                </p>
                <h3 className='text-white text-[27.5px] subtitle-pink'>
                  Rozhodni se správně!
                </h3>
                <p>
                  Tvá duše je vzácná, nezůstávej v satanově svodu. Nezavírej
                  před tím oči. Tím, že se budeš snažit v to nevěřit, nezpůsobíš
                  jeho zánik. Také Neo v Matrixu stál před volbou. Modrá nebo
                  červená? Milosrdná iluze nebo tvrdá realita?
                </p>
                <p className='mt-4'>
                  Přeji ti, abys získal pravou svobodu, která je jen v Ježíši
                  Kristu, protože On je Život a jen On je Cesta k němu.
                  <span className='italic'>
                    {' '}
                    Já jsem cesta i pravda i život.{' '}
                  </span>
                  <span id='verse-ref'> Jan 14:6 </span>
                  Potom tě zaplaví skutečný klid, který podvědomě stále hledáš.
                </p>
              </div>
              <Footer />
            </div>
          </>
        )}
      </div>
      <CookieConsent
        location='bottom'
        style={{
          background: '#6e587a',
          color: '#f1bf41',
          fontSize: '18px',
          textAlign: 'justify',
        }}
        buttonStyle={{
          background: '#39bb2f',
          color: '#fff',
          fontSize: '20px',
          padding: '2.5px 5px',
        }}
        buttonText={
          (language === 'slovak' && 'Pokračovať') ||
          (language === 'english' && 'Continue') ||
          (language == 'czech' && 'Pokračovat')
        }
        expires={365}
        onAccept={() => {
          setCookieAccept(true)
          increaseVisitorsCount()
        }}
      >
        {(language === 'slovak' && 'Táto stránka nezhromažďuje žiadne údaje') ||
          (language === 'english' &&
            'This site does not collect any information') ||
          (language === 'czech' && 'Tato stránka neshromažďuje žádné údaje')}
      </CookieConsent>
    </>
  )
}

export default Home
