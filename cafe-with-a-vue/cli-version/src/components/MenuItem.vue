<template>
    <div class="menu-item">
      <img
        class="menu-item__image"
        :src="imgSrc"
        :alt="imgAlt"
      />
      <div>
        <h3>{{ itemName }}</h3>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <div>
            <label for="add-item-quantity"
            >Quantity: {{ quantity }}</label
            >
            <input
            v-model.number="quantity"
            id="add-item-quantity"
            type="number"
            />
            <button @click="addToShoppingCart(quantity)">
            Add to Shopping Cart
            </button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'MenuItem',
      props: ['imgSrc', 'imgAlt', 'itemName', 'inStock', 'quantity', 'addToShoppingCart']
    }
</script>

<style>
  .menu-item {
    display: flex;
    width: 500px;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  .menu-item__image {
    max-width: 300px;
  }
</style>