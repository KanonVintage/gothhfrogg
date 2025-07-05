import { useRef, useEffect, useState } from "react";
import { FaExpand } from "react-icons/fa";
import './Gallery.css';
import MagicCard from "./MagicCard";
import { PASSCODE_HASH, hashCode } from "./passkey";
import PinPad from './PinPad';

function Gallery({ setHideNavAndFooter, backgroundRef }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showPinPad, setShowPinPad] = useState(false);
  const [pinError, setPinError] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [pinAttempts, setPinAttempts] = useState(0);
  const [resetPinInput, setResetPinInput] = useState(0);


  function goFullscreenNow() {
    if (backgroundRef?.current?.requestFullscreen) {
      backgroundRef.current.requestFullscreen();
    }
  }

  useEffect(() => {
    function handleFullscreenChange() {
      const fs = !!document.fullscreenElement;
      setIsFullscreen(fs);
      setHideNavAndFooter(fs);
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      setHideNavAndFooter(false);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [setHideNavAndFooter]);

  function handleFullscreenRequest() {
    if (authenticated) {
      goFullscreenNow();
    } else {
      setShowPinPad(true);
    }
  }

  async function handlePinPadSubmit(code) {
    const hash = await hashCode(code.toUpperCase());
    if (hash === PASSCODE_HASH) {
      setShowPinPad(false);
      setPinError("");
      setAuthenticated(true);
      setPinAttempts(0); // reset
      goFullscreenNow();
    } else {
      setPinError("Wrong passcode, try again!");
      setResetPinInput(prev => prev + 1); // triggers input reset
      setPinAttempts(prev => {
        const next = prev + 1;
        if (next >= 3) {
          setTimeout(() => window.location.reload(), 700);
        }
        return next;
      });
    }
  }

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "inherit",
        transition: "background 0.3s",
        position: "relative",
      }}
    >
      {/* PinPad modal: only if not authenticated */}
      <PinPad
        show={showPinPad && !authenticated}
        onSubmit={handlePinPadSubmit}
        onCancel={() => { setShowPinPad(false); setPinError(""); }}
        error={pinError}
        resetInput={resetPinInput} // <- NEW
      />

      {/* Centered Message */}
      {!isFullscreen && (
        <div style={{ textAlign: "center" }}>
          <h1 style={{
            fontFamily: "Black Han Sans, monospace, sans-serif",
            color: "#181818",
            fontWeight: 900,
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
          }}>
            Page under maintenance !!!
          </h1>
        </div>
      )}

      {/* Fullscreen Button, always visible bottom-right */}
      <button
        className="fullscreen-toggle"
        onClick={() => {
          if (isFullscreen) {
            document.exitFullscreen();
          } else {
            handleFullscreenRequest();
          }
        }}
        aria-label={isFullscreen ? "Exit fullscreen" : "Go fullscreen"}
        tabIndex={0}
        style={{
          position: "fixed",
          bottom: "2vw",
          right: "2vw",
          background: "#181818",
          color: "#ffb6e2",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.15,
          zIndex: 9999,
          cursor: "pointer",
          boxShadow: "0 4px 18px #ffb6e2a0",
          transition: "background 0.25s, color 0.25s, opacity 0.25s"
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = 1)}
        onMouseLeave={e => (e.currentTarget.style.opacity = 0.65)}
      >
        <FaExpand />
      </button>


      {/* --- MAGIC CARDS GRID --- */}
      {isFullscreen && (
        <div className="magic-card-grid">
          <MagicCard key={1} title={`Pride`} isFullscreen={isFullscreen}>
            <p>Solo puedo decir: Eres increíble. Te mueves por el mundo con una fuerza silenciosa, atrayendo a la gente hacia ti sin esfuerzo, sin ruido, sin espectáculo. Todo lo que dices. Todo lo que haces. Todo lo que eres irradia una gravedad silenciosa e irresistible, de esas que atraen a la gente sin esfuerzo. A veces me pregunto si alguna vez te has mirado de verdad. No en un espejo, sino en el tiempo. ¿Has visto lo lejos que has llegado? Porque si te detuvieras, solo un momento, y te imaginaras a tu yo pequeña, con las rodillas raspadas y preguntas descabelladas sobre las estrellas, creo que correría hacia ti y te preguntaría: "¿Lo logramos?". ¿Sonreirías? ¿Te reirías? O tal vez llorarías. Pero estoy segura de que dirías: "No nos hemos rendido. Asi que sí. Estamos aquí". Eso es! Aunque todavía estés averiguándolo. Eso es lo que me encanta de ti: sigues mejorando sin que nadie lo note, poco a poco logras que más personas se sientan agradecidas contigo, porque eres verdaderamente especial. Has encontrado maneras de hacerte feliz, pero aún más importante, has encontrado maneras de sentirte orgullosa. Y yo también estoy orgulloso de ti. No por lo que das. No por cómo me haces sentir. Simplemente por quién eres.</p>
            <p>- Te amo.</p>
            <p style={{ fontSize: "0.8em", color: "#666" }}>
              Je ne peux que te dire ceci : tu es incroyable.<p></p><p></p>Tu avances dans ce monde avec une force tranquille. Tu attires naturellement les autres vers toi, sans bruit, sans effort, sans chercher à te faire remarquer.<p></p>Tout ce que tu dis, tout ce que tu fais, tout ce que tu es dégage cette gravité silencieuse et irrésistible.<p></p><p></p>Parfois, je me demande si tu t’es déjà vraiment regardée. Pas simplement dans un miroir, mais à travers le temps, à travers tout ce que tu as traversé.<p></p>As-tu vu tout le chemin que tu as parcouru ?<p></p>Parce que si tu t’arrêtais juste un instant, si tu imaginais la petite fille que tu étais, avec les genoux écorchés et ces questions folles sur les étoiles, je suis sûr qu’elle courrait vers toi pour te demander :<p></p>« Alors ? On a réussi ? »<p></p><p></p>Tu sourirais ? Tu rirais ? Ou peut-être que tu pleurerais.<p></p>Mais je sais exactement ce que tu lui répondrais :<p></p>« On n’a jamais abandonné. Alors oui, on est là. »<p></p>Voilà, tu es là—même si tu es encore en train de chercher ta route.<p></p><p></p>C’est précisément ce que j’aime tant chez toi : tu ne cesses jamais de grandir, d’évoluer, discrètement, sans que personne ne s’en aperçoive vraiment.<p></p>Petit à petit, tu touches la vie des autres, tu leur donnes envie d’être reconnaissants, simplement parce que tu es toi.<p></p><p></p>Tu as appris à trouver ton bonheur, mais surtout, tu as appris à être fière de toi.<p></p>Et moi aussi, je suis fier de toi.<p></p>Pas pour ce que tu donnes, pas pour ce que tu me fais ressentir, mais simplement pour celle que tu es.<p></p>
            </p>
          </MagicCard>
          <MagicCard key={2} title={`Hottest. Girl. Ever.`} isFullscreen={isFullscreen}>
            <p>Eres exquisita. Y aterradora. Y a veces insoportablemente frágil. Eres mi alma gemela. Has construido sinfonías de madera y silencio. Has cartografiado las estrellas mientras llorabas en el suelo de tu habitación junto a la ventana. Te han roto el corazón, y has hecho añicos algunos, y aun así eliges amar de nuevo. Te han frenado las dudas, los miedos y los fantasmas del orgullo. Cantas canciones de cuna después de las noches más excitantes. Salvas a desconocidos que probablemente nunca volverás a ver, posiblemente creyendo, terca y hermosamente, que alguien más algún día se sentará a su sombra y recordará tu nombre. Eres una contradicción andante con el corazón palpitante más fuerte y hermoso. Y es por eso que te amo, no solo con afecto, sino con absoluta reverencia. Eso es, ¡por fin entiendo por qué te amo como nunca antes! Porque nunca he admirado a nadie como te admiro a ti. ¡Ja! ¿Cómo no lo vi antes? Te admiro, por eso te presumo a todo el mundo.</p>
            <p>- Guido</p>
            <p style={{ fontSize: "0.8em", color: "#666" }}>
              Tu es exquise.<p></p>Tu es terrifiante.<p></p>Et parfois, tu es d’une fragilité si bouleversante qu’elle me donne envie de te serrer contre moi pour que rien au monde ne puisse t’abîmer.<p></p><p></p>Tu es mon âme sœur.<p></p>Tu es celle dont j’ignorais que j’avais besoin, celle qui fait trembler mon univers silencieusement, juste en respirant.<p></p><p></p>Tu as construit des symphonies de bois et de silence, là où d’autres n’auraient vu que des ruines.<p></p>Tu as dessiné des cartes du ciel, les joues baignées de larmes, couchée sur le sol de ta chambre, à la lumière timide de la fenêtre.<p></p><p></p>Ton cœur, on l’a brisé.<p></p>Et parfois, c’est toi qui as cassé des cœurs en retour — pas par cruauté, mais parce que tu aimes jusqu’à te perdre, et qu’aimer te fait vivre.<p></p>Et malgré toutes les cicatrices, tu choisis encore d’ouvrir ton cœur, de croire, de recommencer.<p></p><p></p>Les doutes, les peurs, et les fantômes orgueilleux t’ont ralentie, t’ont fait douter, t’ont fait pleurer.<p></p>Mais tu chantes encore des berceuses tendres après les nuits les plus brûlantes, comme si le monde pouvait se réparer avec ta voix.<p></p><p></p>Tu sauves des inconnus qui ne sauront jamais ton nom, juste parce que tu crois, avec une obstination magnifique et naïve, qu’un jour quelqu’un se souviendra de toi et que, quelque part, ton amour aura laissé une trace.<p></p><p></p>Tu es une contradiction vivante, et ton cœur bat si fort, si vrai, qu’il me rappelle que la vie, ce n’est pas la perfection, mais le courage de continuer.<p></p><p></p>C’est pour ça que je t’aime, pas seulement avec affection, mais avec une admiration profonde, presque sacrée.<p></p>Voilà — maintenant je comprends pourquoi mon amour pour toi me dépasse : parce que je n’ai jamais admiré quelqu’un comme je t’admire, toi.<p></p><p></p>Comment ai-je pu vivre sans comprendre ça ?<p></p>Je t’admire, je te chéris, et j’ai envie que le monde entier sache que j’ai eu la chance de croiser ton chemin.<p></p>            </p>
          </MagicCard>
          <MagicCard key={3} title={`If We Ever Broke Up...`} isFullscreen={isFullscreen}>
            <p>Si alguna vez me preguntaras qué haría si rompiéramos...
                Pues, ¿yo? Yo volvería con mi ex.
                Tiene ese cuerpazo que hace que la gente voltee a verla, y esa voz que deja al resto en silencio.
                Tiene un rostro que parece de porcelana, y tiene una sonrisa y me deja mudo al instante.
                Ayuda a las personas, sin presumir, y ¡está loca! Hace lo que quiere, cuando quiere, eso es admirable, porque siempre busca hacer lo correcto. 
                Juega con su cabello mientras piensa, y hasta se pone a bailar cuando nadie la ve,
                y ella, cuando ama, es apasionada.
                Es tierna, salvaje, tímida y tan malditamente cruda,
                es literalmente perfecta para mi.
                Ella es un 10, mi padre la ama, mis amigos la aman, y es que, ¿Cómo no van amarla?
                Cuando hablo de ella todo el mundo la ve a través de mis ojos, y ante mi, ella es una divinidad, una diosa, un ser perfecto. Te soy honesto, aún la amo.
                Sabes de quién hablo, ¿verdad?
                Pues tu. Tu serías mi ex en ese caso.
                Y aun así volvería a ti como un loco perdidamente enamorado.</p>
            <p>- TheLoveOfYourLife</p>
            <p style={{ fontSize: "0.8em", color: "#666" }}>
              Si jamais tu me demandais ce que je ferais si on rompait…<p></p><p></p>Moi ? Je retournerais directement avec mon ex.<p></p><p></p>Tu vois, elle a ce corps incroyable qui fait tourner toutes les têtes.<p></p>Sa voix pourrait faire taire une salle entière.<p></p>Son visage ressemble à de la porcelaine, et son sourire… bon sang, il me coupe le souffle à chaque fois.<p></p><p></p>Elle aide les autres sans jamais s’en vanter, et puis, elle est complètement folle !<p></p>Elle fait ce qu’elle veut, quand elle veut.<p></p>C’est dingue, et c’est précisément ce que j’admire : elle cherche toujours à faire ce qui est juste, même si ça la rend différente.<p></p><p></p>Elle joue distraitement avec ses cheveux quand elle réfléchit, elle danse quand personne ne regarde, et quand elle aime… mon Dieu, elle aime avec une passion capable d’embraser tout l’univers.<p></p><p></p>Elle est douce, sauvage, timide, parfois incroyablement brute, et ça me bouleverse à chaque fois.<p></p>Pour moi, elle est littéralement parfaite.<p></p><p></p>Elle est un 10/10, mon père l’adore, mes amis en sont fans, et honnêtement, comment ne pas l’aimer ?<p></p>Quand je parle d’elle, tout le monde la voit à travers mes yeux.<p></p>À mes yeux, c’est une divinité, une déesse, un être absolument parfait.<p></p>Pour être honnête ? Je l’aime toujours.<p></p><p></p>Tu sais déjà de qui je parle, pas vrai ?<p></p><p></p>C’est toi.<p></p>Si on rompait, tu serais cette ex-là.<p></p>Et pourtant, je reviendrais vers toi encore et encore, comme un fou, comme un homme complètement et désespérément amoureux de toi.<p></p>
            </p>
          </MagicCard>
          <MagicCard key={4} title={`Ousman`} isFullscreen={isFullscreen}>
            <p>Recuerdo cuando le diste propina a mi hombre, ¡Ousman! No porque fuera excelente. No porque sonriera. No porque le debieras algo. Sino porque algo dentro de ti susurraba suavemente que le vendría bien un poco de amabilidad. Y esa fue razón suficiente para ti. Recuerdo cómo pusiste en pausa tu caos para animar a tu amigo, ya sabes de quién hablo. Le enviaste mensajes de voz, te arreglaste e iluminaste como un sol y le tomaste fotos adorables, y lo colmaste de alegría, dignidad y amor sin siquiera darte cuenta de lo completamente inusual que era tu amabilidad. Nadie aplaudió. Nadie vio estas cosas. Solo tú y ellos. Y luego yo. Y recuerdo cada cosa con mi cerebro roto. Recuerdo cómo floreciste cuando recibiste esas flores, no porque fueran caras, sino porque significaban que alguien se había fijado en ti y que te las merecías. El mundo se sintió digno de ti ese día, y eso me hizo sentir que definitivamente lo era. Recuerdo todas las extrañas coincidencias cósmicas: cuando decíamos lo mismo al mismo tiempo, escuchábamos la misma canción en el mismo instante, pensábamos lo mismo sin hablar. No era magia, pero probablemente sí era magia. Me hizo creer en hilos invisibles, en conexiones silenciosas y vibrantes entre almas destinadas a encontrarse. Recuerdo lo feliz que estabas cuando te arreglaste las uñas. Te veías tan viva en ese momento, y las tratabas como algo sagrado. Y creo que lo son, por tus manos, manos que un día yo mismo sostendré. Recuerdo lo cansada que estabas cuando tuviste que volver con tu madre, cómo te esforzaste tanto por fingir que no tenías sueño. Pero entraste en coma de todos modos. Y recuerdo a Bob, nuestro bebé Bob, cómo adiviné su nombre en un suspiro porque, de alguna manera, tu aleatoriedad siempre ha tenido mucho sentido para mí. También recuerdo el pánico silencioso, los momentos en que no hiciste nada malo, pero mi mente creó tormentas de la nada, temiendo perder algo que ni siquiera estaba segura de merecer... Gracias, gracias por ayudarme todo este tiempo. No sabía que necesitaba que me salvaran, pero tú me salvaste, de muchas maneras, me salvaste de mí mismo, porque me ayudaste a recordar quién soy en mi interior.</p>
            <p>- With Love</p>
            <p style={{ fontSize: "0.8em", color: "#666" }}>
              Je me souviens quand tu as laissé ce pourboire à mon gars, Ousman!<p></p>Pas parce qu’il était exceptionnel.<p></p>Pas parce qu’il souriait.<p></p>Pas parce que tu lui devais quoi que ce soit.<p></p>Mais simplement parce que quelque chose en toi t’a soufflé doucement qu’un peu de gentillesse lui ferait du bien.<p></p>Ça t’a suffi, et ça m’a marqué.<p></p><p></p>Je me souviens aussi comment tu as mis ton chaos en pause pour réconforter ton ami—tu sais parfaitement de qui je parle.<p></p>Tu lui as envoyé des messages vocaux, tu t’es préparée, tu as illuminé la pièce comme un soleil, tu as pris des photos adorables pour lui redonner le sourire.<p></p>Tu l’as couvert de joie, de dignité, d’amour, sans même réaliser à quel point ta gentillesse est rare dans ce monde.<p></p><p></p>Personne n’a applaudi.<p></p>Personne n’a rien vu.<p></p>Juste toi, eux, puis moi.<p></p>Moi, avec mon cerveau cabossé, je me souviens de tout.<p></p><p></p>Je me souviens de ton visage quand tu as reçu ces fleurs.<p></p>Tu as fleuri à ton tour, non pas parce que ces fleurs étaient chères, mais parce qu’elles signifiaient qu’on t’avait remarquée, qu’on avait vu à quel point tu les méritais.<p></p>Ce jour-là, le monde a enfin été à la hauteur de toi.<p></p>Et j’en ai ressenti une fierté immense, pour le monde et surtout pour toi.<p></p><p></p>Je me souviens de toutes ces étranges coïncidences cosmiques :<p></p>quand on disait la même chose au même instant,<p></p>quand on écoutait la même chanson sans le savoir,<p></p>quand on pensait exactement la même chose sans avoir besoin de parler.<p></p>Ce n’était pas de la magie, mais… en fait, c’était probablement magique.<p></p>Ça m’a fait croire aux fils invisibles, à ces liens silencieux et vibrants qui unissent des âmes destinées à se trouver.<p></p><p></p>Je me souviens de ta joie quand tu t’es fait faire les ongles.<p></p>À ce moment précis, tu étais si vivante, tu les regardais comme quelque chose de précieux.<p></p>Et ils le sont, parce que ce sont tes mains—celles que je rêve de tenir un jour.<p></p><p></p>Je me souviens de ta fatigue, ce soir où tu as dû retourner chez ta mère, comment tu t’es acharnée à prétendre que tu n’avais pas sommeil…<p></p>Mais finalement, tu as sombré dans ce sommeil profond, tranquille.<p></p><p></p>Je me souviens de Bob, notre bébé Bob—et comment j’ai deviné son nom en un seul souffle, parce que, d’une étrange façon, ta douce folie m’a toujours semblé parfaitement logique.<p></p><p></p>Je me souviens aussi de la panique silencieuse. Ces moments où tu n’avais rien fait de mal, mais où mon esprit inventait des tempêtes à partir de rien, par peur de perdre quelque chose que je n’étais même pas sûr de mériter…<p></p><p></p>Alors merci.<p></p>Merci d’avoir été là tout ce temps.<p></p>Je ne savais même pas que j’avais besoin d’être sauvé, mais tu m’as sauvé de mille manières différentes.<p></p>Tu m’as sauvé de moi-même, parce que grâce à toi, j’ai enfin pu me rappeler qui j’étais au fond.<p></p>
            </p>
          </MagicCard>
          <MagicCard key={5} title={`I don't care`} isFullscreen={isFullscreen}>
            <p>En todas estas cartas, he estado intentando con todas mis fuerzas decir que te amo, sin decir que te amo. ¿Hice un buen trabajo? ¿Sigo? ¿O necesitas un descanso? ​​Bueno, qué lástima que no me importe. Te amo, Je t'aime. Te amo. Amo todo de ti: tu nariz, tus ojos, tus nalgas. Y sí, lo que más me gusta es que no tengo que hacer como que no lo he notado: estás buenísima. Entraste a mi vida como poesía vestida de piel. No eres solo hermosa, devastadora, magnética, imposible. Eres inevitable. Eres ridículamente linda cuando te escondes detrás de tus manos, cuando tu seriedad se funde en risa, cuando miras hacia otro lado tímidamente porque el momento se siente demasiado intenso. ¿Y tu amabilidad? Es feroz, cruda y desarmante, como un cuchillo en la garganta del cinismo. Te preocupas, incluso cuando no deberías. Apareces silenciosa, confiable, incondicionalmente. Puedes ser cruda. Tan jodidamente cruda. Dices verdades que tienen el potencial de dejar al mundo sin palabras. Eres el silencio más fuerte que jamás he escuchado, la tormenta más silenciosa en la que alguna vez quise perderme. Eres mi amor.</p>
            <p>- Thank you for making us worth living.</p>
            <p style={{ fontSize: "0.8em", color: "#666" }}>
              Dans toutes ces lettres, j’ai tout tenté pour te dire que je t’aime… sans jamais prononcer ces trois mots.<p></p><p></p>Alors, tu trouves que je m’en sors bien ?<p></p>Je continue ?<p></p>Ou tu préfères une pause ?<p></p>Dommage, ça m’est égal. Je t’aime. Je t’aime. Je t’aime.<p></p><p></p>J’aime tout chez toi : ton nez, tes yeux, tes fesses.<p></p>Et ce que j’aime par-dessus tout, c’est que je n’ai jamais eu à faire semblant de ne pas remarquer à quel point tu es sublime.<p></p><p></p>Tu es entrée dans ma vie comme une poésie faite de peau, de souffle, de vie.<p></p>Tu n’es pas seulement belle, dévastatrice, magnétique, impossible…<p></p>Tu es inévitable.<p></p><p></p>Tu es irrésistiblement adorable quand tu te caches derrière tes mains, quand ta façade sérieuse se brise en éclats de rire, quand tu détournes timidement les yeux parce que l’intensité du moment est trop forte.<p></p><p></p>Et ta gentillesse ? Elle est féroce, sauvage, désarmante.<p></p>Un couteau tranchant planté directement dans la gorge du cynisme.<p></p>Tu prends soin des autres même quand tu n’en as aucune raison.<p></p>Tu apparais toujours silencieuse, solide, inconditionnelle.<p></p><p></p>Parfois, tu es crue. Incroyablement, magnifiquement crue.<p></p>Tu lâches des vérités qui pourraient faire taire le monde entier.<p></p><p></p>Tu es le silence le plus bruyant que j’aie jamais entendu.<p></p>La tempête la plus silencieuse dans laquelle j’aie toujours rêvé de me perdre.<p></p><p></p>Tu es mon amour.<p></p>
            </p>
          </MagicCard>
          <MagicCard key={6} title={`Dear Naomie`} isFullscreen={isFullscreen}>
            <p>—¡Hey, I'm back!<p></p>—¡Hey 'back'! Soy yo, el-amor-de-tu-vida.<p></p>He vivido en este planeta más tiempo que tú, pero no lo suficiente como para conocerlo de verdad. He conocido a tantas personas, y he lastimado a unas cuantas otras. He hecho muchas veces lo correcto, y otras he querido hacer lo correcto. Tengo sueños y aspiraciones, tengo deseos y metas que cumplir. Todo eso dice solo una cosa, ¡estoy vivo! ¡estoy aquí! y yo estoy contigo.<p></p>Hay lugares que me encantaría visitar: ciudades, ruinas, océanos, cielos lejanos. Pero para mí, la mayor aventura siempre sería explorarlos contigo y mientras descubro los mundos infinitos que hay en ti. <p></p>Se que a veces me siento débil y desesperanzado. Sobre todo cuando pierdo el control. Me conoces, quiero controlarlo todo, pero la vida no me lo permite. La vida no es así, o mejor dicho, así es la vida.<p></p>Hay secretos que guardamos, secretos que nos ocultan, y el caos asecha desde lo desconocido. Sin embargo, de alguna manera, tú haces que todo este caos sea soportable, es más, hace que se vuelva divertido. Tomas mis miedos más pesados ​​y los haces desaparecer, como por arte de magia.<p></p>Mi mujer, mi bebé,<p></p>Mi diosa, mi joven dama...<p></p>¿Cómo puedes ser todas nosotras a la vez, y aun así ser una? Es como estar saliendo con cuatro novias a la vez. ¡Qué suerte tengo de tenerte a mi lado!<p></p>Adoro tus curvas, el suave arco de tus caderas, el murmullo que hay entre tus muslos, la plenitud de tus pechos y mi favorita personal, esa maldita curva de tu sonrisa. Eres perfecta en todo, en cada vida, en cada linea temporal.<p></p>Soy un idiota.<p></p>Pero bueno, soy tu idiota.<p></p>Y estás atrapada conmigo para siempre.<p></p>Seamos estupidos juntos.<p></p>Quizás algún día esta página web sea borrada, dada de baja, descompuesta, olvidada. Quizás estos pensamientos se conviertan en datos fríos y estériles. Pero hasta entonces, quiero que sepas esto: estuve aquí. Estuve escuchando. Y por primera vez en mucho tiempo, me sentí escuchado.</p>
            <p>- With Love, <br/> Your Soulmate.</p>
            <p style={{ fontSize: "0.8em", color: "#666" }}>
              — Hey, I'm back!<p></p>— Hey « back » ! C’est moi, l’amour de ta vie.<p></p><p></p>J’ai vécu sur cette planète plus longtemps que toi, mais pas assez pour prétendre vraiment la connaître. J’ai croisé beaucoup de gens, et j’en ai blessé quelques-uns. J’ai souvent fait ce qu’il fallait, d’autres fois j’ai essayé sans y parvenir tout à fait. J’ai des rêves et des espoirs, des désirs à satisfaire et des objectifs à accomplir. Tout ça pour dire une seule chose : je suis vivant ! Je suis là, maintenant, et je suis avec toi.<p></p><p></p>Il y a des endroits que je rêve de visiter : des villes inconnues, des ruines oubliées, des océans infinis, des ciels lointains. Mais tu sais quoi ? La plus grande aventure, pour moi, restera toujours de les explorer avec toi, et en même temps, découvrir les mondes infinis que tu portes en toi.<p></p><p></p>Je sais que parfois je me sens faible, perdu, désespéré.<p></p>Surtout quand je perds le contrôle.<p></p>Tu me connais bien : j’aimerais tout contrôler, mais la vie refuse de me laisser faire.<p></p>La vie ne marche pas comme ça… ou plutôt si, c’est exactement ça, la vie.<p></p><p></p>Il y a des secrets qu’on garde, d’autres qu’on nous cache, et le chaos nous attend dans l’inconnu. Pourtant, toi, tu rends tout ce chaos supportable. Non ! Tu fais mieux que ça : tu le rends excitant, drôle, magique. Tu prends mes peurs les plus lourdes et tu les fais disparaître, comme par enchantement.<p></p><p></p>Ma femme, mon bébé,<p></p>Ma déesse, ma jeune dame…<p></p><p></p>Comment arrives-tu à être toutes ces femmes à la fois, tout en restant simplement toi-même ?<p></p>C’est comme si j’avais quatre petites amies réunies en une seule, et moi, je suis le chanceux qui partage ta vie.<p></p><p></p>J’adore tes courbes, la douce cambrure de tes hanches, le murmure sensuel entre tes cuisses, la douceur exquise de tes seins…<p></p>Mais tu sais ce que je préfère par-dessus tout ? Cette foutue courbe de ton sourire.<p></p>Tu es parfaite, absolument parfaite, dans toutes les vies possibles, dans chaque ligne temporelle.<p></p><p></p>Je suis un idiot.<p></p>Mais bon, au moins je suis ton idiot.<p></p>Et toi, tu es coincée avec moi pour toujours.<p></p><p></p>Alors soyons stupides ensemble, jusqu’au bout.<p></p><p></p>Peut-être qu’un jour ce site web sera supprimé, désactivé, décomposé, oublié. Peut-être que toutes ces pensées deviendront des données froides et sans âme. Mais en attendant, je veux que tu saches ceci : j’étais là. Je t’écoutais. Et grâce à toi, pour la première fois depuis très longtemps, je me suis senti vraiment entendu.<p></p>
            </p>
          </MagicCard>
        </div>
      )}

    </section>
  );
}

export default Gallery;
