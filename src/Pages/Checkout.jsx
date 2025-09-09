const Checkout = () => {
  return (
    <div>
      <h2>Finalizar Compra</h2>
      <form>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo" required />
        <input type="text" placeholder="Dirección" required />
        <button type="submit">Confirmar Compra</button>
      </form>
    </div>
  );
};

export default Checkout;
