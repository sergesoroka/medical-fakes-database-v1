import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./../styles/Home.module.scss";

const About = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <>
      <Head>
        <title>Опис проєкту | Detox від пропаганди</title>
      </Head>
      {locale == "ua" && (
        <div className={styles.aboutPage}>
          <h1 className={styles.aboutPageTitle}>Опис проєкту</h1>

          <p>
            &laquo;Дезінформація вбиває&raquo; &mdash; це проєкт фактчекерів
            VoxCheck за підтримки USAID із протидії фейкам у системі охорони
            здоров&rsquo;я. Наша мета &mdash; підвищувати рівень
            медіаграмотності та стійкості до дезінформації, пов&rsquo;язаної з
            темою здоров&rsquo;я, серед українців.&nbsp;
          </p>

          <p>
            Ми моніторимо інформаційний простір &mdash; медіа та соціальні
            мережі &mdash; України, Росії та Білорусі, та виявляємо
            дезінформаційні наративи про громадське здоров&rsquo;я. У фокусі
            особливої уваги &mdash; регіональні медіа, оскільки наша основна
            цільова аудиторія &mdash; українці в регіонах, які перебувають під
            найбільшим впливом фейків про здоров&rsquo;я.&nbsp;
          </p>

          <p>
            Щотижня ми випускаємо текстовий аналіз дезінформаційних наративів у
            медіа. А також відео та інфографіки зі спростуванням актуальних
            фейків про здоров&rsquo;я та медицину. На основі моніторингу ми
            розробляємо онлайн-базу &laquo;Детокс від брехні&raquo;, яка
            включатиме десятки розвінчаних кейсів.&nbsp;
          </p>

          <p>
            Дезінформація вбиває &mdash; тому ми підвищуємо стійкість до неї,
            щоб українці могли зберегти свої життя та здоров&rsquo;я під час
            війни фізичної та інформаційної.&nbsp;
          </p>
        </div>
      )}

      {locale == "en" && (
        <div className={styles.aboutPage}>
          <h1 className={styles.aboutPageTitle}>Description of the project</h1>

          <p>
            &quot;Disinformation Kills&quot; is a USAID-supported project by
            VoxCheck fact-checkers to combat fakes in the health care system.
            Our goal is to increase the level of media literacy and resistance
            to misinformation related to the topic of health among Ukrainians.
          </p>

          <p>
            We monitor the information space &mdash; media and social networks
            &mdash; of Ukraine, russia, and belarus and identify disinformation
            narratives about public health. The focus of special attention is on
            regional media, as our main target audience is Ukrainians in the
            regions most affected by health fakes.
          </p>

          <p>
            Every week we release a textual analysis of disinformation
            narratives in the media. As well as videos and infographics refuting
            current fakes about health and medicine. Based on the monitoring, we
            are developing an online database, &quot;Detox from Lies&quot;,
            which will include dozens of debunked cases.
          </p>

          <p>
            Disinformation kills &mdash; that&#39;s why we increase resistance
            to it so that Ukrainians can save their lives and health during the
            physical and informational war.
          </p>
        </div>
      )}

      {locale == "ru" && (
        <div className={styles.aboutPage}>
          <h1 className={styles.aboutPageTitle}>Описание проекта</h1>

          <p>
            «Дезинформация убивает» — это проект фактчекеров VoxCheck при
            поддержке USAID по противодействию фейкам в системе здравоохранения.
            Наша цель – повышать уровень медиаграмотности и устойчивости к
            дезинформации, связанной с темой здоровья, среди украинцев.
          </p>
          <p>
            Мы мониторим информационное пространство – медиа и социальные сети –
            Украины, россии и беларуси, и выявляем дезинформационные нарративы
            об общественном здоровье. В фокусе особого внимания – региональные
            медиа, поскольку наша основная целевая аудитория – украинцы в
            регионах, которые находятся под наибольшим влиянием фейков о
            здоровье.
          </p>
          <p>
            Еженедельно мы выпускаем текстовый анализ дезинформационных
            нарративов в медиа. А также видео и инфографики с опровержением
            актуальных фейков о здоровье и медицине. На основе мониторинга мы
            разрабатываем онлайн-базу «Детокс от лжи», которая будет включать в
            себя десятки развенчанных кейсов.
          </p>
          <p>
            Дезинформация убивает, поэтому мы повышаем устойчивость к ней, чтобы
            украинцы могли сохранить свои жизни и здоровье во время войны
            физической и информационной.
          </p>
        </div>
      )}
    </>
  );
};

export default About;
