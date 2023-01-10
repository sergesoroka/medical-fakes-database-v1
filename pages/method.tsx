import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./../styles/Home.module.scss";

const Method = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <>
      <Head>
        <title>Методологія | Detox від пропаганди</title>
      </Head>
      {locale == "ua" && (
        <div className={styles.aboutPage}>
          <h1 className={styles.aboutPageTitle}>Методологія</h1>

          <p>
            В онлайн-базі &laquo;Детокс від брехні&raquo; представлений огляд
            дезінформаційних наративів, які поширюються у сфері охорони
            здоров&rsquo;я серед користувачів з України, росії, Білорусі.
          </p>

          <p>
            Дезінформаційні наративи аналітики VoxCheck виділили у результаті
            щотижневого моніторингу російської пропаганди в інформаційному
            просторі України, росії та Білорусі. Аналіз інформаційного простору
            здійснюється за допомогою електронних інструментів моніторингу, а
            також ручного дослідження платформ та соціальних мереж. Основними
            каналами для моніторингу є соціальні мережі, телебачення, радіо,
            преса, інформаційні агенції.
          </p>

          <p>
            Різні фейки, маніпуляції є прикладами одного наративу, коли вони
            передають одне й те саме повідомлення, спрямоване на вплив на
            громадську думку у відповідних країнах. У кожного наративів у базі
            &laquo;Детокс від брехні&raquo; є кілька прикладів. Так, фейк про
            &laquo;діяльність небезпечних біолабораторій в Запоріжжі&raquo; є
            частиною наративу &laquo;Військово-біологічні лабораторії та медичні
            досліди над громадянами України&raquo;.&nbsp;
          </p>

          <p>Кожне з повідомлень у базі підпадає під одну з категорій:</p>

          <ul>
            <li>
              дезінформація &mdash; свідоме поширення неправдивої інформації;
            </li>
            <li>
              місінформація &mdash; неправдива інформація, яка виникла внаслідок
              несвідомих помилок користувачів;
            </li>
            <li>
              малінформація &mdash; правдива інформація, яку використовують для
              того, щоб завдати шкоди людині, організації або державі.
            </li>
          </ul>

          <p>
            Після виявлення таких наративів команда VoxCheck здійснює перевірку
            фактів та публікує її результати на сайті бази.
          </p>

          <p>
            Автори VoxCheck дотримуються прозорої політики під час перевірки
            фактів. У наших матеріалах ми надаємо всі джерела для перевірки
            достатньо детально, щоб читачі могли самостійно відтворити нашу
            роботу. Якість перевірок забезпечує редакційна колегія проєкту.
          </p>

          <p>
            VoxCheck є підписантом&nbsp;
            <a
              href="https://www.ifcncodeofprinciples.poynter.org/know-more/the-commitments-of-the-code-of-principles"
              rel="noopener noreferrer"
              target="_blank"
            >
              Кодексу принципів
            </a>
            &nbsp;Міжнародної фактчекінгової мережі (IFCN), і дотримується
            наступних зобов&rsquo;язань:
          </p>

          <ul>
            <li>неупередженість і об&rsquo;єктивність;</li>
            <li>висока якість та прозорість джерел;</li>
            <li>прозорість організації, зокрема прозорість її фінансування;</li>
            <li>високі стандарти та прозорість методології;</li>
            <li>відкрита та чесна політика виправлень.</li>
          </ul>
        </div>
      )}
      {locale == "en" && (
        <div className={styles.aboutPage}>
          <h1 className={styles.aboutPageTitle}>Methodology</h1>

          <p>
            The online database &quot;Detox from Lies&quot; presents an overview
            of disinformation narratives that are spreading in the field of
            health care among users from Ukraine, russia, and belarus.
          </p>

          <p>
            Disinformation narratives were identified by VoxCheck analysts as a
            result of weekly monitoring of russian propaganda in the information
            space of Ukraine, russia and belarus. The analysis of the
            information space is carried out with the help of electronic
            monitoring tools, as well as manual research of platforms and social
            networks. The main channels for monitoring are social networks,
            television, radio, the press, and news agencies.
          </p>

          <p>
            Various fakes, and manipulations are examples of the same narrative
            when they convey the same message aimed at influencing public
            opinion in the respective countries. Each narrative in the
            &quot;Detox from Lies&quot; database has several examples. Thus, the
            fake about &quot;the activities of dangerous biolaboratories in
            Zaporizhzhia&quot; is part of the narrative
            &quot;Military-biological laboratories and medical experiments on
            citizens of Ukraine.&quot;
          </p>

          <p>Each of these narratives falls into one of three categories:</p>

          <ul>
            <li>
              disinformation, i.e., deliberate dissemination of false
              information;
            </li>
            <li>
              misinformation, i.e., inaccurate information that arose as a
              result of users&rsquo; unconscious errors;
            </li>
            <li>
              mal-information, i.e., accurate information used to harm a person,
              organization, or country.
            </li>
          </ul>

          <p>
            After discovering such narratives, the VoxCheck team conducts
            fact-checking and publishes its results on the database&#39;s
            website.
          </p>

          <p>
            VoxCheck authors adhere to a transparent fact-checking policy. In
            our materials, we provide all sources for verification in sufficient
            detail so that readers can reproduce our work on their own. The
            quality of checks is ensured by the editorial board of the project.
          </p>

          <p>
            VoxCheck is a signatory to the&nbsp;
            <a
              href="https://www.ifcncodeofprinciples.poynter.org/know-more/the-commitments-of-the-code-of-principles"
              rel="noopener noreferrer"
              target="_blank"
              
            >
              Code of Principles
            </a>
            &nbsp;of the International Fact-Checking Network (IFCN) and adheres
            to the following obligations:
          </p>

          <ul>
            <li>impartiality and objectivity;</li>
            <li>high quality and transparency of sources;</li>
            <li>
              transparency of the organization, in particular, transparency of
              its financing;
            </li>
            <li>high standards and transparency of the methodology;</li>
            <li>open and honest corrections policy.</li>
          </ul>
        </div>
      )}

      {locale == "ru" && (
        <div className={styles.aboutPage}>
          <h1 className={styles.aboutPageTitle}>Методология</h1>

          <p>
            В онлайн-базе «Детокс от лжи» представлен обзор дезинформационных
            нарративов, которые распространяются в сфере здравоохранения среди
            пользователей из Украины, россии, беларуси.
          </p>

          <p>
            Дезинформационные нарративы аналитики VoxCheck выделили в результате
            еженедельного мониторинга российской пропаганды в информационном
            пространстве Украины, россии и беларуси. Анализ информационного
            пространства осуществляется с помощью электронных инструментов
            мониторинга, а также ручного исследования платформ и социальных
            сетей. Основными каналами для мониторинга являются социальные сети,
            телевидение, радио, пресса, информационные агентства.
          </p>

          <p>
            Различные фейки, манипуляции являются примерами одного нарратива,
            когда они передают одно и то же сообщение, направленное на влияние
            на общественное мнение в соответствующих странах. У каждого
            нарратива в базе «Детокс от лжи» есть несколько примеров. Так, фейк
            о «деятельности опасных биолабораторий в Запорожье» является частью
            нарратива «Военно-биологические лаборатории и медицинские опыты над
            гражданами Украины».
          </p>

          <p>Каждое из сообщений в базе подпадает под одну из категорий:</p>

          <ul>
            <li>
              дезинформация — сознательное распространение ложной информации;
            </li>
            <li>
              мисинформация — ложная информация, возникшая вследствие
              неосознанных ошибок пользователей;
            </li>
            <li>
              малинформация — правдивая информация, используемая для того, чтобы
              нанести вред человеку, организации или государству.
            </li>
          </ul>

          <p>
            После обнаружения таких нарративов команда VoxCheck проверяет факты
            и публикует ее результаты на сайте базы.
          </p>

          <p>
            Авторы VoxCheck придерживаются прозрачной политики при проверке
            фактов. В наших материалах мы предоставляем все источники для
            проверки достаточно подробно, чтобы читатели могли самостоятельно
            воспроизвести нашу работу. Качество проверок обеспечивает
            редакционная коллегия проекта.
          </p>

          <p>
            VoxCheck является подписателем
            <a
              href="https://www.ifcncodeofprinciples.poynter.org/know-more/the-commitments-of-the-code-of-principles"
              rel="noopener noreferrer"
              target="_blank"
              
            >
              Кодекса принципов
            </a>
            Международной фактчекинговой сети (IFCN), и придерживается следующих
            обязательств:
          </p>

          <ul>
            <li>беспристрастность и объективность;</li>
            <li>высокое качество и прозрачность источников;</li>
            <li>
            прозрачность организации, в том числе прозрачность ее финансирования;
            </li>
            <li>высокие стандарты и прозрачность методологии;</li>
            <li>открытая и честная политика исправлений.</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Method;
