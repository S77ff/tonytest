<template>
  <v-app>
    <h1> {{ pageTitle }} </h1>
    <v-main>
      <v-container fluid>
        <!-- Navigation buttons -->
        <v-row justify="center">
          <v-btn @click="previousItem" :disabled="currentIndex === 0">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn @click="nextItem" :disabled="currentIndex === array.length - 1">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </v-container>
        <v-card>
          <v-card-text>
            <h2>{{ currentItem }}</h2>
            <BR />
            <!-- <v-text-field v-model="featureNameLabel1" label="FeatureName" value="Test"></v-text-field> -->
            <!-- <v-text-field v-model="featureNameLabel" label="FeatureName" value="Test"></v-text-field> -->
            Feature Name: {{ permissionPlusFile.Features[this.currentIndex].FeatureName }}
            <BR /><BR />
            Feature Label: {{ permissionPlusFile.Features[this.currentIndex].FeatureLabel }}
            <BR /><BR />
            Feature On: {{ permissionPlusFile.Features[this.currentIndex].On }}
            <BR /><BR />
            <v-row justify="center">
              <v-btn @click="previousRule" :disabled="ruleIndex === 0">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <span>{{ currentRule }}</span>
              <v-btn @click="nextRule" :disabled="ruleIndex === ruleArray.length - 1">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-row>
            <!-- <BR /><BR />
            Rule: <h4>{{ permissionPlusFile.Features[this.currentIndex].Rules[ruleIndex] }}</h4>
            <BR /><BR />
            The Rule: {{ theRule }}
            <BR /><BR />
            Rule Name: {{ theRule?.Name}} -->
            <BR /><BR />
            User Name: {{ theRule?.UserName }}
            <BR /><BR />
            Practice Code: {{ theRule?.PracticeCode }}
            <BR /><BR />
            Region: {{ theRule?.HealthBoardRegion}}
            <BR /><BR />
            App: {{ theRule?.App }}
            <BR /><BR />
            App Version: {{ theRule?.AppVersion }}
            <BR /><BR />
            OS: {{ theRule?.OS }}
            <BR /><BR />
            OS Version: {{ theRule?.OSVersion }}
            <BR /><BR />
            Federated: {{ theRule?.IsFederated }}
            <BR /><BR />
            Environment: {{ theRule?.Environment }}
            <BR /><BR />
            Toggled On: {{ theRule?.IsToggledOn }}
            <BR /><BR />
            <h3>Rule: {{ permissionPlusFile.Features[this.currentIndex].Rules.length === 0 ? 0 : ruleIndex + 1 }} / {{ permissionPlusFile.Features[this.currentIndex].Rules.length }}</h3>
            <!-- {{ permissionPlusFile.Features[this.currentIndex] }}
            <BR /><BR /> -->
          </v-card-text>
        </v-card>
    </v-main>
  </v-app>

</template>

