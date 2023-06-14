<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    
    <div class="feature"  v-for="(item, index) in permissionFile" :key="index">
      <span class="feature-name">{{item.FeatureName}}</span>
      <span class="feature-status">
        <label class="switch">
          <input type="checkbox" :checked="item.On" disabled>
          <span class="slider round"></span>
        </label>
      </span>
    </div>
    <p><pre><code>{{ permissionFile }}</code></pre></p>
  </div>
</template>

<script>
  export default {
    name: "Permission-Toggles",
    data: () => ({
      pageTitle: "Permission Toggles",
      permissionFile: [{"FeatureName":"TESTFEATURE","On":true},{"FeatureName":"QOF","On":false},{"FeatureName":"BUSINESSCONTINUITY","On":false},{"FeatureName":"CAREPATHWAYS","On":true},{"FeatureName":"PartialWordCPSearch","On":false},{"FeatureName":"WCCG","On":true},{"FeatureName":"WGPP","On":true},{"FeatureName":"BSTI_DARK_MODE","On":false},{"FeatureName":"BSTI_VON_VIEWER","On":false},{"FeatureName":"SCI_GATEWAY","On":false},{"FeatureName":"DM_CREATE_TASK","On":true},{"FeatureName":"SHARING_AGREEMENT_INDICATOR","On":true},{"FeatureName":"string","On":true},{"FeatureName":"test_del_button","On":true},{"FeatureName":"","On":false},{"FeatureName":"dd","On":false}]
    })
  };

</script>

<style>
.json-base-value {
  position: relative;
}

.json-string-object-node {
  position: relative;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .3) inset;
  padding: 0 1rem;
  margin: 0 1rem 0rem 1rem ;
  background-color: white;
}

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  input:checked + .slider {
    background-color: #41B883;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #41B883;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }

  .feature-name {
    margin-right: 10px;
    font-weight: bold;
  }

  .feature {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

    .release-name {
    margin-right: 10px;
    font-weight: bold;
  }

  .release {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .box {
    border: none;
    padding: 0px;
    border-radius: 5px;
    width: 490px;
  }
</style>