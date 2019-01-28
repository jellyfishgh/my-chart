// 因为 require.context 引入的打包后不是异步的路由配置,所以用 prestart 生成配置文件
import pages from './pages'

const routes = pages.map(name => ({
  name,
  path: `/${name}`,
  component: () => import(`@/pages/${name}`)
}))


routes.push({
  path: '*',
  redirect: '/index'
})

export default routes
