<template>
  <div>
    <Layout>
      <!-- Page Header -->
      <header
        class="masthead"
        :style="{'background-image': `url(${GRIDSOME_API_URL + gencers.cenver[0].url}`}"
      >
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div class="site-heading">
                <h1>{{gencers.title}}</h1>
                <span class="subheading">A Blog Theme by Start Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-preview" v-for="post in $page.posts.edges" :key="post.node.id">
              <g-link :to="`/blog/${post.node.id}`">
                <h2 class="post-title">{{post.node.title}}</h2>
                <h3 class="post-subtitle">{{post.node.content}}</h3>
              </g-link>
              <p class="post-meta">
                Posted by
                <a
                  href="#"
                >{{post.node.created_by.firstname + post.node.created_by.lastname}}</a>
                on {{post.node.created_at}}
              </p>
              <g-link :to="`/tag/${post.node.tags[0].id}`">{{post.node.tags[0].tag}}</g-link>
              <hr />
            </div>

            <hr />
            <!-- Pager -->
            <div class="clearfix">
              <Pager :info="$page.posts.pageInfo" />
              <!-- <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a> -->
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>

<page-query>
query ($page: Int) {
  posts: allStrapiBlog (perPage: 2, page: $page) @paginate {
    pageInfo {
        totalPages
        currentPage
      }
    edges {
      node {
      	id,
        title,
        content,
        created_by {
          lastname,
          firstname
        },
        created_at,
        tags {
          id,
          tag
        }
      }
    }
  },
  gencers: allStrapiGencer {
    edges {
      node {
        id,
        title,
        content,
        cenver {
          url
        }
      }
    }
  }
}

</page-query>

<script>
import { Pager } from "gridsome";
export default {
  metaInfo: {
    title: "Hello, world!",
  },
  computed: {
    gencers() {
      return this.$page.gencers.edges[0].node;
    },
  },
  components: {
    Pager,
  },
};
</script>

<style>
</style>
