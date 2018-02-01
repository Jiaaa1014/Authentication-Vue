<template>
<div class="col-md-4 event-box">
  <div class="event-card">
    <h4 class="card-title">{{event.title}}</h4>
    <p class="card-text">{{event.description}}</p>
    <ul class="list-group list-group-flush">
      <li class="list-group-item list-group-item-action"><strong>Date:</strong> {{event.date}}</li>
      <li class="list-group-item list-group-item-action"><strong>Location:</strong> {{event.location}}</li>
      <li class="list-group-item list-group-item-action"><strong>Host</strong> {{event.email}}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: ["event"]
};
</script>
