import { createRouter } from 'vue-router'
import HomeComponent from '@/Home';
import EditComponent from '@/components/post/Edit';
import CreateComponent from '@/components/post/Create';
import PostComponent from '@/components/post/Post';

const routes = [
  { path: '/', redirect: { name: 'home' } },
  { path: '/home', name: 'home', component: HomeComponent },
  { path: '/create', name: 'Create', component: CreateComponent },
  { path: '/edit/:id', name: 'Edit', component: EditComponent },
  { path: '/post/:id', name: 'Post', component: PostComponent }
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}
