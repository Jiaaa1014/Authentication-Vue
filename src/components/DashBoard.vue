<template>
  <div>
    <h3>Dashboard</h3>
    <button class="btn btn-danger btn-sm signout-btn" @click="signOut">SignOut</button>
    <hr>
    <AddEvent/>
    <hr>
    <div class="event-container col-md-12">
      <EventItem
        v-for="(event_item, i) in this.$store.state.events"
        :key="i"
        :event="event_item"
      />
    </div>
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from "../firebaseApp";
import AddEvent from "./AddEvent";
import EventItem from "./EventItem";
export default {
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
      firebaseApp.auth().signOut();
    }
  },
  components: {
    AddEvent,
    EventItem
  },
  mounted() {
    eventsRef.on("value", snap => {
      let events = [];
      snap.forEach(event => {
        events.push(event.val());
      });
      this.$store.dispatch("setEvents", events);
    });
  }
};
</script>
