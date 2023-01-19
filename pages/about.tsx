/* eslint-disable react/no-unescaped-entities */
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
            «Дезінформація вбиває» — це проєкт фактчекерів VoxCheck за підтримки
            проєкту USAID «Підтримка реформи охорони здоров’я». Наша мета —
            підвищувати рівень медіаграмотності та стійкості до дезінформації,
            пов’язаної з темою здоров’я, серед українців.
          </p>

          <p>
            Ми моніторимо інформаційний простір — медіа та соціальні мережі —
            України, росії та Білорусі, та виявляємо дезінформаційні наративи
            про громадське здоров’я. У фокусі особливої уваги — регіональні
            медіа, оскільки наша основна цільова аудиторія — українці в
            регіонах, які перебувають під найбільшим впливом фейків про
            здоров’я.
          </p>

          <p>
            Щотижня ми випускаємо текстовий аналіз дезінформаційних наративів у
            медіа. А також відео та інфографіки зі спростуванням актуальних
            фейків про здоров’я та медицину. На основі моніторингу ми
            розробляємо онлайн-базу «Детокс від пропаганди, яка включатиме
            десятки розвінчаних кейсів.
          </p>

          <p>
            Дезінформація вбиває — тому ми підвищуємо стійкість до неї, щоб
            українці могли зберегти свої життя та здоров’я під час війни
            фізичної та інформаційної.
          </p>
        </div>
      )}

      {locale == "en" && (
        <div className={styles.aboutPage}>
          <h1 className={styles.aboutPageTitle}>Description of the project</h1>

          <p>
            "Disinformation Kills" is a project by VoxCheck fact-checkers
            supported by the USAID Health Reform Support project to combat fakes
            in the health care system. Our goal is to increase the level of
            media literacy and resistance to misinformation related to the topic
            of health among Ukrainians.
          </p>

          <p>
            We monitor the information space — media and social networks — of
            Ukraine, russia, and belarus and identify disinformation narratives
            about public health. The focus of special attention is on regional
            media, as our main target audience is Ukrainians in the regions most
            affected by health fakes.
          </p>

          <p>
            Every week we release a textual analysis of disinformation
            narratives in the media. As well as videos and infographics refuting
            current fakes about health and medicine. Based on the monitoring, we
            are developing an online database, "Detox from Propaganda", which
            will include dozens of debunked cases..
          </p>

          <p>
            Disinformation kills — that's why we increase resistance to it so
            that Ukrainians can save their lives and health during the physical
            and informational war.
          </p>
        </div>
      )}

      {locale == "ru" && (
        <div className={styles.aboutPage}>
          <h1 className={styles.aboutPageTitle}>Описание проекта</h1>

          <p>
            «Дезинформация убивает» — это проект фактчекеров VoxCheck при
            поддержке проекта USAID «Поддержка реформы здравоохранения». Наша
            цель – повышать уровень медиаграмотности и устойчивости к
            дезинформации, связанной с темой здоровья, среди украинцев.
          </p>
          <p>
            Мы мониторим информационное пространство – медиа и социальные сети –
            Украины, россии и Беларуси, и выявляем дезинформационные нарративы
            об общественном здоровье. В фокусе особого внимания – региональные
            медиа, поскольку наша основная целевая аудитория – украинцы в
            регионах, которые находятся под наибольшим влиянием фейков о
            здоровье.
          </p>
          <p>
            Еженедельно мы выпускаем текстовый анализ дезинформационных
            нарративов в медиа. А также видео и инфографики с опровержением
            актуальных фейков о здоровье и медицине. На основе мониторинга мы
            разрабатываем онлайн-базу «Детокс от пропаганды», которая будет
            включать в себя десятки развенчанных кейсов.
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
