import { useState } from "react";
import { ChevronDown, Brain, Heart, Users, Sparkles, MessageCircle, Briefcase, Shield } from "lucide-react";

interface ReflexaoProps {
  icon: React.ReactNode;
  titulo: string;
  resumo: string;
  conteudo: string;
}

const Reflexao = ({ icon, titulo, resumo, conteudo }: ReflexaoProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-start gap-4 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-2xl"
      >
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-xl text-foreground mb-2">{titulo}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{resumo}</p>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 mt-1 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[2000px]' : 'max-h-0'}`}>
        <div className="px-6 pb-6 pt-2">
          <div className="border-t border-border pt-4">
            <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
              {conteudo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const reflexoes = [
  {
    icon: <Brain className="w-6 h-6" />,
    titulo: "Abordagem Centrada na Pessoa",
    resumo: "Conheça a perspectiva humanista desenvolvida por Carl Rogers e como ela fundamenta minha prática clínica.",
    conteudo: `Desenvolvida pelo teórico norte-americano Carl R. Rogers (1902-1987) no século XX, a Abordagem Centrada na Pessoa contribuiu com a consolidação da perspectiva humanista na psicologia.

A partir de seus estudos, Rogers percebeu no ser humano a capacidade inerente de direcionar-se ao crescimento, desde que haja uma atmosfera facilitadora dessa potencialidade. Essa capacidade foi nomeada de Tendência Atualizante e se tornou a noção chave da Abordagem Centrada na Pessoa (ACP).

O atendimento psicoterápico centrado na pessoa considera as potencialidades de quem procura ajuda como as principais protagonistas para a compreensão do que está acontecendo no aqui e no agora. O terapeuta nessa abordagem funciona como o facilitador dessa atmosfera.

"(...) existe em todo organismo, em qualquer nível, um fluxo subjacente de movimento para uma realização construtiva de suas possibilidades intrínsecas." — Rogers, 1977

Há no homem uma tendência natural para o desenvolvimento completo. O termo mais frequentemente usado para isso é o de tendência de realização, que está presente em todos os organismos vivos. Trata-se do fundamento sobre o qual está construída a abordagem centrada na pessoa.`
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    titulo: "A Noção do Eu",
    resumo: "Como construímos a imagem que temos de nós mesmos e como isso afeta nossa vida?",
    conteudo: `Durante a vida criamos uma imagem sobre nós mesmos composta por experiências que vivemos, nossas memórias, histórias que ouvimos sobre nós mesmos em épocas que já não nos lembramos mais e por outros fatores que vamos nos identificando ao longo da vida. Rogers chamou essa imagem de "Noção de Si".

"Como as leituras externas sobre nós podem afetar nossa própria relação interna?"

A repercussão do olhar do outro é algo que é muito particular para cada pessoa, porém podemos perceber alguns indicadores que nos ajudam a compreender melhor como essa relação acontece para cada um de nós.

Segundo Rogers, quando há algum tipo de desacordo entre como nós nos vemos e de como tem sido nossa experiência nas relações que nos rodeiam, tendemos a ficar confusos e tensos e consequentemente experienciamos angústias mais intensas, assim como a sensação de estar de alguma maneira em ameaça.

Nosso organismo tende entrar em estado de defesa e quando o assunto é algo tão precioso para nós (nosso olhar para nós mesmos), na intenção de defender, acabamos escondendo algumas coisas de nós mesmos.

Como nos enxergamos? Quais histórias que nos foram contadas realmente nos representam? Quanto de nosso querer é nosso ou nos foi dito como verdade por alguém importante para nós?

Essas perguntas são delicadas e podem ser desconfortáveis. A psicoterapia pode ser uma ferramenta muito potente nesse processo, que além de lento e com tempo muito particular, só pode ser respondido por uma pessoa: a que vivenciou todas essas histórias externa e internamente, o próprio sujeito.`
  },
  {
    icon: <Heart className="w-6 h-6" />,
    titulo: "Autenticidade nas Relações",
    resumo: "Ser autêntico não significa falar tudo que pensamos. O que é, então, a autenticidade?",
    conteudo: `Não há como pensar na autenticidade que há nas relações, sem pensarmos em: Tenho espaço para ser eu mesmo nessa relação?

Para saber isso é fundamental perceber como cada um se sente em cada relação. Por exemplo: ao amar muito uma pessoa, ainda é possível ter sentimentos ruins nessa mesma relação, sem que um sentimento anule o outro. Seja por alguma demanda nossa, por alguma atitude vinda do outro lado da relação, ou até mesmo pela falta dela.

É comum que esses sentimentos se tornem muito confusos, pois tendemos a negá-los. Como poderia sentir algo ruim por alguém que tanto amo?

Ambos os sentimentos são verdadeiros e podem se tornar confusos se são postos como impossíveis de serem autênticos ao ocorrerem dentro de uma mesma relação.

Sabe aquela sensação de que tem algo estranho? Ela pode significar que não estamos agindo de maneira autêntica, ou, até, que não estamos aceitando a autenticidade que há no que vivenciamos.

Falar sobre os estranhamentos que experienciamos é fundamental para percebermos características próprias que deixamos de ver como sendo nossas e que muitas vezes vem à tona quando nos relacionamos. A psicoterapia é uma grande ajuda nesse processo de descoberta de si e na busca de um acordo com as contradições e ambiguidades que são parte da vida e das relações.

Sendo você como é, de que maneira estaria sendo autêntico a você em seus relacionamentos?`
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    titulo: "Autocrítica e Autocompaixão",
    resumo: "Como equilibrar a autocrítica sem se tornar refém de julgamentos internos excessivos?",
    conteudo: `Onde estaríamos sem a capacidade de criticar nossas ações e repensar o rumo que estamos direcionando nossa vida?

Porém, ter uma postura crítica consigo é uma medida que costuma ser bem difícil de balancear. Se por um lado precisamos da autocrítica (até para abandonar certos padrões), por outro se criticar demais tende a ser sufocante.

Mudar essa relação com a autocrítica tende a ser um processo muito complexo, pois cada pessoa vai ter seu histórico e suas particularidades no desenvolvimento dessa relação, assim como haverá parâmetros e objetivos de vida diferentes.

Transformar a comunicação interna em mais compreensiva é também uma das propostas da psicoterapia, não no sentido de exterminar qualquer pensamento de julgamento, mas de compreender o contexto interno e externo de quando esses pensamentos acontecem.

Dessa maneira, o sentido é mais próximo de firmar um compromisso com as críticas que de fato vão ser transformadas em ações importantes para a vida de cada um, a partir de uma compreensão mais honesta e compassiva consigo.`
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    titulo: "Carreira e Saúde Mental",
    resumo: "É possível cuidar da carreira profissional e da saúde mental ao mesmo tempo?",
    conteudo: `É claro que para alcançar um crescimento profissional é necessário esforço, mas quando esse esforço não corresponde à expectativa, há uma lacuna entre o que se espera e o que é possível, consequentemente uma carga maior de sofrimento gerada nesse processo.

É importante que tenhamos expectativas e é compreensível que elas sejam altas, afinal a realização profissional envolve vários sonhos e também diz respeito a como queremos estar no futuro. O problema acontece quando em nome de tão altas expectativas, a realização desse sonho começa a soar impossível e passa a ofuscar o reconhecimento dos passos que estão sendo dados ou até mesmo a paralisar o investimento que de fato poderia estar sendo feito.

Prestar atenção a como esse campo da vida de cada um é afetado por outras relações é uma forma de cuidado. Seja pelo ambiente no qual se é desenvolvido esse investimento; pelas pessoas que influenciam nesse desenvolvimento; a forma como cada um se relaciona com esse desenvolvimento…

Reconhecer essas expectativas/frustrações é o primeiro passo para compreender de onde elas nascem e assim ter um melhor diálogo com as possibilidades reais, construindo uma caminhada saudável na direção que cada um deseja seguir.`
  },
  {
    icon: <Shield className="w-6 h-6" />,
    titulo: "Impotência e Limites",
    resumo: "Como lidar com o sentimento de impotência e aprender a reconhecer nossos limites?",
    conteudo: `Impotência é um tema bem recorrente na minha escuta clínica e arrisco dizer que é algo que todos nós sentimos em determinadas situações. Muitas vezes esse sentimento pode tomar grandes proporções e geralmente aparece quando nos deparamos com algo que tendemos a ver como algo negativo: limites.

Sim, o indesejável limite que vem nos falar que, aquela coisa que gostaríamos de realizar, de certa maneira, em certo tempo e em tal lugar, não vai acontecer bem assim e que vamos ter que recalcular a rota e traçar algum plano que dialogue com as possibilidades da realidade.

Mas infelizmente a superprodutividade tem sido declarada como atual estilo de vida, aceitar limitações tem soado como erro e o lazer visto como uma perda de tempo. Acontece que o saldo de uma vida focada em expectativas irreais demora a chegar, mas chega enquanto esgotamento trazendo exatamente o que temos nos convencido a ignorar: o sentimento de impotência.

Conhecer seus próprios limites é o caminho mais saudável de se aproximar deles e de eventualmente superá-los e deparar-se com outros e isso também é um processo de autoconhecimento.`
  },
  {
    icon: <Users className="w-6 h-6" />,
    titulo: "Diversidade e Narrativas LGBTQIA+",
    resumo: "A importância de poder contar nossas próprias histórias e construir narrativas de dignidade.",
    conteudo: `Em junho celebramos o orgulho LGBTQIA+, essa data foi estabelecida nos Estados Unidos em honra à rebelião de Stonewall, protagonizada por Marsha P. Johnson e Sylvia Rivera (mulheres trans) em resposta à repressão policial aos espaços LGBTQIA+.

Celebrar essa data significa olhar para o processo histórico e perceber como, enquanto sociedade, lidamos com as diferenças através do tempo. Fazer essa retrospectiva não é fácil pois muitos fatos históricos foram carregados de muitas violências. Você sabia que até 1830 a homossexualidade era considerada crime e vista como doença até 1985?

Faz pouco tempo que mudamos essa perspectiva e a maneira como narramos os fatos é fundamental para que possamos superar a dor da história que aconteceu e estar aqui celebrando com orgulho todas as letras dessa bandeira, nos fortalecendo para as várias lutas que ainda temos que enfrentar.

Parte dessa força vem da possibilidade de poder contar suas histórias, criando vozes próprias diante das violências que foram cometidas no passado e que ainda acontecem nos dias de hoje. Esse processo pode ser lido como uma criação de narrativas próprias, contadas por quem as vive.

A existência dessa voz é algo fundamental para todos os seres humanos. Enquanto terapeuta, trabalho ajudando meus clientes a retomarem as rédeas de suas histórias, se aproximando dos capítulos que muitas vezes em nome da dor, são ignorados. As pessoas LGBTQIA+ têm muito a ensinar sobre essa coragem de olhar para as feridas, as violências e para a história e reunir forças para recontar a história e ser de fato quem se é.`
  },
  {
    icon: <Heart className="w-6 h-6" />,
    titulo: "Emoções Contraditórias",
    resumo: "É possível sentir várias emoções ao mesmo tempo, inclusive emoções que parecem se contradizer.",
    conteudo: `E o que você sentiu no momento?

Muitas vezes tentamos categorizar um acontecimento em uma emoção e acabamos esquecendo da possibilidade de sentirmos várias emoções, incluindo emoções que parecem contraditórias e emoções que não gostaríamos de ter sentido.

É possível sentir medo do amor, melancolia pela efemeridade de uma alegria, raiva por estar triste e infinitas combinações de emoções, que inevitavelmente, pertencem à subjetividade humana e podem aparecer das mais variadas formas de acordo com a singularidade de cada pessoa.

Por isso é tão importante parar para observar e reviver esses acontecimentos em um momento mais tranquilo e assim perceber o que ficou mascarado. Esse movimento amplia nossa noção de si, da situação e do nosso vocabulário interno.

Quando conseguimos olhar nossa experiência com liberdade, ampliamos nossa noção de si, nos tornamos mais congruentes e atualizamos melhor nossa experiência em acontecimentos futuros.`
  }
];

export const OlharClinico = () => {
  return (
    <section id="olhar-clinico" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Olhar Clínico
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Reflexões sobre temas que atravessam a experiência humana e que frequentemente 
            aparecem no processo terapêutico. Um convite para pensar junto.
          </p>
        </div>

        <div className="space-y-4">
          {reflexoes.map((reflexao, index) => (
            <Reflexao
              key={index}
              icon={reflexao.icon}
              titulo={reflexao.titulo}
              resumo={reflexao.resumo}
              conteudo={reflexao.conteudo}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            Textos autorais — Felipe Araujo de Melo | CRP 06/193310
          </p>
        </div>
      </div>
    </section>
  );
};
