<template>
  <transition appear name="open" id="detail">
    <div>
      <section>
        <item-card>
          <h2>{{ detailCoach.firstName }}</h2>
          <h3>${{ detailCoach.hourlyRate }}/hour</h3>
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
            v-for="(itemArea, index) in detailCoach.areas"
            :key="index"
            :class="itemArea"
          >
            {{ itemArea.toUpperCase() }}
          </item-badge>
          <p>123</p>
        </item-card>
      </section>
    </div>
  </transition>
</template>

<script>
import ItemBadge from "../components/common/ItemBadge.vue";
import ItemCard from "../components/common/ItemCard.vue";
import ItemLink from "../components/common/ItemLink.vue";
import axios from "axios";
export default {
  components: { ItemCard, ItemBadge, ItemLink },
  data() {
    return {
      detailCoach: "",
      id: "",
      LinkToContact: "/contact",
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      this.id = this.$route.params.id;
      axios
        .get(
          `https://vue-demo-1c5df-default-rtdb.firebaseio.com/coaches/${this.id}.json/`
        )
        .then((res) => {
          this.detailCoach = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  watch: {
    $route() {
      this.getDetail();
    },
  },
};
</script>

<style scoped>
.action {
  text-align: center;
}
</style>
