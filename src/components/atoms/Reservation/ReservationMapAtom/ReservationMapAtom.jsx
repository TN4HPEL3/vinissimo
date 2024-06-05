import css from './ReservationMapAtom.module.css';

function ReservationMapAtom() {
  return (
    <iframe
      className={css.reservation__map}
      title="reservationMap"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2320.095462588231!2d18.56470381211499!3d54.44360169194774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd0a91f03f1553%3A0x4d35de24c06c1072!2sVinissimo%20Restaurant%20%26%20Wine%20Bar!5e0!3m2!1spl!2spl!4v1716891316020!5m2!1spl!2spl"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export { ReservationMapAtom };
