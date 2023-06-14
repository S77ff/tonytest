<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <BR/>
    <h2> H2 - This page could be used as a Feature Toggle Wiki</h2>
    <h3> H3 - This page could be used as a Feature Toggle Wiki</h3>
    <h4> H4 - This page could be used as a Feature Toggle Wiki</h4>
    <p> P - This page could be used as a Feature Toggle Wiki</p>
  </div>
</template>

<script>
  export default {
    name: "Toggles-1",
    data: () => ({
        pageTitle: "Toggles"
    }),
};
</script>
