<template>
    <div>

        <ul>

        <li>
                <div class="row container">

                     <div class="input-field col s6">
                        <input id="Event name" name="Event name" type="text" class="validate" v-model="name" />
                         <label for="Event name">Event name:</label>
                    </div>

                    <div class="input-field col s6">
                         <input class="active" name="Cost" id="Cost" type="text" v-model="cost" />
                        <label id="Cost">Event price (UAH)</label>
                    </div>
                </div>
        
        </li>

        <li>
        
            <div class="row container">
    <form class="col s12">
      <div class="row center-align">
        <div class="input-field col s12 container">
          <textarea id="textarea1" class="materialize-textarea" v-model="description"></textarea>
          <label for="textarea1">Description</label>
        </div>
      </div>
    </form>
  </div>
        </li>

    
<!-- <div>
     <div class="input-field col s12">
    <select multiple>
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Materialize Multiple Select</label>
  </div>
  </div> -->
   <div class="row container">
  <div class="input-field col s12">
    <select name="levels" id="levelsSelector">
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label for="levels">Status</label>
  </div>
</div>
  
  <li>

   <div class="input-field col s6 container">
                        <input id="Level" name="Level" type="text" class="validate" v-model="level" />
                         <label for="Level">Level(small letters -> beginner)</label>
                    </div>
        </li>

        <li>
             <div class="input-field col s6 container">
                        <input id="HeaderImageUrl" name="HeaderImageUrl" type="url" class="validate" v-model="HeaderImageUrl" />
                         <label for="HeaderImageUrl">Header image url</label>
                    </div>
            </li>

                <li>
             <div class="input-field col s6 container">
                        <input id="Organizer" name="Organizer" v-model="organizer" />
                         <label for="Organizer">Organizer</label>
                    </div>
            </li>
        
         <li>
             <div class="input-field col s6 container">
                        <input id="SchoolLogoUrl" name="SchoolLogoUrl" type="url" class="validate" v-model="schoolThumbUrl" />
                         <label for="SchoolLogoUrl">School Logo Url</label>
                    </div>
            </li>

            <li>
                <div class="center-align container">
                    <p>Contacts</p>
                </div>
            </li>


 <li>
                <div class="row container">

                     <div class="input-field col s6 container">
                        <input id="Address" name="Address" type="text" class="validate" v-model="contacts.address" />
                         <label for="Address">Address</label>
                    </div>

                    <div class="input-field col s6 container">
                        <input id="Guide" name="Guide" type="text" class="validate" v-model="guide" />
                         <label for="Guide">Guide</label>
                    </div>
                </div>
        
        </li>

        <li>
                <div class="center-align container">
                    <p>Coordinates</p>
                </div>
            </li>


 <li>
                <div class="row container">

                     <div class="input-field col s6 container">
                        <input id="Latitude" name="Latitude" type="text" class="validate" v-model="latitude" />
                         <label for="Latitude">Latitude</label>
                    </div>

                    <div class="input-field col s6 container">
                        <input id="Longitude" name="Longitude" type="text" class="validate" v-model="longitude" />
                         <label for="Longitude">Longitude</label>
                    </div>
                </div>
        
        </li>

        <li>
             <div class="input-field col s6 container">
                        <input id="OriginalUrl" name="OriginalUrl" type="url" class="validate" v-model="originalUrl" />
                         <label for="OriginalUrl">OriginalUrl</label>
                    </div>
            </li>

            <li>
                <div class="center-align">
                    <a class="waves-effect waves-light btn container" v-on:click="greet">Create</a>
                </div>
            </li>


        </ul>

        <!-- <li>
          <div class="row">
  <div class="input-field">
    <select name="status" id="selectedTest">
      <option value="public" selected>Public</option>
      <option value="private">Private</option>
      <option value="unpublished">Unpublished</option>
    </select>
    <label for="status">Status</label>
  </div>
</div>
        </li> -->
        
    </div>
    
</template>

<script>
import db from "./firebaseInit";
import firebase from "firebase/app";

export default {
  data() {
    return {
      name: null,
      cost: 0,
      description: null,
      requiredLevel: "beginner",
      headerImage: null,
      organizer: null,
      schoolThumbUrl: null,
      contacts: {
        address: null,
        guide: null,
        location: {
          latitude: 0.0,
          longitude: 0.0
        },
        phone: null
      },
      originalUrl: null,
      addio: null,
      levels: [
        { value: "beginner" },
        { value: "elementary" },
        { value: "pre-intermediate" },
        { value: "intermediate" },
        { value: "upper-intermediate" },
        { value: "advanced" }
      ]
    };
  },

  //   created() {

  //   });

  // db
  //   .collection("events")
  //   .get()
  //   .then(querySnapshot => {
  //     querySnapshot.forEach(doc => {
  //       alert(doc.id);
  //     });
  //   });

  methods: {


    greet: function(event) {
      db.collection("events_test").add({
        name: this.name,
        cost: +this.cost,
        description: this.description,
        requiredLevel: this.requiredLevel,
        headerImage: this.headerImage,
        organizer: this.organizer,
        schoolThumbUrl: this.schoolThumbUrl,
        
       contacts: {
          address: this.address,
         guide: this.guide,
          location: new firebase.firestore.GeoPoint(51.435454, 31.445456),
       phone: this.phone
       },
        originalUrl: this.originalUrl,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .then(docRef =>{
          alert(docRef.id)
      })
      .catch(error => {
    alert(error)
});


    }
  }
};
</script>

