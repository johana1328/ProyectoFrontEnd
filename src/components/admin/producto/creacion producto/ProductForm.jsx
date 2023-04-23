import React from "react";
import './productForm.css';

function ProductForm() {
  return (
    
    <section>
      <div class="container"></div>
      <form>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div>
        <label htmlFor="value">Valor:</label>
        <input type="number" id="value" name="value" required />
      </div>

      <div>
        <label htmlFor="quantity">Cantidad:</label>
        <input type="number" id="quantity" name="quantity" required />
      </div>

      <div>
        <label htmlFor="type">Tipo:</label>
        <select id="type" name="type" required>
          <option value="">Selecciona un tipo</option>
          <option value="ropa">Ropa</option>
          <option value="accesorio">Accesorio</option>
          <option value="tecnologia">Tecnología</option>
        </select>
      </div>

      <div>
        <label htmlFor="promo">Promoción:</label>
        <input type="checkbox" id="promo" name="promo" />
      </div>

      <div>
        <label htmlFor="image">Imagen:</label>
        <input type="file" id="image" name="image" accept="image/*" required />
      </div>

      <div>
        <label htmlFor="description">Descripción:</label>
        <textarea id="description" name="description" required></textarea>
      </div>

      <div>
        <button type="button">Cancelar</button>
        <button type="submit">Guardar</button>
      </div>
    </form>
    </section>
    
  );
}

export default ProductForm;
