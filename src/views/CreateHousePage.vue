<template>
  <page-layout>
    <section class="py-4 bg-teal-dark">
      <div class="container">
        <form class="form">
          <div class="form__field relative">
            <i class="input-icon material-icons absolute text-grey-darker">search</i>
            <input class="input__search" id="where" type="text" placeholder="Mexico City, Mexico" />
          </div>
        </form>
      </div>
    </section>
    <section class="section__create py-6">
      <div class="container">
        <h1 class="text-3x1">Publish a new room</h1>
        <form>
          <div class="mb-4">
            <label class="input__label">Title</label>
            <input v-model="publication.title" class="input__field" type="text" placeholder="username" />
          </div>
          <div class="mb-4">
            <label class="input__label">Description</label>
            <textarea v-model="publication.description" class="input__field" rows="10" type="text" placeholder="username"> </textarea>
          </div>
          <div class="mb-4">
            <label class="input__label">Featured Image</label>
            <input v-model="publication.featuredImg" class="input__field" type="text" placeholder="https://marlonlavanda.com" />
          </div>
          <div class="mb-4">
            <label class="input__label">Servicios</label>
            <button v-for="(services, id) in services" :key="id"
            @click.prevent="addService(id)"
            class="font-semibold py-3 px-6 mr-4 rounded"
            :class="isActive(id) ? 'bg-blue-dark' : 'bg-blue-light'" >
            {{ service.name }}
            </button>
          </div>
          <div class="mb-4 text-right">
            <button @click.prevent="save"
              class="w-full bg-yellow-dark text-yellow-darker font-semibold py-3 px-6 rounded"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </section>
  </page-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import PageLayout from '@/layouts/PageLayout.vue';

export default {
  name: 'CreateHousePage',
  data() {
    return {
      publication: {
        title: '',
        description: '',
        featuredImg: '',
        services: {},
      },
    };
  },
  components: { PageLayout },
  computed: {
    ...mapGetters(['services']),
  },
  methods: {
    save() {
      const { title, description, featuredImg } = this.publication;
      const room = {
        title,
        description,
        featured_img: featuredImg,
        publishedAt: Date.now(),
      };
      this.$store.dispatch('CREATE_ROOM', room);
    },
    addService(serviceId) {
      if (this.publication.services[serviceId]) {
        this.$delete(this.publication.services, serviceId);
      } else {
        const id = JSON.parse(JSON.stringify(serviceId));
        this.$set(this.publication.services, id, id);
      }
    },
    isActive(serviceId) {
      if (this.publication.services[serviceId]) {
        return true;
      }
      return false;
    },
  },
};
</script>
