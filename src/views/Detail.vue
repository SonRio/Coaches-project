<template>
  <transition appear name="open" id="detail">
    <div v-if="getDataDetail">
      <section>
        <item-card>
          <h2>{{ getDataDetail.firstName }}</h2>
          <h3>${{ getDataDetail.hourlyRate }}/hour</h3>
        </item-card>
      </section>
      <section>
        <item-card>
          <header>
            <h2>Interested? Reach out now!</h2>
            <item-link
              :linkTo="{
                name: 'Contact',
              }"
              >Contact</item-link
            >
          </header>
        </item-card>
      </section>
      <section>
        <item-card>
          <item-badge
            v-for="(itemArea, index) in getDataDetail.areas"
            :key="index"
            :class="itemArea"
          >
            {{ itemArea.toUpperCase() }}
          </item-badge>
          <p>{{ getDataDetail.description }}</p>
        </item-card>
      </section>
    </div>
  </transition>
</template>

<script>
import ItemBadge from "../components/common/ItemBadge.vue";
import ItemCard from "../components/common/ItemCard.vue";
import ItemLink from "../components/common/ItemLink.vue";
// import axios from "axios";
export default {
  components: { ItemCard, ItemBadge, ItemLink },
  data() {
    return {
      detailCoach: "",
      id: "",
      LinkToContact: "/contact",
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.$store.dispatch({
      type: "getDataDetail",
      url: `https://coaches-project-8d77f-default-rtdb.firebaseio.com/coaches/${this.id}.json/`,
    });
  },
  computed: {
    getDataDetail() {
      return this.$store.state.dataDetail;
    },
  },
  beforeRouteLeave() {
    console.log("GOODBYE");
  },
  beforeRouteEnter(to, from) {
    console.log("FROM", from.path);
    console.log("TO", to.path);
  },
};
</script>

<style scoped>
.action {
  text-align: center;
}
</style>
