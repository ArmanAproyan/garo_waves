import styles from './styles.module.scss';

const TicketPurchase = () => {

  return (
    <section className={styles.ticketSection}>
      <div className={styles.content}>
        <h1 className={styles.title}>Покупка билетов</h1>
        <p className={styles.subtitle}>Не упустите шанс! Купите билет на мероприятие Garo Waves</p>
        <p>В данный момент нету Концертов</p>
      </div>
    </section>
  );
};

export default TicketPurchase;
