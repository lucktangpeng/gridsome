<template>
  <Layout>
    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview">
            <h2 class="post-title">{{$page.tags.tag}}</h2>
            <!-- <h3 class="post-subtitle">{{post.node.content}}</h3> -->
            <p class="post-meta" v-for="blog in $page.tags.blogs" :key="blog.id">
              <a href="#">{{blog.title}}</a>
            </p>
            <!-- <g-link>{{post.node.tags[0].tag}}</g-link> -->
            <hr />
          </div>

          <hr />
          <!-- Pager -->
          <div class="clearfix">
            <!-- <Pager :info="$page.posts.pageInfo" /> -->
            <!-- <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a> -->
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  tags: strapiTag(id: $id) {
    tag,
    blogs {
      id,
      title
    }
  }
}
</page-query>

<script>
export default {
  name: "tag",
};
</script>