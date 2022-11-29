<template>
  

  <v-container
    id="dashboard-view"
    tag="section"
  >
  <v-row>
    <v-col md="1">
      <v-icon large style="color: #00A6B3;">mdi-home</v-icon>
      
    </v-col>
    <v-col md="8">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search News"
        single-line
      ></v-text-field>
    </v-col>
    <v-col md="2">
      <span>Logged in as:</span>
      <h2 style="color: #00A6B3;">Hiroko Iida</h2>
      
    </v-col>
    <v-col md="1">
      <v-icon large>mdi-logout</v-icon>
      
    </v-col>
    
  </v-row>
  <v-row>
    <v-col md="4" class="" style="text-align: left!important;">
      <h1>GLOBAL PRODUCT DATABASE</h1><br>
      <span style="font-family: Lato, Italic; color: #3A3A3A; opacity: 50%;">
        * Item code or description is required
      </span><br>
      <span style="font-family: Lato, Italic; color: #3A3A3A; opacity: 50%;">
        * required
      </span>
    </v-col>
    <v-col md="8" style="align: left !important;">
      
    </v-col>
  </v-row>
    <v-row>
      <v-col md="4" >
        <h1 style="color:#00A6B3">Product 1</h1>
        <v-row  style="margin-bottom:20px !important;">
          <v-col>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="formData.code"
                :rules="codRules"
                label="Item code"
                required
                append-icon="mdi-numeric"
                
              ></v-text-field>

              <v-text-field
                v-model="formData.description"
                label="Description"
                required
                append-icon="mdi-text-long"
              ></v-text-field>
             

              <v-select 
                :items="items"
                item-text="name"
                item-value="value"
                label="Region"
                :rules="regionRules"
                v-model="formData.region"
                @change="changeCountry()"
                append-icon="mdi-earth"
              ></v-select>
             
              
              <v-select
                :items="itemsCountry"
                item-text="name"
                item-value="value"
                label="Country"
                v-model="formData.country"
                append-icon="mdi-flag"
              ></v-select>


              <v-btn
                color="success"
                :disabled="disable"
                @click="validate"
                append-icon="mdi-magnify"
                style="background-color: #00A6B3;"
              > <v-icon
        left
        dark
        large
      >
      mdi-magnify
      </v-icon>
                Search
              </v-btn>
            </v-form>
          </v-col>
          
        </v-row>
          <v-skeleton-loader
            v-bind="attrs"
            v-if="disable"
            type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
          ></v-skeleton-loader>
        <v-simple-table v-if="!disable" style="border: 1px solid #707070; background: #EEFBFF 0% 0% no-repeat padding-box;">
          <template v-slot:default>
            <tbody>
              <tr>
                <td>Picture</td>
                <td>
                  <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="150"
                    max-width="150"
                    src="https://picsum.photos/id/11/500/300"
                  ></v-img>
                </td>
              </tr>
              <tr>
                <td>Region</td>
                <td>{{table.region}}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{{table.country}}</td>
              </tr>
              <tr>
                <td>Item code</td>
                <td>{{table.code}}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{{table.desc}}</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>{{table.category}}</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>{{table.brand}}</td>
              </tr>
              <tr>
                <td>Nikken technology</td>
                <td></td>
              </tr>
              <tr>
                <td>Specs/Difference</td>
                <td>{{table.specs_difference}}</td>
              </tr>
              <tr>
                <td>Warranty period</td>
                <td>{{table.warranty}}</td>
              </tr>
              <tr>
                <td>Replacements and replacement period</td>
                <td></td>
              </tr>
              <tr>
                <td>Parent product</td>
                <td></td>
              </tr>
              <tr>
                <td>User manual / Insert</td>
                <td></td>
              </tr>
              <tr>
                <td>Packaging/Label</td>
                <td></td>
              </tr>
              <tr>
                <td>Video</td>
                <td></td>
              </tr>
              <tr>
                <td>Region</td>
                <td></td>
              </tr>
              <tr>
                <td>Fact sheet/QRS</td>
                <td></td>
              </tr>
              <tr>
                <td>Artwork User Manual / Insert</td>
                <td></td>
              </tr>
              <tr>
                <td>Artwork Packaging/Label</td>
                <td></td>
              </tr>
              <tr>
                <td>Product profile</td>
                <td></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col md="4">
        <h1 style="color:#00A6B3">Product 2</h1>
        <v-row  style="margin-bottom:20px !important;">
          <v-col>
            <v-form
              ref="form2"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="formData2.code"
                :rules="codRules"
                label="Item code"
                required
                append-icon="mdi-numeric"
              ></v-text-field>

              <v-text-field
                v-model="formData2.description"
                label="Description"
                required
                append-icon="mdi-text-long"
              ></v-text-field>

              <v-select
                :items="items"
                item-text="name"
                item-value="value"
                label="Region"
                append-icon="mdi-earth"
                :rules="regionRules"
                v-model="formData2.region"                
                @change="changeCountry2()"
              ></v-select>

              <v-select
                :items="itemsCountry2"
                item-text="name"
                item-value="value"
                label="Country"
                v-model="formData2.country"
                append-icon="mdi-flag"
              ></v-select>

              <v-btn
                color="success"
                class="mr-4"
                :disabled="disable2"
                @click="search2"
              
              style="background-color: #00A6B3;"
              > <v-icon
        left
        dark
        large
      >
      mdi-magnify
      </v-icon>
                Search
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
          <v-skeleton-loader
            v-bind="attrs"
            v-if="disable2"
            type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
          ></v-skeleton-loader>
        <v-simple-table v-if="!disable2" style="border: 1px solid #707070; background: #EEFBFF 0% 0% no-repeat padding-box;">
          <template v-slot:default>
            <tbody>
              <tr>
                <td>Picture</td>
                <td>
                  <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="150"
                    max-width="150"
                    src="https://picsum.photos/id/11/500/300"
                  ></v-img>
                </td>
              </tr>
              <tr>
                <td>Region</td>
                <td>{{table2.region}}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{{table2.country}}</td>
              </tr>
              <tr>
                <td>Item code</td>
                <td>{{table2.code}}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{{table2.desc}}</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>{{table2.category}}</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>{{table2.brand}}</td>
              </tr>
              <tr>
                <td>Nikken technology</td>
                <td></td>
              </tr>
              <tr>
                <td>Specs/Difference</td>
                <td>{{table2.specs_difference}}</td>
              </tr>
              <tr>
                <td>Warranty period</td>
                <td>{{table2.warranty}}</td>
              </tr>
              <tr>
                <td>Replacements and replacement period</td>
                <td></td>
              </tr>
              <tr>
                <td>Parent product</td>
                <td></td>
              </tr>
              <tr>
                <td>User manual / Insert</td>
                <td></td>
              </tr>
              <tr>
                <td>Packaging/Label</td>
                <td></td>
              </tr>
              <tr>
                <td>Video</td>
                <td></td>
              </tr>
              <tr>
                <td>Region</td>
                <td></td>
              </tr>
              <tr>
                <td>Fact sheet/QRS</td>
                <td></td>
              </tr>
              <tr>
                <td>Artwork User Manual / Insert</td>
                <td></td>
              </tr>
              <tr>
                <td>Artwork Packaging/Label</td>
                <td></td>
              </tr>
              <tr>
                <td>Product profile</td>
                <td></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col md="4">
        <h1 style="color:#00A6B3">Product 3</h1>
        <v-row  style="margin-bottom:20px !important;">
          <v-col>
            <v-form
              ref="form3"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="formData3.code"
                :rules="codRules"
                label="Item code"
                required
                append-icon="mdi-numeric"
              ></v-text-field>

              <v-text-field
                v-model="formData3.description"
                label="Description"
                required
                append-icon="mdi-text-long"
              ></v-text-field>

              <v-select
                :items="items"
                item-text="name"
                item-value="value"
                label="Region"
                :rules="regionRules"
                v-model="formData3.region"
                @change="changeCountry3()"
                append-icon="mdi-earth"
              ></v-select>

              <v-select
                :items="itemsCountry3"
                item-text="name"
                item-value="value"
                label="Country"
                v-model="formData3.country"
                append-icon="mdi-flag"
              ></v-select>


              <v-btn
                color="success"
                class="mr-4"
                :disabled="disable3"
                @click="search3"
                style="background-color: #00A6B3;"
              > <v-icon
        left
        dark
        large
      >
      mdi-magnify
      </v-icon>
                Search
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
          <v-skeleton-loader
            v-bind="attrs"
            v-if="disable3"
            type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
          ></v-skeleton-loader>
        <v-simple-table v-if="!disable3" style="border: 1px solid #707070; background: #EEFBFF 0% 0% no-repeat padding-box;">
          <template v-slot:default>
            <tbody>
              <tr>
                <td>Picture</td>
                <td>
                  <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="150"
                    max-width="150"
                    src="https://picsum.photos/id/11/500/300"
                  ></v-img>
                </td>
              </tr>
              <tr>
                <td>Region</td>
                <td>{{table3.region}}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{{table3.country}}</td>
              </tr>
              <tr>
                <td>Item code</td>
                <td>{{table3.code}}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{{table3.desc}}</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>{{table3.category}}</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>{{table3.brand}}</td>
              </tr>
              <tr>
                <td>Nikken technology</td>
                <td></td>
              </tr>
              <tr>
                <td>Specs/Difference</td>
                <td>{{table3.specs_difference}}</td>
              </tr>
              <tr>
                <td>Warranty period</td>
                <td>{{table3.warranty}}</td>
              </tr>
              <tr>
                <td>Replacements and replacement period</td>
                <td></td>
              </tr>
              <tr>
                <td>Parent product</td>
                <td></td>
              </tr>
              <tr>
                <td>User manual / Insert</td>
                <td></td>
              </tr>
              <tr>
                <td>Packaging/Label</td>
                <td></td>
              </tr>
              <tr>
                <td>Video</td>
                <td></td>
              </tr>
              <tr>
                <td>Region</td>
                <td></td>
              </tr>
              <tr>
                <td>Fact sheet/QRS</td>
                <td></td>
              </tr>
              <tr>
                <td>Artwork User Manual / Insert</td>
                <td></td>
              </tr>
              <tr>
                <td>Artwork Packaging/Label</td>
                <td></td>
              </tr>
              <tr>
                <td>Product profile</td>
                <td></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from "axios";
  // Utilities
  export default {
    name: 'DashboardView',
    data: () => ({
      valid: true,
      disable:false,
      disable2:false,
      disable3:false,
      items: [
        { name: 'North America', value: 'NA' },
        { name: 'Europe', value: 'EU' },
        { name: 'Latin America', value: 'LAT' },
      ],
      itemsCountry:[
      ],
      itemsCountry2:[
      ],
      itemsCountry3:[
      ],
      arrayNA: [
        { name: 'United States', value: 'USA' },
        { name: 'Canada', value: 'CAD' },
      ],
      arrayEU: [
        { name: 'United Kingdom', value: 'UK' },
        { name: 'France', value: 'FRA' },
        { name: 'Belgium', value: 'BEL' },
        { name: 'Switzerland', value: 'CHE' },
        { name: 'Germany', value: 'DEU' },
        { name: 'Sweden', value: 'SWE' },
      ],
      arrayLat: [
        { name: 'México', value: 'MXN' },
        { name: 'Chile', value: 'CHL' },
        { name: 'Colombia', value: 'COL' },
        { name: 'Costa Rica', value: 'CRI' },
        { name: 'Panama', value: 'PAN' },
        { name: 'El Salvador', value: 'SLV' },
        { name: 'Guatemala', value: 'GTM' },
        { name: 'Ecuador', value: 'ECU' },
        { name: 'Peru', value: 'PER' },
      ],
      formData:{
        code: '',
        description: '',
        region: '',
        country: '',
      },
      table:{
        region:'',
        country:'',
        code:'',
        desc:'',
        category:'',
        brand:'',
        warranty:'',
        specs_difference:'',
      },
      formData2:{
        code: '',
        description: '',
        region: '',
        country: '',
      },
      table2:{
        region:'',
        country:'',
        code:'',
        desc:'',
        category:'',
        brand:'',
        warranty:'',
        specs_difference:'',
      },
      formData3:{
        code: '',
        description: '',
        region: '',
        country: '',
      },
      table3:{
        region:'',
        country:'',
        code:'',
        desc:'',
        category:'',
        brand:'',
        warranty:'',
        specs_difference:'',
      },
      codRules: [
        v => !!v || 'Item Code is required',
      ],
      descRules: [
        v => !!v || 'Description is required',
      ],
      regionRules: [
        v => !!v || 'Region is required',
      ],
      countryRules: [
        v => !!v || 'Country is required',
      ],
    }),
    methods: {
      changeCountry (){
        if(this.formData.region == 'NA'){
          this.itemsCountry = this.arrayNA;
        }else if(this.formData.region == 'EU'){
          this.itemsCountry = this.arrayEU;
        }else{
          this.itemsCountry = this.arrayLat;          
        }
      },
      changeCountry2 (){
        if(this.formData2.region == 'NA'){
          this.itemsCountry2 = this.arrayNA;
        }else if(this.formData2.region == 'EU'){
          this.itemsCountry2 = this.arrayEU;
        }else{
          this.itemsCountry2 = this.arrayLat;          
        }
      },
      changeCountry3 (){
        if(this.formData3.region == 'NA'){
          this.itemsCountry3 = this.arrayNA;
        }else if(this.formData3.region == 'EU'){
          this.itemsCountry3 = this.arrayEU;
        }else{
          this.itemsCountry3 = this.arrayLat;          
        }
      },
      validate () { //buscar
        if(this.$refs.form.validate() == false){
          this.$refs.form.validate()
        }else{
          this.ddisable = true;
          axios.get("/api/item?itemCode="+this.formData.code+"&region="+this.formData.region+"&desc="+this.formData.description+"&country="+this.formData.country).then((result) => {
            this.table.region = result.data.Region;
            this.table.country = result.data.PAIS;
            this.table.code = result.data.Item;
            this.table.desc = result.data.Description_English;
            this.table.category = result.data.Category;
            this.table.brand = result.data.Brand;
            this.table.warranty = result.data.Warranty;
            this.table.specs_difference = result.data.Specs_Difference;
            this.disable = false;
          })
        }
      },
      search2 () {
        if(this.$refs.form2.validate() == false){
          this.$refs.form2.validate()
        }else{
          this.ddisable = true;
          axios.get("/api/item?itemCode="+this.formData2.code+"&region="+this.formData2.region+"&desc="+this.formData2.description+"&country="+this.formData2.country).then((result) => {
            this.table2.region = result.data.Region;
            this.table2.country = result.data.PAIS;
            this.table2.code = result.data.Item;
            this.table2.desc = result.data.Description_English;
            this.table2.category = result.data.Category;
            this.table2.brand = result.data.Brand;
            this.table2.warranty = result.data.Warranty;
            this.table2.specs_difference = result.data.Specs_Difference;
            this.ddisable = false;
          })
        }
      },
      search3 () {
        if(this.$refs.form3.validate() == false){
          this.$refs.form3.validate()
        }else{
          this.ddisable = true;
          axios.get("/api/item?itemCode="+this.formData3.code+"&region="+this.formData3.region+"&desc="+this.formData3.description+"&country="+this.formData3.country).then((result) => {
            this.table3.region = result.data.Region;
            this.table3.country = result.data.PAIS;
            this.table3.code = result.data.Item;
            this.table3.desc = result.data.Description_English;
            this.table3.category = result.data.Category;
            this.table3.brand = result.data.Brand;
            this.table3.warranty = result.data.Warranty;
            this.table3.specs_difference = result.data.Specs_Difference;
            this.ddisable = false;
          })
        }
      },
    },
  }
</script>
<style scoped>

</style>
