<template>
  <Layout>
    <!-- Page Header -->
    <header
      class="masthead"
      :style="{'background-image': `url(${GRIDSOME_API_URL + blog.cenver[0].url})`}"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
              <h1>{{blog.title}}</h1>
              <h2 class="subheading">{{blog.content}}</h2>
              <span class="meta">
                Posted by
                <a href="#">{{blog.created_by.firstname + blog.created_by.lastname}}</a>
                on {{blog.created_at}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Post Content -->
  </Layout>
</template>


<page-query>
query ($id: ID!) {
  blog: strapiBlog(id: $id) {
    id,
    title,
    content,
    cenver {
      url
    },
    created_by {
      firstname,
      lastname
    },
    created_at
  }
}
</page-query>

<script>
export default {
  name: "blog",
  computed: {
    blog() {
      return this.$page.blog;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>