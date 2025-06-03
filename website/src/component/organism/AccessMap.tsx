const AccessMap: React.FC = () => {
  return (
    <div style={{ height: 'inherit' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12960.493736720286!2d139.749087!3d35.69858!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dfcb414068b%3A0x5ee8b5584a10bfa7!2z5qCq5byP5Lya56S-QWNjZWxIYWNr!5e0!3m2!1sja!2sjp!4v1745401652619!5m2!1sja!2sjp"
        width="100%"
        height="400px"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div style={{ fontSize: '1rem' }}>
        〒1010072 東京都千代田区飯田橋1-5-6 協和ビル6A室
      </div>
    </div>
  );
};

export default AccessMap;