<script>
export default {
  data() {
    return {
      pageTitle: "Extended Permission Toggles",
      permissionPlusFile: {"Features":[{"FeatureName":"TESTFEATURE","FeatureLabel":"TESTFEATURE","Rules":[{"Name":"TurnOnForWales","UserName":"ttor@test3.com","PracticeCode":"wales","HealthBoardRegion":"33333","App":"VA","AppVersion":"3.6.0","OS":"windows","OSVersion":"8.1","IsFederated":true,"Environment":null,"IsToggledOn":false}],"On":true},{"FeatureName":"QOF","FeatureLabel":"QOF","Rules":[],"On":false},{"FeatureName":"BUSINESSCONTINUITY","FeatureLabel":"BUSINESSCONTINUITY","Rules":[{"Name":"","UserName":"ppow@test4.com","PracticeCode":null,"HealthBoardRegion":null,"App":null,"AppVersion":null,"OS":null,"OSVersion":null,"IsFederated":null,"Environment":null,"IsToggledOn":true},{"Name":"","UserName":"bash@test2.com","PracticeCode":null,"HealthBoardRegion":null,"App":null,"AppVersion":null,"OS":null,"OSVersion":null,"IsFederated":null,"Environment":null,"IsToggledOn":true},{"Name":"","UserName":"sbee@test2.com","PracticeCode":null,"HealthBoardRegion":null,"App":null,"AppVersion":null,"OS":null,"OSVersion":null,"IsFederated":null,"Environment":null,"IsToggledOn":true}],"On":false},{"FeatureName":"PRINTBARCODE","FeatureLabel":"PRINTBARCODE","Rules":[{"Name":"TurnOnForWales","UserName":null,"PracticeCode":null,"HealthBoardRegion":"W31111","App":null,"AppVersion":"3.3.0","OS":null,"OSVersion":null,"IsFederated":null,"Environment":null,"IsToggledOn":true}],"On":false},{"FeatureName":"CAREPATHWAYS","FeatureLabel":"CAREPATHWAYS","Rules":[{"Name":"TurnOffOnWindows8.1","UserName":null,"PracticeCode":null,"HealthBoardRegion":null,"App":null,"AppVersion":null,"OS":"windows","OSVersion":"8.1","IsFederated":null,"Environment":null,"IsToggledOn":false},{"Name":"TurnOffOnAndroid","UserName":null,"PracticeCode":null,"HealthBoardRegion":null,"App":null,"AppVersion":null,"OS":"android","OSVersion":null,"IsFederated":null,"Environment":null,"IsToggledOn":false}],"On":true},{"FeatureName":"EMED3","FeatureLabel":"EMED3","Rules":[{"Name":"TurnOnFor3.6.0OnWindows","UserName":null,"PracticeCode":null,"HealthBoardRegion":null,"App":null,"AppVersion":"3.6.0","OS":"windows","OSVersion":null,"IsFederated":null,"Environment":null,"IsToggledOn":true}],"On":false},{"FeatureName":"PartialWordCPSearch","FeatureLabel":"PartialWordCPSearch","Rules":[],"On":false},{"FeatureName":"CAREPATHWAY_COMPATCHECKS","FeatureLabel":"CAREPATHWAY_COMPATCHECKS","Rules":[{"Name":"TurnOffFor3.4.0forTtor","UserName":"ttor@test3.com","PracticeCode":null,"HealthBoardRegion":null,"App":null,"AppVersion":"3.4.0","OS":null,"OSVersion":null,"IsFederated":null,"Environment":null,"IsToggledOn":false}],"On":false},{"FeatureName":null,"FeatureLabel":"WCCG","Rules":[],"On":true},{"FeatureName":null,"FeatureLabel":"WGPP","Rules":[],"On":true},{"FeatureName":null,"FeatureLabel":"BSTI_DARK_MODE","Rules":[],"On":false},{"FeatureName":null,"FeatureLabel":"BSTI_VON_VIEWER","Rules":[],"On":false},{"FeatureName":"SCI Gateway","FeatureLabel":"SCI_GATEWAY","Rules":[{"Name":"string","UserName":"bob.ash@visionhealth.co.uk,richard.linden@visionhealth.co.uk","PracticeCode":null,"HealthBoardRegion":"Scotland","App":null,"AppVersion":null,"OS":null,"OSVersion":null,"IsFederated":null,"Environment":null,"IsToggledOn":true}],"On":false},{"FeatureName":"DocHub","FeatureLabel":"DM_CREATE_TASK","Rules":[],"On":true},{"FeatureName":"Sharing Agreement Indicator","FeatureLabel":"SHARING_AGREEMENT_INDICATOR","Rules":[],"On":true},{"FeatureName":"string","FeatureLabel":"string","Rules":[{"Name":"test_del_button","UserName":"user@email.com,notuser@email.com","PracticeCode":"99903","HealthBoardRegion":"string","App":"our app","AppVersion":"version","OS":null,"OSVersion":null,"IsFederated":null,"Environment":"dev,prod","IsToggledOn":true}],"On":true},{"FeatureName":"feature name","FeatureLabel":"test_del_button","Rules":[{"Name":"rule name","UserName":"user@email.com,notuser@email.com","PracticeCode":"id","HealthBoardRegion":"string","App":"our app","AppVersion":"version","OS":null,"OSVersion":null,"IsFederated":null,"Environment":"dev,prod","IsToggledOn":false}],"On":true},{"FeatureName":null,"FeatureLabel":"","Rules":[],"On":false},{"FeatureName":null,"FeatureLabel":"dd","Rules":[],"On":false}]},
      array: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5", "Feature 6", "Feature 7", "Feature 8", "Feature 9", "Feature 10", "Feature 11", "Feature 12", "Feature 13", "Feature 14", "Feature 15", "Feature 16", "Feature 17", "Feature 18", "Feature 19", "Feature 20"],
      currentIndex: 0,
      ruleArray: ["  Rule 1  ", "  Rule 2  ", "  Rule 3  "],
      ruleIndex: 0
    };
  },
  computed: {
    currentItem() {
      return this.array[this.currentIndex];
    },
    currentRule() {
      return this.ruleArray[this.ruleIndex];
    },
    theRule() {
      if (this.permissionPlusFile.Features[this.currentIndex].Rules.length > 0 ) {
        return this.permissionPlusFile.Features[this.currentIndex].Rules[this.ruleIndex]
      } else {
        return null
      }
    }
  },
  methods: {
    previousItem() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
      this.ruleIndex = 0;
    },
    nextItem() {
      if (this.currentIndex < this.array.length - 1) {
        this.currentIndex++;
      }
      this.ruleIndex = 0;
    },
    previousRule() {
      if (this.ruleIndex > 0) {
        this.ruleIndex--;
      }
    },
    nextRule() {
      if (this.ruleIndex < this.permissionPlusFile.Features[this.currentIndex].Rules.length - 1) {
        this.ruleIndex++;
      }
    }
  }
};
</script>

