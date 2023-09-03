import { useState } from "react";
import "./Pages.css";
import {
  BiMessageRoundedDetail,
  BiSolidChevronLeft,
  BiSolidChevronRight,
} from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { CardImage } from "./card/index";
import Carousel from "./slider";
import Dropdown from "react-dropdown";
import Images from "../assest/Vector (1).png";
import "react-dropdown/style.css";

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

const carusel = [
  {
    id: 0,
    title: "Historical Tour",
    texte:
      "You can also explore Istanbul's diverse neighborhoods, each with its own character and charm, from the bohemian Beyoglu to the historic Sultanahmet.",
    text: "A tour of Istanbul can take you through the city's magnificent landmarks, such as the Blue Mosque, and the Topkapi Palace, which provide a glimpse into Istanbul's grandeur and history.",
    img: "https://s3-alpha-sig.figma.com/img/35b9/cc11/10f4a68b03f839b71fceeac199ea30ea?Expires=1693785600&Signature=oa8Nx6CNnUc9bxJR8R6CcT3H1TKF4wHP5ovbc4CKUwjgCHLLIgxV7Iddjj-~xX3iDps3PuYxI9BsvuTXvzGqiuyWxvEx6IpYIdmqcVxaciZ5wL3KfqmK-iuOcdADgA7QTSzgYelW4lbOZuVXet7tVQuSJ1x8pqtXNL-wDrt8PGAYfF9pYLx4XMgAvkLDo4a936--qxfbleH1CyLv5mU2FlZy5V7o5lOnk0LfbfNP~05VLY8t5EjY6IJ8wm2ecTproJvScNqh3oyD9eYW3~8MdYcvTvGDnUZAKPtvXOj0hidVIWKHpK4fYHYhdDZMyB5NnVfukfclW0NXkdTC4P4zVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 1,
    title: "Historical Tour Two",
    texte:
      "You can also explore Istanbul's diverse neighborhoods, each with its own character and charm, from the bohemian Beyoglu to the historic Sultanahmet.",
    text: "A tour of Istanbul can take you through the city's magnificent landmarks, such as the Blue Mosque, and the Topkapi Palace, which provide a glimpse into Istanbul's grandeur and history.",
    img: "https://s3-alpha-sig.figma.com/img/993b/8799/bee8653ba6b7edf4c24b984294fa5158?Expires=1694390400&Signature=WLh2Vt6JCqwIeuDXoH7~Bjlw~Bd5cxkipg0IddLj2bJSVBa6ty~gStbEYyfoJRYG4bBbVLwc0BKPfJXM0FKqT9IzzCBGbubCMoat9-02kxoV06oFyGW2bP~EWS5sY3n9GjSt-xcpuIKPoqdsX5rj1jhSL376qtdxvhHFhJEAjLZrjYncALDvUfmnFeLhAokHEUGL-xtohVYC4ocI-9XZr43n-uqM~HqQB1qOpa3g8cMQOilUlx~vFnJ-MgLbzDoyeFxYy-GS8CTLmXrinXwRHEpTbOVazFMcuCcMTxXq-IAPnpsIhrxwl~Jegkqb2lQlKImMnAP7ZBfzp2f4AMzsiw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 2,
    title: "Historical Tour three",
    texte:
      "You can also explore Istanbul's diverse neighborhoods, each with its own character and charm, from the bohemian Beyoglu to the historic Sultanahmet.",
    text: "A tour of Istanbul can take you through the city's magnificent landmarks, such as the Blue Mosque, and the Topkapi Palace, which provide a glimpse into Istanbul's grandeur and history.",
    img: "https://s3-alpha-sig.figma.com/img/30be/19c9/559cc970072b4aeab98611addeeaa09f?Expires=1694390400&Signature=YClcug74JIjvph6ggvYBOniNKeB~wyZ5ROfBxnpalAj8igRrkAGxFg-XLDYZVxhoUqdv3HwAgUmIukeu6jg8MC57APRERJZoJRVAhR3v1OZXzS0GIdY4L0DXHwX7IU2gafZrFm12xNvdqPIL~-i1HXvp3hu90Aw84RSIyjD-r2m5GCd4pjPXEQxc76b-TmWf3EWm1JvtSUa~CfzycR07guk~Uv9tf1aWVSCswTGnlulrRBWRvqh7jEqSMRw1sA~WYOzwtqItOYtn3V-vRiLvT2WznVo1kyQ0UcX1G01Q4aAvJmMQ2rFe0RY~BY-G4BGqgHvwMQhs8nj5NGP-LugMIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 3,
    title: "Historical Tour four",
    texte:
      "You can also explore Istanbul's diverse neighborhoods, each with its own character and charm, from the bohemian Beyoglu to the historic Sultanahmet.",
    text: "A tour of Istanbul can take you through the city's magnificent landmarks, such as the Blue Mosque, and the Topkapi Palace, which provide a glimpse into Istanbul's grandeur and history.",
    img: "https://s3-alpha-sig.figma.com/img/a2bf/b71c/5d0f941ccea5a0298914122b461db606?Expires=1694390400&Signature=N3WRl6wJwLLywb2Fh9r4PEEs7abmX4Vj6uatCZVS~OyNqj~sd0H-o-mv9K2YBxC92-eUnKrpo-Re8X--C4YRia~MjLPG93nDOdNE5t1zaQtAWUXgkGULQ2o4wh~PHSoe~IXSjAwMz4OHQIOJMO7VBu34KKV417Ia98eonCQ7S4UE7veCsYnSaihcIeVG5pEasHgfU9KWrxHQvZDXORS-T7ICB~v~5H5JlvE9ksVBzRzYrPG7TiG4IM7KQA-~jIENj4mJ7myhz2-x5tDqgXMX~JBXeybT8Kd2j5KDQbRovQQk5z-loPIHc9eyjWbNJ64TBt50~FX9dEOo3kJJuDIGGw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];
const itemgallery = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/18ba/5d8e/8e94f1afc137dcf7438d7baf9361f9b4?Expires=1693785600&Signature=U~0bETXYExcEiheYuFmy3OF1bDygJQZ~Odoitcvthk3CQdRc998dlZ~zPPShkezZrryErbfQx5OdncZ7rb-PU-CScdRF-hffPhA~Qyu18YVnOePZi9VOop1wdIQtF1HUjrEg8UFydlpxK17YdWDnhRoe0NsFl1nauxu30ENSOkAhETiYsOKq~YvjrR10w34FOyzFUfzY1tmcVYWpOnSTm8gsIQmPnObTGPgOdBPHmA9GKaOx8UJxgp2E0ace~txSOh2csG~-4Hecmfsl5QbPj0Ng-ximMcPgRnVxmjjL9UWyikXQVj~vEh2ucKAblADbW7rbF1ybRGg3YWMR1RQ0Cg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/17a4/3c9b/23f34308aed0f820acbb9d17160ee955?Expires=1693785600&Signature=D-ZOkrbKJugXwwXPwTuikNo4MVueDc8RaSoINN4cDSOXAsbiirGgy2XTzW7p-6jr877iYk4khcGyBeuQoIaAwUGkK7RmWxWB3kzyKY-VfuoeTzF2rsARhvFrHy7jY8euSUk6U7KavXxqTIRPFZHoolmN~JnvgWHpD0~fM1OO8Igve7aDHRiILn7qde9ql38Ou9Xr00cYUC~S7FUapfdPfRfu~UchNmOF4jJRLm8k~AWf5A2Rwk2kRkALaIODBN-ABbzcPec2xR6Aj8j3EOt0BnH02oPJEvG2-9oL~QmzMyWW6a3oUV2z4oUEvYIyTiqeo8~l1hviQmDQcnpEJLkvOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/de86/90ee/088d9e41da499debb5435058a080ef02?Expires=1693785600&Signature=TjCr6k2gxifVqPVIq80aAkZJw7alTjDtKxxm6BQ6gX4kfVAcB1F-1YuAPk0y2RVUqm4~Xmxw~yOL0Nw-jx~JaiKmalxr9X6JUc~S3t-gObkvFCMxD6sH0i~ma7b~8EcD8njdDkg2zEqt0A7CtKflPfcdbYjbA2R-LLvXjbQ1PqR5ODBU6FPjXVlLDHTE7xm7T-gLDzD-c-usKoOs8fBokUko53dWMbUZljbDMerUO2arOs7h7rZkA5khZrpZ7qvHXhrTmxyGKUTPcrzIwSAIvc7m~Ex~eEDgULsbN-8ayYWdgflrQLsp97IjnKaryZyv4Lv6-m7M4YTahgU7kn3wHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/e65b/f0b4/30800ffc0154ec4f0d4ce90fcffdbbe8?Expires=1693785600&Signature=AyagrAB2rj9f1S9pRKszjAtkDEWcUEwNcoDFJ0~E9PKj6qxxBbEW63vKEt2hzTWBAxHuGj0LcO2NI5pqxH-0xKazwbZdlxCYe6FiWMtikuG23MinjoQLxQMhfCwTn9~MKbAnZ9xeVGqEWRkBa4dGNcQ4mKvpba-~96CRX1-9A1IgwCEobNLMRp7LXXzKYQQXcapfIg4wayyAJXNUCe9IopS4nTzcRGMsnV-m0ofZH1viWvVbcwajtxq-DsfVYK1uFSOGN5zcu0poTBdPCMy7aaZeGc2Xdbvl0yXE64rMWVl7nmnNgeUq48qIlhqAkxGkfXeByKwPXgqEi2hht8bVwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/74cf/c25a/5f9b0508aaab460af288ec4815ee9992?Expires=1693785600&Signature=cU-XOlyFIO5skimBzeb2YBvMAjjF7qT1FZ-TNK4J0T-KsnzHoHRUcmompNFGcQWvagtDGbByQSheS21FLWA3Bm2vk3ZRj08UALk3Xi6yLWi8SQwTH9qSgTRexy0WYQjX7YwFUxxxvjPw8lWkts97P2cyuCInmY7t9~Qc6nRR0oy8yD1oHTi0G6jY3BDOdyVjJN4x6Y-MgsxADoo8pC6u6rMiTwtX6KJXptT0AqgslUCrmWkc4Ac~W-tnmHRoua4kdOyhzk12hBAm9Z88sOYTViVupyH9plaifL4kDLYXthHGTU0trBZN3B-0W0THakpWxX110Lul-I32Ja0pDU4GRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/18f6/ab1f/99d2ab667baa4773098106fa6ba2a43a?Expires=1693785600&Signature=GJ6aFw892lQZzFHIEvp3Bs0mwZc2tX0O6Mq0xIWfGgvBTXUs~wD~G~WmnfMOYqqZS1EVuuU4mwHVIvHVkEfb~vICvaFjvE075pE4eZdHlKCPTTOJABtjIw4p9mMVXSeb4Gy8odcS0lyMGBrA4YraNtcIHSgdwz0ceNm6bAlf5Osa9Yqbk6xtz~xPLIyR9fTWhz7hlRLnkBL5IsCvrZkSeeWD81zdx1rhOt~CTnTTnTFKTXfYan0YUZsAGjkiIwitX4hQarAtIHXdNRc95M3~ZZaw1nKZkd7fcqQO0~tfa4rVGbUPExfrv4iZaxgbQ1Qpbdea7RPewvdv17lo0sJqOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/8c83/8768/20555c450766b2fa793a0eae0808b7a5?Expires=1693785600&Signature=aK-SE-aSpRvAS55IBJ9EK1HH9UcGsCjf4WVmYfa0acOshs~CkL2PwMSl38uZw0BxBuHy4rThadn1vh1JLRuArdhN80ytVmQ~hD2~p6KR-imvSR4kDdJk1IwnIkRUhsJ7iU3RuNioXbWrGHq8rqitHAKqmcTfEZqrU4b2CI6UgiEL1BROFIuZ6i6xv9TZIulQH8qQCck47mRmQ1ekhO6ATDn7g4MnBfZy-SbRogDkDmwUHTqBCLq54QAFczPyZuo8dbdGDLwHVIGGzGtPdgvSVeQCFloWTrDEklNwqZCLEfqlLmos7HcQxRwqQprwXu0jfJCh9aWs0DN1v1MRC6UXDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/b5cc/5f04/0e4e7122249052028c0bd1084fac0d8e?Expires=1693785600&Signature=FebfZrDFN2g45eTXorh-tLVqaPP3jwAHtYsAE2fQ1ZaaKWve1kPYTMnEKe~uczIkLoJ0SyC-1Bo1EiwGSZ86Zsm8PjYFaEUc6B4MhyZYgQBPXejeC1lh2s5CzCacCiZBXrS55vUMn--sFqw8Dk5K8sFGp0KIxqh3z29sOCsqMQVZl4O-aIjngCu8BdfJ4fjv10NqcuGKqdvG8tFn7EfzvOIVVgHm7wbuf6l7ECzvVIChNsTcz5sOeZ-7kEBSQWHnvTM32VaW288tzU~W0zX-cL8cCpUgbNLTKg7WcrkbG6aE0~OApuZjchsoFlIojE5SnvKg3-CAroQ~hzbjaNMOaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];
const boxitems = [
  {
    title: "Galata Bridge",
    img: "https://s3-alpha-sig.figma.com/img/f8ca/799b/5206cb74f338c0fe1cee8a77a57a6c9f?Expires=1693785600&Signature=pdWLBvxN2VNJdbs~inLAfxk9DVa3W7ZqzGN0Bt4TNPi1Zb8tHMNfRDEpHv6Lk2St90tkKGQIuCVX123oIUodOsV5KcmuYl4U2qziXoP7A7rvUDjthYub5uVm3BRJjC9T3Hji9ud5nHA1bxJFZX697ZKTYwm~UYKuEXiU2Ra-xKkNam90A23oJzjxDadCf-KtmD-5LEbEnEf1GBek9WYkuSN5j6~NZFw6bYdT20epb01vHBHhP0Pgs39nQo8MpkUWPwonPsbjBv00tNFs~dvYIFiVHhvSIAHj0yRhGQIX3vkwZ6OGhawDBCZz83l-v0v1h~rV4zx-SMPZ0Qxi~KUxqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    title: "Basilica Cistern",
    img: "https://s3-alpha-sig.figma.com/img/53ab/ea6e/4da82de1ad6da7aab69506eeb51fc6f4?Expires=1693785600&Signature=FiBWutKlsRNFVT3HUQORVSc2ALf9aStVwkUgHMK49mhDJPXa1z4RgZrgazGuvMgM7J~8viiWpkacYQtK-QdCSRWdRjidC0IpSv5F6y4iDOAys~jWlZg~ub772a4s4q4zPHr6jNvv3HKUVQRfHhnTjsTP-2HWzV0Q05YDyj3uHCOmMRplKiu8xadN7SzBvmLQ195iT-CoBjcfCRYI3YDvv9X0RL5PiTe2YMF1LtoOpOKcLrLd6scZAOvt~z0rVldQanQSif7BHDEokmDaXH5uQ5sf9HZoG3EIhqMx1DcNFCTNDwkERBRz5LOeVCSPpJWA-XkJsYg8OmnQ96RvFQsezA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    title: "Süleymaniye Mosque",
    img: "https://s3-alpha-sig.figma.com/img/4b33/97df/420c889ecfb9d4f785a24833d7372ddd?Expires=1693785600&Signature=WBQBotC2526-if-l~mwfTJ9LV2JfcoFuqsNzqcMAFZRGK8SkMWzq5io-m5~NOkP9BjhTmgk2-IZJ4KsqTYtiv2k4eiOVro3S51nMuinioUs4i~EVD3j88fxeiDbQRLSWL2aqeS21qDT5NUN36Dgt0ggywpPfeD1BDjhDEjOli79zOcnVj23TWIotA2M4QndgFVkYu7VxC2~h9ct1igMzEErFnGoYmBbO74B5TUYHHFD0gn6E4DyIX58YdBHfaOv1YwwpISxBgCAMLcRrWXtjpJVg0FORMy45z1N7ixU81zSAWLjReDFUZowkHoB3ySqdya~nSaIjwwcyl1lGEB-HYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    title: "Emirgan Park",
    img: "https://s3-alpha-sig.figma.com/img/2ff4/7acb/59a0204b29269311b0df143aae5fa287?Expires=1693785600&Signature=cyMg8RVSYX5DsHYaf7kRrTYQL12z-RV92aE40uMPlZtSQ7sBCEpz2KeeZnZMAIyDQFMpWgZ3YHtRJuqc~uc5WHSWAk4bkmmUlhcNTrJ7q6JVBio4xvx4sT-uYp92VkKwZpH~qlaeAOfb3AlaQwirSPavmacHq718EWTCBOWlYwMxeptmSige-lWAY8YijeL167Or1VhpIOcl~iQCNU8Ear7ynItZ~TmM-Bo5ccM~IcRXcGBq4V9KFRkYlF99nAwEx5GDkcfSXQjJ1b4GIcd62Rc2hlHpOACQxv4HCDWMULZX24fSnWP9O2rB8pWglJIjXEXx~EncV7kAs2-YRnaFNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    title: "Bosphorus",
    img: "https://s3-alpha-sig.figma.com/img/0bc0/8d3e/b21eb7f87b59cc29bb335d67273e36a7?Expires=1693785600&Signature=Fz9rj35-G1eMVdcA81NIHrQeuBavBKUazngMKavE0QwUoCIWh-BLVSU9HfzHWIVSmxHFKzc4IGzsv4trFU6H5X~sDP7c2P3jPxXmy3UxRFrJ1x5khi-oJ30lGCXQe2mMMAtIk8oEHLguoGdGY66U6Ruk5w1-Krvb82QGdoFwir8vXt-wvPK3w6KV8pQEELZvs7TEjX~N53mGOYtgr3KMPnyvtmDorcIkPFehbcj3gKQiICKeh3Kp45cl~Ti9K5WIEtqrAROmtRCbmME1wzu4J6u2ykoiHELADJNraKwcCJiWk7B13QE4dJZ-XwVBd5BQWwVfI0k0S980h4~NIPMf8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    title: "Miniaturk",
    img: "https://s3-alpha-sig.figma.com/img/6539/57ff/3f208ae57c4d6cba092cfb4c36b5f930?Expires=1693785600&Signature=SXiYQLfJw7oX8loiTj4ocxrN1Vnt61N4z~Rk34k0~pKqobeJbXaiTkx3-~MaB8KyZU9yQYdxZlkac5vjbk2epVusJoZzw-4FAenFRqk~WgufX3iGi6ZehfJQJC6CLaRXuIi~QkOcptUBo-62J8LFLgUVdpTH8cAQC557VAABfO7nbhb2wCkh8K8mRNxDz3qfq29E0LXXJpck8J4DLlwZfDV9ZGA4AMVihS4NRsSBJRPmD0KwRWNuCQqP8U2QGyLm7wKJRijtAB8~S2~fQhsep-P3rLIF9Bi~ZOZ5MxfnHeBgV4c-6I4j0wjYWJeOYSNqkFwTc-A82y-ZpUWqoAbEZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];
const secret = [
  {
    text: "Step off the beaten path and immerse yourself in the enchanting secrets of this ancient city.",
    title: "Hidden Istanbul Gems",
    comment: 6,
    imgase:
      "https://s3-alpha-sig.figma.com/img/a2bf/b71c/5d0f941ccea5a0298914122b461db606?Expires=1694390400&Signature=N3WRl6wJwLLywb2Fh9r4PEEs7abmX4Vj6uatCZVS~OyNqj~sd0H-o-mv9K2YBxC92-eUnKrpo-Re8X--C4YRia~MjLPG93nDOdNE5t1zaQtAWUXgkGULQ2o4wh~PHSoe~IXSjAwMz4OHQIOJMO7VBu34KKV417Ia98eonCQ7S4UE7veCsYnSaihcIeVG5pEasHgfU9KWrxHQvZDXORS-T7ICB~v~5H5JlvE9ksVBzRzYrPG7TiG4IM7KQA-~jIENj4mJ7myhz2-x5tDqgXMX~JBXeybT8Kd2j5KDQbRovQQk5z-loPIHc9eyjWbNJ64TBt50~FX9dEOo3kJJuDIGGw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    text: "Istanbul, a city of vibrant neighborhoods, each with its unique charm.",
    title: "Vibrant Neighborhoods",
    comment: 12,
    imgase:
      "https://s3-alpha-sig.figma.com/img/993b/8799/bee8653ba6b7edf4c24b984294fa5158?Expires=1694390400&Signature=WLh2Vt6JCqwIeuDXoH7~Bjlw~Bd5cxkipg0IddLj2bJSVBa6ty~gStbEYyfoJRYG4bBbVLwc0BKPfJXM0FKqT9IzzCBGbubCMoat9-02kxoV06oFyGW2bP~EWS5sY3n9GjSt-xcpuIKPoqdsX5rj1jhSL376qtdxvhHFhJEAjLZrjYncALDvUfmnFeLhAokHEUGL-xtohVYC4ocI-9XZr43n-uqM~HqQB1qOpa3g8cMQOilUlx~vFnJ-MgLbzDoyeFxYy-GS8CTLmXrinXwRHEpTbOVazFMcuCcMTxXq-IAPnpsIhrxwl~Jegkqb2lQlKImMnAP7ZBfzp2f4AMzsiw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    text: "Turkish hospitality is a timeless tradition deeply rooted in the culture.",
    title: "Turkish Hospitality",
    comment: 15,
    imgase:
      "https://s3-alpha-sig.figma.com/img/30be/19c9/559cc970072b4aeab98611addeeaa09f?Expires=1694390400&Signature=YClcug74JIjvph6ggvYBOniNKeB~wyZ5ROfBxnpalAj8igRrkAGxFg-XLDYZVxhoUqdv3HwAgUmIukeu6jg8MC57APRERJZoJRVAhR3v1OZXzS0GIdY4L0DXHwX7IU2gafZrFm12xNvdqPIL~-i1HXvp3hu90Aw84RSIyjD-r2m5GCd4pjPXEQxc76b-TmWf3EWm1JvtSUa~CfzycR07guk~Uv9tf1aWVSCswTGnlulrRBWRvqh7jEqSMRw1sA~WYOzwtqItOYtn3V-vRiLvT2WznVo1kyQ0UcX1G01Q4aAvJmMQ2rFe0RY~BY-G4BGqgHvwMQhs8nj5NGP-LugMIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];
const embark = [
  {
    title: "Embark on an Unforgettable Journey: Book Your Istanbul Tour Today!",
    image:
      "https://s3-alpha-sig.figma.com/img/9b85/1464/de9f42510da84bf5757fe6947ee49203?Expires=1694390400&Signature=RDYftIfmXRVFgpayjlhbyM27B2twuU5aHT-WQX9vRPutJzRxW18jwIwBu1EWwQI9ep4WSdS2bguuGl677Rav~uEgv5ww91~kzfndNiZa3XPy3Ytbg37ivrnNWrC4Q5u13yHP1ekBxHvarrz8CdCPmdsGNg5mBYlQpd4AsjVc~GLThcuwsldQpPZeP3p3RE5cWs6rf87qQwJbX~7o0AHRY4rssLq-Wl8LqXJMNSCy7UjaBIYGL5W6lt7UkdqWG4T~vS2Cv6S5M60IayJ1w2~8XjvnxQcCOSIZk4Y1UZH3GvBpNtQ9x~Bd6Mpp3aP1~uuvYxR7OUcNdxguncR9lylU-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

const options = ["one", "two", "three"];

function Pages() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [tour, setTour] = useState("");

  const [page, setPage] = useState("");

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= carusel.length) {
      newIndex = carusel.length - 1;
    }

    setActiveIndex(newIndex);
  };

  const handleSend = () => {
    setPage({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      tour: tour,
    });
  };
  console.log(page);

  return (
    <div className="content-container">
      <img className="position" src={Images} alt="img" />
      <div className="contant">
        <nav className="navbar">
          <div className="container">
            <div className="logo">Istanjourney</div>
            <div className="menu-icon" onClick={handleShowNavbar}>
              <Hamburger />
            </div>
            <div className={`nav-elements  ${showNavbar && "active"}`}>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/blogs">Blogs</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <button className="btn">Book a Tour</button>
          </div>
        </nav>
        <div className="first-section">
          <div className="text">
            <p className="text-in">Discover Istanbul's Hidden Gems</p>
            <p className="title-in">
              Its vibrant culture, delicious cuisine, and welcoming people make
              it a must-visit destination for any traveler seeking adventure,
              beauty, and inspiration.
            </p>
            <button className="read-more">Read More</button>
          </div>
          <div className="rectangle">
            <img
              width={"100%"}
              height={"100%"}
              src="https://s3-alpha-sig.figma.com/img/d872/4eb8/ed6bd3f63d8f6f3fe66ada8a33f090b9?Expires=1693785600&Signature=WGsJn0sKNOlU7RnzTfxt5SBuhXyMCqjeLYrZlaTfIuFphQA9kbHYgpfSYLilVl1NUQnXnDWSqo~EZX5VR2fKAp56vmd4Gc0PP4ojoKTO4fLvmqPzWQ~PMo6kWtujgGjS7ygd4D89x4cXziyjz899icXktYhp~oFNuNyovbtB1fFUu447kXINRKLEBZZdahBMEcmwLQC-UGCy-mWmx5oo8A0kdpXxovpy1l8z1XoqY2poLJDtcsaWcLXr6nHFLwbmG0UkMRppZnqvpWWE-SjO-ZA52h0KWA96SvJxKKMckgt86URh0vhxrDnH0M8bNLogf6L1nG~UGOdDmP-vG-kUVA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="dil"
            />
          </div>
          <button className="read-more-none">Read More</button>
        </div>
        <div className="second-section">
          <div className="about-us">
            <a href="#">About us</a>
            <h1 className="about-title">
              One of the most popular travel agencies in 2023
            </h1>
          </div>
          <div className="tourets">
            <div className="img">
              <img
                width={"100%"}
                height={"100%"}
                src="https://s3-alpha-sig.figma.com/img/a0cb/a069/cbb91ef4d215bbd5154740d324687cc4?Expires=1693785600&Signature=TtinTbg0FfDbLFZJnxCEN~JWx40bSnvZrC1uSNPVTuK8MlT74no70R3XYYGFxLyRUoyCJYURsEqKNNMB4CaFznxrMcr6~5Uiq~DrprR7AoxVm-kxzwpTyceQDdPlq78ybuRDLmTjELuIkj4wL3FEa7M4hw8U5KCgtnv0P3Dke2ZtbbE11m5ZgtU3J7tnR-U8-LA~B8CVWfu1jXX~Tducx4NHzRXP6bP9NwXkep7pl2D-9nrGC7VwUSZnGIWr-VuXYX3qp6~nxCQ7COWEjVmGmSMpLbpaf9JUEYoAyYDDcAPurHi8J0OHSsOgt145YNncPpgN3IyyJRv7WjIVK-2hDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="tours"
              />
            </div>
            <div className="our-advantages">
              <div className="namber-tourest">
                <span>10000+</span>
                <br />
                <p>tourists have already got to know Istanbul with us </p>
              </div>
              <div className="years-agency">
                <span>10</span>
                <br />
                <p>years of experience in conducting tours in Istanbul</p>
              </div>
              <div className="rating-tourists">
                <span>99%</span>
                <br />
                <p>of tourists gave excellent rating our agency </p>
              </div>
              <div className="languages">
                <span>15+</span>
                <br />
                <p>languages in which excursions are conducted</p>
              </div>
            </div>
          </div>
        </div>
        <div className="third-section">
          <div className="third-title">
            <h1>The most popular tours for everyone</h1>
            <p>
              We are dedicated to curating exceptional travel experiences that
              allow you to discover the true essence of this captivating city.
              With our carefully crafted selection of popular tours, you can
              immerse yourself in the vibrant culture, explore historical
              marvels, and create unforgettable memories.
            </p>
          </div>
          <div className="slider-contant">
            <button
              className="button-arrow"
              onClick={() => {
                updateIndex(activeIndex - 1);
              }}
            >
              <BiSolidChevronLeft className="chevron" />
            </button>
            <div className="carousel">
              <div
                className="inner"
                style={{ transform: `translate(-${activeIndex * 100}%)` }}
              >
                {carusel.map((data, index) => (
                  <Carousel data={data} key={index} />
                ))}
              </div>
            </div>
            <button
              className="button-arrow"
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
            >
              <BiSolidChevronRight className="chevron" />
            </button>
          </div>
        </div>
        <div className="fourth-section">
          <div className="title">
            <h1>A Captivating Photo Gallery</h1>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="contaner-gallery">
          {itemgallery.map((item, index) => (
            <div
              key={index}
              className={`div${index + 1} imgCon`}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="contentdonw">
        <div className="fifth-section">
          <div className="fifth-title">
            <h1 className="must-visit">Must-Visit Places in Istanbul</h1>
            <p className="istanbul">
              Istanbul, a mesmerizing blend of East and West, is a city that
              beckons with its rich history, vibrant culture, and stunning
              architecture. As you wander through its bustling streets, there
              are certain places that simply cannot be missed.
            </p>
          </div>
          <div className="must-visit-boxs">
            {boxitems.map((item, index) => (
              <CardImage item={item} index={index} key={index} />
            ))}
          </div>
        </div>
        <div className="sixth-section">
          <div className="sixth-title">
            <h1 className="lets-read">Let’s read our fascinating blog </h1>
            <button className="sixth-btn">Read More</button>
          </div>
          <div className="sixth-section-box">
            {secret.map((batas, id) => (
              <div className="card" key={id}>
                <div className="sixth-section-image">
                  <img src={batas.imgase} alt="img" />
                </div>
                <div className="container-box">
                  <h2 className="hidden-title">{batas.title}</h2>
                  <p className="hidden-text">{batas.text}</p>
                  <div className="comments">
                    <p className="comments-like">
                      <BiMessageRoundedDetail className="comments-icon" />{" "}
                      {batas.comment} <span>comments</span>
                    </p>
                    <a className="commet-btn" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="sixth-btn-child">Read More</button>
        </div>
        <div className="seventh-section">
          {embark?.map((e, id) => {
            return (
              <>
                <div className="seventh-image" key={id}>
                  <div
                    className="images-content"
                    style={{
                      backgroundImage: `url(${e.image})`,
                      width: "100%",
                      height: "100%",
                      backgroundSize: "cover",
                    }}
                  />
                </div>
                <div className="seventh-form">
                  <div className="seventh-form-title">
                    <h1>{e.title}</h1>
                  </div>
                  <div className="seventh-form-form">
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="name"
                    />
                    <br />
                    <br />
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <br />
                    <br />
                    <input
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      type="tel"
                      name="phone"
                      placeholder="Mobile Phone"
                    />
                  </div>
                  <br />
                  <div className="seventh-btn">
                    <Dropdown
                      placeholder="Tour"
                      controlClassName="myControlClassName"
                      arrowClassName="myArrowClassName"
                      value={tour}
                      onChange={(e) => setTour(e)}
                      options={options}
                    />
                    <button onClick={handleSend} className="seventh-form-btn">
                      Send
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="eight-section">
        <div className="footer">
          <div>
            <p className="istanjo">Istanjourney</p>
            <h4 className="footer-title">
              Would you like a free consultation? Perhaps your existing
            </h4>
            <span>
              Call us today at{" "}
              <span className="footer-num">1-233-456-4789</span>
            </span>
          </div>
          <div>
            <p>Quick Links</p>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Tours</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </div>
          <div>
            <p>Resource</p>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Development</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Term and Condition</a>
            </li>
            <li>
              <a href="#">Safety and Security</a>
            </li>
          </div>
          <div>
            <p>Categories</p>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Development</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Term and Condition</a>
            </li>
            <li>
              <a href="#">Safety and Security</a>
            </li>
          </div>
        </div>
        <div className="footer-bottom">
          <h3>2023 ©ISTANJOURNEY. All Rights Reserved.</h3>
        </div>
      </div>
    </div>
  );
}
export default Pages;
