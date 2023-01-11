import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'NEWS & EVENTS',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  29 september 2022
                  </div>
                <h3 className="mt-0 mb-12">
                Muh. Fadel Juara Lari Manunggal Tahun 2022
                  </h3>
                <p className="m-0">
                Muh Fadel siswa MAN 1 Kulonprogo tampil sebagai juara 1 kategori SMA/SMK/Umum putra Lomba Lari Manunggal Kulonprogo Tahun 2022 yang diselenggarakan pada hari Sabtu, 24 September 2022. Lomba dalam rangka Hari Jadi ke-72 Kabupaten Kulonprogo ini diikuti oleh 410 peserta putra dan putri.
Peserta SMA/SMK/Umum dilepas oleh Ketua DPRD Kulonprogo, Akhid Nuryati, SE. Sedangkan peserta SMP/MTs dilepas oleh Asisten Pemerintahan Kesra Pemkab Kulonprogo, Drs. Jazil Ambar Was’an. Pelepasan star Lari Manunggal dari lapangan Kaliagung Sentolo dan finis di Alun-alun Wates.
Dalam lomba menempuh jarak 9 km, Muh Fadel menyentuh garis finis pertama dengan waktu 28 menit 30 detik. Menyusul di belakangnya juara II Hakita Dori (SMAN 1 Pengasih. Juara III V. Guntur Pradana (Galur), Kristoporus UB (Wates), Roby Saparuane (Pertina Kulonprogo).
Kategori SMP/MTs putra, juara I V berturut-turut diraih oleh : Ruli Andrianto (SMPN 2 Galur), Rahmat Rifqi (MTsN 1 Kulonprogo, Yoga Fhatri Putra (SMPN 2 Galur), Nova Candra (SMPN 1 Nanggulan), Raffael Primera Satyo (SMPN 1 Pengasih).
Di kategori SMP/MTs putri juara I-V diraih oleh: Deswinta Putri (SMPN 1 Panjatan), Fani Afnan Janati (SMPN 1 Pengasih), Monica Agesti Kusumarani (SMPN 2 Galur), Alin Putri Daniel (SMP Muhammadiyah Nanggulan) dan Pradenta Arumsari (SMPN 3 Wates).
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../../assets/images/fadel.jpeg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  20 SEPTEMBER 2022
                  </div>
                <h3 className="mt-0 mb-12">
                DAYUNG KULONPROGO LAMPAUI TARGET MEDALI DI PORDA DIY XVI TAHUN 2022
                  </h3>
                <p className="m-0">
                Prestasi membanggakan diraih oleh Pengurus Kabupaten (Pengkab) Persatuan Olahraga Dayung Seluruh Indonesia (PODSI) Kulonprogo di event Pekan Olahraga Daerah (PORDA) DIY XVI tahun 2022. Dengan merebut 6 medali emas, 3 perak dan 4 perunggu Dayung melampaui target yang dicanangkan.

Ketua Pengkab PODSI Kulonprogo, Rochmad Nur Kholis mengatakan, sejak awal dimulai Pemusatan Latihan Kabupaten (Pelatkab), tim PODSI Kulonprogo menargetkan 5 medali emas.

“Kami bersyukur di PORDA DIY XVI tahun ini dari 19 nomor yang dilombakan berhasil meraih 6 medali emas. Hasil ini cukup membanggakan karena berhasil melebihi target yang kami sampaikan ke KONI Kulonprogo sejak awal persiapan”. Jelasnya.

Enam medali emas dipersembahkan oleh Yuan Tri Budi Prasetyo di nomor kayak 1 jarak 1.000 meter putra, Noviati Mardiana (kayak 1 200 meter putri), Noviati Mardiana dan Yuliana Damayanto (kayak 2 200 meter putri), Adhi Hartono, Akbar Kurniawan Suhendro, Dimas Putu Sanjaya dan Farid Hastungkoro (kayak 4 1.000 meter putra), Traditional Boat Race (TBR) 200 meter putra dan TBR 1.000 meter putra.

“Dengan persiapan yang maksimal sekitar satu tahun hasilnya bisa melebihi target yang dicanangkan. Keberhasilan ini tidak lepas dari semangat dan kedisiplinan para atlet yang telah menjalani latihan rutin setiap hari”. Jelasnya.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../../assets/images/DAYUNG.jpeg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  20 SEPTEMBER 2022
                  </div>
                <h3 className="mt-0 mb-12">
                RAMASKI SIAP MENGIKUTI KEJUARAAN DUNIA
                  </h3>
                <p className="m-0">Usai mengikuti Pekan Olahraga Daerah (PORDA) DIY tahun 2022, atlet panjat tebing asal Kulon Progo, Ramaski Aswin Kristanto bersiap mengikuti Kejuaraan Dunia Panjat Tebing yang diselenggarakan oleh Internatoinal Federation Sport Climbing (IFSC) pada tanggal
22-26 September 2022 di Jakarta.

Bidang Pembinaan dan Prestasi Pengurus Kabupaten (Pengkab) Federasi Panjat Tebing Indonesia (FPTI) Kulon Progo, Sukarni mengatakan, Ramaski telah mengukir prestasi membanggakan di Porda tahun ini dengan mempersembahkan 2 medali emas dan 1 perak untuk kontingen Kulon Progo.

Dua medali emas yang diraih siswa kelas XI MAN 1 Kulon Progo ini dari nomor speed WR umum putra dan speed beregu putra bersama Marji dan Widiatama Adi Sucipto. Sedangkan medali perak diperoleh dari nomor combine perorangan putra.

“Capaian prestasi di Porda DIY tahun 2022 dengan merebut 2 emas ini sangat membanggakan dan bisa menjadi bekal Ramaski sebelum bertanding di Kejuaraan Dunia Panjat Tebing. Setelah Porda Ramaski langsung melakukan persiapan intensif”, jelasnya.

Ramaski akan berupaya semaksimal mungkin untuk meraih prestasi terbaik di Kejuaraan Dunia . Persiapan telah dilakukan di Pemusatan Latihan Nasional (Pelatnas) dengan menjalani latihan rutin setiap hari pada pagi dan sore.</p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../../assets/images/dunia.jpeg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;