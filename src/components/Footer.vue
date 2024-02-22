<template>
  <footer class="p-5 bg-dark">
    <h5 class="m-4">DELICATESSEN</h5>
    <span>Created By Laureano Zalazar</span> <br>
    <p>Check out my <a href="https://github.com/LaureanoZ"> Github profile</a></p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
h5  {
  font-family: 'Oswald', monospace;
}

span, p , footer {
  font-size: 10px;
}

span:hover {
  text-decoration: underline;
  text-underline: #42b983;
  color: white;
  cursor: pointer;
  font-family: 'Raleway', monospace;
  font-weight: 600;
}

a {
  text-decoration: none;
  color: #2c3e50;
  cursor: pointer;
  font-weight: 600;
  font-size: 10px;

}

h5 {
  color: #2c3e50;
}

h5:hover {
  color: white;
}

a:hover {
  text-decoration: underline;
  text-underline: #42b983;
  color: white;
  cursor: pointer;

}
</style>
