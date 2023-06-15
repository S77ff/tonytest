<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <div class="feature"  v-for="(item, index) in releaseToggles" :key="index">
      <span class="feature-name">{{item[0].Name}}</span>
      <span class="feature-status">
        <label class="switch">
          <input type="checkbox" :checked="item.On" disabled>
          <span class="slider round"></span>
        </label>
      </span>
    </div>
    <p><pre><code>{{ releaseToggles }}</code></pre></p>
  </div>
</template>

<script>
  export default {
    name: "Feature-Toggles",
    data: () => ({
      pageTitle: "Release Toggles",
      releaseToggles: {"Features":[{"Name":"LATERALITY","On":false}]}
    })
  };
</script>
