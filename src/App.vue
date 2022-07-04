<template>
 
    <div class="nav container">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  
  
  <router-view/>
</template>



<style lang="scss">
@import './assets/varmix.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family:'Gilroy-Bold';
  @include letterH4HeadingBurgerMenuTextNumbersDarkBlue;
}

.nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  border: 1px solid black;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