<style scoped>
span {
  white-space: pre;
}

</style>


<!-- <template>
  <div>
    <h1>{{ pageTitle }}</h1>
    
    <p><pre><code>{{ permissionPlusFile }}</code></pre></p>
  </div>
</template>

<script>
  export default {
    name: "Extended-Permission-Toggles",
    data: () => ({
      pageTitle: "Extended Permission Toggles",
      permissionPlusFile: {"Features":[{"FeatureName":"TESTFEATURE","FeatureLabel":"TESTFEATURE","Rules":[{"Name":"TurnOnForWales","UserName":"ttor@test3.com","PracticeCode":"wales","HealthBoardRegion":"33333","App":"VA","AppVersion":"3.6.0","OS":"windows","OSVersion":"8.1","IsFederated":true,"Environment":null,"IsToggledOn":false}],"On":true},{"FeatureName":"QOF","FeatureLabel":"QOF","Rules":[],"On":false},{"FeatureName":"BUSINESSCONTINUITY","FeatureLabel":"BUSINESSCONTINUITY","Rules":[{"Name":"","UserName":"ppow@test4.com","PracticeCode":null,"HealthBoardRegion":null,"App":null,"AppVersion":null,"OS":null,"OSVersion":null,"IsFederated":null,"Environment":null,"IsToggledOn":true},{"Name":"","UserName":"bash@test2.com","PracticeCode":null,"HealthBoardRegion":null,"App":null,"AppVersion":null,"OS":null,"OSVersion":null,"IsFederated":null,"Environment":null,"IsToggledOn":true},{"Name":"","UserName":"sbee@test2.com","PracticeCode":null,"HealthBoardRegion":null,"App":null,"AppVersion":null,"OS":null,"OSVersion":null,"IsFederated":null,"Environment":null,"IsToggledOn":true}],"On":false},{"FeatureName":"PRINTBARCODE","FeatureLabel":"PRINTBARCODE","Rules":[{"Name":"TurnOnForWales","UserName":null,"PracticeCode":null,"HealthBoardRegion":"W31111","App":null,"AppVersion":"3.3.0","OS":null,"OSVersion":null,"IsFederated":null,"Environment":null,"IsToggledOn":true}],"On":false},{"FeatureName":"CAREPATHWAYS","FeatureLabel":"CAREPATHWAYS","Rules":[{"Name":"TurnOffOnWindows8.1","UserName":null,"PracticeCode":null,"HealthBoardRegion":null,"App":null,"AppVersion":null,"OS":"windows","OSVersion":"8.1","IsFederated":null,"Environment":null,"IsToggledOn":false},{"Name":"TurnOffOnAndroid","UserName":null,"PracticeCode":null,"HealthBoardRegion":null,"App":null,"AppVersion":null,"OS":"android","OSVersion":null,"IsFederated":null,"Environment":null,"IsToggledOn":false}],"On":true},{"FeatureName":"EMED3","FeatureLabel":"EMED3","Rules":[{"Name":"TurnOnFor3.6.0OnWindows","UserName":null,"PracticeCode":null,"HealthBoardRegion":null,"App":null,"AppVersion":"3.6.0","OS":"windows","OSVersion":null,"IsFederated":null,"Environment":null,"IsToggledOn":true}],"On":false},{"FeatureName":"PartialWordCPSearch","FeatureLabel":"PartialWordCPSearch","Rules":[],"On":false},{"FeatureName":"CAREPATHWAY_COMPATCHECKS","FeatureLabel":"CAREPATHWAY_COMPATCHECKS","Rules":[{"Name":"TurnOffFor3.4.0forTtor","UserName":"ttor@test3.com","PracticeCode":null,"HealthBoardRegion":null,"App":null,"AppVersion":"3.4.0","OS":null,"OSVersion":null,"IsFederated":null,"Environment":null,"IsToggledOn":false}],"On":false},{"FeatureName":null,"FeatureLabel":"WCCG","Rules":[],"On":true},{"FeatureName":null,"FeatureLabel":"WGPP","Rules":[],"On":true},{"FeatureName":null,"FeatureLabel":"BSTI_DARK_MODE","Rules":[],"On":false},{"FeatureName":null,"FeatureLabel":"BSTI_VON_VIEWER","Rules":[],"On":false},{"FeatureName":"SCI Gateway","FeatureLabel":"SCI_GATEWAY","Rules":[{"Name":"string","UserName":"bob.ash@visionhealth.co.uk,richard.linden@visionhealth.co.uk","PracticeCode":null,"HealthBoardRegion":"Scotland","App":null,"AppVersion":null,"OS":null,"OSVersion":null,"IsFederated":null,"Environment":null,"IsToggledOn":true}],"On":false},{"FeatureName":"DocHub","FeatureLabel":"DM_CREATE_TASK","Rules":[],"On":true},{"FeatureName":"Sharing Agreement Indicator","FeatureLabel":"SHARING_AGREEMENT_INDICATOR","Rules":[],"On":true},{"FeatureName":"string","FeatureLabel":"string","Rules":[{"Name":"test_del_button","UserName":"user@email.com,notuser@email.com","PracticeCode":"99903","HealthBoardRegion":"string","App":"our app","AppVersion":"version","OS":null,"OSVersion":null,"IsFederated":null,"Environment":"dev,prod","IsToggledOn":true}],"On":true},{"FeatureName":"feature name","FeatureLabel":"test_del_button","Rules":[{"Name":"rule name","UserName":"user@email.com,notuser@email.com","PracticeCode":"id","HealthBoardRegion":"string","App":"our app","AppVersion":"version","OS":null,"OSVersion":null,"IsFederated":null,"Environment":"dev,prod","IsToggledOn":false}],"On":true},{"FeatureName":null,"FeatureLabel":"","Rules":[],"On":false},{"FeatureName":null,"FeatureLabel":"dd","Rules":[],"On":false}]}
    })
  };
</script> -->
