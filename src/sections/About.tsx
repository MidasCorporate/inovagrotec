/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-indent */

'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      //@ts-ignore
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Inovagrotec" textStyles="text-center" />

      <motion.p
        variants={fadeIn(
         'up',
         'tween',
          0.2,
          1,
        )}
        className="mt-[8px] font-normal sm:text-[32px] text=[20px] text-center text-secondary-white"
      >
        Na <span className="font-extrabold text-white">Inovagrotec</span>, usamos{' '} 
        <span className="font-extrabold text-white">
          visão computacional
        </span>{' '}
         para transformar a agropecuária com{' '}
        <span className="font-extrabold text-white">
          inovação e eficiência
        </span>
        . Nosso foco é ajudar produtores a otimizar o manejo de seus rebanhos.
        Com nossa tecnologia, desenvolvemos um software que faz a{' '}
        <span className="font-extrabold text-white">
          contagem automática de leitões
        </span>{' '}
        , oferecendo {' '}
        <span className="font-extrabold text-white">precisão e agilidade</span> para
        monitorar grandes grupos de animais. Nosso software {' '}
        <span className="font-extrabold text-white">automatiza</span> a coleta
        de dados,{' '}
        <span className="font-extrabold text-white">
          eliminando erros humanos
        </span>{' '}
        e economizando tempo. Com isso, produtores tomam decisões baseadas em
        <span className="font-extrabold text-white">{' '}dados reais</span> ,
        garantindo o bem-estar dos animais. Estamos comprometidos com a
        <span className="font-extrabold text-white">{' '}inovação constante</span> ,
        buscando sempre novas soluções para
        <span className="font-extrabold text-white">
        {' '}maximizar a produtividade e a rentabilidade
        </span>{' '}
        da produção de suínos. Descubra como estamos
        <span className="font-extrabold text-white">
        {' '}revolucionando a suinocultura com inteligência artificial{' '}!
        </span>{' '}
      </motion.p>
      <motion.img
        variants={fadeIn(
          'up',
          'tween',
          0.3,
           1,
        )}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
