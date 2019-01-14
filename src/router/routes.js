const routes = require
  .context('@/pages/', false, /\.vue$/)
  .keys()
  .map(key => {
    const name = key.replace(/\.vue$/, '').slice(2)
    return {
      name,
      path: `/${name}`,
      component: () => import(`@/pages/${name}`)
    }
  })

routes.push({
  path: '*',
  redirect: routes[0].path
})

export default routes
