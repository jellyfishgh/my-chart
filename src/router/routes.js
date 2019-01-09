import pages from './pages'

const routes = pages.map(name => ({
  name,
  path: `/${name}`,
  component: () => import(`@/pages/${name}`)
}))

routes.push({
  path: '*',
  redirect: routes[0].path
})

export default routes
