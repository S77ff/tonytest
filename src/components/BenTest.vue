<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <div>
            <h4 class="title">{{ pageTitle }}</h4>
            <v-text-field v-model="name" label="Name"></v-text-field>
            <v-text-field v-model="label" label="Label"></v-text-field>
            <v-textarea
              label="Notes"
              outlined
              placeholder="Additional Notes"
            ></v-textarea>
            <h4 class="title">RULES</h4>
            <v-switch>
              <template #label>
                <span class="label-text">Feature is </span>
                <span class="bold-text">OFF</span>
                <span class="label-text"> by default</span>
              </template>
            </v-switch>
            <v-card class="custom-box">
              <div class="label">Create Rule1</div>
              <div class="radio-container">
                <div
                  class="radio-col"
                  v-for="(radio, index) in radioOptions"
                  :key="index"
                >
                  <v-radio
                    v-model="selectedRadio"
                    :label="radio.label"
                    :value="radio.value"
                  ></v-radio>
                </div>
              </div>
              <br />
              <div class="condition-title">CONDITION TITLE?</div>
              <v-row>
                <v-col cols="6">
                  <v-select
                    v-model="selectedEnvironment"
                    :items="dropdownEnvironment"
                    label="Environment"
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <v-select
                    v-model="selectedPlatform"
                    :items="dropdownPlatform"
                    label="Platform"
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-select
                    v-model="selectedVersion"
                    :items="dropdownVersion"
                    label="Version"
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <v-select
                    v-model="selectedApplication"
                    :items="dropdownApplication"
                    label="Application"
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
              <div class="condition-title">CONDITION TITLE?</div>
              <v-row>
                <v-col cols="4">
                  <v-select
                    v-model="selectedCountry"
                    :items="dropdownCountry"
                    label="Country"
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="4">
                  <v-select
                    v-model="selectedRegion"
                    :items="dropdownRegion"
                    label="Region"
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="4">
                  <v-select
                    v-model="selectedFederation"
                    :items="dropdownFederation"
                    label="Federation"
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-select
                    v-model="selectedPractice"
                    :items="dropdownPractice"
                    label="Practice"
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <v-select
                    v-model="selectedUser"
                    :items="dropdownUser"
                    label="User"
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    name: 'PermissionAdd',
    data() {
      return {
        pageTitle: 'TOGGLE DETAILS',
        name: '',
        label: '',
        radioOptions: [
          { label: 'Set feature on for...', value: 'option1' },
          { label: 'Set feature off for...', value: 'option2' },
        ],
        selectedRadio: '',
        selectedEnvironment: null,
        selectedPlatform: null,
        selectedVersion: null,
        selectedApplication: null,
        selectedCountry: null,
        selectedRegion: null,
        selectedFederation: null,
        selectedPractice: null,
        selectedUser: null,
        // Other v-model properties
        dropdownEnvironment: [
          'Environment 1',
          'Environment 2',
          'Environment 3',
        ],
        dropdownPlatform: ['Platform 1', 'Platform 2', 'Platform 3'],
        dropdownVersion: ['Version 1', 'Version 2', 'Version 3'],
        dropdownApplication: [
          'Application 1',
          'Application 2',
          'Application 3',
        ],
        dropdownCountry: ['Country 1', 'Country 2', 'Country 3'],
        dropdownRegion: ['Region 1', 'Region 2', 'Region 3'],
        dropdownFederation: ['Federation 1', 'Federation 2', 'Federation 3'],
        dropdownPractice: ['Practice 1', 'Practice 2', 'Practice 3'],
        dropdownUser: ['User 1', 'User 2', 'User 3'],
      }
    },
  }
</script>

<style scoped>
  span {
    white-space: pre;
  }

  .bold-text {
    font-weight: bold;
  }

  .custom-box {
    border: 1px solid #e0e0e0;
    background-color: transparent;
    padding: 16px;
    margin-top: 16px;
    position: relative;
  }

  .label {
    position: absolute;
    top: -10px;
    left: 10px;
    background-color: #fdfbfb;
    color: grey;
    padding: 1px 8px;
    font-size: 14px;
  }

  .radio-container {
    display: flex;
    flex-wrap: wrap;
  }

  .radio-col {
    flex-basis: 50%;
    max-width: 50%;
    padding: 8px;
    box-sizing: border-box;
  }

  .condition-title {
    margin-top: 20px;
    font-size: 14px;
    color: grey;
  }

  .title {
    text-align: left;
    color: grey;
  }
</style>
