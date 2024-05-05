import { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";

const UseEffectPage = () => {
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   console.log("useEffect", counter);
  // }, [counter]);

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setCounter(counter + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [counter]);

  useEffect(() => {
    let handleScroll = () => {
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal,
      })
      .then((res) => {
        console.log(res);
      });
    return () => {
      controller?.abort();
    };
  }, []);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);

  console.log("Render");
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quasi
        expedita laudantium, aliquid perferendis quo, praesentium, similique
        eius reprehenderit sed doloremque! Necessitatibus nihil sit, suscipit
        recusandae deserunt odit eaque, a possimus molestias, nesciunt amet
        aperiam voluptas. Amet nulla adipisci, debitis aliquid qui tempora?
        Magni fuga nemo impedit odit rem cupiditate nostrum maiores fugiat.
        Dolore nesciunt molestiae beatae assumenda exercitationem deserunt
        impedit et rerum, soluta dignissimos officiis magnam laborum repellendus
        quis laboriosam eveniet? A tempore sed tenetur eos culpa doloremque
        cumque consectetur, quisquam aliquam quae possimus nesciunt fugit rerum
        doloribus voluptate ullam accusantium repudiandae, sequi officia
        molestiae autem, earum odio aut. Nisi molestias maiores animi unde
        impedit, rem voluptatibus delectus quae, ducimus autem eveniet libero
        quisquam sunt sint nihil suscipit. Delectus incidunt reiciendis voluptas
        vel odit, minima velit amet optio unde, porro magnam. Aspernatur nulla
        architecto dicta magni eveniet libero? Totam minima iste eveniet,
        accusamus saepe suscipit cum numquam quasi, porro cupiditate quod
        tempore pariatur maiores ex recusandae esse architecto dolorem
        dignissimos ipsam, quos itaque quia similique reiciendis! Ipsa fugiat
        debitis, distinctio cum sunt soluta harum ut vero eveniet non dolorum
        cupiditate temporibus eaque animi reprehenderit dicta id. Vitae vero
        facilis amet, sint ex magni nobis qui sed repudiandae mollitia officia
        quia suscipit fuga eum corporis ut sit velit. Quibusdam officiis
        recusandae voluptatem dolores quae delectus itaque sed quam id nostrum
        at accusamus modi veritatis impedit, ab sapiente aperiam animi corrupti
        et doloribus tenetur ad nobis quo. Placeat non quas odio quisquam
        tempora expedita, exercitationem excepturi ratione cupiditate? Rerum
        veniam aut, vero labore perferendis laborum, quae sequi reiciendis
        necessitatibus odit adipisci ea nostrum harum nisi totam fugit,
        voluptate in. Maiores voluptates provident nemo laboriosam, aspernatur
        dolore ullam ipsam deleniti neque consequatur dolor sunt vero porro
        itaque, reiciendis sequi magnam, ex fugiat. Veritatis reiciendis nam
        natus vitae alias facilis provident accusamus, veniam maxime voluptatum
        quasi, asperiores tempora qui quod distinctio recusandae perspiciatis
        voluptate laudantium, quos nesciunt neque consectetur modi? Vel sint
        tempora culpa, iste explicabo labore amet libero quae ducimus eius
        aperiam, sit officiis hic nihil ab, non ipsam dolorem. Maxime laudantium
        et accusamus magni incidunt porro eligendi sit, dicta ipsa voluptatem
        illo cum sint doloremque illum rerum libero asperiores consequatur.
        Adipisci quam eos id eligendi accusantium nobis voluptatibus culpa esse
        consequatur alias inventore, soluta dolor qui sunt sequi dolorum,
        officiis officia mollitia labore architecto illum deserunt error
        tenetur! Natus modi excepturi eum, odit perferendis totam dolorum nihil
        nemo esse, error alias iure asperiores animi quia mollitia veniam
        voluptatibus labore reiciendis amet voluptas. Dolorem earum quos ullam
        reiciendis quidem dolore ab ut repellat fuga, consequatur veniam?
        Facilis exercitationem officiis nulla veritatis laboriosam, obcaecati
        repellat ex dignissimos a vero reprehenderit! Amet quod nihil ipsa
        alias, adipisci nemo. Ad, dolorum quibusdam asperiores nobis magni
        perspiciatis alias nam iste, sequi obcaecati dolore vitae voluptas sit,
        eaque iusto doloremque in deleniti id quae! Eius, accusantium
        consequatur temporibus reprehenderit ipsa adipisci ab, molestias culpa
        quae inventore cumque mollitia, similique maxime veniam officiis
        quisquam doloribus blanditiis deleniti? Quos doloremque consequuntur
        maxime ea, rem distinctio corrupti velit necessitatibus sunt esse
        recusandae repellat! Cum nisi dolores quam vel magnam ipsam at dolore
        explicabo. Impedit repudiandae voluptatem accusamus, et, ex cumque iste
        quam assumenda magni odio inventore facere sed, molestiae aspernatur
        fugiat error mollitia vel architecto quis in maiores. Id ab qui soluta
        culpa commodi numquam nisi! Ut ipsa minima hic obcaecati facere amet
        debitis natus nisi, neque omnis itaque deleniti aliquam, placeat eum,
        temporibus vero atque blanditiis excepturi laboriosam. Tenetur sapiente
        illum at cupiditate. Excepturi ab ipsa accusantium fugit accusamus
        exercitationem! Soluta delectus suscipit deserunt unde, consequatur
        dolore perferendis rerum exercitationem aliquid pariatur incidunt
        facilis quas inventore nulla consectetur? Corrupti, accusantium placeat
        numquam corporis quisquam molestiae doloribus cum dignissimos culpa.
        Blanditiis ducimus accusamus explicabo iure suscipit mollitia facilis
        necessitatibus ipsum nihil, fugiat exercitationem, voluptates corporis
        velit quasi nostrum esse et vitae ab maiores modi saepe dolorem
        recusandae. Rem quod illo aliquid distinctio nam ullam sunt? Velit,
        ipsum officia. Sint perspiciatis voluptas accusamus incidunt, ratione
        sunt provident asperiores, nihil unde cum quaerat mollitia quae quas
        animi nisi vel ipsam minima nam rerum pariatur! Tenetur iusto tempora,
        omnis vitae beatae consequatur atque optio sequi hic, similique corrupti
        nisi at aliquid temporibus nulla repudiandae deleniti porro nihil fugit
        provident non corporis molestiae quo? Explicabo, molestias doloribus. Ea
        officia ipsa nemo omnis rem dolore accusantium aut architecto quam
        asperiores veritatis optio autem est maiores debitis obcaecati
        voluptatum similique cupiditate, distinctio odit aliquid suscipit
        impedit! Asperiores voluptas exercitationem quisquam magni commodi esse
        amet aperiam velit maiores delectus ipsa quidem quod a, iusto
        accusantium numquam eaque? Natus deleniti corrupti, exercitationem quos
        nobis sunt velit perspiciatis. Velit nam expedita reiciendis omnis eum
        saepe exercitationem vel suscipit dignissimos, odio, voluptate iusto
        necessitatibus officiis placeat quaerat. Ipsum voluptatum magnam
        reprehenderit saepe recusandae qui perferendis provident aperiam
        necessitatibus delectus culpa exercitationem reiciendis consectetur,
        veniam iusto alias debitis eos enim tempora est ad aliquam fugiat, earum
        autem. Consequuntur, consectetur cumque modi rem perferendis quam nam
        voluptate earum doloribus suscipit commodi eos neque libero in ut.
        Molestias vel nemo aliquid error. Harum iste corporis esse voluptate ut
        aliquam hic placeat dolore obcaecati reiciendis, quam aut voluptas iusto
        ipsam natus, beatae, voluptatibus explicabo expedita veniam! Voluptas
        consequuntur natus sequi facilis esse vitae porro itaque incidunt non,
        dignissimos aut, temporibus quasi omnis nisi dolorem earum placeat et
        maiores? Itaque quasi dolor ullam incidunt cum id aliquid placeat odit,
        corporis veniam vel dicta! Necessitatibus suscipit debitis eos
        voluptatibus consequuntur voluptatum adipisci laudantium magnam? Nam
        illum in nesciunt, et quasi quos laborum assumenda distinctio dolores,
        non delectus voluptas natus ipsa quibusdam. Cupiditate explicabo quasi
        ea quo. Harum voluptate provident dicta iusto, iure autem optio possimus
        rerum labore deleniti earum eius veniam dignissimos nobis minima cum
        maiores corporis accusamus facilis unde eum aperiam exercitationem
        repellendus inventore! Beatae sed repellendus possimus temporibus ad.
        Voluptate dolore minima perspiciatis consequuntur praesentium tenetur
        corporis cum illo fuga minus nam numquam voluptatibus tempora nihil
        animi, at quidem provident accusamus recusandae eum. Amet culpa
        laudantium esse iure, aperiam adipisci blanditiis perspiciatis, suscipit
        ab sed cupiditate dignissimos laborum impedit quibusdam tempore
        asperiores totam animi.
      </p>
    </div>
  );
};

export default UseEffectPage;
